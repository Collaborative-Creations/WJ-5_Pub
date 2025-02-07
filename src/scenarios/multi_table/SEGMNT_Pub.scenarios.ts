interface TestData {
  typeOfTest: string;
  testName: string;
  SumOfItemScores: number;
  BasalCredit: number;
  WlookUp: number;
  Wscore: number;
  semW: number;
  WlkpAdminItems: string;
  ScoreString: string;
  testStemForm: string;
  lookUpModel: string;
  blockName: string;
  examineeAge: number;
  SSP: string;
  totalItems: number;
  scoreFlag: string;
  BbyC?: number;
  negation?: boolean;
  location?: string;
  examineeGrade: string;
}

export const testData: TestData[] = [
  {
    typeOfTest: "Ages 4 to 5 - All correct scenario",
    testName: "Segmentation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 26,
    Wscore: 555.79,
    semW: 15.4,
    WlkpAdminItems: "ABC",
    ScoreString: "^05,08,13",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 26,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - Block B and Block C correct scenario",
    testName: "Segmentation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 21,
    Wscore: 555.79,
    semW: 15.4,
    WlkpAdminItems: "BC",
    ScoreString: "^xx,08,13",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    totalItems: 21,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 7 to Adult - All Incorrect scenario",
    testName: "Segmentation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 417.34,
    semW: 14.96,
    WlkpAdminItems: "ABC",
    ScoreString: "^00,00,00",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 7 to Adult",
    totalItems: 26,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  /* ----------------------Answer Sample items [!C] scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 5 - Answer only Sample Items",
    testName: "Segmentation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 0,
    scoreFlag: "[!C]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  /* ----------------------Answer Sample and Practice items [!A] scenario-------------------------- */
  {
    typeOfTest: "Ages 4 to 5 - Discontinue scenario",
    testName: "Segmentation",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 418.18,
    semW: 15.07,
    WlkpAdminItems: "A",
    ScoreString: "",
    testStemForm: "SEGMNT.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 0,
    scoreFlag: "[!A]",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
