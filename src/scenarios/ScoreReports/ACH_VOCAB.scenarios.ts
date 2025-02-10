interface TestData {
    clusterName: string[];
    homeBattery: string[];
    testName: string[];
    normBasis: string[];
    education:string;
    examineeAge: number;
    defaultSSP: string;
    SSP: string[];
    reportType: string;
    scoreType: string;
    testSetName:string;
    examineeName:string;
    baseLineName:string;
    reportName:string;
    baseLine:string;
    format: string;
}

export const testData: TestData[] = [

    {
        clusterName: ["Vocabulary (Gc)"],
        homeBattery:["ACH"],
        testName: ["Academic Vocabulary","Picture Vocabulary"],
        normBasis: ["Grade"],
        education: "In Grade 1",
        examineeAge: 13.0,
        defaultSSP: "Preschool", // changed manually
        SSP: ["Preschool to Grade 2","Preschool"],
        reportType: "Word Score Report",
        scoreType: "max",
        testSetName: "Vocabulary(Gc)",
        examineeName: "Max, Vocab",
        baseLineName:"ACH_Vocab_Max_Word",
        reportName:"ACH_Vocab_Max",
        baseLine:"No",
        format:"List Tests Under Clusters",
    },

    {
        clusterName: ["Vocabulary (Gc)"],
        homeBattery:["ACH"],
        testName: ["Academic Vocabulary","Picture Vocabulary"],
        normBasis: ["Age"],
        education: "In Grade 12",
        examineeAge: 12,
        defaultSSP: "Above Average Adult (18 or older)", // changed manually
        SSP: ["Above Average Adult","Above Average Adult"],
        reportType: "Html Score Report",
        scoreType: "Random",
        testSetName: "Vocabulary(Gc)",
        examineeName: "Random, Vocab",
        baseLineName:"ACH_Vocab_Random_Html",
        reportName:"ACH_Vocab_Random",
        baseLine:"No",
        format:"List Tests and Clusters Separately",
    },
];

