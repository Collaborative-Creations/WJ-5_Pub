import * as path from "path";
import * as XLSX from "ts-xlsx";
import * as xlsx from "xlsx";
import Utils from "../utils/utils";

const utils = new Utils();

interface NormTableRow {
  NormTable_Version: string;
  Index: number;
  NormBasis: string;
  TaskStem: string;
  CHRON: number | any;
  REFW: number;
  SDLo: number;
  SDUp: number;
}

interface RPIData {
  WDIFF: number;
  WDIFFInteger: number;
  RPI_Num: number;
  WDIFF_Proficiency: string;
  WDIFF_Functionality: string;
  WDIFF_Development: string;
  WDIFF_Fluency: string;
  WDIFF_Implication: string;
  CALP_Level: string;
}

interface ScoreRange {
  ZscoreMIN: number;
  ZscoreMAX: number;
  PR: string;
  SS_PR_Classification: string;
}

interface ConfidenceRange {
  name: string;
  computeValue: (StdScore_Computed: number, SEMSS: number) => number;
}

interface ConfidenceBand {
  name: string;
  computeValue: (Wabil: number, Semw: number) => number | null;
}

interface ScoreRow {
  ScoringTable_Version: string;
  Index: number;
  SCFile: number;
  TestStemFormBlock: string;
  WLookup: number;
  W_Abil: number;
  SEMW: number;
}

let Wabil: number;
let Semw: number;

export function setWabilSemw(
  scores: any,
  testStemForm: string,
): { Wabil: number; Semw: number } {
  Wabil = scores[testStemForm]["Wabil"];
  Semw = scores[testStemForm]["Semw"];
  return { Wabil, Semw };
}

export function getCAMOS(
  dob: string,
  edot: string,
): {
  camos: number;
  getCHRON: (normBasis: string, gradePlacement: string) => number | string;
} {
  let dobObj = new Date(dob);
  let edotObj = new Date(edot);
  let diff = edotObj.getTime() - dobObj.getTime();
  let years = diff / (1000 * 60 * 60 * 24 * 365);
  let months = (years - Math.floor(years)) * 12;
  let days = (months - Math.floor(months)) * 30;

  years = Math.round(years);
  months = Math.round(months);
  days = Math.round(days);
  let camos = years * 12 + months;

  function getCHRON(
    normBasis: string,
    gradePlacement?: string,
  ): number | string {
    if (normBasis == "Age") {
      return camos;
    } else if (normBasis == "K12") {
      return gradePlacement;
    } else {
      throw new Error(`the norma basis is not age its ${normBasis} `);
    }
  }
  return { camos, getCHRON };
}

export function getGradePlacement(
  gradeString: string,
  dateString: string,
): string {
  let gradeVal = "";
  let gradeDeci = -1;
  const splitString = gradeString.split(" ");
  if (splitString.length === 2 && splitString[0] === "Grade") {
    gradeVal = splitString[1];
  } else if (!Number.isNaN(Number(gradeString))) {
    return gradeString;
  } else {
    throw new Error(`The grade passed is not accepted = ${gradeString}`);
  }

  const date = new Date(dateString);
  const year = date.getFullYear();
  const testingDates = [
    { from: `${year}-08-16`, to: `${year}-09-15`, gradeTenth: 0 },
    { from: `${year}-09-16`, to: `${year}-10-15`, gradeTenth: 1 },
    { from: `${year}-10-16`, to: `${year}-11-15`, gradeTenth: 2 },
    { from: `${year}-11-16`, to: `${year}-12-15`, gradeTenth: 3 },
    { from: `${year}-12-16`, to: `${year + 1}-01-15`, gradeTenth: 4 },
    { from: `${year - 1}-12-16`, to: `${year}-01-15`, gradeTenth: 4 },
    { from: `${year}-01-16`, to: `${year}-02-15`, gradeTenth: 5 },
    { from: `${year}-02-16`, to: `${year}-03-15`, gradeTenth: 6 },
    { from: `${year}-03-16`, to: `${year}-04-15`, gradeTenth: 7 },
    { from: `${year}-04-16`, to: `${year}-05-15`, gradeTenth: 8 },
    { from: `${year}-05-16`, to: `${year}-08-15`, gradeTenth: 9 },
  ];

  for (const testingDate of testingDates) {
    const fromDate = new Date(testingDate.from);
    const toDate = new Date(testingDate.to);
    if (date >= fromDate && date <= toDate) {
      gradeDeci = testingDate.gradeTenth;
    }
  }

  if (gradeDeci === -1) {
    throw new Error(`No valid date range found for ${dateString}`);
  }
  return `${gradeVal}.${gradeDeci}`;
}

