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
    typeOfTest: "Ages 4 to 6 - All correct scenario",
    testName: "Passage Comprehension",
    SumOfItemScores: 38,
    BasalCredit: 0,
    WlookUp: 38,
    Wscore: 557.89,
    semW: 14.85,
    WlkpAdminItems: "AB",
    ScoreString: "^07,31",
    testStemForm: "PSGCMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 38,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 8 to 9 - 5 Correct & 5 Incorrect Scenario",
    testName: "Passage Comprehension",
    SumOfItemScores: 5,
    BasalCredit: 4,
    WlookUp: 9,
    Wscore: 474.12,
    semW: 5.43,
    WlkpAdminItems: "B",
    ScoreString: "^xx,09",
    testStemForm: "PSGCMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 9",
    totalItems: 10,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 6 - Block A Correct & Block B Incorrect Scenario",
    testName: "Passage Comprehension",
    SumOfItemScores: 7,
    BasalCredit: 0,
    WlookUp: 7,
    Wscore: 444.79,
    semW: 5.83,
    WlkpAdminItems: "AB",
    ScoreString: "^07,00",
    testStemForm: "PSGCMP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 12,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
