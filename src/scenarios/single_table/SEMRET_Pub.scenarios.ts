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
    typeOfTest: "All Examinees - 125 correct scenario",
    testName: "Semantic Word Retrieval",
    SumOfItemScores: 132,
    BasalCredit: 0,
    WlookUp: 132,
    Wscore: 539.78,
    semW: 14.03,
    WlkpAdminItems: "",
    ScoreString: "^99,99,99",
    testStemForm: "SEMRET.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 3,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Semantic Word Retrieval",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 462.25,
    semW: 13.89,
    WlkpAdminItems: "",
    ScoreString: "^00,00,00",
    testStemForm: "SEMRET.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 3,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "All Examinees - 40 correct scenario",
    testName: "Semantic Word Retrieval",
    SumOfItemScores: 120,
    BasalCredit: 0,
    WlookUp: 120,
    Wscore: 515.15,
    semW: 2.09,
    WlkpAdminItems: "",
    ScoreString: "^40,40,40",
    testStemForm: "SEMRET.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 90,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
