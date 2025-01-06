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
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "left Nav For SSP2",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "left Nav For SSP3",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
