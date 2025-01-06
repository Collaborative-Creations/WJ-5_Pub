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
    typeOfTest: "basal and ceiling for SSP1",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 4",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "left Nav when items are flagged for SSP2",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 5,
    SSP: "Ages 5 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "left Nav when items are flagged,expanded and collapsed for SSP3",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 7,
    SSP: "Ages 7 to 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "left Nav when items are flagged,expanded and collapsed for SSP4",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 9,
    SSP: "Ages 9 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "left Nav when items are flagged,expanded and collapsed for SSP5",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 11,
    SSP: "Ages 11 to 14",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "left Nav when items are flagged,expanded and collapsed for SSP6",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 15,
    SSP: "Age 15 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "left Nav when items are flagged,expanded and collapsed for SSP7",
    testName: "Picture Vocabulary",
    testStemForm: "PICVOC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 18,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
