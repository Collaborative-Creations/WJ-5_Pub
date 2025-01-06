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
    typeOfTest: "Ages 4 to 7 - All correct scenario",
    testName: "Word Attack",
    SumOfItemScores: 62,
    BasalCredit: 0,
    WlookUp: 62,
    Wscore: 553.04,
    semW: 14.77,
    WlkpAdminItems: "ABC",
    ScoreString: "^03,07,52",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 62,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 12 to 13 - 6 Correct & 6 Incorrect Scenario",
    testName: "Word Attack",
    SumOfItemScores: 6,
    BasalCredit: 18,
    WlookUp: 24,
    Wscore: 487.13,
    semW: 3.21,
    WlkpAdminItems: "C",
    ScoreString: "^xx,xx,24",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 13",
    totalItems: 12,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 7 - Block A Correct & Block B Incorrect Scenario",
    testName: "Word Attack",
    SumOfItemScores: 3,
    BasalCredit: 0,
    WlookUp: 3,
    Wscore: 443.4,
    semW: 10.22,
    WlkpAdminItems: "AB",
    ScoreString: "^03,00,xx",
    testStemForm: "WRDATK.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 13,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