export function getAgeYM(camos: number): string {
  if (camos < 48) {
    return "";
  }
  if (camos > 1200) {
    return "Age 100 years";
  }

  const years = Math.floor(camos / 12);
  const months = camos % 12;

  if (camos < 240) {
    if (months === 1) {
      return `Age ${years} years, 1 Month`;
    } else {
      return `Age ${years} years, ${months} Months`;
    }
  } else {
    return `Age ${years} years`;
  }
}

export function getGradeYM(gradePlacement: string): string {
  return `Grade ${gradePlacement}`;
}

let REFW, SDLo, SDUp, taskStem;

export function getREFW_SDLo_SDUp(
  NormBasis: string,
  CHRON: number | string,
  TaskStem: string,
  NormTableFileData: NormTableRow[],
): { REFW?: number; SDLo?: number; SDUp?: number } {
  const normTableData: NormTableRow[] = NormTableFileData;

  taskStem = TaskStem;

  const filteredRows = normTableData.filter(
    (row) =>
      row.NormBasis == NormBasis &&
      row.TaskStem === taskStem &&
      row.CHRON == CHRON,
  );

  if (filteredRows.length > 0) {
    ({ REFW, SDLo, SDUp } = filteredRows[0]);
    return { REFW, SDLo, SDUp };
  } else {
    return { REFW: undefined, SDLo: undefined, SDUp: undefined };
  }
}

function convertMonthsToAE(months: number): string {
  let years = Math.floor(months / 12);
  let remainder = months % 12;
  let ae = "";
  if (years >= 4 && years <= 19) {
    ae = `${years}y${remainder}m`;
  } else if (years > 19 && years < 30) {
    ae = `${years}y`;
  } else {
    ae = `29y`;
  }
  return ae;
}

export function getAE_Equiv(
  NormTableFileData: NormTableRow[],
  W_Abil: number = Wabil,
): string {
  const NormTable: NormTableRow[] = NormTableFileData;

  const ageBasedNormTable = NormTable.filter(
    (row) => row.NormBasis === "Age" && row.TaskStem === taskStem,
  );
  ageBasedNormTable.sort((a, b) => a.CHRON - b.CHRON);
  let upslopeNormTable: NormTableRow[] = [];
  let prevREFW = 0;
  for (let row of ageBasedNormTable) {
    if (row.REFW >= prevREFW) {
      upslopeNormTable.push(row);
      prevREFW = row.REFW;
    } else {
      break;
    }
  }

  let aeEquiv = "";
  let minREFW = upslopeNormTable[0].REFW;
  let maxREFW = upslopeNormTable[upslopeNormTable.length - 1].REFW;
  if (W_Abil < minREFW) {
    let minCHRON = upslopeNormTable[0].CHRON;
    let roundedCHRON = Math.round(minCHRON / 2) * 2;
    aeEquiv = "<" + convertMonthsToAE(roundedCHRON);
  } else if (W_Abil > maxREFW) {
    let maxCHRON = upslopeNormTable[upslopeNormTable.length - 1].CHRON;
    let roundedCHRON = Math.round(maxCHRON / 2) * 2;
    aeEquiv = ">" + convertMonthsToAE(roundedCHRON);
  } else if (upslopeNormTable.some((row) => row.REFW == W_Abil)) {
    let reversedTable = upslopeNormTable.reverse();
    let equalCHRON = reversedTable.find((row) => row.REFW == W_Abil)?.CHRON;
    if (equalCHRON !== undefined) {
      let roundedCHRON = Math.round(Number(equalCHRON) / 2) * 2;
      aeEquiv = convertMonthsToAE(roundedCHRON);
    }
  } else {
    let lowerRow = upslopeNormTable.find(
      (row, index) =>
        index < upslopeNormTable.length - 1 &&
        row.REFW < W_Abil &&
        upslopeNormTable[index + 1].REFW > W_Abil,
    );
    let upperRow = upslopeNormTable.find(
      (row, index) =>
        index > 0 &&
        row.REFW > W_Abil &&
        upslopeNormTable[index - 1].REFW < W_Abil,
    );

    if (lowerRow && Number.isInteger(parseFloat(lowerRow.CHRON))) {
      aeEquiv = convertMonthsToAE(lowerRow.CHRON);
    } else if (upperRow && Number.isInteger(parseFloat(upperRow.CHRON))) {
      aeEquiv = convertMonthsToAE(upperRow.CHRON);
    }
  }
  return aeEquiv;
}

