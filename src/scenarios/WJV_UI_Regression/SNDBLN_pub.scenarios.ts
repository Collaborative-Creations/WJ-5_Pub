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
        typeOfTest: "Ages 4 to 6 - Basal and ceiling with 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
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
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 4 to 6 -  5 correct and 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
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
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 4 to 6 - All correct scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 4 to 6",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">25y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 4 to 6 - Review flow Scenario for SSP1",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
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
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    /*---------------------------------------------Ages 7 to 11 Scenarios---------------------------------------------------*/
    {
        typeOfTest: "Ages 7 to 11 - Basal and ceiling with 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
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
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 7 to 11 -  5 correct and 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 7 to 11",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "5y3m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 7 to 11 - Reverse logic with 5 correct and 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 7 to 11",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "5y3m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 7 to 11 - All correct scenario ",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 7 to 11",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">25y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 7 to 11 - Review flow Scenario for SSP2",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
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
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    /*---------------------------------------------Ages 12 to Adult Scenarios---------------------------------------------------*/
    {
        typeOfTest: "Ages 12 to Adult - Basal and ceiling with 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "<4y0m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 12 to Adult -  5 correct and 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "7y2m",
        GE: "G1.8",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 12 to Adult-  Reverse logic with 5 correct and 5 incorrect scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "7y2m",
        GE: "G1.8",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 12 to Adult - All correct scenario",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: ">25y",
        GE: ">G12.9",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
    {
        typeOfTest: "Ages 12 to Adult - Review flow Scenario for SSP3",
        testName: "Sound Blending",
        blockName: "Form A",
        examineeAge: 4,
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        SSP: "Ages 12 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
        AE: "<4y0m",
        GE: "<GK.0",
        ScoreCheckStatus: "Test Complete",
        FlagStatus: "0 items",
        OutcomeText: "Examinee completed all required test items.",
        responseStyleBehaviours: [
            "Displayed good phonological awareness skills",
            "Displayed good attention",
            "Displayed poor phonological awareness skills",
            "Had difficulty sustaining attention",
            "Completed items that involved blending phonemes",
            "None of the above",
            "Had difficulty completing items that involved blending phonemes",
        ],
    },
]