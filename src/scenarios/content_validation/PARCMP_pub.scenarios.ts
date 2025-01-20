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
      typeOfTest: "All correct scenario for PARCMP SSP1",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Paragraph Reading Comprehension"],
      testStemForm: ["PARCMP.W5PA"],
      taskStem: ["PARCMP"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 5,
      examineeGrade: "Grade 1",
      SSP: ["Ages 4 to 6"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  
    {
      typeOfTest: "All correct scenario for PARCMP SSP4",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Paragraph Reading Comprehension"],
      testStemForm: ["PARCMP.W5PA"],
      taskStem: ["PARCMP"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 5,
      examineeGrade: "Grade 1",
      SSP: ["Ages 9 to Above Average Adult"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  ];
  