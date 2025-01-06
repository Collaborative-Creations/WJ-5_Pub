interface TestData {
  typeOfTest: string;
  testName: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  BbyC?: number;
  testStemForm: string;
  negation?: boolean;
  location?: string;
  examineeGrade: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "All Examinees - All correct scenario",
    testName: "Phonemic Word Retrieval",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "PHNRET.W5PA",
    SSP: "All Examinees",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Phonemic Word Retrieval",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "PHNRET.W5PA",
    SSP: "All Examinees",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
