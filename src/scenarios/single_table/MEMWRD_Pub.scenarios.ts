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
        typeOfTest: "Ages 4 to 7 - All correct scenario",
        testName: "Memory for Words",
        SumOfItemScores: 25,
        BasalCredit: 0,
        WlookUp: 25,
        Wscore: 581.54,
        semW: 15.43,
        WlkpAdminItems: "",
        ScoreString: "^1111111111111111111111111",
        testStemForm: "MEMWRD.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 7",
        totalItems: 25,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 8 to Adult - All correct scenario",
        testName: "Memory for Words",
        SumOfItemScores: 20,
        BasalCredit: 5,
        WlookUp: 25,
        Wscore: 581.54,
        semW: 15.43,
        WlkpAdminItems: "",
        ScoreString: "^xxxxx11111111111111111111",
        testStemForm: "MEMWRD.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 8 to Adult",
        totalItems: 20,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    /* ----------------------ALL INCORRECT-------------------------- */
    {
        typeOfTest: "Ages 4 to 7 - All incorrect scenario",
        testName: "Memory for Words",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 413.63,
        semW: 15.43,
        WlkpAdminItems: "",
        ScoreString: "^0000xxxxxxxxxxxxxxxxxxxxx",
        testStemForm: "MEMWRD.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 7",
        totalItems: 25,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 8 to Adult - All incorrect scenario",
        testName: "Memory for Words",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 413.63,
        semW: 15.43,
        WlkpAdminItems: "",
        ScoreString: "^0000x0xxxxxxxxxxxxxxxxxxx",
        testStemForm: "MEMWRD.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 8 to Adult",
        totalItems: 20,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
     /* ----------------------Answer Sample and Practice items [!C] scenario-------------------------- */
    {
        typeOfTest: "Ages 4 to 7 - Answer only one sample item",
        testName: "Memory for Words",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 0,
        semW: 0,
        WlkpAdminItems: "",
        ScoreString: "",
        testStemForm: "MEMWRD.W5PA",
        lookUpModel: "SingleTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 7",
        totalItems: 0,
        scoreFlag: "[!C]",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
];