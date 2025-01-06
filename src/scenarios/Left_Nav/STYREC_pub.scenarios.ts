interface TestData {
  typeOfTest: string;
  testName: string;
  testStemForm: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  BbyC?: number;
  negation?: boolean;
  location?: string;
  examineeGrade: string;
}

export const testData: TestData[] = [
  // --------------   ---------------------------------------

  {
    typeOfTest: "All correct scenario for STYREC SSP1",
    testName: "Story Recall",
    testStemForm: "STYREC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for STYREC SSP4",
    testName: "Story Recall",
    testStemForm: "STYREC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 14 to Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for STYREC SSP2",
    testName: "Story Recall",
    testStemForm: "STYREC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for STYREC SSP3",
    testName: "Story Recall",
    testStemForm: "STYREC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 11 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
