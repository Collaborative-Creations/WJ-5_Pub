interface TestData {
  typeOfTest: string;
  testName: string;
  testStemForm: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  totalItems: number;
  location: string;
  testSchemaFileName: string;
  examineeGrade: string;
}

export const testData: TestData[] = [
  /* ----------------------ALL CORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 13 - All correct scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 13",
    totalItems: 21,
    location: "PublicationsOrg01",
    lookUpModel: "Test Data Export",
    testSchemaFileName: "SNDREV.W5PA_TestSchema.xlsx",
    examineeGrade: "Grade 4",
  },
];
