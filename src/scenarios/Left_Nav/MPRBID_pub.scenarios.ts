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
    typeOfTest: "All correct scenario for MPRBID SSP1 ",
    testName: "Math Problem Identification",
    testStemForm: "MPRBID.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "bbyc for MPRBID SSP2",
    testName: "Math Problem Identification",
    testStemForm: "MPRBID.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for MPRBID SSP3",
    testName: "Math Problem Identification",
    testStemForm: "MPRBID.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for MPRBID SSP4",
    testName: "Math Problem Identification",
    testStemForm: "MPRBID.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 11 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for MPRBID SSP5",
    testName: "Math Problem Identification",
    testStemForm: "MPRBID.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for MPRBID SSP6",
    testName: "Math Problem Identification",
    testStemForm: "MPRBID.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
