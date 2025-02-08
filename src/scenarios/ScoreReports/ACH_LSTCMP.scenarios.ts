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
        clusterName: ["Listening Comprehension (Gc)"],
        homeBattery:["ACH"],
        testName: ["Oral Comprehension","Story Comprehension"],
        normBasis: ["Grade"],
        education: "In Grade 1",
        examineeAge: 12.0,
        defaultSSP: "Grade 1",
        SSP: ["Grade 1","Preschool to Grade 2"],
        reportType: "Word Score Report",
        scoreType: "max",
        testSetName: "Listening Comprehension (Gc)",
        examineeName: "Max, Lstcmp",
        baseLineName:"ACH_Lstcmp_Max_Word",
        reportName:"ACH_Lstcmp_Max",
        baseLine:"No",
        format:"List Tests Under Clusters",
    },

    {
        clusterName: ["Listening Comprehension (Gc)"],
        homeBattery:["ACH"],
        testName: ["Oral Comprehension","Story Comprehension"],
        normBasis: ["Age"],
        education: "In Grade 12",
        examineeAge: 14,
        defaultSSP: "Age 14",
        SSP: ["Age 12 to Average Adult","Age 14 to Adult"],
        reportType: "Html Score Report",
        scoreType: "Random",
        testSetName: "Listening Comprehension (Gc)",
        examineeName: "Random, Lstcmp",
        baseLineName:"ACH_Lstcmp_Random_Html",
        reportName:"ACH_Lstcmp_Random",
        baseLine:"No",
        format:"List Tests and Clusters Separately",
    },
];

