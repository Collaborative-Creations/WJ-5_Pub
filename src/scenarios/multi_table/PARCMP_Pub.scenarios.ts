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
      typeOfTest: "Ages 4 to 6 - All Correct ABC Block",
      testName: "Paragraph Reading Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 27,
      Wscore: 516.49,
      semW: 14.75,
      WlkpAdminItems: "ABC",
      ScoreString: "^06,11,10,xx,xx",
      testStemForm: "PARCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 4 to 6",
      totalItems: 27,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Age 7 - All Correct BCD Block",
      testName: "Paragraph Reading Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 31,
      Wscore: 531.26,
      semW: 14.66,
      WlkpAdminItems: "BCD",
      ScoreString: "^xx,11,10,10,xx",
      testStemForm: "PARCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Age 7",
      totalItems: 31,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "Age 8 - All Correct CDE Block",
      testName: "Paragraph Reading Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 31,
      Wscore: 555.17,
      semW: 15.27,
      WlkpAdminItems: "CDE",
      ScoreString: "^xx,xx,10,10,11",
      testStemForm: "PARCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Age 8",
      totalItems: 31,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    {
      typeOfTest: "Ages 9 to Above Average Adult - All Correct DE Block",
      testName: "Paragraph Reading Comprehension",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 21,
      Wscore: 555.04,
      semW: 15.29,
      WlkpAdminItems: "DE",
      ScoreString: "^xx,xx,xx,10,11",
      testStemForm: "PARCMP.W5PA",
      lookUpModel: "MultiTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "Ages 9 to Above Average Adult",
      totalItems: 21,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    
  
    
    
  ];