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
      testName: "Verbal Attention",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "VRBATN.W5PA",
      lookUpModel: "Singletable",
      SSP: "Ages 4 to 8",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: ">26y",
      GE: ">G12.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Errors suggested good recall of stimuli but incorrect ordering",
        "Used “self-talk” strategy",
        "Errors suggested poor recall of stimuli but correct ordering",
        "None of the above",
        "Used memory strategies (rehearsal, chunking, elaboration, visualization, mnemonics)"
      ],
    },
  
    {
      typeOfTest: "All Correct SSP 2",
      testName: "Verbal Attention",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "VRBATN.W5PA",
      lookUpModel: "Singletable",
      SSP: "Ages 9 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: ">26y",
      GE: ">G12.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Errors suggested good recall of stimuli but incorrect ordering",
        "Used “self-talk” strategy",
        "Errors suggested poor recall of stimuli but correct ordering",
        "None of the above",
        "Used memory strategies (rehearsal, chunking, elaboration, visualization, mnemonics)"
      ],
    },
  
    {
      typeOfTest: "Reverse Logic for SSP2",
      testName: "Verbal Attention",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "VRBATN.W5PA",
      lookUpModel: "Singletable",
      SSP: "Ages 9 to Adult",
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
        "Used memory strategies (rehearsal, chunking, elaboration, visualization, mnemonics)"
      ],
    },
  
    {
      typeOfTest: "B&C SSP1",
      testName: "Verbal Attention",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "VRBATN.W5PA",
      lookUpModel: "Singletable",
      SSP: "Ages 4 to 8",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "4y9m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Errors suggested good recall of stimuli but incorrect ordering",
        "Used “self-talk” strategy",
        "Errors suggested poor recall of stimuli but correct ordering",
        "None of the above",
        "Used memory strategies (rehearsal, chunking, elaboration, visualization, mnemonics)"
      ],
    },
  
    {
      typeOfTest: "B&C SSP2",
      testName: "Verbal Attention",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "VRBATN.W5PA",
      lookUpModel: "Singletable",
      SSP: "Ages 9 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "6y4m",
      GE: "GK.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Errors suggested good recall of stimuli but incorrect ordering",
        "Used “self-talk” strategy",
        "Errors suggested poor recall of stimuli but correct ordering",
        "None of the above",
        "Used memory strategies (rehearsal, chunking, elaboration, visualization, mnemonics)"
      ],
    },
  ];
  