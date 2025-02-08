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
      testName: "Rapid Picture Naming",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 72,
      Wscore: 673.02,
      semW: 15.98,
      WlkpAdminItems: "",
      ScoreString: "^9,9,9,9,9,9,9,9",
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "All Examinees",
      totalItems: 120,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    {
      typeOfTest: "All Examinees - Test Items 10 Incorrect scenario",
      testName: "Rapid Picture Naming",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 25,
      Wscore: 517.54,
      semW: 4.45,
      WlkpAdminItems: "",
      ScoreString: "^3,3,3,3,3,3,3,4",
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "All Examinees",
      totalItems: 120,
      scoreFlag: "",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  
    /* ----------------------Answer Sample and Practice items [!C] scenario-------------------------- */
    {
      typeOfTest: "All Examinees - Answer only sample item",
      testName: "Rapid Picture Naming",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 0,
      Wscore: 0,
      semW: 0,
      WlkpAdminItems: "",
      ScoreString: "",
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "All Examinees",
      totalItems: 0,
      scoreFlag: "[!C]",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
    /* ----------------------Answer Sample and Practice items [!A] scenario-------------------------- */
    {
      typeOfTest: "All Examinees - Discontinue scenario",
      testName: "Rapid Picture Naming",
      SumOfItemScores: 0,
      BasalCredit: 0,
      WlookUp: 0,
      Wscore: 473.67,
      semW: 10.15,
      WlkpAdminItems: "",
      ScoreString: "",
      testStemForm: "RPDPIC.W5PA",
      lookUpModel: "DecileTable",
      blockName: "Form A",
      examineeAge: 4,
      SSP: "All Examinees",
      totalItems: 0,
      scoreFlag: "[!A]",
      location: "PVP",
      examineeGrade: "Grade 4",
    },
  ];