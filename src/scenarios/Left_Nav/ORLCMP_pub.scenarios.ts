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
    testName: "Oral Comprehension",
    testStemForm: "ORLCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Bbyc For ORLCMP SSP2",
    testName: "Oral Comprehension",
    testStemForm: "ORLCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For ORLCMP SSP3",
    testName: "Oral Comprehension",
    testStemForm: "ORLCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For ORLCMP SSP4",
    testName: "Oral Comprehension",
    testStemForm: "ORLCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For ORLCMP SSP5",
    testName: "Oral Comprehension",
    testStemForm: "ORLCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "left Nav When Items are Flagged,Expanded and collapsed For ORLCMP SSP6",
    testName: "Oral Comprehension",
    testStemForm: "ORLCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
