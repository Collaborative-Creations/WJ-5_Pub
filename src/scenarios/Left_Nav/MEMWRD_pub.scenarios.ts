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
      typeOfTest: "All correct scenario for MEMWRD SSP1",
      testName: "Memory for Words",
      testStemForm: "MEMWRD.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 7",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "Basal & Ceiling Scenario for MEMWRD SSP2",
      testName: "Memory for Words",
      testStemForm: "MEMWRD.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 8 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "left Nav When Items are Flagged,Expanded and collapsed For SSP2",
      testName: "Memory for Words",
      testStemForm: "MEMWRD.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 8 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
     
];