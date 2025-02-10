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
    typeOfTest: "Ages 4 to 5 - Block A All Incorrect Scenario",
    testName: "Sentence Repetition",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 398.82,
    semW: 15.32,
    WlkpAdminItems: "A",
    ScoreString: "^00,xx",
    testStemForm: "SENREP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 8,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - Block B All Correct scenario",
    testName: "Sentence Repetition",
    SumOfItemScores: 29,
    BasalCredit: 0,
    WlookUp: 29,
    Wscore: 626.28,
    semW: 16.54,
    WlkpAdminItems: "B",
    ScoreString: "^xx,29",
    testStemForm: "SENREP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    totalItems: 29,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - Block B Basal and Ceiling Scenario",
    testName: "Sentence Repetition",
    SumOfItemScores: 4,
    BasalCredit: 0,
    WlookUp: 4,
    Wscore: 457.08,
    semW: 5.93,
    WlkpAdminItems: "B",
    ScoreString: "^xx,04",
    testStemForm: "SENREP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    totalItems: 8,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Sample items [!C] scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 5 - Answer only Sample Items",
    testName: "Sentence Repetition",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SENREP.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 8,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
