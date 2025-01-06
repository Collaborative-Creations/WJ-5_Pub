interface TestData {
    typeOfTest: string[];
    testNumber: number[];
    testName: string[];
    testStemForm: string[];
    taskStem: string[];
    blockName: string;
    examineeAge: number;
    examineeGrade: string;
    normBasis: string;
    SSP: string[];
    totalItems: number;
    scoreFlag: string;
    BbyC?: number[];
    negation?: boolean;
    compositesOrClustersTaskStemForm?: string[];
    lookUpModel: string;
  }
  
  export const testData: TestData[] = [
    // -------------- Age  ---------------------------------------
 
    {
      typeOfTest: [
        "MEMWRD - Age - All correct scenario",
        "SENREP - Age - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Memory for Words", "Sentence Repetition"],
      testStemForm: ["MEMWRD.W5PA", "SENREP.W5PA"],
      taskStem: ["MEMWRD", "SENREP"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "Age",
      SSP: ["Ages 4 to 7", "Ages 4 to 5"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["AMSPAN"],
      lookUpModel: "derived scores",
    },
  
    //-------------- K12 ---------------------------------------
  
    {
      typeOfTest: [
        "MEMWRD - K12 - All correct scenario",
        "SENREP - K12 - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Memory for Words", "Sentence Repetition"],
      testStemForm: ["MEMWRD.W5PA", "SENREP.W5PA"],
      taskStem: ["MEMWRD", "SENREP"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "K12",
      SSP: ["Ages 4 to 7", "Ages 4 to 5"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["AMSPAN"],
      lookUpModel: "derived scores",
    },
  ];
  