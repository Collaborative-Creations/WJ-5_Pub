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
      "MTHPRB - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Applied Problems", "Math Problem Identification"],
    testStemForm: ["APPROB.W5PA", "MPRBID.W5PA"],
    taskStem: ["APPROB", "MPRBID"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Age 4", "Ages 4 to 6"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["MTHPRB"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "APPROB - K12 - All correct scenario",
      "MTHPRB - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Applied Problems", "Math Problem Identification"],
    testStemForm: ["APPROB.W5PA", "MPRBID.W5PA"],
    taskStem: ["APPROB", "MPRBID"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Age 4", "Ages 4 to 6"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["MTHPRB"],
    lookUpModel: "derived scores",
  },
];
