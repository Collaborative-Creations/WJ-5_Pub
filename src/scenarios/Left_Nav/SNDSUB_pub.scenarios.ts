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
      typeOfTest: "All correct scenario for SNDSUB SSP1",
      testName: "Sound Substitution",
      testStemForm: "SNDSUB.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 7",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest:
        "Flagged,expanded and collapsed for SNDSUB SSP2",
      testName: "Sound Substitution",
      testStemForm: "SNDSUB.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 8 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  ];
  