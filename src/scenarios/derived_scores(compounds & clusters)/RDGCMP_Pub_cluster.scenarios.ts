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
      "PSGCMP - Age - All incorrect scenario",
      "PARCMP - Age - All correct scenario"
    ],
    testNumber: [1, 2],
    testName: ["Passage Comprehension","Paragraph Reading Comprehension"],
    testStemForm: ["PSGCMP.W5PA","PARCMP.W5PA"],
    taskStem: ["PSGCMP","PARCMP"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 6","Ages 4 to 6"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["RDGCMP"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "PSGCMP - K12 - All correct scenario",
      "PARCMP - K12 - All incorrect scenario"
    ],
    testNumber: [1, 2],
    testName: ["Passage Comprehension","Paragraph Reading Comprehension"],
    testStemForm: ["PSGCMP.W5PA","PARCMP.W5PA"],
    taskStem: ["PSGCMP","PARCMP"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 6","Ages 4 to 6"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["RDGCMP"],
    lookUpModel: "derived scores",
  },
];
