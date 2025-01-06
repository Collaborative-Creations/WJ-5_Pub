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
        "SPELL - Age - All correct scenario",
        "SPLSND - Age - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Spelling", "Spelling of Sounds"],
      testStemForm: ["SPELL.W5PA", "SPLSND.W5PA"],
      taskStem: ["SPELL", "SPLSND"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "Age",
      SSP: ["Ages 4 to 6", "Ages 4 to 6"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["SPLSKL"],
      lookUpModel: "derived scores",
    },
  
    //-------------- K12 ---------------------------------------
  
    {
      typeOfTest: [
        "SPELL - K12 - All correct scenario",
        "SPLSND - K12 - All correct scenario",
      ],
      testNumber: [1, 2],
      testName: ["Spelling", "Spelling of Sounds"],
      testStemForm: ["SPELL.W5PA", "SPLSND.W5PA"],
      taskStem: ["SPELL", "SPLSND"],
      blockName: "Form A",
      examineeAge: 5,
      examineeGrade: "1.9",
      normBasis: "K12",
      SSP: ["Ages 4 to 6", "Ages 4 to 6"],
      totalItems: 5,
      scoreFlag: "",
      BbyC: [5, 6],
      compositesOrClustersTaskStemForm: ["SPLSKL"],
      lookUpModel: "derived scores",
    },
  ];
  