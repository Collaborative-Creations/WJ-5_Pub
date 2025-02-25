interface TestData {
  typeOfTest: string;
  testName: string;
  SumOfItemScores: number;
  BasalCredit: number;
  WlookUp: number;
  Wscore: number;
  semW: number;
  WlkpAdminItems: string;
  ScoreString: string;
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
  examineeGrade: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "Ages 4 to 7 - Block A and B correct Scenario",
    testName: "Sentence Writing Accuracy",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 60,
    Wscore: 544.88,
    semW: 14.67,
    WlkpAdminItems: "AB",
    ScoreString: "^20,40,xx",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 8 to 13 - Block B and C correct Scenario",
    testName: "Sentence Writing Accuracy",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 60,
    Wscore: 559.99,
    semW: 14.88,
    WlkpAdminItems: "BC",
    ScoreString: "^xx,40,20",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 13",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 14 to Adult - Block C Correct Scenario",
    testName: "Sentence Writing Accuracy",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 20,
    Wscore: 557.88,
    semW: 15.13,
    WlkpAdminItems: "C",
    ScoreString: "^xx,xx,20",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    totalItems: 5,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 7 - Block A Incorrect Scenario",
    testName: "Sentence Writing Accuracy",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 429.01,
    semW: 14.7,
    WlkpAdminItems: "A",
    ScoreString: "^00,xx,xx",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 5,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 8 to 13 - Block B and A Incorrect Scenario",
    testName: "Sentence Writing Accuracy",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 427.74,
    semW: 14.63,
    WlkpAdminItems: "AB",
    ScoreString: "^00,00,xx",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 13",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Ages 14 to Adult - Block C and B Incorrect Scenario",
    testName: "Sentence Writing Accuracy",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 445.35,
    semW: 14.55,
    WlkpAdminItems: "BC",
    ScoreString: "^xx,00,00",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
