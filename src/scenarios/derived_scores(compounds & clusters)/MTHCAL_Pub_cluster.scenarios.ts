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
      "MTHFLU - Age - All correct scenario",
      "CALC - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Math Facts Fluency", "Calculation"],
    testStemForm: ["MTHFLU.W5PA", "CALC.W5PA"],
    taskStem: ["MTHFLU", "CALC"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 6", "Ages 4 to 6"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 5],
    compositesOrClustersTaskStemForm: ["MTHCAL"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "MTHFLU - K12 - All incorrect scenario",
      "CALC - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Math Facts Fluency", "Calculation"],
    testStemForm: ["MTHFLU.W5PA", "CALC.W5PA"],
    taskStem: ["MTHFLU", "CALC"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 6", "Ages 4 to 6"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 5],
    compositesOrClustersTaskStemForm: ["MTHCAL"],
    lookUpModel: "derived scores",
  },
  
];
