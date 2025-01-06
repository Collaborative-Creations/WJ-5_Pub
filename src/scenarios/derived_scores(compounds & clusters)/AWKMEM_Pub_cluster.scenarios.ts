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
      "VRBATN - Age - All correct scenario",
      "NUMREV - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Verbal Attention", "Numbers Reversed"],
    testStemForm: ["VRBATN.W5PA", "NUMREV.W5PA"],
    taskStem: ["VRBATN", "NUMREV"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 8", "Ages 4 to 9"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["AWKMEM"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "VRBATN - K12 - All correct scenario",
      "NUMREV - K12 - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Verbal Attention", "Numbers Reversed"],
    testStemForm: ["VRBATN.W5PA", "NUMREV.W5PA"],
    taskStem: ["VRBATN", "NUMREV"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 8", "Ages 4 to 9"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["AWKMEM"],
    lookUpModel: "derived scores",
  },
];
