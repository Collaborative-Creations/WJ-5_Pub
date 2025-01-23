import { Page, Locator, expect } from "../base/basePageFixtures";
import fs from "fs";
import path from "path";
import { DateTime } from "luxon";
import { createObjectCsvWriter } from "csv-writer";
import * as XLSX from "ts-xlsx";
import * as xlsx from "xlsx";
import csv from "csv-parser";
import { getFilePath, getTemplatePath } from "./global";
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

interface Output {
  [key: string]: {
    ItemCode_Examiner_PUB: number;
    ItemCode_Examinee_PUB: number;
    Master_ID: string;
  };
}
export default class Utils {
  private page;
  private selTestJsonData: Array<Record<string, any>> | undefined;

  constructor(page?: Page) {
    this.page = page;
  }

  async writeToTheCredsTxtFile(data: string) {
    fs.appendFile("creds.txt", data + "\n", "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }

  async switchtoChildPage(element: Locator): Promise<Page> {
    const page1Promise = this.page.context().waitForEvent("page");
    await element.click();
    const childPage = await page1Promise;
    // await childPage.grantPermission('microphone', true);

    return childPage;
  }

  async waitForDOMRefresh(page: Page) {
    await Promise.all([
      page.waitForEvent("domcontentloaded"),
      page.waitForEvent("load"),
    ]);
  }

  async randomNumberGenerateBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async getTheDOByearsBAck(
    numYears: number,
    timeZone?: string,
  ): Promise<string> {
    const currentDate: DateTime = DateTime.now().setZone("America/New_York");
    const requiredDate: DateTime = currentDate
      .minus({ years: numYears })
      .set({ hour: 0, minute: 0, second: 0, millisecond: 0 });

    if (timeZone) {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: timeZone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };
      return requiredDate.toFormat("yyyy-MM-dd", options);
    } else {
      return requiredDate.toFormat("MM/dd/yyyy", { locale: "en-US" });
    }
  }

  async TestDeTemplateCSVfileWriter(examineeIdValue: string) {
    const dataToWrite = [
      { FieldColumn: "Field", FilterColumn: "Filter Value" },
      { FieldColumn: "Examinee_ID", FilterColumn: `${examineeIdValue}` },
      { FieldColumn: "Examinee_CAMOS", FilterColumn: "" },
      { FieldColumn: "Examinee_DemogFlags", FilterColumn: "" },
      { FieldColumn: "Examiner_ID", FilterColumn: "" },
      { FieldColumn: "TestStemForm", FilterColumn: "" },
      { FieldColumn: "ItemTimeStamp", FilterColumn: "" },
    ];

    const csvContent = dataToWrite
      .map((data) => `${data.FieldColumn},${data.FilterColumn}`)
      .join("\n");

    const filePath = "dataFiles/Test_DataExport_AutoFilter_Template.csv";

    fs.writeFile(filePath, csvContent, (err) => {
      if (err) {
        console.error("Error occurred while writing to the CSV file:", err);
      } else {
        console.log("Data has been written to the CSV file successfully.");
      }
    });
  }

  async scoreDataFilterTemplate_CSVfileWriter(examineeIdValue: string) {
    const dataToWrite = [
      {
        ScoreExportVariable: "ScoreExportVariable",
        ScoreExportValue: "ScoreExportValue",
        Instruction: "Instruction",
      },
      {
        ScoreExportVariable: "ExerID",
        ScoreExportValue: "",
        Instruction: "Partial matching ExaminerID values",
      },
      {
        ScoreExportVariable: "ExeeID",
        ScoreExportValue: `${examineeIdValue}`,
        Instruction: "Partial matching ExamineeID values",
      },
      {
        ScoreExportVariable: "EDOT",
        ScoreExportValue: "",
        Instruction:
          "Earliest date of testing (by exee and test) as a date range like 01/15/2023 - 02/15/2023",
      },
      {
        ScoreExportVariable: "TestStemForm",
        ScoreExportValue: "",
        Instruction: "Complete match of TestStemForm",
      },
      {
        ScoreExportVariable: "ScoringTable_Version",
        ScoreExportValue: "",
        Instruction:
          "If blank, platform should use latest alphanumeric version posted. If not blank, entry must be an exact match for a deployed version code (e.g., V230724A or V230805B)",
      },
      {
        ScoreExportVariable: "DecileTable_Version",
        ScoreExportValue: "",
        Instruction:
          "If blank, platform should use latest alphanumeric version posted. If not blank, entry must be an exact match for a deployed version code (e.g., V230724A or V230805B)",
      },
    ];

    const csvContent: string = dataToWrite
      .map(
        (data) =>
          `${data.ScoreExportVariable},${data.ScoreExportValue},${data.Instruction}`,
      )
      .join("\n");

    const filePath: string = (await getTemplatePath()).scoreTemplatePath;

    fs.writeFile(filePath, csvContent, (err) => {
      if (err) {
        console.error(
          "Error occurred while writing to the Score_DataExport_AutoFilter_Template CSV file:",
          err,
        );
      } else {
        console.log(
          "Data has been written to the Score_DataExport_AutoFilter_Template CSV file successfully.",
        );
      }
    });
  }

  async derivedScoreFilterTemplate_CSVfileWriter(
    examineeIdValue: string,
    normBasis: string = "Age",
    examineeGrade: string,
  ) {
    const filePath: string = (await getTemplatePath()).derivedScores;
    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: [
        { id: "DerivedExportVariable", title: "DerivedExportVariable" },
        { id: "DerivedExportValue", title: "DerivedExportValue" },
        { id: "Instruction", title: "Instruction" },
      ],
    });

