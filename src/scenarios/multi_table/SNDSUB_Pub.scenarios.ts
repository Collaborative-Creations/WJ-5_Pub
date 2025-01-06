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
    typeOfTest: "Ages 4 to 7 - All Correct scenario",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 28,
    Wscore: 527.48,
    semW: 14.62,
    WlkpAdminItems: "ABC",
    ScoreString: "^08,08,12",
    testStemForm: "SNDSUB.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 28,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 7 - Block A end test scenario with RS 3",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 3,
    Wscore: 467.55,
    semW: 6.91,
    WlkpAdminItems: "A",
    ScoreString: "^03,xx,xx",
    testStemForm: "SNDSUB.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 8,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Ages 8 to Adult - Block B Rerouting to Intro 1 with RS 4 and Sample Items AB Incorrect",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 4,
    Wscore: 477.41,
    semW: 7.01,
    WlkpAdminItems: "B",
    ScoreString: "^xx,04,xx",
    testStemForm: "SNDSUB.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    totalItems: 8,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 7 - Sample AB Discontinue Scenario",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 444.4,
    semW: 14.88,
    WlkpAdminItems: "A",
    testStemForm: "SNDSUB.W5PA",
    ScoreString: "",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 0,
    scoreFlag: "[!A]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 7 - Sample A Correct and Force Submit Scenario",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SNDSUB.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Ages 8 to Adult - Sample C Incorrect and Force Submit Scenario",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SNDSUB.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 8 to Adult - Sample CD Discontinue Scenario",
    testName: "Sound Substitution",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 444.4,
    semW: 14.88,
    WlkpAdminItems: "A",
    ScoreString: "",
    testStemForm: "SNDSUB.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to Adult",
    totalItems: 0,
    scoreFlag: "[!A]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];