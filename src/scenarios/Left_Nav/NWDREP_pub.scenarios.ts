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
    typeOfTest: "All correct scenario for NWDREP SSP1 ",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "bbyc for NWDREP SSP2",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to 11",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Flagged,expanded and collapsed for NWDREP SSP3",
    testName: "Nonsense Word Repetition",
    testStemForm: "NWDREP.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
