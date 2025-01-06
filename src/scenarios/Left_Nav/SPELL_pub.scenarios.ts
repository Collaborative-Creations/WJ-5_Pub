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
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Basal and Ceiling For SSP2",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP3",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP4",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP5",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP6",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP Item check For SSP7",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 14 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "left Nav When Items are Flagged,Expanded and collapsed For SSP8",
    testName: "Spelling",
    testStemForm: "SPELL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
