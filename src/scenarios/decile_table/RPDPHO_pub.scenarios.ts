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
    typeOfTest: "All Examinees - All correct scenario",
    testName: "Rapid Phoneme Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 72,
    Wscore: 583.34,
    semW: 14.35,
    WlkpAdminItems: "",
    ScoreString: "^9,9,9,9,9,9,9,9",
    testStemForm: "RPDPHO.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 80,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Rapid Phoneme Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 475.34,
    semW: 10.49,
    WlkpAdminItems: "",
    ScoreString: "^0,0,0,0,0,0,0,0",
    testStemForm: "RPDPHO.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 80,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Sample and Practice items [!C] scenario-------------------------- */
  {
    typeOfTest: "All Examinees - Answer only sample item",
    testName: "Rapid Phoneme Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "RPDPHO.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  /* ----------------------Answer Sample and Practice items [!A] scenario-------------------------- */
  {
    typeOfTest: "All Examinees - Discontinue scenario",
    testName: "Rapid Phoneme Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 475.34,
    semW: 10.49,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "RPDPHO.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 0,
    scoreFlag: "[!A]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];