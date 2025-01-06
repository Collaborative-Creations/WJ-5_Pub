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
      typeOfTest: "All Examinees - Sample Items End Test Flow scenario",
      testName: "Rapid Phoneme Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPHO.W5PA",
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
        "Made errors on some phonemes",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
    {
      typeOfTest: "All Examinees - Test Items All correct scenario",
      testName: "Rapid Phoneme Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPHO.W5PA",
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
        "Made errors on some phonemes",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
    {
      typeOfTest: "All Examinees - Test Items 5 correct and 5 incorrect scenario",
      testName: "Rapid Phoneme Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPHO.W5PA",
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
        "Made errors on some phonemes",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
  
    {
      typeOfTest: "All Examinees - Test Items All incorrect scenario",
      testName: "Rapid Phoneme Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPHO.W5PA",
      lookUpModel: "DecileTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "This test has ended because the examinee has completed all the item sets.",
      responseStyleBehaviours: [
        "Made errors on some phonemes",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
    {
      typeOfTest: "All Examinees - When Timer Ran Out for First Item set",
      testName: "Rapid Phoneme Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPHO.W5PA",
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
        "Made errors on some phonemes",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
    {
      typeOfTest: "All Examinees - When Timer Ran Out for Last Item set",
      testName: "Rapid Phoneme Naming",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "RPDPHO.W5PA",
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
        "Made errors on some phonemes",
        "Displayed balance between speed and accuracy",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
        "Had difficulty sustaining concentration and effort throughout this test",
      ],
    },
  ];