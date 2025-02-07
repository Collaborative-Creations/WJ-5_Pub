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
      "STYREC - Age - All correct scenario",
      "STYCMP - Age - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Story Recall", "Story Comprehension"],
    testStemForm: ["STYREC.W5PA", "STYCMP.W5PA"],
    taskStem: ["STYREC", "STYCMP"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 6","Ages 4 to 7"],
    totalItems: 4,
    scoreFlag: "",
    BbyC: [0, 0],
    compositesOrClustersTaskStemForm: ["GL"],
    lookUpModel: "derived scores",
  },

//-------------- K12 ---------------------------------------

{
  typeOfTest: [
    "STYREC - K12 - All correct scenario",
    "STYCMP - K12 - All incorrect scenario",
  ],
  testNumber: [1, 2],
  testName: ["Story Recall", "Story Comprehension"],
  testStemForm: ["STYREC.W5PA", "STYCMP.W5PA"],
  taskStem: ["STYREC", "STYCMP"],
  blockName: "Form A",
  examineeAge: 4,
  examineeGrade: "1.9",
  normBasis: "K12",
  SSP: ["Ages 4 to 6","Ages 4 to 7"],
  totalItems: 4,
  scoreFlag: "",
  BbyC: [0, 0],
  compositesOrClustersTaskStemForm: ["GL"],
  lookUpModel: "derived scores",
},

];
