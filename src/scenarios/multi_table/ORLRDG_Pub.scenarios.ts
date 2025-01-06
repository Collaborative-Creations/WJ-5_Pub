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
    typeOfTest: "Ages 6 to 7 - All correct scenario",
    testName: "Oral Reading",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 56,
    Wscore: 567.97,
    semW: 15.47,
    WlkpAdminItems: "ABCDEF",
    ScoreString: "^10,10,10,10,10,06",
    testStemForm: "ORLRDG.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 6 to 7",
    totalItems: 6,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 6 to 7 - Story 1 to Story 6 Incorrect Scenario",
    testName: "Oral Reading",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 30,
    Wscore: 480.08,
    semW: 3.73,
    WlkpAdminItems: "ABCDEF",
    ScoreString: "^06,06,06,06,06,00",
    testStemForm: "ORLRDG.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 6 to 7",
    totalItems: 6,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Age 8 to Adult - Story 3 to Story 2 & 1 logic flow & EndTest Scenario",
    testName: "Oral Reading",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 15,
    Wscore: 459,
    semW: 3.75,
    WlkpAdminItems: "ABC",
    ScoreString: "^05,05,05,xx,xx,xx",
    testStemForm: "ORLRDG.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 8 to Adult",
    totalItems: 3,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
