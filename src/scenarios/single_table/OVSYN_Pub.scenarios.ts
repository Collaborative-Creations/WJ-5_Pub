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
    typeOfTest: "Ages 4 to 11 - All correct scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 25,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 12 to Average Adult - All correct scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to Average Adult",
    totalItems: 21,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Above Average Adult - All correct scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 17,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  /* ----------------------ALL INCORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 11 - All incorrect scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 25,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 12 to Average Adult - All incorrect scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to Average Adult",
    totalItems: 20,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Above Average Adult - All incorrect scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 16,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  /* ----------------------5 Correct 5 INCORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 11 - Attain Quick Basal Ceiling scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to Average Adult",
    totalItems: 26,
    scoreFlag: "",
    BbyC: 5,
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest:
      "Ages 12 to Average Adult - Attain Quick Basal Ceiling scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to Average Adult",
    totalItems: 26,
    scoreFlag: "",
    BbyC: 5,
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Above Average Adult - Attain Quick Basal Ceiling scenario",
    testName: "Oral Vocabulary–Synonyms",
    testStemForm: "OVSYN.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 22,
    scoreFlag: "",
    BbyC: 5,
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
];
