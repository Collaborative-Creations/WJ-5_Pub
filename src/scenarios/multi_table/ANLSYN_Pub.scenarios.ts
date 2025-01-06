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
    testName: "Analysis-Synthesis",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 35,
    Wscore: 569.45,
    semW: 14.97,
    WlkpAdminItems: "ABCDE",
    ScoreString: "^07,12,06,06,04",
    testStemForm: "ANLSYN.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 35,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Analysis-Synthesis",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 426.19,
    semW: 14.91,
    WlkpAdminItems: "A",
    ScoreString: "^00,xx,xx,xx,xx",
    testStemForm: "ANLSYN.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 7,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - test ends at item 19",
    testName: "Analysis-Synthesis",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 7,
    Wscore: 448.14,
    semW: 4.47,
    WlkpAdminItems: "AB",
    ScoreString: "^07,00,xx,xx,xx",
    testStemForm: "ANLSYN.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 19,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - test ends at item 25",
    testName: "Analysis-Synthesis",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 14,
    Wscore: 462.46,
    semW: 4.59,
    WlkpAdminItems: "ABC",
    ScoreString: "^07,07,00,xx,xx",
    testStemForm: "ANLSYN.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 25,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - test ends at item 31",
    testName: "Analysis-Synthesis",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 19,
    Wscore: 477.29,
    semW: 5.95,
    WlkpAdminItems: "ABCD",
    ScoreString: "^07,12,00,00,xx",
    testStemForm: "ANLSYN.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 31,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