function roundToEven(num: number): number {
  const rounded = Math.round(num * 10) / 10;
  if (rounded % 1 === 0.5) {
    return rounded + (rounded % 2 === 0 ? 0 : -0.1);
  } else {
    return rounded;
  }
}

function convertNumericalToGE(num: number): string {
  const wholePart = Math.floor(num);
  const decimalPart = Math.round((num - wholePart) * 10);

  if (wholePart === 0) {
    return `GK.${decimalPart}`;
  } else {
    return `G${wholePart}.${decimalPart}`;
  }
}

export function getGE_Equiv(
  NormTableFileData: NormTableRow[],

  W_Abil: number = Wabil,
): string {
  const NormTable: NormTableRow[] = NormTableFileData;

  const ageBasedNormTable = NormTable.filter(
    (row) => row.NormBasis === "K12" && row.TaskStem === taskStem,
  );

  ageBasedNormTable.sort((a, b) => a.CHRON - b.CHRON);
  let upslopeNormTable: NormTableRow[] = [];
  let prevREFW = 0;
  for (let row of ageBasedNormTable) {
    if (row.REFW >= prevREFW) {
      upslopeNormTable.push(row);
      prevREFW = row.REFW;
    } else {
      break;
    }
  }

  let aeEquiv = "";
  let minREFW = upslopeNormTable[0].REFW;
  let maxREFW = upslopeNormTable[upslopeNormTable.length - 1].REFW;
  if (W_Abil < minREFW) {
    let minCHRON = upslopeNormTable[0].CHRON;
    let roundedCHRON = roundToEven(minCHRON);
    aeEquiv = "<" + convertNumericalToGE(roundedCHRON);
  } else if (W_Abil > maxREFW) {
    let maxCHRON = upslopeNormTable[upslopeNormTable.length - 1].CHRON;
    let roundedCHRON = roundToEven(maxCHRON);
    aeEquiv = ">" + convertNumericalToGE(roundedCHRON);
  } else if (upslopeNormTable.some((row) => row.REFW == W_Abil)) {
    let reversedTable = upslopeNormTable.reverse();
    let equalCHRON = reversedTable.find((row) => row.REFW == W_Abil)?.CHRON;
    if (equalCHRON !== undefined) {
      let roundedCHRON = roundToEven(equalCHRON);
      aeEquiv = convertNumericalToGE(roundedCHRON);
    }
  } else {
    let lowerRow = upslopeNormTable.find(
      (row, index) =>
        index < upslopeNormTable.length - 1 &&
        row.REFW < W_Abil &&
        upslopeNormTable[index + 1].REFW > W_Abil,
    );
    let upperRow = upslopeNormTable.find(
      (row, index) =>
        index > 0 &&
        row.REFW > W_Abil &&
        upslopeNormTable[index - 1].REFW < W_Abil,
    );

    const lowerChron = Number(lowerRow.CHRON) * 10;
    const upperChron = Number(upperRow.CHRON) * 10;
    if (Number.isInteger(lowerChron)) {
      aeEquiv = convertNumericalToGE(lowerRow.CHRON);
    } else if (Number.isInteger(upperChron)) {
      aeEquiv = convertNumericalToGE(upperRow.CHRON);
    }
  }

  if (Number(aeEquiv.split("G")[1]) >= 12.9) {
    return ">G12.9";
  }
  return aeEquiv;
}

export function getWDIFF(REFW: number, W_Abil: number = Wabil): number {
  return +(W_Abil - REFW).toFixed(2);
}

export function getRPI_and_WDIFF_Data(WDIFF: number): RPIData | null {
  const filePath = path.join(
    __dirname,
    `../../dataFiles/derivedScores/WJV RPI Lookup Table.xlsx`,
  );
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(worksheet) as RPIData[];

  let selectedData = null;

  for (const row of data) {
    if (WDIFF <= -100) {
      if (row.WDIFF <= -100) {
        selectedData = row;
        break;
      }
    } else if (WDIFF >= 100) {
      if (row.WDIFF >= 100) {
        selectedData = row;
        break;
      }
    } else if (row.WDIFF == WDIFF) {
      selectedData = row;
      break;
    }
  }

  if (selectedData) {
    return selectedData;
  } else {
    console.log("No matching data found for WDIFF:", WDIFF);
  }
}

