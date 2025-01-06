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
      typeOfTest: "All correct scenario for SNDDEL SSP1",
      testName: "Sound Deletion",
      testStemForm: "SNDDEL.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 5",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "SSP item check for SNDDEL SSP2",
      testName: "Sound Deletion",
      testStemForm: "SNDDEL.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Age 6",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "Flagged,expanded and collapsed for SNDDEL SSP3",
      testName: "Sound Deletion",
      testStemForm: "SNDDEL.W5PA",
      lookUpModel: "basal and ceiling",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 7 to Adult",
      location: "PVP",
      examineeGrade: "Grade 4",
    }
    
  ];