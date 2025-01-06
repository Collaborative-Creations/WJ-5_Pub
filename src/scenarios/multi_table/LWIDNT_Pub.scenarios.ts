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
    typeOfTest: "Ages 4 to 5 - All correct scenario",
    testName: "Letter-Word Identification",
    SumOfItemScores: 89,
    BasalCredit: 0,
    WlookUp: 89,
    Wscore: 585.2,
    semW: 15.64,
    WlkpAdminItems: "ABC",
    ScoreString: "^04,11,74",
    testStemForm: "LWIDNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 89,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - 6 Correct & 6 Incorrect Scenario",
    testName: "Letter-Word Identification",
    SumOfItemScores: 6,
    BasalCredit: 0,
    WlookUp: 6,
    Wscore: 390.25,
    semW: 5.2,
    WlkpAdminItems: "C",
    ScoreString: "^xx,xx,06",
    testStemForm: "LWIDNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    totalItems: 12,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 5 - Block A Correct & Block B Incorrect Scenario",
    testName: "Letter-Word Identification",
    SumOfItemScores: 4,
    BasalCredit: 0,
    WlookUp: 4,
    Wscore: 325.33,
    semW: 6.29,
    WlkpAdminItems: "AB",
    ScoreString: "^04,00,xx",
    testStemForm: "LWIDNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 15,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
