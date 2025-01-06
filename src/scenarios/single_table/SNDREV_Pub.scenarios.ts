interface TestData {
  typeOfTest: string;
  testName: string;
  testStemForm: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  totalItems: number;
  scoreFlag: string;
  location?: string;
  BbyC?: number;
  negation?: boolean;
  examineeGrade?: string;
}

export const testData: TestData[] = [
  /* ----------------------ALL CORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 13 - All correct scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 13",
    totalItems: 21,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 14 to Adult - All correct scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    totalItems: 21,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  /* ----------------------ALL INCORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 13 - All incorrect scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 13",
    totalItems: 21,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 14 to Adult - All incorrect scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    totalItems: 21,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  /* ----------------------5 Correct 5 INCORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 13 - Attain Quick Basal Ceiling scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 13",
    totalItems: 21,
    scoreFlag: "",
    BbyC: 5,
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 14 to Adult - Attain Quick Basal Ceiling scenario",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    totalItems: 21,
    scoreFlag: "",
    BbyC: 5,
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
];
