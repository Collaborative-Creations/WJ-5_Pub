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
    "SWRTAC - Age - All correct scenario",
    "WRTSMP - Age - All incorrect scenario"
  ],
  testNumber: [1, 2],
  testName: ["Sentence Writing Accuracy","Written Language Samples"],
  testStemForm: ["SWRTAC.W5PA", "WRTSMP.W5PA"],
  taskStem: ["SWRTAC", "WRTSMP"],
  blockName: "Form A",
  examineeAge: 4,
  examineeGrade: "1.9",
  normBasis: "Age",
  SSP: ["Ages 4 to 7","Ages 5 to 7"],
  totalItems: 3,
  scoreFlag: "",
  BbyC: [5, 5],
  compositesOrClustersTaskStemForm: ["WRTBRF"],
  lookUpModel: "derived scores",
},

//-------------- K12 ---------------------------------------
{
  typeOfTest: [
    "SWRTAC - K12 - All incorrect scenario",
    "WRTSMP - K12 - All correct scenario"
  ],
  testNumber: [1, 2],
  testName: ["Sentence Writing Accuracy","Written Language Samples"],
  testStemForm: ["SWRTAC.W5PA", "WRTSMP.W5PA"],
  taskStem: ["SWRTAC", "WRTSMP"],
  blockName: "Form A",
  examineeAge: 4,
  examineeGrade: "1.9",
  normBasis: "K12",
  SSP: ["Ages 4 to 7","Ages 5 to 7"],
  totalItems: 3,
  scoreFlag: "",
  BbyC: [5, 5],
  compositesOrClustersTaskStemForm: ["WRTBRF"],
  lookUpModel: "derived scores",
},
];
