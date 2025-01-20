interface TestData {
    typeOfTest: string;
    testNumber: number[];
    testName: string[];
    testStemForm: string[];
    taskStem: string[];
    normBasis: string;
    blockName: string;
    examineeAge: number;
    examineeGrade: string;
    SSP: string[];
    BbyC: number[];
    negation?: boolean;
    scoreFlag: string;
    lookUpModel: string;
  }
  
  export const testData: TestData[] = [
    // --------------   ---------------------------------------
  
    {
      typeOfTest: "All correct scenario for MTHFLU",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Math Facts Fluency"],
      testStemForm: ["MTHFLU.W5PA"],
      taskStem: ["MTHFLU"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 4,
      examineeGrade: "Grade 2",
      SSP: ["Ages 4 to 6"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  ];
  