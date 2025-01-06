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
      "LETPAT - Age - All correct scenario",
      "NUMPAT - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Letter-Pattern Matching", "Number-Pattern Matching"],
    testStemForm: ["LETPAT.W5PA", "NUMPAT.W5PA"],
    taskStem: ["LETPAT", "NUMPAT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["All Examinees", "All Examinees"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 0],
    compositesOrClustersTaskStemForm: ["GS"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "LETPAT - K12 - All correct scenario",
      "NUMPAT - K12 - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Letter-Pattern Matching", "Number-Pattern Matching"],
    testStemForm: ["LETPAT.W5PA", "NUMPAT.W5PA"],
    taskStem: ["LETPAT", "NUMPAT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["All Examinees", "All Examinees"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 0],
    compositesOrClustersTaskStemForm: ["GS"],
    lookUpModel: "derived scores",
  },
];
