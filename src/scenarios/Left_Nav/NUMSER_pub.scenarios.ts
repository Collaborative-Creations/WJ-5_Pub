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
  {
    typeOfTest: "All correct For SSP1",
    testName: "Number Series",
    testStemForm: "NUMSER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Basal and Ceiling For SSP2",
    testName: "Number Series",
    testStemForm: "NUMSER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 6 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP3",
    testName: "Number Series",
    testStemForm: "NUMSER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP4",
    testName: "Number Series",
    testStemForm: "NUMSER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "left Nav When Items are Flagged,Expanded and collapsed For SSP5",
    testName: "Number Series",
    testStemForm: "NUMSER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 11 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
