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
    testName: "Letter-Pattern Matching",
    SumOfItemScores: 100,
    BasalCredit: 0,
    WlookUp: 100,
    Wscore: 736.28,
    semW: 15.43,
    WlkpAdminItems: "",
    ScoreString: "^10,10,10,10,10,10,10,10,10,10",
    testStemForm: "LETPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 120,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Letter-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 403.58,
    semW: 14.76,
    WlkpAdminItems: "",
    ScoreString: "^00,00,00,00,00,00,00,00,00,00",
    testStemForm: "LETPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 120,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Sample and Practice items [!C] scenario-------------------------- */
  {
    typeOfTest: "All Examinees - Answer only one sample item",
    testName: "Letter-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "LETPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - Answer both sample items",
    testName: "Letter-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "LETPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - Answer only Practice Exercise items",
    testName: "Letter-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "LETPAT.W5PA",
    lookUpModel: "SingleTable",
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
    testName: "Letter-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 403.58,
    semW: 14.76,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "LETPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 0,
    scoreFlag: "[!A]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
