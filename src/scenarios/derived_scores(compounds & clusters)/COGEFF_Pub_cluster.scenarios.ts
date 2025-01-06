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
      "VRBATN - Age - Attain Quick Basal Ceiling scenario",
      "NUMPAT - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Verbal Attention", "Number-Pattern Matching"],
    testStemForm: ["VRBATN.W5PA", "NUMPAT.W5PA"],
    taskStem: ["VRBATN", "NUMPAT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 8", "All Examinees"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 0],
    compositesOrClustersTaskStemForm: ["COGEFF"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "VRBATN - K12 - All correct scenario",
      "NUMPAT - K12 - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Verbal Attention", "Number-Pattern Matching"],
    testStemForm: ["VRBATN.W5PA", "NUMPAT.W5PA"],
    taskStem: ["VRBATN", "NUMPAT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 8", "All Examinees"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 0],
    compositesOrClustersTaskStemForm: ["COGEFF"],
    lookUpModel: "derived scores",
  },
];
