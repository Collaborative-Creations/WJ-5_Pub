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
    typeOfTest: "Age 4 - All correct scenario",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 4",
    totalItems: 48,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 5 to 6 - All correct scenario",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 5 to 6",
    totalItems: 43,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 7 to 8 - All correct scenario",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 8",
    totalItems: 38,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  /* ----------------------ALL INCORRECT-------------------------- */

  {
    typeOfTest: "Age 9 - All incorrect scenario",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 9",
    totalItems: 34,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 10 to 11 - All incorrect scenario",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to 11",
    totalItems: 32,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  /* ----------------------5 Correct 5 INCORRECT-------------------------- */

  {
    typeOfTest: "Ages 12 to 15 - Quick Basal Ceiling",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 15",
    totalItems: 30,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
    BbyC: 5,
  },
  {
    typeOfTest: "Age 16 to Average Adult - Quick Basal Ceiling",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 16 to Average Adult",
    totalItems: 28,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
    BbyC: 5,
  },
  {
    typeOfTest: "Above Average Adult - Quick Basal Ceiling",
    testName: "Applied Problems",
    testStemForm: "APPROB.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 26,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
    BbyC: 5,
  },
];
