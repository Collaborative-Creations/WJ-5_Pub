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
    typeOfTest: "Ages 4 to 6 - All correct scenario",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 33,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 7 to 11 - All correct scenario",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 11",
    totalItems: 29,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 12 to Adult - All correct scenario",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Adult",
    totalItems: 23,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },

  /* ----------------------ALL INCORRECT-------------------------- */
  {
    typeOfTest: "Ages 4 to 6 - All incorrect scenario",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 33,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 7 to 11 - All incorrect scenario",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 11",
    totalItems: 29,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 12 to Adult - All incorrect scenario",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Adult",
    totalItems: 23,
    scoreFlag: "",
    location: "PublicationsOrg01",
    examineeGrade: "Grade 5",
  },
];