export function getSDUsed(Wdiff: number, SDlo: number, SDup: number) {
  if (Wdiff >= 0) {
    return SDup;
  } else if (Wdiff < 0) {
    return SDlo;
  } else {
    console.warn("SomeTHings Wrong at getSDUsed method");
  }
}

let Z_ScoreRaw: number;

export function getZ_Score(
  REFW: number,
  SDUsed: number,
  W_Abil: number = Wabil,
): number | null {
  Z_ScoreRaw = (W_Abil - REFW) / SDUsed;
  let Z_Score = Math.round(Z_ScoreRaw * 100) / 100;
  return Z_Score;
}

let stdScoreComputed;

export function getStdScore_Computed(): number[] | null {
  if (typeof Z_ScoreRaw !== "number") {
    return null;
  }

  stdScoreComputed = 100 + Z_ScoreRaw * 15;
  const _stdScoreComputed = Math.round(stdScoreComputed * 100) / 100;
  return [_stdScoreComputed, stdScoreComputed];
}

export function getStdScore_Display(StdScore_Computed: number): string {
  if (StdScore_Computed < 39.5) {
    return "<40";
  } else if (StdScore_Computed > 160.5) {
    return ">160";
  } else {
    return Math.round(StdScore_Computed).toString();
  }
}

export function get_PR_SS_PR_Classification(zScore?: number): {
  PR: string;
  SS_PR_classification: string;
} {
  if (!zScore) {
    zScore = Z_ScoreRaw;
  }

  const filePath = path.join(
    __dirname,
    `../../dataFiles/derivedScores/WJV PR Lookup Table.xlsx`,
  );
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data: ScoreRange[] = XLSX.utils.sheet_to_json(worksheet);
  for (const range of data) {
    if (zScore >= 2.54) {
      return { PR: ">99", SS_PR_classification: "Very Superior" };
    } else if (zScore <= -2.54) {
      return { PR: "<1", SS_PR_classification: "Very Low" };
    } else if (zScore >= range.ZscoreMIN && zScore < range.ZscoreMAX) {
      return { PR: range.PR, SS_PR_classification: range.SS_PR_Classification };
    }
  }
  console.error(`Check for the column names for the WJV PR Lookup Table.xlsx`);
  return { PR: "N/A", SS_PR_classification: "N/A" };
}

let Semss: number;
export function getSEMSS(SDUsed: number, SEMW: number = Semw): number {
  Semss = (SEMW / SDUsed) * 15;
  const _SEMSS = Math.round(Semss * 100) / 100;
  return _SEMSS;
}

const confidenceRanges: ConfidenceRange[] = [
  {
    name: "SS68_Low",
    computeValue: (StdScore_Computed, SEMSS) => StdScore_Computed - SEMSS * 1.0,
  },
  {
    name: "SS68_High",
    computeValue: (StdScore_Computed, SEMSS) => StdScore_Computed + SEMSS * 1.0,
  },
  {
    name: "SS90_Low",
    computeValue: (StdScore_Computed, SEMSS) =>
      StdScore_Computed - SEMSS * 1.645,
  },
  {
    name: "SS90_High",
    computeValue: (StdScore_Computed, SEMSS) =>
      StdScore_Computed + SEMSS * 1.645,
  },
  {
    name: "SS95_Low",
    computeValue: (StdScore_Computed, SEMSS) =>
      StdScore_Computed - SEMSS * 1.96,
  },
  {
    name: "SS95_High",
    computeValue: (StdScore_Computed, SEMSS) =>
      StdScore_Computed + SEMSS * 1.96,
  },
];

export function getConfidenceRange(
  interval: string,
  StdScore_Computed: number = stdScoreComputed,
  SEMSS: number = Semss,
): string {
  const selectedRange = confidenceRanges.find(
    (range) => range.name === interval,
  );

  if (selectedRange) {
    const computedValue = selectedRange.computeValue(StdScore_Computed, SEMSS);
    if (computedValue >= 39.5 && computedValue <= 160.5) {
      // console.log(computedValue);
      // return String(Math.round(computedValue));
      return String(Math.round(applyRoundToEvenRule(computedValue)));
    } else if (computedValue < 39.5) {
      return "<40";
    } else if (computedValue > 160.5) {
      return ">160";
    }
  }
  return "";
}

