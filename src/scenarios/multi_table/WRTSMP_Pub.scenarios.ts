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
    typeOfTest:
      "Ages 5 to 7 - Block A all correct scenario with score of 9 in Block B",
    testName: "Written Language Samples",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 14,
    Wscore: 514.65,
    semW: 10.52,
    WlkpAdminItems: "AB",
    ScoreString: "^05,09,xx,xx,xx",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 5 to 7",
    totalItems: 10,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Ages 8 to 11 - Block B & C with zero scores to A Correct Scenario",
    testName: "Written Language Samples",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 5,
    Wscore: 459.12,
    semW: 6.59,
    WlkpAdminItems: "ABC",
    ScoreString: "^05,00,00,xx,xx",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 11",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Age 12 to Average Adult - Block C & D with zero scores to Block B with RS 10",
    testName: "Written Language Samples",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 10,
    Wscore: 489.72,
    semW: 4.54,
    WlkpAdminItems: "BCD",
    ScoreString: "^xx,10,00,00,xx",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Above Average Adult - Block D & E with zero scores to Block C with RS 10",
    testName: "Written Language Samples",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 10,
    Wscore: 503.79,
    semW: 4.53,
    WlkpAdminItems: "CDE",
    ScoreString: "^xx,xx,10,00,00",
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
