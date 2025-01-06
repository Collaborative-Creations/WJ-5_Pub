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
      "APPROB - Age - Attain Quick Basal Ceiling scenario",
      "CALC - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Applied Problems", "Calculation"],
    testStemForm: ["APPROB.W5PA", "CALC.W5PA"],
    taskStem: ["APPROB", "CALC"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Age 4", "Ages 4 to 6"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["MTHBRF"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "CALC - K12 - Attain Quick Basal Ceiling scenario",
      "APPROB - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Calculation", "Applied Problems"],
    testStemForm: ["CALC.W5PA", "APPROB.W5PA"],
    taskStem: ["CALC", "APPROB"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 6", "Age 4"],
    totalItems: 15,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["MTHBRF"],
    lookUpModel: "derived scores",
  },
];
