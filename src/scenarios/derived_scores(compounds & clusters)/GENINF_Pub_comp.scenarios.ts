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
      "GIWHER - Age - All correct scenario",
      "GIWHAT - Age - Attain Quick Basal Ceiling scenario",
    ],
    testNumber: [1, 2], // we r not using this a sof now
    testName: ["General Information–Where", "General Information–What"],
    testStemForm: ["GIWHER.W5PA", "GIWHAT.W5PA"],
    taskStem: ["GIWHER", "GIWHAT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 11", "Ages 4 to 5"],
    totalItems: 23,
    scoreFlag: "",
    BbyC: [4, 4],
    compositesOrClustersTaskStemForm: ["GENINF.W5PA"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "GIWHER - K12 - Attain Quick Basal Ceiling scenario",
      "GIWHAT - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["General Information–Where", "General Information–What"],
    testStemForm: ["GIWHER.W5PA", "GIWHAT.W5PA"],
    taskStem: ["GIWHER", "GIWHAT"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 11", "Ages 4 to 5"],
    totalItems: 23,
    scoreFlag: "",
    BbyC: [4, 4],
    compositesOrClustersTaskStemForm: ["GENINF.W5PA"],
    lookUpModel: "derived scores",
  },
];
