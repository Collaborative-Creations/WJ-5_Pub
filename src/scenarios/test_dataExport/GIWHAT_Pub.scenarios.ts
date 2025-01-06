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
    typeOfTest: "Ages 4 to 5 - All correct scenario",
    testName: "General Information–What",
    testStemForm: "GIWHAT.W5PA",
    blockName: "Form A",
    examineeAge: 5,
    SSP: "Ages 4 to 5",
    totalItems: 23,
    location: "PublicationsOrg01",
    lookUpModel: "Test Data Export",
    testSchemaFileName: "GIWHAT.W5PA_TestSchema.xlsx",
    examineeGrade: "Grade 4",
  },
];
