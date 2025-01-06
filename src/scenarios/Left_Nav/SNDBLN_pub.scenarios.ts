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
      typeOfTest: "basal and ceiling For SSP1",
      testName: "Sound Blending",
      testStemForm: "SNDBLN.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 6",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "left Nav when items are flagged for SSP2",
      testName: "Sound Blending",
      testStemForm: "SNDBLN.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 7 to 11",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "left Nav When Items are Flagged,Expanded and collapsed For SSP3",
      testName: "Sound Blending",
      testStemForm: "SNDBLN.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 12 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
];