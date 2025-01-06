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
    typeOfTest: "All Examinees - All correct scenario",
    testName: "Sentence Writing Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 40,
    Wscore: 725.4,
    semW: 14.9,
    WlkpAdminItems: "",
    ScoreString: "^40",
    testStemForm: "SWRTFL.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 5,
    scoreFlag: "",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - All incorrect scenario",
    testName: "Sentence Writing Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 438.82,
    semW: 15.08,
    WlkpAdminItems: "",
    ScoreString: "^00",
    testStemForm: "SWRTFL.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 5,
    scoreFlag: "",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Sample and Practice items [!A] scenario-------------------------- */
  {
    typeOfTest: "All Examinees - Discontinue scenario",
    testName: "Sentence Writing Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 438.82,
    semW: 15.08,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SWRTFL.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 5,
    scoreFlag: "[!A]",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },

  /* ----------------------Answer Sample items [!C] scenario-------------------------- */
  {
    typeOfTest: "All Examinees - Answer only one sample item",
    testName: "Sentence Writing Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SWRTFL.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 5,
    scoreFlag: "[!C]",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - Answer two sample items",
    testName: "Sentence Writing Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SWRTFL.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 5,
    scoreFlag: "[!C]",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "All Examinees - Answer three sample items",
    testName: "Sentence Writing Fluency",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 0,
    semW: 0,
    WlkpAdminItems: "",
    ScoreString: "",
    testStemForm: "SWRTFL.W5PA",
    lookUpModel: "SingleTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "All Examinees",
    totalItems: 5,
    scoreFlag: "[!C]",
    location: "researcher1",
    examineeGrade: "Grade 4",
  },
];
