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
    testName: ["Verbal Analogies"],
    testStemForm: ["VRBANL.W5PA"],
    taskStem: ["VRBANL"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 8,
    examineeGrade: "Grade 5",
    SSP: ["Ages 4 to 6"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];
