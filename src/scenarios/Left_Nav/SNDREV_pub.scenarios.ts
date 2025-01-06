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
    typeOfTest: "All correct For SSP1",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Basal and Ceiling For SSP2",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "left Nav When Items are Flagged,Expanded and collapsed For SSP2",
    testName: "Sound Reversal",
    testStemForm: "SNDREV.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
