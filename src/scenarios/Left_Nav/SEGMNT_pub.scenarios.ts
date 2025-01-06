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
    typeOfTest: "All correct For SSP1",
    testName: "Segmentation",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "SSP Item check For SSP2",
    testName: "Segmentation",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "left Nav When Items are Flagged,Expanded and collapsed For SSP3",
    testName: "Segmentation",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
