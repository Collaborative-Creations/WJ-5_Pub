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
    typeOfTest: "All correct scenario for SPAREL SSP1",
    testName: "Spatial Relations",
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Basal & Ceiling Scenario for SPAREL SSP2",
    testName: "Spatial Relations",
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 11 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Flagged,expanded and collapsed for SPAREL SSP2",
    testName: "Spatial Relations",
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 11 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
