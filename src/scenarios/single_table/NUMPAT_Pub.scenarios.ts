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
    testName: "Number-Pattern Matching",
    SumOfItemScores: 90,
    BasalCredit: 0,
    WlookUp: 90,
    Wscore: 767.46,
    semW: 14.93,
    WlkpAdminItems: "",
    ScoreString: "^10,10,10,10,10,10,10,10,10",
    testStemForm: "NUMPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 90,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Number-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 403.62,
    semW: 14.59,
    WlkpAdminItems: "",
    ScoreString: "^00,00,00,00,00,00,00,00,00",
    testStemForm: "NUMPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 90,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Demo and Practice items [!C] scenario-------------------------- */

  {
    typeOfTest: "All Examinees - Answer only one sample item",
    testName: "Number-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMPAT.W5PA",
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
    testName: "Number-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMPAT.W5PA",
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
    typeOfTest: "All Examinees - Answer Sample and Practice Exercise items",
    testName: "Number-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMPAT.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Demo and Practice items [!A] scenario-------------------------- */

  {
    typeOfTest: "All Examinees - Practice Exercise Incorrect Scenario",
    testName: "Number-Pattern Matching",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 403.62,
    semW: 14.59,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMPAT.W5PA",
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
