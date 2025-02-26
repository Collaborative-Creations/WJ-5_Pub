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
    typeOfTest: "Left Nav for Block A",
    testName: "Sentence Writing Accuracy",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 7",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Left Nav for Block B",
    testName: "Sentence Writing Accuracy",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 8 to 13",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Left Nav for Block C",
    testName: "Sentence Writing Accuracy",
    testStemForm: "SWRTAC.W5PA",
    lookUpModel: "basal and ceiling",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

];
