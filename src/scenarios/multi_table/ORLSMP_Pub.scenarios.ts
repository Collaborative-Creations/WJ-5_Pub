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
      typeOfTest: "Ages 4 to 5 - Block A All Correct",
      testName: "Oral Language Samples",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 33,
      Wscore: 535.33,
      semW: 13.94,
      WlkpAdminItems: "ABC",
      ScoreString: "^04,05,24",
      testStemForm: "ORLSMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 5",
      totalItems: 21,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Ages 6 to 7 - Block B All Correct",
      testName: "Oral Language Samples",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 29,
      Wscore: 535.33,
      semW: 13.94,
      WlkpAdminItems: "BC",
      ScoreString: "^xx,05,24",
      testStemForm: "ORLSMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 6 to 7",
      totalItems: 29,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "Age 8 to Adult - Block C All Correct",
      testName: "Oral Language Samples",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 24,
      Wscore: 535.28,
      semW: 13.93,
      WlkpAdminItems: "C",
      ScoreString: "^xx,xx,24",
      testStemForm: "ORLSMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Age 8 to Adult",
      totalItems: 26,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Ages 4 to 5 - Sample A Correct and Force Submit Scenario",
      testName: "Oral Language Samples",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 0,
      Wscore: 0,
      semW: 0,
      WlkpAdminItems: "",
      ScoreString: "",
      testStemForm: "ORLSMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 5",
      totalItems: 0,
      scoreFlag: "[!C]",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    
    
  ];