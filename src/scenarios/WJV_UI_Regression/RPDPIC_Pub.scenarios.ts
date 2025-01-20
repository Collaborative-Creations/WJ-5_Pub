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
      typeOfTest: "All examinees - Sample Items End Test Flow scenario",
      testName: "Rapid Picture Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee did not meet continuation requirements.",
      responseStyleBehaviours: [
        "Made errors on some pictures",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
  
    {
      typeOfTest: "All examinees - Test Items All correct scenario",
      testName: "Rapid Picture Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: ">29y",
      GE: ">G12.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Made errors on some pictures",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
    
    {
        typeOfTest: "All examinees - Test Items 10 Incorrect scenario",
        testName: "Rapid Picture Naming",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "RPDPIC.W5PA",
        lookUpModel: "DecileTable",
        SSP: "All Examinees",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">29y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
        "Made errors on some pictures",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
        ],
      },

    {
      typeOfTest: "All examinees - Test Items When Timer Ran Out for First Item set",
      testName: "Rapid Picture Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 0",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Test timer ran out.",
      responseStyleBehaviours: [
        "Made errors on some pictures",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
    {
      typeOfTest: "All examinees - Test Items When Timer Ran Out for Last Item set",
      testName: "Rapid Picture Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 0",
      AE: ">29y",
      GE: ">G12.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Test timer ran out.",
      responseStyleBehaviours: [
        "Made errors on some pictures",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
  ];
  