    const dataToWrite = [
      {
        DerivedExportVariable: "Examinee_ID",
        DerivedExportValue: `${examineeIdValue}`,
        Instruction: "Partial matching ExamineeID values",
      },
      {
        DerivedExportVariable: "EDOT",
        DerivedExportValue: "",
        Instruction:
          "Earliest date of testing (by exee and test) as a date range like 01/15/2023 - 02/15/2023",
      },
      {
        DerivedExportVariable: "TaskStemForm",
        DerivedExportValue: "",
        Instruction:
          "complete match of the test abbreviation and form (ie, LWIDNT.W5N). Accepts multiple entries separated by semicolons (no spaces).",
      },
      {
        DerivedExportVariable: "NormBasis",
        DerivedExportValue: `${normBasis}`,
        Instruction: 'Alpha-numeric, either "Age" or "K12"',
      },
      {
        DerivedExportVariable: "Examinee_Grade",
        DerivedExportValue: `${examineeGrade}`,
        Instruction:
          'Alpha-numeric, either "K" or 1 through 12 followed by a decimal and grade-tenth. Such as K.9, 3.5 etc.',
      },
      {
        DerivedExportVariable: "DecileTable_Version",
        DerivedExportValue: "",
        Instruction:
          "If blank, platform should use latest alphanumeric version posted. If not blank, entry must be an exact match for a deployed version code (e.g., V230724A or V230805B)",
      },
      {
        DerivedExportVariable: "ScoringTable_Version",
        DerivedExportValue: "",
        Instruction:
          "If blank, platform should use latest alphanumeric version posted. If not blank, entry must be an exact match for a deployed version code (e.g., V230724A or V230805B)",
      },
      {
        DerivedExportVariable: "SelTestTable_Version",
        DerivedExportValue: "",
        Instruction:
          "If blank, platform should use latest alphanumeric version posted. If not blank, entry must be an exact match for a deployed version code (e.g., V230724A or V230805B)",
      },
      {
        DerivedExportVariable: "NormTable_Version",
        DerivedExportValue: "",
        Instruction:
          "If blank, platform should use latest alphanumeric version posted. If not blank, entry must be an exact match for a deployed version code (e.g., V230724A or V230805B)",
      },
    ];

