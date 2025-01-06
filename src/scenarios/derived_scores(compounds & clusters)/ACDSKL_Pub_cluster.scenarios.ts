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
      "LWIDNT - Age - All correct scenario",
      "CALC - Age - All correct scenario",
      "SPELL - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Letter-Word Identification", "Calculation", "Spelling"],
    testStemForm: ["LWIDNT.W5PA", "CALC.W5PA", "SPELL.W5PA"],
    taskStem: ["LWIDNT", "CALC", "SPELL"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 5", "Ages 4 to 6", "Ages 4 to 6"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [4, 5, 5],
    compositesOrClustersTaskStemForm: ["ACDSKL"], //ACDSKL
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "LWIDNT - K12 - All incorrect scenario",
      "CALC - K12 - Attain Quick Basal Ceiling scenario",
      "SPELL - K12 - Attain Quick Basal Ceiling scenario",
    ],
    testNumber: [1, 2],
    testName: ["Letter-Word Identification", "Calculation", "Spelling"],
    testStemForm: ["LWIDNT.W5PA", "CALC.W5PA", "SPELL.W5PA"],
    taskStem: ["LWIDNT", "CALC", "SPELL"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 5", "Ages 4 to 6", "Ages 4 to 6"],
    totalItems: 5,
    scoreFlag: "",
    BbyC: [4, 5, 5],
    compositesOrClustersTaskStemForm: ["ACDSKL"],
    lookUpModel: "derived scores",
  },
];
