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
    testName: "Math Facts Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 160,
    Wscore: 549.73,
    semW: 13.39,
    WlkpAdminItems: "",
    ScoreString: "^160",
    testStemForm: "MTHFLU.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 5,
    scoreFlag: "",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Ages 4 to 6 - All incorrect scenario",
    testName: "Math Facts Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 456.68,
    semW: 12,
    WlkpAdminItems: "",
    ScoreString: "^00",
    testStemForm: "MTHFLU.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 5,
    scoreFlag: "",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Ages 7 to Adult - All correct scenario",
    testName: "Math Facts Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 160,
    Wscore: 549.73,
    semW: 13.39,
    WlkpAdminItems: "",
    ScoreString: "^160",
    testStemForm: "MTHFLU.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to Adult",
    totalItems: 5,
    scoreFlag: "",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Ages 7 to Adult - All incorrect scenario",
    testName: "Math Facts Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 456.68,
    semW: 12,
    WlkpAdminItems: "",
    ScoreString: "^00",
    testStemForm: "MTHFLU.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to Adult",
    totalItems: 5,
    scoreFlag: "",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Practice Exercise [!A] scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 6 - Discontinue scenario",
    testName: "Math Facts Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 456.68,
    semW: 12,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "MTHFLU.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 5,
    scoreFlag: "[!A]",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Practice Exercise [!C] scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 6 - Answer only Practice Exercise",
    testName: "Math Facts Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "MTHFLU.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 5,
    scoreFlag: "[!C]",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
];
