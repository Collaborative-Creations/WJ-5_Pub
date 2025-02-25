interface TestData {
  clusterName: string[];
  homeBattery: string[];
  testName: string[];
  normBasis: string;
  education: string;
  examineeAge: number;
  defaultSSP: string;
  SSP: string[];
  reportType: string;
  scoreType: string;
  testSetName: string;
  examineeName: string;
  baseLineName: string;
  reportName: string;
  baseLine: string;
  format: string;
  templateName: string;
  confLevel: string;
  signifLevel: string;
  sessionLevelNotes: string;
  sessionLevelObservations: string;
  testLevelNotes: string;
  testLevelRsbe: string;
}

export const testData: TestData[] = [
  {
    clusterName: ["Oral Language (Gc)"],
    homeBattery: ["ACH"],
    testName: [
      "Picture Vocabulary",
      "Oral Comprehension",
      "Oral Language Samples",
      "Story Comprehension",
    ],
    normBasis: "Grade",
    education: "In Grade 4",
    examineeAge: 14.0,
    defaultSSP: "Grade 4",
    SSP: [
      "Grades 4 to 5",
      "Grades 4 to 6",
      "Grade 3 to Adult",
      "Grades 3 to 5",
    ],
    reportType: "Word Score Report",
    scoreType: "max",
    testSetName: "Oral Language (Gc)",
    examineeName: "Max, Orlang",
    baseLineName: "ACH_Orlang_Max_Word",
    reportName: "ACH_Orlang_Max",
    baseLine: "No",
    format: "List Tests Under Clusters",
    templateName: "Score Template 5",
    confLevel: "95%",
    signifLevel: "1.75",
    sessionLevelNotes: "No",
    sessionLevelObservations: "No",
    testLevelNotes: "No",
    testLevelRsbe: "Yes",
  },

  {
    clusterName: ["Oral Language (Gc)"],
    homeBattery: ["ACH"],
    testName: [
      "Picture Vocabulary",
      "Oral Comprehension",
      "Oral Language Samples",
      "Story Comprehension",
    ],
    normBasis: "Age",
    education: "In Grade 12",
    examineeAge: 14.0,
    defaultSSP: "Age 14",
    SSP: [
      "Ages 11 to 14",
      "Age 12 to Average Adult",
      "Age 8 to Adult",
      "Age 14 to Adult",
    ],
    reportType: "Html Score Report",
    scoreType: "Random",
    testSetName: "Oral Language (Gc)",
    examineeName: "Random, Orlang",
    baseLineName: "ACH_Orlang_Random_Html",
    reportName: "ACH_Orlang_Random",
    baseLine: "No",
    format: "List Tests and Clusters Separately",
    templateName: "Score Template 2",
    confLevel: "90%",
    signifLevel: "1.90",
    sessionLevelNotes: "Yes",
    sessionLevelObservations: "Yes",
    testLevelNotes: "No",
    testLevelRsbe: "Yes",
  },
];
