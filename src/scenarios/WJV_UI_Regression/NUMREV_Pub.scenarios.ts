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
    typeOfTest: "Ages 4 to 9 - All Correct SSP1",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 4 to 9",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Ages 10 to Average Adult- All Correct SSP2",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 10 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Above Average Adult - All Correct SSP3",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: ">29y",
    GE: ">G12.9",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Ages 4 to 9 - Ceiling Check SSP1",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 4 to 9",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Ages 4 to 9 - 5 Correct and 5 Incorrect for SSP1",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 4 to 9",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y2m",
    GE: "GK.7",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Ages 10 to Average Adult- 5 Correct and 5 Incorrect for SSP2",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 10 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "8y11m",
    GE: "G3.5",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Above Average Adult - 5 Correct and 5 Incorrect for SSP3",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "13y9m",
    GE: "G8.3",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Ages 10 to Average Adult- Reverse Logic Scenario for SSP2",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 10 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Above Average Adult - Reverse Logic Scenario for SSP3",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "<4y0m",
    GE: "<GK.0",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },
  {
    typeOfTest: "Ages 10 to Average Adult - Sample B Routing Change Scenario",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Ages 10 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y2m",
    GE: "GK.7",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  },

  {
    typeOfTest: "Above Average Adult - Sample C Routing Change Scenario",
    testName: "Numbers Reversed",
    blockName: "Form A",
    examineeAge: 4,
    testStemForm: "NUMREV.W5PA",
    lookUpModel: "Singletable",
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
    AE: "6y2m",
    GE: "GK.7",
    ScoreCheckStatus: "Test Complete",
    FlagStatus: "0 items",
    OutcomeText: "Examinee completed all required test items.",
    responseStyleBehaviours: [
      "Errors suggested good recall of stimuli but incorrect ordering",
      "Used “self-talk” strategy",
      "Errors suggested poor recall of stimuli but correct ordering",
      "None of the above",
      "Used memory strategies (e.g., rehearsal, chunking, elaboration, visualization, mnemonics)",
    ],
  }, 
];
