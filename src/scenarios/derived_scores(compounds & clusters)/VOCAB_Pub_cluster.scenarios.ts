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
    "PICVOC - Age - Attain Quick Basal Ceiling scenario",
    "ACDVOC - Age - All correct scenario",
  ],
  testNumber: [1, 2],
  testName: ["Picture Vocabulary", "Academic Vocabulary"],
  testStemForm: ["PICVOC.W5PA", "ACDVOC.W5PA"],
  taskStem: ["PICVOC", "ACDVOC"],
  blockName: "Form A",
  examineeAge: 5,
  examineeGrade: "1.9",
  normBasis: "Age",
  SSP: ["Age 4", "Ages 4 to 7"],
  totalItems: 3,
  scoreFlag: "",
  BbyC: [5, 5], 
  compositesOrClustersTaskStemForm: ["VOCAB"],
  lookUpModel: "derived scores",
},


//-------------- K12 ---------------------------------------

{
  typeOfTest: [
    "PICVOC - K12 - All correct scenario",
    "ACDVOC - K12 - All incorrect scenario",
  ],
  testNumber: [1, 2],
  testName: ["Picture Vocabulary", "Academic Vocabulary"],
  testStemForm: ["PICVOC.W5PA", "ACDVOC.W5PA"],
  taskStem: ["PICVOC", "ACDVOC"],
  blockName: "Form A",
  examineeAge: 4,
  examineeGrade: "1.9",
  normBasis: "K12",
  SSP: ["Age 4","Ages 4 to 7"],
  totalItems: 4,
  scoreFlag: "",
  BbyC: [5, 5],
  compositesOrClustersTaskStemForm: ["VOCAB"],
  lookUpModel: "derived scores",
},
];
