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
    typeOfTest: "Ages 5 to 7 - Block A Discontinue Scenario WRTSMP",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "5y11m",
    GE: "GK.3",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest: "Ages 5 to 7 - Block A Test Forward Scenario",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "5y9m",
    GE: "GK.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Ages 5 to 7 - Block A&B End Test Scenario With RS:14 and also routing check when RS is 10",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "5y9m",
    GE: "GK.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Ages 5 to 7 - Block A&B to Block C flow Scenario when RS is 10 and also End Test check when score is edited to 9",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "15y7m",
    GE: ">G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Ages 5 to 7 - Block A&B to Block C End Test Scenario when RS is 24 & 25",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Ages 5 to 7 - Review Flow Check from End Test to Intro 3 for SSP1",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 5 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "5y11m",
    GE: "GK.3",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Ages 8 to 11 - Block B & C to D End Test Scenario when RS is 20 and 10 for Block D",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest: "Ages 8 to 11 - Block B & C End Test Scenario with RS of 1",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y6m",
    GE: "G1.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest: "Ages 8 to 11 - Block B & C End Test Scenario with RS of 19",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y6m",
    GE: "G1.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Ages 8 to 11 - Block B & C to A End Test Scenario with RS of 0",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Ages 8 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y9m",
    GE: "G1.3",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Age 12 to Average Adult - Block C & D to E End Test Scenario when RS is 20 and 10 for Block E",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Age 12 to Average Adult - Block C & D End Test Scenario with RS of 1",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "7y5m",
    GE: "G1.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Age 12 to Average Adult - Block C & D End Test Scenario with RS of 19",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "7y5m",
    GE: "G1.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Age 12 to Average Adult - Block C & D to B End Test Scenario with RS of 0",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "9y1m",
    GE: "G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Above Average Adult - Block D to E End Test Scenario with RS of 1",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "8y8m",
    GE: "G3.1",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Above Average Adult - Block D to E End Test Scenario with RS of 20",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },

  {
    typeOfTest:
      "Above Average Adult - Block D & E to C End Test Scenario with RS of 0",
    testName: "Written Language Samples",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "WRTSMP.W5PA",
    lookUpModel: "Multitable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "11y1m",
    GE: ">G3.4",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Wrote sentences that were both complex and detailed",
      "Made errors in basic writing skills",
      "Wrote sentences that were simple but adequate",
      "Displayed sustained concentration and effort throughout this test",
      "Wrote sentences that were inadequate (e.g., incomplete, illegible, contained syntax errors, did not meet task demands)",
      "Had difficulty sustaining concentration and effort throughout this test",
      "Demonstrated adequate basic writing skills (e.g., spelling, punctuation, capitalization)",
      "None of the above",
    ],
  },
];