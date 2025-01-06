interface TestData {
  typeOfTest: string;
  testNumber: number[];
  testName: string[];
  testStemForm: string[];
  taskStem: string[];
  normBasis: string;
  blockName: string;
  examineeAge: number;
  examineeGrade: string;
  SSP: string[];
  BbyC: number[];
  negation?: boolean;
  scoreFlag: string;
  lookUpModel: string;
}

export const testData: TestData[] = [
  // --------------   ---------------------------------------

  {
    typeOfTest: "basal and ceiling",
    testNumber: [1, 2], // Not much useful for time being
    testName: [
      "Oral Vocabulary–Synonyms", //ssp1,1_C,5_NC,b/c
      "Oral Vocabulary–Antonyms", //ssp2,1_C,1_NC,(REV LOGIC START) , 5_C , 5_NC , b/c
      "General Information–Where", //ssp(last), all-C  ,last 3_NC,b/c
      "General Information–What", //ssp1,all_NC,b/c
      "Verbal Attention", //ssp3, 1_C,all_NC,b/c
      "Nonsense Word Repetition", //ssp2,1_C,1_NC,(FLAGGED,  REV LOGIC START) , all_C, b/c
      "Verbal Analogies", //ssp(last), All_C,b/c
      "Picture Vocabulary", //ssp(last), All_NC,b/c
      "Sound Reversal", //ssp2,5_C,5_NC,b/c
      "Oral Comprehension", //ssp2, 5_C ,4_NC,1_C,5_NC,b/c
      "Math Problem Identification", // ssp3,5_C,item10 change resp to NC,all Correct , b/c
    ],
    testStemForm: [
      "OVSYN.W5PA",
      "OVANT.W5PA",
      "GIWHER.W5PA",
      "GIWHAT.W5PA",
      "VRBATN.W5PA",
      "NWDREP.W5PA",
      "VRBANL.W5PA",
      "PICVOC.W5PA",
      "SNDREV.W5PA",
      "ORLCMP.W5PA",
      "MPRBID.W5PA",
    ],
    taskStem: [
      "OVSYN",
      "OVANT",
      "GIWHER",
      "GIWHAT",
      "VRBATN",
      "NWDREP",
      "VRBANL",
      "PICVOC",
      "SNDREV",
      "ORLCMP",
      "MPRBID",
    ],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: [
      "Ages 4 to 11",
      "Ages 9 to 13",
      "Above Average Adult",
      "Ages 4 to 5",
      "Ages 9 to Adult",
      "Ages 7 to 11",
      "Above Average Adult",
      "Ages 5 to 6",
      "Ages 14 to Adult",
      "Age 6",
      "Ages 9 to 10",
    ],
    BbyC: [5, 5, 4, 4, 5, 6, 5, 5, 5, 5, 5],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];

export const testDataBasalCeiling: TestData[] = [
  {
    typeOfTest: "basal and ceiling left nav",
    testNumber: [1, 2], // Not much useful for time being
    testName: ["Nonsense Word Repetition"],
    testStemForm: ["NWDREP.W5PA"],
    taskStem: ["NWDREP"],
    blockName: "Form A",
    normBasis: "Age",
    examineeAge: 5,
    examineeGrade: "Grade 1",
    SSP: ["Age 12 to Adult"],
    BbyC: [6],
    scoreFlag: "",
    lookUpModel: "basal and ceiling",
  },
];
