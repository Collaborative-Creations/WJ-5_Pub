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
    {
        typeOfTest: "Ages 4 to 6 - All correct scenario",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 28,
        Wscore: 547.91,
        semW: 14.75,
        WlkpAdminItems: "ABC",
        ScoreString: "^05,18,05",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 28,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 4 to 6 - Block A correct and Block B incorrect scenario",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 5,
        Wscore: 471.77,
        semW: 5.79,
        WlkpAdminItems: "AB",
        ScoreString: "^05,00,xx",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 9,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 4 to 6 - Block A All incorrect scenario",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 443.16,
        semW: 15.02,
        WlkpAdminItems: "A",
        ScoreString: "^00,xx,xx",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 9,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 7 to Adult - Block B All incorrect scenario",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 441.2,
        semW: 14.82,
        WlkpAdminItems: "AB",
        ScoreString: "^00,00,xx",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 7 to Adult",
        totalItems: 19,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
    {
        typeOfTest: "Ages 7 to Adult - Block B and Block C All correct scenario",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 23,
        Wscore: 547.9,
        semW: 14.75,
        WlkpAdminItems: "BC",
        ScoreString: "^xx,18,05",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 7 to Adult",
        totalItems: 19,
        scoreFlag: "",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
     /* ----------------------Answer Sample and Practice items [!A] scenario-------------------------- */
    {
        typeOfTest: "Ages 4 to 6 - Discontinue scenario",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 443.16,
        semW: 15.02,
        WlkpAdminItems: "A",
        ScoreString: "",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 0,
        scoreFlag: "[!A]",
        location: "PVP",
        examineeGrade: "Grade 4",
    },
     /* ----------------------Answer Sample items [!C] scenario-------------------------- */
    {
        typeOfTest: "Ages 4 to 6 - Answer only Sample Items",
        testName: "Spelling of Sounds",
        SumOfItemScores: 0,
        BasalCredit: 0,
        WlookUp: 0,
        Wscore: 0,
        semW: 0,
        WlkpAdminItems: "",
        ScoreString: "",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "MultiTable",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        totalItems: 5,
        scoreFlag: "[!C]",
        location: "researcher1",
        examineeGrade: "Grade 4",
  },

];
