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
      "ORLCMP - Age - Attain Quick Basal Ceiling scenario",
      "STYCMP - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Oral Comprehension", "Story Comprehension"],
    testStemForm: ["ORLCMP.W5PA", "STYCMP.W5PA"],
    taskStem: ["ORLCMP", "STYCMP"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 5", "Ages 4 to 7"],
    totalItems: 4,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["LSTCMP"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "ORLCMP - K12 - All correct scenario",
      "STYCMP - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Oral Comprehension", "Story Comprehension"],
    testStemForm: ["ORLCMP.W5PA", "STYCMP.W5PA"],
    taskStem: ["ORLCMP", "STYCMP"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 5", "Ages 4 to 7"],
    totalItems: 4,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["LSTCMP"],
    lookUpModel: "derived scores",
  },
];
