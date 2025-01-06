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
    typeOfTest: "All correct scenario for STYCMP SSP1",
    testName: "Story Comprehension",
    testStemForm: "STYCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for STYCMP SSP2",
    testName: "Story Comprehension",
    testStemForm: "STYCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 10",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for STYCMP SSP3",
    testName: "Story Comprehension",
    testStemForm: "STYCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 11 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for STYCMP SSP4",
    testName: "Story Comprehension",
    testStemForm: "STYCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 14 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for STYCMP SSP4",
    testName: "Story Comprehension",
    testStemForm: "STYCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 14 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
