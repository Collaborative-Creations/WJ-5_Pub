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
    testName: ["Oral Vocabulary–Antonyms"],
    testStemForm: ["OVANT.W5PA"],
    taskStem: ["OVANT"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 4,
    examineeGrade: "Grade 2",
    SSP: ["Ages 4 to 8"],
    BbyC: [5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];
