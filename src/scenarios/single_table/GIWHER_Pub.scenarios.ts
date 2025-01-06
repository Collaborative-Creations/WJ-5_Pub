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
  examineeGrade: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "Ages 4 to 11 - All correct scenario",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 23,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 12 to Average Adult - All correct scenario",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    totalItems: 17,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Above Average Adult - All correct scenario",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 14,
    SSP: "Above Average Adult",
    totalItems: 11,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 4 to 11 - All incorrect scenario",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 23,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 12 to Average Adult - All incorrect scenario",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    totalItems: 17,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Above Average Adult - All incorrect scenario",
    testName: "General Information–Where",
    testStemForm: "GIWHER.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 11,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
];
