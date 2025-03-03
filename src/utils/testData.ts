export function getSiteUrl() {
  switch (process.env.test) {
    case "qa":
      return "https://clinical-wjv-qa.rsiapps.com/";
    case "stage":
      return "https://stage.riversidescore.com/";
    case "uat":
      return "https://clinical-uat.rsiapps.com/";
    case "prod":
      return "https://riversidescore.com/";
    case "prodCanada":
      return "https://ca.riversidescore.com/";
    case "prodTest":
      return "https://testrs.riversidescore.com/";
  }
}
export function getAdminUrl() {
  switch (process.env.test) {
    case "qa":
      return "http://clinicalqa.rsiapps.com/";
    case "stage":
      return "https://clinicalstg.riversideinsights.com/";
    case "uat":
      return "http://clinicaluat.rsiapps.com/";
    case "prod":
      return "https://admin.riversidescore.com";
    case "prodCanada":
      return "http://caadmin.riversidescore.com/";
  }
}
export function getExamineeURL() {
  switch (process.env.test) {
    case "qa":
      return "https://clinical-wjv-qa.rsiapps.com/examinee";
    case "stage":
      return "https://stage.riversidescore.com/student";
    case "uat":
      return "";
    case "prod":
      return "https://riversidescore.com/examinee";
    case "prodTest":
      return "https://testrs.riversidescore.com/examinee/";
    case "prodCanada":
      return "https://ca.riversidescore.com/examinee";
  }
}
export function getWj5UserData() {
  return {
    examiner: [
      {
        userName: "PubExaminer02",
        passWord: "Test@100",
        examinerID: `PubExaminer01`,
      },
      {
        userName: "MediumTestsExamiiner",
        passWord: "Test123!",
        examinerID: `786`,
      },
      {
        userName: "MaximumTestsExaminer",
        passWord: "Test123!",
        examinerID: `123`,
      },
      { userName: `Exa100`, passWord: `Tes00`, examinerID: `Exam1` },
      { userName: "MRoleEaminer1", passWord: "Test123!", examinerID: `E0001` },
      { userName: "ProdExaminer01.B74", passWord: "Prod100" },
    ],
    accountHolder: [
      { userName: `PublicationsOrg01`, passWord: `Test@100` },
      { userName: `Stage098`, passWord: `Test123!` },
      { userName: `WjvTestsMedium`, passWord: `Test123!` },
      { userName: `WjvTestsMaximum`, passWord: `Test123!` },
      { userName: `SuperQ23`, passWord: `Tes00` },
      { userName: `MResearchAndWJV`, passWord: `Test123!` },
      { userName: `ProdW4874`, passWord: `Prot@100` },
    ],
    admin: [{ userName: "riversiderealadmin", passWord: "admin123!" }],
  };
}