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
      typeOfTest: "All correct scenario for PHNRET",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Phonemic Word Retrieval"],
      testStemForm: ["PHNRET.W5PA"],
      taskStem: ["PHNRET"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 4,
      examineeGrade: "Grade 2",
      SSP: ["All Examinees"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
  ];
  