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
        "SNDDEL - Age - All correct scenario",
        "SNDSUB - Age - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Sound Deletion", "Sound Substitution"],
      testStemForm: ["SNDDEL.W5PA", "SNDSUB.W5PA"],
      taskStem: ["SNDDEL", "SNDSUB"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "Age",
      SSP: ["Ages 4 to 5", "Ages 4 to 7"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["PHNMAN"],
      lookUpModel: "derived scores",
    },
  
    //-------------- K12 ---------------------------------------
  
    {
      typeOfTest: [
        "SNDDEL - K12 - All correct scenario",
        "SNDSUB - K12 - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Sound Deletion", "Sound Substitution"],
      testStemForm: ["SNDDEL.W5PA", "SNDSUB.W5PA"],
      taskStem: ["SNDDEL", "SNDSUB"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "K12",
      SSP: ["Ages 4 to 5", "Ages 4 to 7"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["PHNMAN"],
      lookUpModel: "derived scores",
    },
  ];
  