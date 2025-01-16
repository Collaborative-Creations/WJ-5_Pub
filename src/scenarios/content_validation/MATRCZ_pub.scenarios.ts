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
    typeOfTest: "All correct scenario for MATRCZ Block A&D for SSP1",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Matrices"],
    testStemForm: ["MATRCZ.W5PA"],
    taskStem: ["MATRCZ"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Ages 4 to 11"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },

  {
    typeOfTest: "All correct scenario for MATRCZ Block B&C for SSP2",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Matrices"],
    testStemForm: ["MATRCZ.W5PA"],
    taskStem: ["MATRCZ"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Age 12 to Adult"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];
