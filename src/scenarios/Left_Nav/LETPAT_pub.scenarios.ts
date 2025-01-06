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
      typeOfTest: "All correct scenario for LETPAT",
      testName: "Letter-Pattern Matching",
      testStemForm: "LETPAT.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "All Examinees",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
   
  ];
  