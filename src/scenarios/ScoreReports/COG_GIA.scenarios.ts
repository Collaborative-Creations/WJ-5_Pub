interface TestData {
    clusterName: string[];
    homeBattery: string[];
    testName: string[];
    normBasis: string;
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
    templateName: string,
    confLevel: string,
    signifLevel: string,
    sessionLevelNotes:string;
    sessionLevelObservations:string;
    testLevelNotes:string;
    testLevelRsbe: string;
}

export const testData: TestData[] = [

   {
        clusterName: ["General Intellectual Ability (GIA)"],
        homeBattery:["COG"],
        testName: ["Oral Vocabulary–Synonyms","Oral Vocabulary–Antonyms","Matrices","Spatial Relations","Story Recall","Semantic Word Retrieval","Verbal Attention","Number-Pattern Matching","Verbal Analogies"],
        normBasis: "Grade",
        education: "In Grade 3",
        examineeAge: 14.0,
        defaultSSP: "Grade 3",  
        SSP: ["Preschool to Grade 6","Preschool to Grade 3","Preschool to Grade 6","Preschool to Grade 5","Grades 2 to 5","All Examinees","Preschool to Grade 3","All Examinees","Grades 3 to 6"],
        reportType: "Word Score Report",
        scoreType: "max",
        testSetName: "General Intellectual Ability(GIA)",
        examineeName: "Max, Gia",
        baseLineName:"COG_Gia_Max_Word",
        reportName:"COG_Gia_Max",
        baseLine:"No",
        format:"List Tests Under Clusters",
        templateName:"Score Template 3",
        confLevel:"95%",
        signifLevel:"1.55",
        sessionLevelNotes:"No",
        sessionLevelObservations:"No",
        testLevelNotes:"No",
        testLevelRsbe:"No",
    },

    {
        clusterName: ["General Intellectual Ability (GIA)"],
        homeBattery:["COG"],
        testName: ["Oral Vocabulary–Synonyms","Oral Vocabulary–Antonyms","Matrices","Spatial Relations","Story Recall","Semantic Word Retrieval","Verbal Attention","Number-Pattern Matching","Verbal Analogies"],
        normBasis: "Age",
        education: "In Grade 12",
        examineeAge: 14.0,
        defaultSSP: "Age 14",  
        SSP: ["Ages 12 to Average Adult","Age 14 to Average Adult","Age 12 to Adult","Ages 11 to Adult","Age 14 to Above Average Adult","All Examinees","Ages 9 to Adult","All Examinees","Age 12 to Average Adult"],
        reportType: "Html Score Report",
        scoreType: "Random",
        testSetName: "General Intellectual Ability(GIA)",
        examineeName: "Random, Gia",
        baseLineName:"COG_Gia_Random_Html",
        reportName:"COG_Gia_Random",
        baseLine:"No",
        format:"List Tests and Clusters Separately",
        templateName:"Score Template 4",
        confLevel:"68%",
        signifLevel:"1.65",
        sessionLevelNotes:"Yes",
        sessionLevelObservations:"No",
        testLevelNotes:"Yes",
        testLevelRsbe:"No",
    },
];



