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
    testName: "Phonemic Word Retrieval",
    SumOfItemScores: 85,
    BasalCredit: 0,
    WlookUp: 85,
    Wscore: 550.19,
    semW: 14.19,
    WlkpAdminItems: "",
    ScoreString: "^99,99,99",
    testStemForm: "PHNRET.W5PA",
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
    testName: "Phonemic Word Retrieval",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 458.64,
    semW: 14.47,
    WlkpAdminItems: "",
    ScoreString: "^00,00,00",
    testStemForm: "PHNRET.W5PA",
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
    typeOfTest: "All Examinees - 20 correct scenario",
    testName: "Phonemic Word Retrieval",
    SumOfItemScores: 60,
    BasalCredit: 0,
    WlookUp: 60,
    Wscore: 516.63,
    semW: 1.87,
    WlkpAdminItems: "",
    ScoreString: "^20,20,20",
    testStemForm: "PHNRET.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 3,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
