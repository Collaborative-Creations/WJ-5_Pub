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
        "SEMRET - Age - All correct scenario",
        "PHNRET - Age - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Semantic Word Retrieval", "Phonemic Word Retrieval"],
      testStemForm: ["SEMRET.W5PA", "PHNRET.W5PA"],
      taskStem: ["SEMRET", "PHNRET"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "Age",
      SSP: ["All Examinees", "All Examinees"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["GR"],
      lookUpModel: "derived scores",
    },
  
    //-------------- K12 ---------------------------------------
  
    {
      typeOfTest: [
        "SEMRET - K12 - All correct scenario",
        "PHNRET - K12 - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Semantic Word Retrieval", "Phonemic Word Retrieval"],
      testStemForm: ["SEMRET.W5PA", "PHNRET.W5PA"],
      taskStem: ["SEMRET", "PHNRET"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "K12",
      SSP: ["All Examinees", "All Examinees"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["GR"],
      lookUpModel: "derived scores",
    },
  ];
  