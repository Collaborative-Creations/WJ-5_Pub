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
    testName: "Sentence Reading Fluency",
    SumOfItemScores: 120,
    BasalCredit: 0,
    WlookUp: 120,
    Wscore: 693.05,
    semW: 18.2,
    WlkpAdminItems: "",
    ScoreString: "^10,10,10,10,10,10,10,10,10,10,10,10",
    testStemForm: "SRDGFL.W5PA",
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
    testName: "Sentence Reading Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 422.53,
    semW: 14.55,
    WlkpAdminItems: "",
    ScoreString: "^00,00,00,00,00,00,00,00,00,00,00,00",
    testStemForm: "SRDGFL.W5PA",
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
    testName: "Sentence Reading Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SRDGFL.W5PA",
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
    testName: "Sentence Reading Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SRDGFL.W5PA",
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
    testName: "Sentence Reading Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SRDGFL.W5PA",
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
    testName: "Sentence Reading Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 422.53,
    semW: 14.55,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SRDGFL.W5PA",
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
