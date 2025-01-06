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
    typeOfTest: "Age 4 - All correct scenario",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 4",
    totalItems: 47,
    location: "PublicationsOrg01",
    lookUpModel: "Test Data Export",
    testSchemaFileName: "PICVOC.W5PA_TestSchema.xlsx",
    examineeGrade: "Grade 4",
  },
];
