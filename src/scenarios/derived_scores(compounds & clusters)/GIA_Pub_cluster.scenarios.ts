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
      "NUMPAT - Age - All correct scenario",
      "OVSYN - Age - All incorrect scenario",
      "OVANT - Age - All incorrect scenario",
      "MATRCZ - Age - All incorrect scenario",
      "SPAREL - Age - All incorrect scenario",
      "STYREC - Age - All correct scenario",
      "SEMRET - Age - All correct scenario",
      "VRBATN - Age - All incorrect scenario",
      "VRBANL - Age - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: [
      "Number-Pattern Matching",
      "Oral Vocabulary–Synonyms",
      "Oral Vocabulary–Antonyms",
      "Matrices",
      "Spatial Relations",
      "Story Recall",
      "Semantic Word Retrieval",
      "Verbal Attention",
      "Verbal Analogies",
    ],
    testStemForm: [
      "NUMPAT.W5PA",
      "OVSYN.W5PA",
      "OVANT.W5PA",
      "MATRCZ.W5PA",
      "SPAREL.W5PA",
      "STYREC.W5PA",
      "SEMRET.W5PA",
      "VRBATN.W5PA",
      "VRBANL.W5PA",
    ],
    taskStem: [
      "NUMPAT", //0
      "OVSYN",
      "OVANT",
      "MATRCZ",
      "SPAREL",
      "STYREC",
      "SEMRET", //0
      "VRBATN", //5
      "VRBANL", //5
    ],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: [
      "All Examinees",
      "Ages 4 to 11",
      "Ages 4 to 8",
      "Ages 4 to 11",
      "Ages 4 to 10",
      "Ages 4 to 6",
      "All Examinees",
      "Ages 4 to 8",
      "Ages 4 to 6",
    ],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [0, 5, 5, 0, 5, 0, 0, 5, 5],
    compositesOrClustersTaskStemForm: [
      "ORLVOC.W5PA",
      "GIA",
      "BIA",
      "GC",
      "COGEFF",
    ],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "OVSYN - K12 - Attain Quick Basal Ceiling scenario",
      "OVANT - K12 - All correct scenario",
      "MATRCZ - K12 - All correct scenario",
      "SPAREL - K12 - All incorrect scenario",
      "STYREC - K12 - All correct scenario", //
      "SEMRET - K12 - All correct scenario", //
      "VRBATN - K12 - All correct scenario",
      "NUMPAT - K12 - All correct scenario", //
      "VRBANL - K12 - Attain Quick Basal Ceiling scenario",
    ],
    testNumber: [1, 2],
    testName: [
      "Oral Vocabulary–Synonyms",
      "Oral Vocabulary–Antonyms",
      "Matrices",
      "Spatial Relations",
      "Story Recall",
      "Semantic Word Retrieval",
      "Verbal Attention",
      "Number-Pattern Matching",
      "Verbal Analogies",
    ],
    testStemForm: [
      "OVSYN.W5PA",
      "OVANT.W5PA",
      "MATRCZ.W5PA",
      "SPAREL.W5PA",
      "STYREC.W5PA",
      "SEMRET.W5PA",
      "VRBATN.W5PA",
      "NUMPAT.W5PA",
      "VRBANL.W5PA",
    ],
    taskStem: [
      "OVSYN",
      "OVANT",
      "MATRCZ",
      "SPAREL",
      "STYREC",
      "SEMRET", //0
      "VRBATN", //5
      "NUMPAT", //0
      "VRBANL", //5
    ],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: [
      "Ages 4 to 11",
      "Ages 4 to 8",
      "Ages 4 to 11",
      "Ages 4 to 10",
      "Ages 4 to 6",
      "All Examinees",
      "Ages 4 to 8",
      "All Examinees",
      "Ages 4 to 6",
    ],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 5, 0, 5, 0, 0, 5, 0, 5],
    compositesOrClustersTaskStemForm: [
      "ORLVOC.W5PA",
      "GIA",
      "BIA",
      "GC",
      "COGEFF",
    ],
    lookUpModel: "derived scores",
  },
];
