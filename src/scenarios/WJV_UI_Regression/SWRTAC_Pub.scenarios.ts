interface TestData {
  typeOfTest: string;
  testName: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  BbyC?: number;
  testStemForm: string;
  negation?: boolean;
  location?: string;
  examineeGrade: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "Ages 4 to 7 - Block A and B correct Scenario",
    testName: "Sentence Writing Accuracy",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SWRTAC.W5PA",
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 8 to 13 - Block B and C correct Scenario",
    testName: "Sentence Writing Accuracy",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SWRTAC.W5PA",
    SSP: "Ages 8 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 14 to Above Average Adult - Block C Correct Scenario",
    testName: "Sentence Writing Accuracy",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SWRTAC.W5PA",
    SSP: "Ages 14 to Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 7 - Block A Incorrect Scenario",
    testName: "Sentence Writing Accuracy",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SWRTAC.W5PA",
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 8 to 13 - Block B and A Incorrect Scenario",
    testName: "Sentence Writing Accuracy",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SWRTAC.W5PA",
    SSP: "Ages 8 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Ages 14 to Above Average Adult - Block C and B Incorrect Scenario",
    testName: "Sentence Writing Accuracy",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SWRTAC.W5PA",
    SSP: "Ages 14 to Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
