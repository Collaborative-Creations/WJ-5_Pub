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
      "SNDBLN - Age - Attain Quick Basal Ceiling scenario",
      "SEGMNT - Age - All correct scenario",
    ],
    testNumber: [1, 2],
    testName: ["Sound Blending", "Segmentation"],
    testStemForm: ["SNDBLN.W5PA", "SEGMNT.W5PA"],
    taskStem: ["SNDBLN", "SEGMNT"],
    blockName: "Form A",
    examineeAge: 5,
    examineeGrade: "1.9",
    normBasis: "Age",
    SSP: ["Ages 4 to 6", "Ages 4 to 5"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 0],
    compositesOrClustersTaskStemForm: ["PHNAWR"],
    lookUpModel: "derived scores",
  },

  //-------------- K12 ---------------------------------------

  {
    typeOfTest: [
      "SNDBLN - K12 - All correct scenario",
      "SEGMNT - K12 - All incorrect scenario",
    ],
    testNumber: [1, 2],
    testName: ["Sound Blending", "Segmentation"],
    testStemForm: ["SNDBLN.W5PA", "SEGMNT.W5PA"],
    taskStem: ["SNDBLN", "SEGMNT"],
    blockName: "Form A",
    examineeAge: 8,
    examineeGrade: "1.9",
    normBasis: "K12",
    SSP: ["Ages 4 to 6", "Ages 4 to 5"],
    totalItems: 25,
    scoreFlag: "",
    BbyC: [5, 0],
    compositesOrClustersTaskStemForm: ["PHNAWR"],
    lookUpModel: "derived scores",
  },
];
