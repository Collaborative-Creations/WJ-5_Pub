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
    typeOfTest: "Ages 4 to 8 - All correct scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    blockName: "Form A",
    examineeAge: 5,
    SSP: "Ages 4 to 8",
    totalItems: 30,
    location: "PublicationsOrg01",
    lookUpModel: "Test Data Export",
    testSchemaFileName: "OVANT.W5PA_TestSchema.xlsx",
    examineeGrade: "Grade 4",
  },
];
