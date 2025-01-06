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

  
    {
      typeOfTest: "All correct scenario for SSP1",
      testName: "Academic Vocabulary",
      testStemForm: "ACDVOC.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 7",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Basal and Ceiling For SSP2",
      testName: "Academic Vocabulary",
      testStemForm: "ACDVOC.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 8 to 9",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "SSP Item check For SSP3",
      testName: "Academic Vocabulary",
      testStemForm: "ACDVOC.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 10 to 11",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest:  "SSP Item check For SSP4",
      testName: "Academic Vocabulary",
      testStemForm: "ACDVOC.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 12 to Average Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    },

    {
      typeOfTest:
        "left Nav When Items are Flagged,Expanded and collapsed For SSP5",
      testName: "Academic Vocabulary",
      testStemForm: "ACDVOC.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Above Average Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  ];
  