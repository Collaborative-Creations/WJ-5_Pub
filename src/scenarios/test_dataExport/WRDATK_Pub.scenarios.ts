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
    typeOfTest: "Ages 4 to 7 - All correct scenario",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    blockName: "Form A",
    examineeAge: 5,
    SSP: "Ages 4 to 7",
    totalItems: 62,
    location: "PVP",
    lookUpModel: "Test Data Export",
    testSchemaFileName: "WRDATK.W5PA_TestSchema.xlsx",
    examineeGrade: "Grade 4",
  },
];
