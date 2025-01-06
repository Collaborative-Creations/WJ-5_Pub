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
      "LWIDNT - Age - All correct scenario",
      "WRDATK - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Letter-Word Identification", "Word Attack"],
    testStemForm: ["LWIDNT.W5PA", "WRDATK.W5PA"],
    taskStem: ["LWIDNT", "WRDATK"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 5", "Ages 4 to 7"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["RDGBAS"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "LWIDNT - K12 - All incorrect scenario",
      "WRDATK - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Letter-Word Identification", "Word Attack"],
    testStemForm: ["LWIDNT.W5PA", "WRDATK.W5PA"],
    taskStem: ["LWIDNT", "WRDATK"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 5", "Ages 4 to 7"],
    totalItems: 4,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["RDGBAS"],
    lookUpModel: "derived scores",
  },
];
