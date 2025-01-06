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
    typeOfTest: "All correct For SSP1",
    testName: "Written Language Samples",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "All correct For SSP4",
    testName: "Written Language Samples",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check for SSP 2",
    testName: "Written Language Samples",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "left Nav When Items are Flagged,Expanded and collapsed For SSP3",
    testName: "Written Language Samples",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
