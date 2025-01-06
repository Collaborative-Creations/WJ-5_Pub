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
      "SPLSND - Age - All correct scenario",
      "WRDATK - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Spelling of Sounds", "Word Attack"],
    testStemForm: ["SPLSND.W5PA", "WRDATK.W5PA"],
    taskStem: ["SPLSND", "WRDATK"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 6", "Ages 4 to 7"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [5, 6],
    compositesOrClustersTaskStemForm: ["PHGRKN"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "SPLSND - K12 - All correct scenario",
      "WRDATK - K12 - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Spelling of Sounds", "Word Attack"],
    testStemForm: ["SPLSND.W5PA", "WRDATK.W5PA"],
    taskStem: ["SPLSND", "WRDATK"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 6", "Ages 4 to 7"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [5, 6],
    compositesOrClustersTaskStemForm: ["PHGRKN"],
    lookUpModel: "derived scores",
  },
];
