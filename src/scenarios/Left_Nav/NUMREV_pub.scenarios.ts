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
    typeOfTest: "All correct scenario for NUMREV SSP1",
    testName: "Numbers Reversed",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 9",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Basal & Ceiling Scenario for NUMREV SSP2",
    testName: "Numbers Reversed",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Flagged,expanded and collapsed for NUMREV SSP3",
    testName: "Numbers Reversed",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