const confidenceBands: ConfidenceBand[] = [
  { name: "PR68_Low", computeValue: (Wabil, Semw) => Wabil - 1.0 * Semw },
  { name: "PR68_High", computeValue: (Wabil, Semw) => Wabil + 1.0 * Semw },
  { name: "PR90_Low", computeValue: (Wabil, Semw) => Wabil - 1.645 * Semw },
  { name: "PR90_High", computeValue: (Wabil, Semw) => Wabil + 1.645 * Semw },
  { name: "PR95_Low", computeValue: (Wabil, Semw) => Wabil - 1.96 * Semw },
  { name: "PR95_High", computeValue: (Wabil, Semw) => Wabil + 1.96 * Semw },
];

export function calculatePRconfBand(
  interval: string,
  wabil = Wabil,
  semw = Semw,
): number | any {
  const selectedRange = confidenceBands.find(
    (range) => range.name === interval,
  );

  const WabilBand = selectedRange.computeValue(wabil, semw);
  const SD = selectedRange.computeValue(wabil, semw) < REFW ? SDLo : SDUp;
  const Z_ScoreBand = (WabilBand - REFW) / SD;
  const { PR } = get_PR_SS_PR_Classification(Z_ScoreBand);
  return PR;
}

let T_Score;
let TScoreComputed;
export function getTScoreComputed(Z_Score: number = Z_ScoreRaw): string {
  if (!isNaN(Z_Score)) {
    T_Score = 50 + Z_Score * 10;
    const roundedT_Score = Math.round(T_Score * 100) / 100;
    TScoreComputed = roundedT_Score.toFixed(2);
    return TScoreComputed;
  } else {
    return "Invalid Z_Score";
  }
}

export function getT_Score_Display(
  T_Score_Computed: number = Number(TScoreComputed),
): string {
  if (T_Score_Computed >= 9.5 && T_Score_Computed <= 90.5) {
    const roundedT_Score = Math.round(T_Score_Computed);
    return roundedT_Score.toString();
  } else if (T_Score_Computed < 9.5) {
    return "<10";
  } else if (T_Score_Computed > 90.5) {
    return ">90";
  } else {
    return "Invalid T_Score_Computed";
  }
}
let Semt;
export function getSEMT(SDUsed: number, SEMW: number = Semw): string {
  if (!isNaN(SEMW) && !isNaN(SDUsed) && SDUsed !== 0) {
    Semt = (SEMW / SDUsed) * 10;
    const roundedSEMT = Math.round(Semt * 100) / 100;
    return roundedSEMT.toFixed(2);
  } else {
    return "Invalid input or division by zero";
  }
}

interface ConfBand {
  name: string;
  computeValue: (T_Score_Computed: number, SEMT: number) => number | null;
}

const confRanges: ConfBand[] = [
  {
    name: "T_Score68_Low",
    computeValue: (T_Score_Computed, SEMT) => T_Score_Computed - 1.0 * SEMT,
  },
  {
    name: "T_Score68_High",
    computeValue: (T_Score_Computed, SEMT) => T_Score_Computed + 1.0 * SEMT,
  },
  {
    name: "T_Score90_Low",
    computeValue: (T_Score_Computed, SEMT) => T_Score_Computed - 1.645 * SEMT,
  },
  {
    name: "T_Score90_High",
    computeValue: (T_Score_Computed, SEMT) => T_Score_Computed + 1.645 * SEMT,
  },
  {
    name: "T_Score95_Low",
    computeValue: (T_Score_Computed, SEMT) => T_Score_Computed - 1.96 * SEMT,
  },
  {
    name: "T_Score95_High",
    computeValue: (T_Score_Computed, SEMT) => T_Score_Computed + 1.96 * SEMT,
  },
];

export function calculateT_Score(
  interval: string,
  T_Score_Computed: number = T_Score,
  SEMT: number = Semt,
): number | string {
  const selectedRange = confRanges.find((range) => range.name === interval);
  const T_score = selectedRange.computeValue(T_Score_Computed, SEMT);
  return getT_Score_Display(T_score);
}

type ScoreObject = {
  wScores: number;
  Wabil: number;
  Semw: number;
};
type ScoresRecord = Record<string, ScoreObject>;

