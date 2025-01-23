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
    examineeGrade: string,
    AE: string;
    GE: string;
    ScoreCheckStatus: string;
    FlagStatus: string;
    OutcomeText: string;
    responseStyleBehaviours: string[];
}

export const testData: TestData[] = [
    /*---------------------------------------------Ages 4 to 6 Scenarios---------------------------------------------------*/
    {
        typeOfTest: "Ages 4 to 6 - Basal and ceiling with 6 incorrect scenario SSP1",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 4 to 6",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "<4y0m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
    {
        typeOfTest: "Ages 4 to 6 -  6 correct and 6 incorrect scenario",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 4 to 6",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "<4y0m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
    {
        typeOfTest: "Ages 4 to 6 - All correct scenario",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 4 to 6",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">21y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
     },
    /*---------------------------------------------Ages 7 to 11 Scenarios---------------------------------------------------*/
    {
        typeOfTest: "Ages 7 to 11 -  6 correct and 6 incorrect scenario SSP2",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 7 to 11",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "4y4m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
    {
        typeOfTest: "Ages 7 to 11 - Reverse logic with 6 incorrect scenario SSP2",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 7 to 11",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "<4y0m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
    {
        typeOfTest: "Ages 7 to 11 - All correct scenario ",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 7 to 11",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">21y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
      /*---------------------------------------------Age 12 to Adult Scenarios---------------------------------------------------*/
    {
        typeOfTest: "Age 12 to Adult -  6 correct and 6 incorrect scenario SSP2",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Age 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "6y4m",
        GE: "GK.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
    {
        typeOfTest: "Age 12 to Adult - Reverse logic with 6 incorrect scenario SSP3",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Age 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "<4y0m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
    {
        typeOfTest: "Age 12 to Adult - All correct scenario ",
        testName: "Nonsense Word Repetition",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "NWDREP.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Age 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">21y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good attention",
            "None of the above",
            "Used memory strategies (rehearsal, chunking, visualization)",
        ],
    },
     
]
