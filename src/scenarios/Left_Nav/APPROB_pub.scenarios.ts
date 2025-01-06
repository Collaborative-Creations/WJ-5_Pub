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
    typeOfTest: "All correct scenario for APPROB SSP1",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 4",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "bbyc for APPROB SSP2",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 5 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for APPROB SSP3",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for APPROB SSP4",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 9",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for APPROB SSP5",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for APPROB SSP6",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 15",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for APPROB SSP7",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 16 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for APPROB SSP8",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
