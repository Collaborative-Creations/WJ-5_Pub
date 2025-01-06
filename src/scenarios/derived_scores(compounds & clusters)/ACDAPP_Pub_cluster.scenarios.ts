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
    "PSGCMP - Age - All incorrect scenario",
    "APPROB - Age - All incorrect scenario",
    "WRTSMP - Age - All correct scenario"
  ],
  testNumber: [1, 2],
  testName: ["Passage Comprehension", "Applied Problems","Written Language Samples"],
  testStemForm: ["PSGCMP.W5PA", "APPROB.W5PA","WRTSMP.W5PA"],
  taskStem: ["PSGCMP", "APPROB","WRTSMP"],
  blockName: "Form A",
  examineeAge: 4,
  examineeGrade: "1.9",
  normBasis: "Age",
  SSP: ["Ages 4 to 6","Age 4","Ages 5 to 7"],
  totalItems: 3,
  scoreFlag: "",
  BbyC: [5, 5],
  compositesOrClustersTaskStemForm: ["ACDAPP"],
  lookUpModel: "derived scores",
},

//-------------- K12 ---------------------------------------

{
  typeOfTest: [
    "PSGCMP - K12 - All correct scenario",
    "APPROB - K12 - Attain Quick Basal Ceiling scenario",
    "WRTSMP - K12 - All incorrect scenario"
  ],
  testNumber: [1, 2],
  testName: ["Passage Comprehension", "Applied Problems","Written Language Samples"],
  testStemForm: ["PSGCMP.W5PA", "APPROB.W5PA","WRTSMP.W5PA"],
  taskStem: ["PSGCMP", "APPROB","WRTSMP"],
  blockName: "Form A",
  examineeAge: 4,
  examineeGrade: "1.9",
  normBasis: "K12",
  SSP: ["Ages 4 to 6","Age 4","Ages 5 to 7"],
  totalItems: 3,
  scoreFlag: "",
  BbyC: [5, 5],
  compositesOrClustersTaskStemForm: ["ACDAPP"],
  lookUpModel: "derived scores",
},
];