    csvWriter
      .writeRecords(dataToWrite)
      .then(() => {
        console.log(
          "Data has been written to the Derived_Score_AutoFilter_Template CSV file successfully.",
        );
      })
      .catch((err) => {
        console.error(
          "Error occurred while writing to the Derived_Score_AutoFilter_Template CSV file:",
          err,
        );
      });
  }

  async testDataExportFilterTemplate_CSVfileWriter(
    examineeIdValue: string,
    testStemForm: string,
  ) {
    const filePath: string = (await getTemplatePath()).testDeTemplatePath;
    const csvWriter = createObjectCsvWriter({
      path: filePath,
      header: [
        { id: "Field", title: "Field" },
        { id: "FilterValue", title: "Filter Value" },
      ],
    });

    const dataToWrite = [
      { Field: "Examinee_ID", FilterValue: examineeIdValue },
      { Field: "Examinee_CAMOS", FilterValue: "" },
      { Field: "Examinee_DemogFlags", FilterValue: "" },
      { Field: "Examiner_ID", FilterValue: "" },
      { Field: "TestStemForm", FilterValue: testStemForm },
      { Field: "ItemTimeStamp", FilterValue: "" },
    ];

    csvWriter
      .writeRecords(dataToWrite)
      .then(() => {
        console.log(
          "Data has been written to the Test_DataExport_Filter_AutoFilter_Template.csv file successfully.",
        );
      })
      .catch((err) => {
        console.error(
          "Error occurred while writing to the Test_DataExport_Filter_AutoFilter_Template.csv file:",
          err,
        );
      });
  }

  async readAllTxtContentToObj(): Promise<{
    [key: string]: {
      [key: string]: string;
    };
  }> {
    const scriptDirectory = process.cwd();

    // console.log(`Current util file path `, scriptDirectory);

    const relativeFilePath = await getFilePath();

    // console.log(`Utils file path =` , await getFilePath());

    const absoluteFilePath = path.join(scriptDirectory, relativeFilePath);

    const data: string = fs.readFileSync(absoluteFilePath, "utf8");

    const lines: string[] = data.split("\n");

    const columnNames: string[] = lines[0].split("\t");

    const valuesObject: { [key: string]: { [key: string]: string } } = {}; // Use a different name here

    for (let i: number = 1; i < lines.length; i++) {
      const line: string = lines[i];
      const valuesArray: string[] = line.split("\t");
      const taskStemForm: string = valuesArray[7];
      valuesObject[taskStemForm] = {};

      for (let j: number = 0; j < columnNames.length; j++) {
        const columnName: string = columnNames[j];
        const value: string = valuesArray[j];
        valuesObject[taskStemForm][columnName] = value;
      }

      if (valuesObject[taskStemForm]) {
        for (const key in valuesObject[taskStemForm]) {
          const trimmedKey = key.trim().replace(/\r/g, "");
          const value = valuesObject[taskStemForm][key];
          if (value) {
            const trimmedValue = value.trim().replace(/\r/g, "");
            delete valuesObject[taskStemForm][key];
            valuesObject[taskStemForm][trimmedKey] = trimmedValue;
          }
        }
      }
    }

    // Now you can access the values by TaskStemForm and column name
    // console.log(valuesObject); // Example usage
    // console.log(valuesObject["VRBATN.W5N"].WDIFF); // Example usage
    // console.log(valuesObject["VRBATN.W5N"].TaskStemForm); // Example usage
    // console.log(valuesObject["VRBATN.W5N"].GE_High); // Example usage

    return valuesObject;
  }

  async readAllTxtContentFromTestDataExport(fileName: string): Promise<{
    [key: string]: {
      [key: string]: string;
    };
  }> {
    const scriptDirectory = process.cwd();

    // console.log(`Current util file path `, scriptDirectory);

    const relativeFilePath = `downloads/extracted/testDataExports/${fileName}`;

    const absoluteFilePath = path.join(scriptDirectory, relativeFilePath);

    const data: string = fs.readFileSync(absoluteFilePath, "utf8");

    const lines: string[] = data.split("\n");

    const columnNames: string[] = lines[0].split("\t");

    const valuesObject: { [key: string]: { [key: string]: string } } = {}; // Use a different name here

    for (let i: number = 1; i < lines.length; i++) {
      const line: string = lines[i];
      const valuesArray: string[] = line.split("\t");
      const taskStemForm: string = valuesArray[7];
      valuesObject[taskStemForm] = {};
      for (let j: number = 0; j < columnNames.length; j++) {
        const columnName: string = columnNames[j];
        const value: string = valuesArray[j];
        valuesObject[taskStemForm][columnName] = value;
      }

      if (valuesObject[taskStemForm]) {
        for (const key in valuesObject[taskStemForm]) {
          const trimmedKey = key.trim().replace(/\r/g, "");
          const value = valuesObject[taskStemForm][key];
          if (value) {
            const trimmedValue = value.trim().replace(/\r/g, "");
            delete valuesObject[taskStemForm][key];
            valuesObject[taskStemForm][trimmedKey] = trimmedValue;
          }
        }
      }
    }

    // Now you can access the values by TaskStemForm and column name
    // console.log(valuesObject); // Example usage
    // console.log(valuesObject["VRBATN.W5N"].WDIFF); // Example usage
    // console.log(valuesObject["VRBATN.W5N"].TaskStemForm); // Example usage
    // console.log(valuesObject["VRBATN.W5N"].GE_High); // Example usage

    return valuesObject;
  }

  async getExcelSheetData(excelFilePath: string): Promise<NormTableRow[]> {
    const filePath = path.join(
      __dirname,
      `../../dataFiles/derivedScores/${excelFilePath}.xlsx`,
    );
    console.log(` \n Reading ${excelFilePath} data ... \n`);
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const normTableData: NormTableRow[] = xlsx.utils.sheet_to_json(worksheet);
    return normTableData;
  }

  async parseCSV(fileName: string): Promise<{ [key: string]: string[] }> {
    const data: { [key: string]: string[] } = {};

    return new Promise((resolve, reject) => {
      fs.createReadStream(fileName)
        .pipe(csv({ separator: "\t" }))
        .on("data", (row: any) => {
          for (const key in row) {
            if (data[key] === undefined) {
              data[key] = [];
            }
            data[key].push(row[key]);
          }
        })
        .on("end", () => {
          resolve(data);
        })
        .on("error", (error: any) => {
          reject(error);
        });
    });
  }

  async filterTheValues(vals: string[]): Promise<string | undefined> {
    const set: Set<string> = new Set(vals);

    if (set.size != 1) {
      console.warn(
        `The expected size was One but seems like there are more like =`,
        set,
      );
      return undefined;
    } else {
      const value = [...set][0];
      return value;
    }
  }

  async readTestSchemaFile(fileName: string): Promise<Output> {
    const filePath = path.join(
      __dirname,
      `../../dataFiles/test_schema_files/${fileName}`,
    );
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    const output: Output = {};

    for (const row of jsonData) {
      const heading = row["Heading"];
      if (heading) {
        output[heading] = {
          ItemCode_Examiner_PUB: row["ItemCode_Examiner_PUB"],
          ItemCode_Examinee_PUB: row["ItemCode_Examinee_PUB"],
          Master_ID: row["Master ID"],
        };
      }
    }
    return output;
  }

  async validateAndAssert_CMSID_Examinee(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
    testStemForm?: string,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const itemCodeExamineePub1: string = obj1[key].Item_CMSID_Examinee;
        let itemCMSIDExaminee2: string = obj2[key].ItemCode_Examinee_PUB;
        const testNames: string[] = [
          "GIWHAT.W5PA",
          "GIWHER.W5PA",
          "SNDREV.W5PA",
        ];
        if (
          testNames.includes(testStemForm) &&
          itemCMSIDExaminee2 === undefined
        ) {
          itemCMSIDExaminee2 = "";
          }

        expect
          .soft(itemCodeExamineePub1)
          .toEqual(itemCMSIDExaminee2.toString());
        console.log("\n", itemCodeExamineePub1, "===", itemCMSIDExaminee2);
      } else {
        console.warn(`CMSID_Examinee '${key}' not found in the second object`);
      }
    }
  }

  async validateAndAssert_CMSID_Examiner(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const itemCodeExaminerPub1: string = obj1[key].Item_CMSID_Examiner;
        const itemCMSIDExaminer2: string = obj2[key].ItemCode_Examiner_PUB;

        expect
          .soft(itemCodeExaminerPub1)
          .toEqual(itemCMSIDExaminer2.toString());
        console.log("\n", itemCodeExaminerPub1, "===", itemCMSIDExaminer2);
      } else {
        console.warn(`CMSID_Examiner '${key}' not found in the second object`);
      }
    }
  }

  async validateAndAssert_Master_ID(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const itemMastedIdP1: string = obj1[key].Master_ID;
        const itemMasterId2: string = obj2[key].Master_ID;

        expect.soft(itemMastedIdP1).toEqual(itemMasterId2.toString());
        console.log("\n", itemMastedIdP1, "===", itemMasterId2);
      } else {
        console.warn(`Master id '${key}' not found in the second object`);
      }
    }
  }

  async validateAndAssert_RT(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const RT1: number = Number(obj1[key].RT);
        const RT2: number = Number(obj2[key].RT);

        expect.soft(Math.abs(RT1 - RT2)).toBeGreaterThan(0); //CLINICAL-25333
        console.log("\n", RT1, "-", RT2, "= ", Math.abs(RT1 - RT2));
        
        if (RT1 < 0){
          expect.soft(RT1, "The RT should be always positive").toBeGreaterThan(0);
        }
      } else {
        console.warn(`RT '${key}' not found in the second object`);
      }
    }
  }

  async validateAndAssert_DeliveryOrder(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const Do1: number = Number(obj1[key].Delivered_Order);
        const Do2: number = Number(obj2[key].Delivered_Order);

        expect.soft(Do1).toBeGreaterThanOrEqual(Do2);

        console.log("\n", Do1, "===", Do2);
      } else {
        console.warn(`Delivered_Order '${key}' not found in the second object`);
      }
    }
  }

  async validateAndAssert_Response(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const val1: string = obj1[key].Response;
        const val2: string = obj2[key].Response;

        expect.soft(val2).toContain(val1.replace(/<\/?[^>]+(>|$)/g, ""));

        console.log("\n", val2, "===", val1);
      } else {
        console.warn(`Response '${key}' not found in the second object`);
      }
    }
  }

  async validateAndAssert_Score(
    obj1: Record<string, any>,
    obj2: Record<string, any>,
  ) {
    for (const key in obj1) {
      if (key in obj2) {
        const Do1: number = Number(obj1[key].Score);
        const Do2: number = Number(obj2[key].Score);

        expect.soft(Do1).toEqual(Do2);

        console.log("\n", Do1, "===", Do2);
      } else {
        console.warn(`Score '${key}' not found in the second object`);
      }
    }
  }

  async getExcelasJson(filePATH: string): Promise<Array<Record<string, any>>> {
    const filePath = path.join(__dirname, filePATH);
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    this.selTestJsonData = XLSX.utils.sheet_to_json(sheet);
    return this.selTestJsonData;
  }

  async getColumnOrValueFromExcel(
    columnName: string,
    columnValue?: string,
    returnColumnName?: string,
  ): Promise<string[] | undefined> {
    if (this.selTestJsonData === undefined) {
      this.selTestJsonData = await this.getExcelasJson(
        `../../dataFiles/derivedScores/WJV SelTestTable.xlsx`,
      );
    }

    if (columnValue === undefined && returnColumnName === undefined) {
      const values = this.selTestJsonData.map((row: any) => row[columnName]);
      return [...new Set(values)];
    } else {
      const row = this.selTestJsonData.find(
        (row: any) => row[columnName] === columnValue,
      );
      if (row) {
        return row[returnColumnName];
      } else {
        return undefined;
      }
    }
  }

  async getRowDataOfSpecifiedColumnFromSchemaFiles(
    fileName: string,
    columnName: string,
  ): Promise<Map<string, string>> {
    const filePath = path.join(
      __dirname,
      `../../dataFiles/test_schema_files/${fileName}`,
    );
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData: Array<Record<string, any>> =
      xlsx.utils.sheet_to_json(sheet);

    const output = new Map<string, string>();
    output.set(" ", "^");

    for (const row of jsonData) {
      const heading = row[columnName];
      if (heading) {
        output.set(heading, "x");
      }
    }
    return output;
  }

  // async extractUniqueAlphabetsOfBlocks(
  //   map: Map<string, string | number>,
  //   stemForm: string,
  // ): Promise<string> {
  //   let result = new Set<string>();

  //   if (stemForm.match("MATRCZ.W5PA")) {
  //     for (let [key, value] of map.entries()) {
  //       if (value === "1" || value === "0") {
  //         const match = (key as string).match(/Block\s([A-G])/);
  //         if (match) {
  //           result.add(match[1]);
  //         }
  //       }
  //     }
  //     return Array.from(result).join("");
  //   } else if (stemForm.match("ANLSYN.W5PA")) {
  //     const ranges = [
  //       { range: [1, 7], result: "A" },
  //       { range: [8, 19], result: "AB" },
  //       { range: [20, 25], result: "ABC" },
  //       { range: [26, 31], result: "ABCD" },
  //       { range: [32, 35], result: "ABCDE" },
  //     ];

  //     let lastKeyWithValue = -1;

  //     map.forEach((value, key) => {
  //       const itemNumber = parseInt(key.replace("Item ", ""), 10);
  //       if ((value === "0" || value === "1") && !isNaN(itemNumber)) {
  //         lastKeyWithValue = itemNumber;
  //       }
  //     });

  //     if (lastKeyWithValue === -1) {
  //       return "";
  //     }

  //     for (const range of ranges) {
  //       if (
  //         lastKeyWithValue >= range.range[0] &&
  //         lastKeyWithValue <= range.range[1]
  //       ) {
  //         return range.result;
  //       }
  //     }

  //     return "Out of range";
  //   } else if (stemForm.match("BLKROT.W5PA")) {
  //     const ranges = [
  //       { range: [1, 9], result: "A" },
  //       { range: [10, 28], result: "AB" },
  //     ];

  //     let lastKeyWithValue = -1;

  //     map.forEach((value, key) => {
  //       const itemNumber = parseInt(key.replace("Item ", ""), 10);
  //       if ((value === "0" || value === "1") && !isNaN(itemNumber)) {
  //         lastKeyWithValue = itemNumber;
  //       }
  //     });

  //     if (lastKeyWithValue === -1) {
  //       return "";
  //     }

  //     for (const range of ranges) {
  //       if (
  //         lastKeyWithValue >= range.range[0] &&
  //         lastKeyWithValue <= range.range[1]
  //       ) {
  //         return range.result;
  //       }
  //     }

  //     return "Out of range";
  //   } else if (stemForm.match("LWIDNT.W5PA")) {
  //     const ranges = [
  //       { range: [1, 4], result: "A" },
  //       { range: [5, 15], result: "AB" },
  //       { range: [16, 89], result: "ABC" },
  //     ];

  //     let lastKeyWithValue = -1;

  //     map.forEach((value, key) => {
  //       const itemNumber = parseInt(key.replace("Item ", ""), 10);
  //       if ((value === "0" || value === "1") && !isNaN(itemNumber)) {
  //         lastKeyWithValue = itemNumber;
  //       }
  //     });

  //     if (lastKeyWithValue === -1) {
  //       return "";
  //     }

  //     for (const range of ranges) {
  //       if (
  //         lastKeyWithValue >= range.range[0] &&
  //         lastKeyWithValue <= range.range[1]
  //       ) {
  //         return range.result;
  //       }
  //     }

  //     return "Out of range";
  //   } else if (stemForm.match("PSGCMP.W5PA")) {
  //     const ranges = [
  //       { range: [1, 7], result: "A" },
  //       { range: [8, 38], result: "AB" },
  //     ];

  //     let lastKeyWithValue = -1;

  //     map.forEach((value, key) => {
  //       const itemNumber = parseInt(key.replace("Item ", ""), 10);
  //       if ((value === "0" || value === "1") && !isNaN(itemNumber)) {
  //         lastKeyWithValue = itemNumber;
  //       }
  //     });

  //     if (lastKeyWithValue === -1) {
  //       return "";
  //     }

  //     for (const range of ranges) {
  //       if (
  //         lastKeyWithValue >= range.range[0] &&
  //         lastKeyWithValue <= range.range[1]
  //       ) {
  //         return range.result;
  //       }
  //     }

  //     return "Out of range";
  //   } else if (stemForm.match("WRDATK.W5PA")) {
  //     const ranges = [
  //       { range: [1, 3], result: "A" },
  //       { range: [4, 10], result: "AB" },
  //       { range: [11, 62], result: "ABC" },
  //     ];

  //     let lastKeyWithValue = -1;

  //     map.forEach((value, key) => {
  //       const itemNumber = parseInt(key.replace("Item ", ""), 10);
  //       if ((value === "0" || value === "1") && !isNaN(itemNumber)) {
  //         lastKeyWithValue = itemNumber;
  //       }
  //     });

  //     if (lastKeyWithValue === -1) {
  //       return "";
  //     }

  //     for (const range of ranges) {
  //       if (
  //         lastKeyWithValue >= range.range[0] &&
  //         lastKeyWithValue <= range.range[1]
  //       ) {
  //         return range.result;
  //       }
  //     }

  //     return "Out of range";
  //   } else {
  //     throw new Error('No matched with the stemform "' + stemForm + '"');
  //   }
  // }

  async extractUniqueAlphabetsOfBlocks(
    map: Map<string, string | number>,
    stemForm: string,
  ): Promise<string> {
    let result = new Set<string>();

    const patterns = [
      { regex: /MATRCZ\.W5PA/, ranges: null, blockMatch: /Block\s([A-G])/ },
      {
        regex: /ANLSYN\.W5PA/,
        ranges: [
          { range: [1, 7], result: "A" },
          { range: [8, 19], result: "AB" },
          { range: [20, 25], result: "ABC" },
          { range: [26, 31], result: "ABCD" },
          { range: [32, 35], result: "ABCDE" },
        ],
      },
      {
        regex: /BLKROT\.W5PA/,
        ranges: [
          { range: [1, 9], result: "A" },
          { range: [10, 28], result: "AB" },
        ],
      },
      {
        regex: /LWIDNT\.W5PA/,
        ranges: [
          { range: [1, 4], result: "A" },
          { range: [5, 15], result: "AB" },
          { range: [16, 89], result: "ABC" },
        ],
      },
      {
        regex: /PSGCMP\.W5PA/,
        ranges: [
          { range: [1, 7], result: "A" },
          { range: [8, 38], result: "AB" },
        ],
      },
      {
        regex: /WRDATK\.W5PA/,
        ranges: [
          { range: [1, 3], result: "A" },
          { range: [4, 10], result: "AB" },
          { range: [11, 62], result: "ABC" },
        ],
      },
      {
        regex: /STYREC\.W5PA/,
        ranges: [
          { range: [1, 2], result: "A" },
          { range: [3, 4], result: "AB" },
          { range: [5, 6], result: "ABC" },
          { range: [7, 8], result: "ABCD" },
          { range: [9, 10], result: "ABCDE" },
        ],
      },
      { regex: /ORLSMP\.W5PA/, ranges: null, blockMatch: /Block\s([A-C])/ },
      {
        regex: /STYCMP\.W5PA/,
        ranges: [
          { range: [1, 4], result: "A" },
          { range: [5, 7], result: "AB" },
          { range: [8, 10], result: "BC" },
          { range: [11, 13], result: "CD" },
          { range: [14, 15], result: "DE" },
        ],
      },
      {
        regex: /SPLSND\.W5PA/,
        ranges: [
          { range: [1, 5], result: "A" },
          { range: [6, 23], result: "AB" },
          { range: [24, 28], result: "ABC" },
        ],
      },
      {
        regex: /SEGMNT\.W5PA/,
        ranges: [
          { range: [1, 5], result: "A" },
          { range: [6, 13], result: "AB" },
          { range: [14, 26], result: "ABC" },
        ],
      },
      {
        regex: /PARCMP\.W5PA/,
        ranges: [
          { range: [1, 2], result: "A" },
          { range: [3, 4], result: "AB" },
          { range: [5, 6], result: "ABC" },
          { range: [7, 8], result: "ABCD" },
          { range: [9, 10], result: "ABCDE" },
        ],
      },
      {
        regex: /WRTSMP\.W5PA/,
        ranges: [
          { range: [1, 5], result: "A" },
          { range: [6, 10], result: "AB" },
          { range: [11, 15], result: "ABC" },
          { range: [16, 20], result: "ABCD" },
          { range: [21, 25], result: "ABCDE" },
        ],
      },
      {
        regex: /SENREP\.W5PA/,
        ranges: [
          { range: [1, 8], result: "A" },
          { range: [9, 37], result: "AB" }
        ],
      },
      {
        regex: /SNDDEL\.W5PA/,
        ranges: [
          { range: [1, 4], result: "A" },
          { range: [5, 16], result: "AB" },
          { range: [17, 32], result: "ABC" }
        ],
      },
      {
        regex: /SNDSUB\.W5PA/,
        ranges: [
          { range: [1, 8], result: "A" },
          { range: [9, 16], result: "AB" },
          { range: [17, 28], result: "ABC" }
        ],
      }
    ];

    for (const pattern of patterns) {
      if (stemForm.match(pattern.regex)) {
        if (pattern.blockMatch) {
          for (let [key, value] of map.entries()) {
            if (value === "2" || value === "1" || value === "0") {
              const match = (key as string).match(pattern.blockMatch);
              if (match) {
                result.add(match[1]);
              }
            }
          }
          return Array.from(result).join("");
        } else if (pattern.ranges) {
          let lastKeyWithValue = -1;

          map.forEach((value, key) => {
            let itemNumber: number;
            if(key.match(/^Items \d+–\d+ Score Entry$/)){
              itemNumber = parseInt(key.split("–")[1].split(" ")[0]);
            }
            else{
              itemNumber = parseInt(key.replace(/(Item|Story) /, ""), 10);
            }
            if (!isNaN(Number(value)) && !isNaN(itemNumber)) {
              lastKeyWithValue = itemNumber;
            }
          });

          if (lastKeyWithValue === -1) {
            return "";
          }

          for (const range of pattern.ranges) {
            if (
              lastKeyWithValue >= range.range[0] &&
              lastKeyWithValue <= range.range[1]
            ) {
              return range.result;
            }
          }

          return "Out of range";
        }
      }
    }
    throw new Error('No match found for the stemForm "' + stemForm + '"');
  }

  async getAllCompoundsAndClustersFromSelTestTable(): Promise<Array<string>> {
    const filePath = path.join(
      __dirname,
      `../../dataFiles/derivedScores/WJV SelTestTable.xlsx`,
    );
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
    });
    const uniqueTaskStems = new Set<string>();
    const headers: string[] = worksheet[0] as string[];
    const taskTypeIndex = headers.indexOf("TaskType");
    const taskStemIndex = headers.indexOf("TaskStem");

    worksheet.slice(1).forEach((row: any[]) => {
      const taskType = row[taskTypeIndex];
      const taskStem = row[taskStemIndex];

      if (taskType === "CompoundTest" || taskType === "Cluster") {
        uniqueTaskStems.add(taskStem);
      }
    });

    return Array.from(uniqueTaskStems);
  }

  async getContribTaskStemsForCluster(cluster: string): Promise<string[]> {
    const filePath = path.join(
      __dirname,
      `../../dataFiles/derivedScores/WJV SelTestTable.xlsx`,
    );
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
      header: 1,
    });
    const contribTaskStems: Set<string> = new Set<string>();

    const headers: string[] = worksheet[0] as string[];
    const taskStemIndex = headers.indexOf("TaskStem");
    const contribTaskStemIndex = headers.indexOf("ContribTaskStem");

    worksheet.slice(1).forEach((row: any[]) => {
      const taskStem = row[taskStemIndex];
      const contribTaskStem = row[contribTaskStemIndex];

      if (taskStem === cluster && contribTaskStem != undefined) {
        contribTaskStems.add(contribTaskStem);
      }
    });

    return Array.from(contribTaskStems);
  }

  async getTestsAndSubtestsFromSheet(): Promise<string[]> {
    const filePath = path.join(
      __dirname,
      `../../dataFiles/derivedScores/WJV SelTestTable.xlsx`,
    );

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const jsonData: Array<Record<string, any>> =
      xlsx.utils.sheet_to_json(sheet);

    const output: string[] = [];

    for (const row of jsonData) {
      const taskType: string = row["TaskType"] || "";

      if (taskType.includes("Test") && !taskType.includes("CompoundTest")) {
        const taskStem: string = row["TaskStem"] || "";
        output.push(taskStem);
      } else if (taskType.includes("CompoundTest")) {
        const contribTaskStem: string = row["ContribTaskStem"] || "";
        output.push(contribTaskStem);
      }
    }

    return output;
  }

  async readCorrectValuesFromPatternTest(
    patternTestName: string,
    headingCol: string,
    valueCol: string,
  ): Promise<Map<string, string[]>> {
    const schemaFiles: Record<string, string> = {
      "NUMPAT.W5PA":
        "../../dataFiles/test_schema_files/NUMPAT.W5PA_TestSchema.xlsx",
      "LETPAT.W5PA":
        "../../dataFiles/test_schema_files/LETPAT.W5PA_TestSchema.xlsx",
    };

    const filePath = schemaFiles[patternTestName];
    if (!filePath) {
      throw new Error(
        `No match found for the patternTestName "${patternTestName}"`,
      );
    }

    const fullPath = path.join(__dirname, filePath);
    const workbook = xlsx.readFile(fullPath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = xlsx.utils.sheet_to_json<{ [key: string]: any }>(
      worksheet,
    );

    const dataMap: Map<string, string[]> = new Map();

    jsonData.forEach((row) => {
      const headingValue = row[headingCol];
      const value = row[valueCol];

      if (headingValue && value) {
        const valueArray = value.split("|");
        dataMap.set(headingValue, valueArray);
      }
    });

    dataMap.forEach((valueArray, key) => {
      const duplicateValues = valueArray.filter(
        (item, index, arr) =>
          arr.indexOf(item) !== index && arr.lastIndexOf(item) === index,
      );

      if (duplicateValues.length > 0) {
        dataMap.set(key, duplicateValues);
      }
    });

    return dataMap;
  }
}
