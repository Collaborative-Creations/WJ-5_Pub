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
        clusterName: ["Oral Expression (Gc; Gl)"],
        homeBattery:["ACH"],
        testName: ["Picture Vocabulary","Oral Language Samples"],
        normBasis: ["Grade"],
        education: "In Grade 1",
        examineeAge: 7.0,
        defaultSSP: "Grade 1",
        SSP: ["Kindergarten to Grade 1","Grades 1 to 2"],
        reportType: "Word Score Report",
        scoreType: "max",
        testSetName: "Oral Expression (Gc; Gl)",
        examineeName: "Max, Orlexp",
        baseLineName:"ACH_Orlexp_Max_Word",
        reportName:"ACH_Orlexp_Max",
        baseLine:"No",
        format:"List Tests Under Clusters",
    },
    {
        clusterName: ["Oral Expression (Gc; Gl)"],
        homeBattery:["ACH"],
        testName: ["Picture Vocabulary","Oral Language Samples"],
        normBasis: ["Age"],
        education: "Some College to Advanced Degree",
        examineeAge: 9.0,
        defaultSSP: "Above Average Adult (18 or older)",
        SSP: ["Above Average Adult","Above 8 to Adult"],
        reportType: "Html Score Report",
        scoreType: "Random",
        testSetName: "Oral Expression (Gc; Gl)",
        examineeName: "Random, Orlexp",
        baseLineName:"ACH_Orlexp_Random_Html",
        reportName:"ACH_Orlexp_Random",
        baseLine:"No",
        format:"List Tests and Clusters Separately",
    },

];

