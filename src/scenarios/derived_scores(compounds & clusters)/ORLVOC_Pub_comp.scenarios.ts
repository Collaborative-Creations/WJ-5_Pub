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
      "OVSYN - Age - All correct scenario",
      "OVANT - Age - Attain Quick Basal Ceiling scenario",
    ],
    testNumber: [1, 2],
    testName: ["Oral Vocabulary–Synonyms", "Oral Vocabulary–Antonyms"],
    testStemForm: ["OVSYN.W5PA", "OVANT.W5PA"],
    taskStem: ["OVSYN", "OVANT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 11", "Ages 4 to 8"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["ORLVOC.W5PA"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "OVSYN - K12 - Attain Quick Basal Ceiling scenario",
      "OVANT - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Oral Vocabulary–Synonyms", "Oral Vocabulary–Antonyms"],
    testStemForm: ["OVSYN.W5PA", "OVANT.W5PA"],
    taskStem: ["OVSYN", "OVANT"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 11", "Ages 4 to 8"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5],
    compositesOrClustersTaskStemForm: ["ORLVOC.W5PA"],
    lookUpModel: "derived scores",
  },
];
