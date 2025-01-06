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
      typeOfTest: "SSP1-All Correct",
      testNumber: [1, 2], // Not much useful for time being
      testName: ["Oral Reading"],
      testStemForm: ["ORLRDG.W5PA"],
      taskStem: ["ORLRDG"],
      blockName: "Form A",
      normBasis: "Age",
      examineeAge: 7,
      examineeGrade: "Grade 4",
      SSP: ["Ages 6 to 7"],
      BbyC: [5],
      scoreFlag: "",
      lookUpModel: "basal and ceiling",
    },
    {
        typeOfTest: "SSP2-SampleItems",
        testNumber: [1, 2], 
        testName: ["Oral Reading"],
        testStemForm: ["ORLRDG.W5PA"],
        taskStem: ["ORLRDG"],
        blockName: "Form A",
        normBasis: "Age",
        examineeAge: 7,
        examineeGrade: "Grade 4",
        SSP: ["Age 8 to Adult"],
        BbyC: [5],
        scoreFlag: "",
        lookUpModel: "basal and ceiling",
      },
  ];
  