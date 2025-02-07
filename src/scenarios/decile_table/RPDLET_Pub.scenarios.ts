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
    typeOfTest: "All correct scenario",
    testName: "Rapid Letter Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 72,
    Wscore: 595.4,
    semW: 14.64,
    WlkpAdminItems: "",
    ScoreString: "^9,9,9,9,9,9,9,9",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 120,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  
 {
    typeOfTest: "Test Items 10 Incorrect scenario",
    testName: "Rapid Letter Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 15,
    Wscore: 491.58,
    semW: 2.37,
    WlkpAdminItems: "",
    ScoreString: "^2,2,2,2,2,2,2,1",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    totalItems: 0,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  /* ----------------------Answer Sample and Practice items [!C] scenario-------------------------- */
  {
    typeOfTest: "Answer only sample item",
    testName: "Rapid Letter Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Sample and Practice items [!A] scenario-------------------------- */
  {
    typeOfTest: "Discontinue scenario",
    testName: "Rapid Letter Naming",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 472.29,
    semW: 11.17,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "RPDLET.W5PA",
    lookUpModel: "DecileTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    totalItems: 0,
    scoreFlag: "[!A]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

];
