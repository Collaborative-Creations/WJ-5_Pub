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
    typeOfTest: "Ages 4 to 5 - All correct scenario",
    testName: "Sound Deletion",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SNDDEL.W5PA",
    SSP: "Ages 4 to 5",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - All correct scenario",
    testName: "Sound Deletion",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SNDDEL.W5PA",
    SSP: "Age 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 7 to Adult - All correct scenario",
    testName: "Sound Deletion",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SNDDEL.W5PA",
    SSP: "Ages 7 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 5 - Block A Correct & Block B Incorrect Scenario",
    testName: "Sound Deletion",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SNDDEL.W5PA",
    SSP: "Ages 4 to 5",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - 6 Correct & 6 Incorrect Scenario",
    testName: "Sound Deletion",
    lookUpModel: "Multitable",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SNDDEL.W5PA",
    SSP: "Age 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
