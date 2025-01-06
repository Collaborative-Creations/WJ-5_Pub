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
  BbyC?: number;
  negation?: boolean;
  location?: string;
  examineeGrade?: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "Ages 4 to 8 - All correct scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 8",
    totalItems: 30,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  {
    typeOfTest: "Ages 9 to 13 - All correct scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 13",
    totalItems: 26,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 14 to Average Adult - All correct scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 14 to Average Adult",
    totalItems: 24,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  {
    typeOfTest: "Above Average Adult - All correct scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 20,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  {
    typeOfTest: "Ages 4 to 8 - All incorrect scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 8",
    totalItems: 30,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  {
    typeOfTest: "Ages 9 to 13 - All incorrect scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 13",
    totalItems: 26,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 14 to Average Adult - All incorrect scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 14 to Average Adult",
    totalItems: 24,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Above Average Adult - All incorrect scenario",
    testName: "Oral Vocabulary–Antonyms",
    testStemForm: "OVANT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 20,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
];
