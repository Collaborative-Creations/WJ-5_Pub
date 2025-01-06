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
      "SPAREL - Age - Attain Quick Basal Ceiling scenario",
      "BLKROT - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Spatial Relations", "Block Rotation"],
    testStemForm: ["SPAREL.W5PA", "BLKROT.W5PA"],
    taskStem: ["SPAREL", "BLKROT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 10", "Ages 4 to 7"],
    totalItems: 3,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["GV"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "SPAREL - K12 - All correct scenario",
      "BLKROT - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Spatial Relations", "Block Rotation"],
    testStemForm: ["SPAREL.W5PA", "BLKROT.W5PA"],
    taskStem: ["SPAREL", "BLKROT"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 10", "Ages 4 to 7"],
    totalItems: 4,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["GV"],
    lookUpModel: "derived scores",
  },
];
