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
    typeOfTest: "Block A EndTest Scenario when RS is 5",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y0m",
    GE: "GK.6",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block A to Block C Forward Flow when RS is 7 in Block A and all Correct in Block C",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">22y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block A to Block C Forward Flow when RS is 7 in Block A and all Incorrect in Block C",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "7y11m",
    GE: "G2.5",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block A to Block D Forward Flow when RS is 8 in Block A and all Correct in Block D",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">22y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block A to Block D Forward Flow when RS is 8 in Block A and all Incorrect in Block D",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Ages 4 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "9y3m",
    GE: "G3.8",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block B to Block A routing Scenario when RS is 1 in Block B and all Correct in Block A",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "11y1m",
    GE: "G5.7",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block B to Block A routing Scenario when RS is 1 in Block B and all Incorrect in Block A",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block B to Block C Forward Flow when RS is 4 in Block B and all Correct in Block C",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">22y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block B to Block C Forward Flow when RS is 4 in Block B and all Incorrect in Block C",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "8y11m",
    GE: "G3.5",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block B to Block D Forward Flow when RS is 8 in Block B and all Correct in Block D",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">22y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Block B to Block D Forward Flow when RS is 8 in Block B and all Incorrect in Block D",
    testName: "Matrices",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "17y2m",
    GE: "G11.8",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used “self-talk” strategy",
      "Controlled frustration level as the items increased in difficulty",
      "Displayed organized use of strategies (constructive matching, isolate-and-eliminate, response elimination)",
      "None of the above",
    ],
  },
];
