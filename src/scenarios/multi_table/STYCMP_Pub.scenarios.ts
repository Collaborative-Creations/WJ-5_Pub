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
      typeOfTest: "Ages 4 to 7 - Block A end test scenario",
      testName: "Story Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 19,
      Wscore: 517.91,
      semW: 14.91,
      WlkpAdminItems: "AB",
      ScoreString: "^10,09,xx,xx,xx",
      testStemForm: "STYCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 7",
      totalItems: 19,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Ages 8 to 10 - Block B end test scenario",
      testName: "Story Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 22,
      Wscore: 530.57,
      semW: 14.65,
      WlkpAdminItems: "BC",
      ScoreString: "^xx,09,13,xx,xx",
      testStemForm: "STYCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 8 to 10",
      totalItems: 22,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "Ages 11 to 13 - Block C end test scenario",
      testName: "Story Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 26,
      Wscore: 542.55,
      semW: 14.71,
      WlkpAdminItems: "CD",
      ScoreString: "^xx,xx,13,13,xx",
      testStemForm: "STYCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 11 to 13",
      totalItems: 26,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Ages 14 to Adult - Block D end test scenario",
      testName: "Story Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 23,
      Wscore: 551.07,
      semW: 14.67,
      WlkpAdminItems: "DE",
      ScoreString: "^xx,xx,xx,13,10",
      testStemForm: "STYCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Age 14 to Adult",
      totalItems: 23,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "Ages 4 to 7 - Sample A Correct and Force Submit Scenario",
      testName: "Story Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 0,
      Wscore: 0,
      semW: 0,
      WlkpAdminItems: "",
      ScoreString: "",
      testStemForm: "STYCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 7",
      totalItems: 0,
      scoreFlag: "[!C]",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    
    
  ];