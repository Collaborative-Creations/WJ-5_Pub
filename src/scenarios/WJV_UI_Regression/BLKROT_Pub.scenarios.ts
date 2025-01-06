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
    typeOfTest: "Ages 4 to 7 - Block A End Test Scenario With All incorrect",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
  {
    typeOfTest: "Ages 4 to 7 - Block A and Block B All correct Scenario",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">25y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
  {
    typeOfTest:
      "Ages 4 to 7 - Block A All correct and Block B All incorrect Scenario",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "5y10m",
    GE: "GK.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
  {
    typeOfTest:
      "Ages 8 to Adult - Block B Basal and ceiling scenario with 6 incorrect",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "5y10m",
    GE: "GK.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
  {
    typeOfTest: "Ages 8 to Adult - Block B 6 correct and 6 incorrect scenario",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "8y9m",
    GE: "G3.3",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
  {
    typeOfTest: "Ages 8 to Adult - Block B All correct scenario",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">25y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
  {
    typeOfTest: "Ages 8 to Adult - Block B Review Flow Logic",
    testName: "Block Rotation",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "BLKROT.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "9y8m",
    GE: "G4.2",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Was careful and accurate in responding",
      "Used “self-talk” strategy",
      "None of the above",
    ],
  },
];
