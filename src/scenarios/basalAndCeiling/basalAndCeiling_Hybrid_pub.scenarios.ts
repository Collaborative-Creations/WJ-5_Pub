interface TestData {
  typeOfTest: string;
  testNumber: number[];
  testName: string[];
  testStemForm: string[];
  taskStem: string[];
  normBasis: string;
  blockName: string;
  examineeAge: number;
  examineeGrade: string;
  SSP: string[];
  BbyC: number[];
  negation?: boolean;
  scoreFlag: string;
  lookUpModel: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "hybrid basal and ceiling",
    testNumber: [1, 2], // Not much useful for time being
    testName: [
      "Letter-Word Identification", // ssp4,5_C,All_NC,b/c , group a & B corect
      "Word Attack",
    ], // ssp5,All_NC,b/c , group a & B NC
    testStemForm: ["LWIDNT.W5PA", "WRDATK.W5PA"],
    taskStem: ["LWIDNT", "WRDATK"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 2",
    SSP: ["Ages 9 to 11", "Ages 14 to Adult"],
    BbyC: [6, 6],
    scoreFlag: "",
    lookUpModel: "Hybrid basal and ceiling",
  },
];

export const testDataBasalCeiling: TestData[] = [
  {
    typeOfTest: "basal and ceiling left nav",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Passage Comprehension"], // last ssp (Above Average Adult) , 5NC , 5th flag , item 8 block c (after flag in the reanswer flow all correct)
    testStemForm: ["PSGCMP.W5PA"],
    taskStem: ["PSGCMP"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Above Average Adult"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "Hybrid basal and ceiling",
  },
];
