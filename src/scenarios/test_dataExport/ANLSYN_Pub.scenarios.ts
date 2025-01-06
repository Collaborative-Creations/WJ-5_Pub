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
    typeOfTest: "All Examinees - All correct scenario",
    testName: "Analysis-Synthesis",
    testStemForm: "ANLSYN.W5PA",
    blockName: "Form A",
    examineeAge: 5,
    SSP: "All Examinees",
    totalItems: 35,
    location: "PublicationsOrg01",
    lookUpModel: "Test Data Export",
    testSchemaFileName: "ANLSYN.W5PA_TestSchema.xlsx",
    examineeGrade: "Grade 4",
  },
];
