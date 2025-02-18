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
    typeOfTest: "All Correct SSP 1",
    testName: "Spatial Relations",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 4 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">24y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Used “self-talk” strategy",
      "Was careful and accurate in responding",
      "None of the above",
    ],
  },

  {
    typeOfTest: "All Correct SSP 2",
    testName: "Spatial Relations",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 11 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">24y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Used “self-talk” strategy",
      "Was careful and accurate in responding",
      "None of the above",
    ],
  },

  {
    typeOfTest: "Reverse Logic for SSP2",
    testName: "Spatial Relations",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 11 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Used “self-talk” strategy",
      "Was careful and accurate in responding",
      "None of the above",
    ],
  },

  {
    typeOfTest: "B&C SSP1",
    testName: "Spatial Relations",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 4 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Used “self-talk” strategy",
      "Was careful and accurate in responding",
      "None of the above",
    ],
  },

  {
    typeOfTest: "B&C SSP2",
    testName: "Spatial Relations",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "SPAREL.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 11 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y7m",
    GE: "G1.2",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Used organized strategy (holistic, analytic, verbalization, feature-by-feature comparison)",
      "Used “self-talk” strategy",
      "Was careful and accurate in responding",
      "None of the above",
    ],
  },
];
