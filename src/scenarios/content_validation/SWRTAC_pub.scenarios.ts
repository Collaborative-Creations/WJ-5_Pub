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
      typeOfTest: "All correct scenario for SWRTAC Blocks A&B for SSP1",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Sentence Writing Accuracy"],
      testStemForm: ["SWRTAC.W5PA"],
      taskStem: ["SWRTAC"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 5,
      examineeGrade: "Grade 1",
      SSP: ["Ages 4 to 7"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  
    {
      typeOfTest: "All correct scenario for SWRTAC Block C for SSP3",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Sentence Writing Accuracy"],
      testStemForm: ["SWRTAC.W5PA"],
      taskStem: ["SWRTAC"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 5,
      examineeGrade: "Grade 1",
      SSP: ["Ages 14 to Above Average Adult"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  ];
  