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
      typeOfTest: "All correct scenario for WRTSMP Blocks A,B,C for SSP1",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Written Language Samples"],
      testStemForm: ["WRTSMP.W5PA"],
      taskStem: ["WRTSMP"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 5,
      examineeGrade: "Grade 1",
      SSP: ["Ages 5 to 7"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  
    {
      typeOfTest: "All correct scenario for WRTSMP Blocks D&E for SSP4",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Written Language Samples"],
      testStemForm: ["WRTSMP.W5PA"],
      taskStem: ["WRTSMP"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 5,
      examineeGrade: "Grade 1",
      SSP: ["Above Average Adult"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  ];
  