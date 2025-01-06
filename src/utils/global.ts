let filePath;
let zipFilePath;
let extractionFilePath;
let scoreTemplatePath;
let testDeTemplatePath;
let extractZipPath;
let fileReadPath;
let templateName;
let derivedScores;

export async function setFilePathes(val: string) {
  if (val.match(/single\s*table|decile\s*table|multi\s*table/i)) {
    scoreTemplatePath = "dataFiles/Score_DataExport_AutoFilter_Template.csv";
    testDeTemplatePath = "dataFiles/Test_DataExport_AutoFilter_Template.csv";
    derivedScores = "dataFiles/Derived_Score_AutoFilter_Template.csv";
    zipFilePath = "downloads/wLookUpScoresExports.zip";
    extractZipPath = "downloads/extracted/WlookUpScoreExports";
    fileReadPath = "";
    templateName = scoreTemplatePath.split("/")[1].split(".")[0];
  } else if (val === "Test Data Export") {
    scoreTemplatePath = "dataFiles/Score_DataExport_AutoFilter_Template.csv";
    testDeTemplatePath = "dataFiles/Test_DataExport_AutoFilter_Template.csv";
    derivedScores = "dataFiles/Derived_Score_AutoFilter_Template.csv";
    zipFilePath = "downloads/testDataExports.zip";
    extractZipPath = "downloads/extracted/testDataExports";
    templateName = testDeTemplatePath.split("/")[1].split(".")[0];
  } else if (val.match(/derived scores|basal and ceiling/i)) {
    // we dont need this for basal and ceiling but since to avoid throin =g error
    scoreTemplatePath = "dataFiles/Score_DataExport_AutoFilter_Template.csv";
    testDeTemplatePath = "dataFiles/Test_DataExport_AutoFilter_Template.csv";
    derivedScores = "dataFiles/Derived_Score_AutoFilter_Template.csv";
    zipFilePath = "downloads/derivedScoresExports.zip";
    extractZipPath = "downloads/extracted/DerivedScoreExports";
    templateName = derivedScores.split("/")[1].split(".")[0];
    filePath = `${extractZipPath}/Derived_Score_AutoFilter_Template_Derived.txt`;
  } else {
    throw new Error(
      `The lookUp model didnt match in the global file paths ${val}`,
    );
  }
}

export async function getFilePath() {
  return filePath;
}

export async function getZipFilePath() {
  return zipFilePath;
}

export async function getExtractedZipFilePath() {
  return extractZipPath;
}

export async function getExtractedFilePath() {
  return extractionFilePath;
}

export async function getTemplatePath() {
  return { scoreTemplatePath, testDeTemplatePath, derivedScores };
}

export async function getTemplateName() {
  return templateName;
}
