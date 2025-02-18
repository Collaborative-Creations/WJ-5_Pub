interface TestData {
  typeOfTest: string;
  testName: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  BbyC?: number;
  testStemForm: string;
  lookUpModel: string;
  negation?: boolean;
  location?: string;
  examineeGrade: string;
  AE: string;
  GE: string;
  ScoreCheckStatus: string;
  FlagStatus: string;
  OutcomeText: string;
  responseStyleBehaviours: string[];
}

export const testData: TestData[] = [
  {
    typeOfTest: "125 correct scenario",
    testName: "Semantic Word Retrieval",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SEMRET.W5PA",
    lookUpModel: "SingleTable",
    SSP: "All Examinees",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used strategies that suggested use of organized memory search strategy",
      "Displayed frequent “tip-of-the-tongue” difficulties",
      "Displayed sustained concentration and effort throughout this test",
      "None of the above",
    ],
  },

  {
    typeOfTest: "All incorrect scenario",
    testName: "Semantic Word Retrieval",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SEMRET.W5PA",
    lookUpModel: "SingleTable",
    SSP: "All Examinees",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used strategies that suggested use of organized memory search strategy",
      "Displayed frequent “tip-of-the-tongue” difficulties",
      "Displayed sustained concentration and effort throughout this test",
      "None of the above",
    ],
  },
];
