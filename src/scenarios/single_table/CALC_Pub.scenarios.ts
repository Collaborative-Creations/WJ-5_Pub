interface TestData {
  typeOfTest: string;
  testName: string;
  testStemForm: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  totalItems: number;
  scoreFlag: string;
  location?: string;
  BbyC?: number;
  negation?: boolean;
  examineeGrade: string;
}
/* ----------------------All CORRECT Scenarios-------------------------- */
export const testData: TestData[] = [
  {
    typeOfTest: "Ages 4 to 6 - All correct scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 55,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 5",
  },

  /* ----------------------All INCORRECT Scenarios-------------------------- */
  {
    typeOfTest: "Ages 4 to 6 - All incorrect scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 55,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 5",
  },

  /* ---------------------- Answer Sample correct/Incorrect [!C] & [!A] scenarios-------------------------- */
  {
    typeOfTest: "Ages 4 to 6 - Answer only SampleItems correct scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 55,
    scoreFlag: "[!C]",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 4 to 6 - Answer only SampleItems incorrect scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 0,
    scoreFlag: "[!A]",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },

  /* ---------------------- 5 correct & 5 incorrect scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 6 - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 6",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 7 - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 7",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 8 - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 8",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Age 9 - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 9",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 10 to 11 - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 10 to 11",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest: "Ages 12 to 13 - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 12 to 13",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
  {
    typeOfTest:
      "Ages 14 to Adult - Attain Quick Basal Ceiling scenario",
    testName: "Calculation",
    testStemForm: "CALC.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 14 to Adult",
    totalItems: 10,
    scoreFlag: "",
    BbyC: 5,
    location: "PVP",
    examineeGrade: "Grade 5",
  },
];