export async function getCompositeW_abil(
  testsStemForm: string[],
  score: ScoresRecord,
) {
  let sumOfWabil: number = 0;

  for (const value of testsStemForm) {
    // const debu = Number(await utils.getColumnOrValueFromExcel("ContribTaskStem",(value.split('.')[0]),"WeightInTask"));
    // console.log(`debu = ${debu}`);
    const sum =
      score[value].Wabil *
      Number(
        await utils.getColumnOrValueFromExcel(
          "ContribTaskStem",
          value.split(".")[0],
          "WeightInTask",
        ),
      );

    sumOfWabil = sumOfWabil + sum;
  }

  // console.log(`math ` ,Number(sumOfWabil.toFixed(2)) )

  // console.log(`math ` ,(sumOfWabil/testsStemForm.length) )
  // console.log(`math ROung` ,Math.round((sumOfWabil/testsStemForm.length)*100)/100 )
  // console.log(`math fix ` ,Number((sumOfWabil / testsStemForm.length).toFixed(2)) )

  // return (Number(sumOfWabil.toFixed(2)) / testsStemForm.length).toFixed(2);
  const comp_Wabil = sumOfWabil / testsStemForm.length;
  return (applyRoundToEvenRule(comp_Wabil)).toFixed(2);
}

export async function getCompositeSEMW(
  testsStemForm: string[],
  score: ScoresRecord,
) {
  let sumOfSEMWsqrs: number = 0;

  for (const value of testsStemForm) {
    const debu = Number(
      await utils.getColumnOrValueFromExcel(
        "ContribTaskStem",
        value.split(".")[0],
        "WeightInTask",
      ),
    );
    const sumSQR = Math.pow(
      score[value].Semw *
        Number(
          await utils.getColumnOrValueFromExcel(
            "ContribTaskStem",
            value.split(".")[0],
            "WeightInTask",
          ),
        ),
      2,
    );
    sumOfSEMWsqrs = sumOfSEMWsqrs + sumSQR;
  }

  return (Math.sqrt(Number(sumOfSEMWsqrs)) / testsStemForm.length).toFixed(2);
}

export function getWabil_and_SEMW(
  testStemFormBlock: string,
  wLookup: number,
): { W_Abil: number; SEMW: number } | null {
  const filePath = path.join(
    __dirname,
    "../../dataFiles/single_table/WLookups_Data/WJV ScoringTable.xlsx",
  );
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const rows = xlsx.utils.sheet_to_json(worksheet) as ScoreRow[];

  const filteredRows = rows.filter(
    (row) =>
      row.TestStemFormBlock === testStemFormBlock && row.WLookup === wLookup,
  );

  if (filteredRows.length === 0) {
    return null; // No matching rows found
  }

  // Assuming there's only one matching row, return the first one
  const { W_Abil, SEMW } = filteredRows[0];
  return { W_Abil, SEMW };
}

const WabilConfidenceBands: ConfidenceBand[] = [
  { name: "W68_Low", computeValue: (Wabil, Semw) => Wabil - 1.0 * Semw },
  { name: "W68_High", computeValue: (Wabil, Semw) => Wabil + 1.0 * Semw },
  { name: "W90_Low", computeValue: (Wabil, Semw) => Wabil - 1.645 * Semw },
  { name: "W90_High", computeValue: (Wabil, Semw) => Wabil + 1.645 * Semw },
  { name: "W95_Low", computeValue: (Wabil, Semw) => Wabil - 1.96 * Semw },
  { name: "W95_High", computeValue: (Wabil, Semw) => Wabil + 1.96 * Semw },
];

export function calculateWabilConfBand(
  interval: string,
  wabil = Wabil,
  semw = Semw,
): number | any {
  const selectedRange = WabilConfidenceBands.find(
    (range) => range.name === interval,
  );
  const WabilBand = selectedRange.computeValue(wabil, semw);
  return Math.round(WabilBand);
}

/**
 * Rounds a number to 2 decimal places using the "round to even" rule CLINICAL-21378 .
 *
 * @param value - The number to be rounded.
 * @returns The rounded number.
 * @bug 25197
 */
export function applyRoundToEvenRule(value: number): number {
  let shiftedValue = value * 100;
  let integerPart = Math.floor(shiftedValue);
  let fractionalPart = shiftedValue - integerPart;

  if (fractionalPart === 0.5) {
    if (integerPart % 2 === 0) {
      return integerPart / 100;
    } else {
      return (integerPart + 1) / 100;
    }
  } else {
    return shiftedValue / 100;
  }
}
