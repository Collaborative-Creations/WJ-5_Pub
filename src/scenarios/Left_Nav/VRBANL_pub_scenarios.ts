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
    typeOfTest: "All correct scenario for VRBANL SSP1 ",
    testName: "Verbal Analogies",
    testStemForm: "VRBANL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "bbyc for VRBANL SSP2",
    testName: "Verbal Analogies",
    testStemForm: "VRBANL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for VRBANL SSP3",
    testName: "Verbal Analogies",
    testStemForm: "VRBANL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "SSP item check for VRBANL SSP4",
    testName: "Verbal Analogies",
    testStemForm: "VRBANL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for VRBANL SSP5",
    testName: "Verbal Analogies",
    testStemForm: "VRBANL.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Above Average Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
