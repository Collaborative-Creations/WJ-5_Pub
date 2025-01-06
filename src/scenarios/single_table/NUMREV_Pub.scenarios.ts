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
/* ----------------------All CORRECT Scenarios-------------------------- */
export const testData: TestData[] = [
 {
    typeOfTest: "Ages 4 to 9 - All Correct scenario SSP1",
    testName: "Numbers Reversed",
    SumOfItemScores: 34,
    BasalCredit: 0,
    WlookUp: 34,
    Wscore: 585.62,
    semW: 14.78,
    WlkpAdminItems: "",
    ScoreString: "^1111111111111111111111111111111111",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 9",
    totalItems: 34,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 10 to Average Adult - All Correct scenario SSP2",
    testName: "Numbers Reversed",
    SumOfItemScores: 29,
    BasalCredit: 5,
    WlookUp: 34,
    Wscore: 585.62,
    semW: 14.78,
    WlkpAdminItems: "",
    ScoreString: "^xxxxx11111111111111111111111111111",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to Average Adult",
    totalItems: 34,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  }, 

  {
    typeOfTest: "Above Average Adult - All Correct scenario SSP3",
    testName: "Numbers Reversed",
    SumOfItemScores: 24,
    BasalCredit: 10,
    WlookUp: 34,
    Wscore: 585.62,
    semW: 14.78,
    WlkpAdminItems: "",
    ScoreString: "^xxxxxxxxxx111111111111111111111111",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 34,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "5 Correct and 5 Incorrect Scenario for SSP1",
    testName: "Numbers Reversed",
    SumOfItemScores: 5,
    BasalCredit: 0,
    WlookUp: 5,
    Wscore: 455.96,
    semW: 11.6,
    WlkpAdminItems: "",
    ScoreString: "^1111100000xxxxxxxxxxxxxxxxxxxxxxxx",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 9",
    totalItems: 10,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "5 Correct and 5 Incorrect Scenario for SSP2",
    testName: "Numbers Reversed",
    SumOfItemScores: 5,
    BasalCredit: 5,
    WlookUp: 10,
    Wscore: 490.87,
    semW: 6.41,
    WlkpAdminItems: "",
    ScoreString: "^xxxxx1111100000xxxxxxxxxxxxxxxxxxx",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to Average Adult",
    totalItems: 10,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  }, 
  {
    typeOfTest: "5 Correct and 5 Incorrect Scenario for SSP3",
    testName: "Numbers Reversed",
    SumOfItemScores: 5,
    BasalCredit: 10,
    WlookUp: 15,
    Wscore: 511.66,
    semW: 5.89,
    WlkpAdminItems: "",
    ScoreString: "^xxxxxxxxxx1111100000xxxxxxxxxxxxxx",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 10,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  }, 

  {
    typeOfTest:
      "Ages 4 to 9 - Sample Item A Correct Force Submit Scenario",
    testName: "Numbers Reversed",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 9",
    totalItems: 10,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Ages 10 to Average Adult - Sample Item B Correct Force Submit Scenario",
    testName: "Numbers Reversed",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to Average Adult",
    totalItems: 10,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
 {
    typeOfTest:
      "Above Average Adult - Sample Item C Correct Force Submit Scenario",
    testName: "Numbers Reversed",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    totalItems: 10,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  }, 
];
