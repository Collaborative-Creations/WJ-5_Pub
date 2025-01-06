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
    testName: "Block Rotation",
    SumOfItemScores: 28,
    BasalCredit: 0,
    WlookUp: 28,
    Wscore: 547.62,
    semW: 14.77,
    WlkpAdminItems: "AB",
    ScoreString: "^09,19",
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 28,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Ages 4 to 7 - All incorrect scenario",
    testName: "Block Rotation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 421.75,
    semW: 15.8,
    WlkpAdminItems: "A",
    ScoreString: "^00,xx",
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 9,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Ages 8 to Adult - 6 Correct & 6 Incorrect Scenario",
    testName: "Block Rotation",
    SumOfItemScores: 6,
    BasalCredit: 0,
    WlookUp: 6,
    Wscore: 493.74,
    semW: 5.66,
    WlkpAdminItems: "B",
    ScoreString: "^xx,06",
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    totalItems: 19,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  /* ----------------------Answer Sample items [!C] scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 7  - Answer only one sample item",
    testName: "Block Rotation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
