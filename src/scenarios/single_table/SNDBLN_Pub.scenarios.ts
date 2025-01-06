interface TestData {
    typeOfTest: string;
    testName: string;
    SumOfItemScores: number;
    BasalCredit: number;
    WlookUp: number;
    Wscore: number;
    semW: number;
    WlkpAdminItems: string;
    ScoreString: string;
    testStemForm: string;
    lookUpModel: string;
    blockName: string;
    examineeAge: number;
    SSP: string;
    totalItems: number;
    scoreFlag: string;
    BbyC?: number;
    negation?: boolean;
    location?: string;
    examineeGrade: string;
  }
  

export const testData: TestData[] = [
    /* ----------------------ALL CORRECT-------------------------- */
    {
        typeOfTest: "Ages 4 to 6 - All correct scenario",
        testName: "Sound Blending",
        SumOfItemScores: 30,
        BasalCredit: 0,
        WlookUp: 30,
        Wscore: 560.72,
        semW: 15.99,
        WlkpAdminItems: "",
        ScoreString: "^111111111111111111111111111111",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 30,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 7 to 11 - All correct scenario",
        testName: "Sound Blending",
        SumOfItemScores: 27,
        BasalCredit: 3,
        WlookUp: 30,
        Wscore: 560.72,
        semW: 15.99,
        WlkpAdminItems: "",
        ScoreString: "^xxx111111111111111111111111111",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 7 to 11",
        totalItems: 30,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 12 to Adult - All correct scenario",
        testName: "Sound Blending",
         SumOfItemScores: 23,
        BasalCredit: 7,
        WlookUp: 30,
        Wscore: 560.72,
        semW: 15.99,
        WlkpAdminItems: "",
        ScoreString: "^xxxxxxx11111111111111111111111",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 12 to Adult",
        totalItems: 30,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    /* ----------------------ALL INCORRECT-------------------------- */
    {
        typeOfTest: "Ages 4 to 6 - All incorrect scenario",
        testName: "Sound Blending",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 414.62,
        semW: 14.99,
        WlkpAdminItems: "",
        ScoreString: "^00000xxxxxxxxxxxxxxxxxxxxxxxxx",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 30,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 7 to 11 - All incorrect scenario",
        testName: "Sound Blending",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 414.62,
        semW: 14.99,
        WlkpAdminItems: "",
        ScoreString: "^00000xxxxxxxxxxxxxxxxxxxxxxxxx",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 7 to 11",
        totalItems: 30,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 12 to Adult - All incorrect scenario",
        testName: "Sound Blending",
         SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 414.62,
        semW: 14.99,
        WlkpAdminItems: "",
        ScoreString: "^00000xx0xxxxxxxxxxxxxxxxxxxxxx",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 12 to Adult",
        totalItems: 30,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
     /* ----------------------Answer Sample and Practice items [!C] scenario-------------------------- */
    {
        typeOfTest: "Ages 4 to 6  - Answer only one sample item",
        testName: "Sound Blending",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 0,
        semW: 0,
        WlkpAdminItems: "",
        ScoreString: "",
        testStemForm: "SNDBLN.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 0,
        scoreFlag: "[!C]",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
];
