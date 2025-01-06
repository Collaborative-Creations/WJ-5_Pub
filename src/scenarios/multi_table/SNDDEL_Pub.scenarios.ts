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
    typeOfTest: "Ages 4 to 5 - All Correct scenario",
    testName: "Sound Deletion",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 32,
    Wscore: 523.9,
    semW: 14.71,
    WlkpAdminItems: "ABC",
    ScoreString: "^04,12,16",
    testStemForm: "SNDDEL.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 32,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Age 6 - 6 Correct & 6 Incorrect Scenario",
    testName: "Sound Deletion",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 6,
    Wscore: 466.04,
    semW: 5.88,
    WlkpAdminItems: "B",
    ScoreString: "^xx,06,xx",
    testStemForm: "SNDDEL.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Age 6",
    totalItems: 6,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },

  {
    typeOfTest: "Ages 4 to 5 - Block A Correct & Block B Incorrect Scenario",
    testName: "Sound Deletion",
    SumOfItemScores: 0,
    BasalCredit: 0,
    WlookUp: 4,
    Wscore: 446.81,
    semW: 6.01,
    WlkpAdminItems: "AB",
    ScoreString: "^04,00,xx",
    testStemForm: "SNDDEL.W5PA",
    lookUpModel: "MultiTable",
    blockName: "Form A",
    examineeAge: 4,
    SSP: "Ages 4 to 5",
    totalItems: 16,
    scoreFlag: "",
    location: "PVP",
    examineeGrade: "Grade 4",
  },
];
