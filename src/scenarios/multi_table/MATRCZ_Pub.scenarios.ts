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
    typeOfTest: "Ages 4 to 11 - Block A and Block D All correct scenario",
    testName: "Matrices",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 16,
    Wscore: 546.03,
    semW: 15,
    WlkpAdminItems: "AD",
    ScoreString: "^8,x,x,8",
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 16,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "Ages 4 to 11 - Block A- All incorrect scenario|test ends in Block A",
    testName: "Matrices",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 441.8,
    semW: 15.55,
    WlkpAdminItems: "A",
    ScoreString: "^0,x,x,x",
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 32,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "Ages 4 to 11 - Block A- 2 Incorrect & Block C- 8 Correct scenario",
    testName: "Matrices",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 14,
    Wscore: 511.37,
    semW: 7.6,
    WlkpAdminItems: "AC",
    ScoreString: "^6,x,8,x",
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 11",
    totalItems: 32,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest: "Age 12 to Adult - Block B and Block D All correct scenario",
    testName: "Matrices",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 16,
    Wscore: 548.38,
    semW: 14.8,
    WlkpAdminItems: "BD",
    ScoreString: "^x,8,x,8",
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Adult",
    totalItems: 16,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
  {
    typeOfTest:
      "Age 12 to Adult - Block B- 4 Incorrect & Block C- 8 correct scenario",
    testName: "Matrices",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 12,
    Wscore: 512.53,
    semW: 5.81,
    WlkpAdminItems: "BC",
    ScoreString: "^x,4,8,x",
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Adult",
    totalItems: 16,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest:
      "Age 12 to Adult - Block B- All incorrect scenario and Block A- All incorrect scenario",
      
    testName: "Matrices",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 0,
    Wscore: 441.38,
    semW: 15.46,
    WlkpAdminItems: "AB",
    ScoreString: "^0,0,x,x",
    testStemForm: "MATRCZ.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 12 to Adult",
    totalItems: 16,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
