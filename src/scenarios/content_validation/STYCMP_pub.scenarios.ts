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
  // --------------   ---------------------------------------

  {
    typeOfTest: "All correct scenario for STYCMP SSP1",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Story Comprehension"],
    testStemForm: ["STYCMP.W5PA"],
    taskStem: ["STYCMP"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Ages 4 to 7"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },

  {
    typeOfTest: "All correct scenario for STYCMP SSP3",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Story Comprehension"],
    testStemForm: ["STYCMP.W5PA"],
    taskStem: ["STYCMP"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Ages 11 to 13"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },

  {
    typeOfTest: "All correct scenario for STYCMP SSP4",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Story Comprehension"],
    testStemForm: ["STYCMP.W5PA"],
    taskStem: ["STYCMP"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Age 14 to Adult"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];
