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
      "OVANT - Age - All incorrect scenario",
      "MATRCZ - Age - All correct scenario",
      "VRBANL - Age - All correct scenario",
      "ANLSYN - Age - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: [
      "Oral Vocabulary–Synonyms",
      "Oral Vocabulary–Antonyms",
      "Matrices",
      "Verbal Analogies",
      "Analysis-Synthesis",
    ],
    testStemForm: [
      "OVSYN.W5PA",
      "OVANT.W5PA",
      "MATRCZ.W5PA",
      "VRBANL.W5PA",
      "ANLSYN.W5PA",
    ],
    taskStem: ["OVSYN", "OVANT", "MATRCZ", "VRBANL", "ANLSYN"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: [
      "Ages 4 to 11",
      "Ages 4 to 8",
      "Ages 4 to 11",
      "Ages 4 to 6",
      "All Examinees",
    ],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5, 0, 5, 5, 0],
    compositesOrClustersTaskStemForm: ["ORLVOC.W5PA", "GFGC", "GC", "GF"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "OVSYN - K12 - All incorrect scenario",
      "OVANT - K12 - Attain Quick Basal Ceiling scenario",
      "MATRCZ - K12 - All incorrect scenario",
      "VRBANL - K12 - Attain Quick Basal Ceiling scenario",
      "ANLSYN - K12 - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: [
      "Oral Vocabulary–Synonyms",
      "Oral Vocabulary–Antonyms",
      "Matrices",
      "Verbal Analogies",
      "Analysis-Synthesis",
    ],
    testStemForm: [
      "OVSYN.W5PA",
      "OVANT.W5PA",
      "MATRCZ.W5PA",
      "VRBANL.W5PA",
      "ANLSYN.W5PA",
    ],
    taskStem: ["OVSYN", "OVANT", "MATRCZ", "VRBANL", "ANLSYN"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: [
      "Ages 4 to 11",
      "Ages 4 to 8",
      "Ages 4 to 11",
      "Ages 4 to 6",
      "All Examinees",
    ],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5, 0, 5, 5, 0],
    compositesOrClustersTaskStemForm: ["ORLVOC.W5PA", "GFGC", "GC", "GF"],
    lookUpModel: "derived scores",
  },
];
