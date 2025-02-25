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
      "SRDGFL - Age - All correct scenario",
      "WRDGFL - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Sentence Reading Fluency", "Word Reading Fluency"],
    testStemForm: ["SRDGFL.W5PA", "WRDGFL.W5PA"],
    taskStem: ["SRDGFL", "WRDGFL"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["All Examinees", "All Examinees"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 0],
    compositesOrClustersTaskStemForm: ["RDGFLU"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "SRDGFL - K12 - All correct scenario",
      "WRDGFL - K12 - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Sentence Reading Fluency", "Word Reading Fluency"],
    testStemForm: ["SRDGFL.W5PA", "WRDGFL.W5PA"],
    taskStem: ["SRDGFL", "WRDGFL"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["All Examinees", "All Examinees"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 0],
    compositesOrClustersTaskStemForm: ["RDGFLU"],
    lookUpModel: "derived scores",
  },
];
