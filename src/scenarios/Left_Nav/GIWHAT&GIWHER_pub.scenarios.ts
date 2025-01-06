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
    typeOfTest: "basal and ceiling For SSP1",
    testName: "General Information–What",
    testStemForm: "GIWHAT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "left Nav when items are flagged for SSP2",
    testName: "General Information–What",
    testStemForm: "GIWHAT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 6 to 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "left Nav when expanded and collapsed for SSP3",
    testName: "General Information–What",
    testStemForm: "GIWHAT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "basal and ceiling For SSP4",
    testName: "General Information–What",
    testStemForm: "GIWHAT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 14",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "left Nav when items are flagged,expanded and collapsed for SSP5",
    testName: "General Information–What",
    testStemForm: "GIWHAT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 15 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "bbyc For SSP1 For GIWHER",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged Items for GIWHER SSP2",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for GIWHER SSP3",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
