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
      "OVSYN - Age - All incorrect scenario",
      "OVANT - Age - All correct scenario",
      "MATRCZ - Age - All incorrect scenario",
      "VRBATN - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: [
      "Oral Vocabulary–Synonyms",
      "Oral Vocabulary–Antonyms",
      "Matrices",
      "Verbal Attention",
    ],
    testStemForm: ["OVSYN.W5PA", "OVANT.W5PA", "MATRCZ.W5PA", "VRBATN.W5PA"],
    taskStem: ["OVSYN", "OVANT", "MATRCZ", "VRBATN"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 11", "Ages 4 to 8", "Ages 4 to 11", "Ages 4 to 8"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5, 0, 5],
    compositesOrClustersTaskStemForm: ["ORLVOC.W5PA", "BIA"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "OVSYN - K12 - Attain Quick Basal Ceiling scenario",
      "OVANT - K12 - Attain Quick Basal Ceiling scenario",
      "MATRCZ - K12 - All correct scenario",
      "VRBATN - K12 - Attain Quick Basal Ceiling scenario",
    ],
    testNumber: [1, 2],
    testName: [
      "Oral Vocabulary–Synonyms",
      "Oral Vocabulary–Antonyms",
      "Matrices",
      "Verbal Attention",
    ],
    testStemForm: ["OVSYN.W5PA", "OVANT.W5PA", "MATRCZ.W5PA", "VRBATN.W5PA"],
    taskStem: ["OVSYN", "OVANT", "MATRCZ", "VRBATN"],
    blockName: "Form A",
    examineeAge: 4,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 11", "Ages 4 to 8", "Ages 4 to 11", "Ages 4 to 8"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5, 0, 5],
    compositesOrClustersTaskStemForm: ["ORLVOC.W5PA", "BIA"],
    lookUpModel: "derived scores",
  },
];
