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
    /*-----------------------------------Sample & Practice Exercise Scenarios-------------------------------*/
  
    {
      typeOfTest: "All Examinees - Sample Items End Test Flow scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee did not meet continuation requirements.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
    {
      typeOfTest: "All Examinees - Practice Exercise All correct scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "",
      GE: "",
      ScoreCheckStatus: "",
      FlagStatus: "",
      OutcomeText: "",
      responseStyleBehaviours: [],
    },
    {
      typeOfTest:
        "All Examinees - Practice Exercise 5 Correct 1 Incorrect scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "",
      GE: "",
      ScoreCheckStatus: "",
      FlagStatus: "",
      OutcomeText: "",
      responseStyleBehaviours: [],
    },
    {
      typeOfTest: "All Examinees - Practice Exercise All incorrect scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee did not meet continuation requirements.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
  
    /*---------------------------------------------Test Items' Scenarios-----------------------------------------------------*/
    {
      typeOfTest: "All Examinees - Test Items All correct scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: ">25y",
      GE: ">G12.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
  
    {
      typeOfTest:
        "All Examinees - Test Items 5 Correct 5 Incorrect Two Tap scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
      AE: "10y1m",
      GE: "G4.7",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
    {
      typeOfTest: "All Examinees - Test Items All incorrect scenario",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 0",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Examinee completed all required test items.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
    {
      typeOfTest:
        "All Examinees - Test Items When Timer Counts Down 180 Sec On First Test Item Page",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 0",
      AE: "<4y0m",
      GE: "<GK.0",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Test timer ran out.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
    {
      typeOfTest:
        "All Examinees - Test Items When Timer Counts Down 180 Sec On Last Test Item Page",
      testName: "Number-Pattern Matching",
      blockName: "Form A",
      examineeAge: 4,
      testStemForm: "NUMPAT.W5PA",
      lookUpModel: "SingleTable",
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 0",
      AE: ">25y",
      GE: ">G12.9",
      ScoreCheckStatus: "Test Complete",
      FlagStatus: "0 items",
      OutcomeText: "Test timer ran out.",
      responseStyleBehaviours: [
        "Used “self-talk“ strategy",
        "Displayed balance between speed and accuracy",
        "Used self-monitoring to maintain consistent and efficient pace",
        "Did not work quickly",
        "Displayed sustained concentration and effort throughout this test",
        "None of the above",
      ],
    },
  ];
  