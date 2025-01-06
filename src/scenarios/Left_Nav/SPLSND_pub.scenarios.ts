interface TestData {
    typeOfTest: string;
    testName: string;
    testStemForm: string;
    lookUpModel: string;
    blockName: string;
    examineeAge: number;
    SSP: string;
    BbyC?: number;
    negation?: boolean;
    location?: string;
    examineeGrade: string;
    }
    
    export const testData: TestData[] = [
      // --------------   ---------------------------------------
    
    {
        typeOfTest: "left Nav for All items for SSP1",
        testName: "Spelling of Sounds",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "basal and ceiling",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 4 to 6",
        location: "PVP",
        examineeGrade: "Grade 4",
     },
     {
        typeOfTest: "left Nav when items are flagged,expanded & collapsed for SSP2",
        testName: "Spelling of Sounds",
        testStemForm: "SPLSND.W5PA",
        lookUpModel: "basal and ceiling",
        blockName: "Form A",
        examineeAge: 4,
        SSP: "Ages 7 to Adult",
        location: "PVP",
        examineeGrade: "Grade 4",
      },
 ];
    