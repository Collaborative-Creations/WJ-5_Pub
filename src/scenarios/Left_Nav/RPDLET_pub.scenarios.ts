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
    typeOfTest: "All correct scenario for RPDLET for SSP 1",
    testName: "Rapid Letter Naming",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "All Incorrect scenario for RPDLET for SSP 1",
    testName: "Rapid Letter Naming",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Item Check for RPDLET for SSP 2",
    testName: "Rapid Letter Naming",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
