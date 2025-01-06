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
    typeOfTest: "All correct scenario for PARCMP SSP1",
    testName: "Paragraph Reading Comprehension",
    testStemForm: "PARCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for PARCMP SSP2",
    testName: "Paragraph Reading Comprehension",
    testStemForm: "PARCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for PARCMP SSP3",
    testName: "Paragraph Reading Comprehension",
    testStemForm: "PARCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 8",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All correct scenario for PARCMP SSP4",
    testName: "Paragraph Reading Comprehension",
    testStemForm: "PARCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for PARCMP SSP4",
    testName: "Paragraph Reading Comprehension",
    testStemForm: "PARCMP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 9 to Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
