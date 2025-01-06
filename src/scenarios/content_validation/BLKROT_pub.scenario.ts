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
    typeOfTest: "basal and ceiling",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Block Rotation"],
    testStemForm: ["BLKROT.W5PA"],
    taskStem: ["BLKROT"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Ages 4 to 7"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];
