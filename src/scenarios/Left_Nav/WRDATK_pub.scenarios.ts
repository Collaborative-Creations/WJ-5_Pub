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
    typeOfTest: "All correct scenario for WRDATK SSP1",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "bbyc for WRDATK SSP2",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for WRDATK SSP3",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 9",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for WRDATK SSP4",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for WRDATK SSP5",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for WRDATK SSP6",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for WRDATK SSP7",
    testName: "Word Attack",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
