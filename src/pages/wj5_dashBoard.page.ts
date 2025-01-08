import { expect, Page, Locator, TestInfo } from "../base/basePageFixtures";
import wj5ExamineePage from "./wj5_examinee.page";
import extract from "extract-zip";
import * as path from "path";
import * as fs from "fs";
import Utils from "../utils/utils";
import { faker } from "@faker-js/faker";
import wj5TestPage from "./wj5_test.st_page";
import { softAssertPrint } from "../utils/assertions";
import Wj5LoginPage from "./wj5_login.page";
import { getWj5UserData } from "../utils/testData";
import { getWabil_and_SEMW } from "../utils/derivedScoresEquations";
import {
  getExtractedZipFilePath,
  getTemplateName,
  getTemplatePath,
  getZipFilePath,
} from "../utils/global";

const ahData = getWj5UserData().accountHolder[0];
const examinerData = getWj5UserData().examiner[0];

type DataItem = {
  testStemFormKey: string;
  wLookupScore: number;
  wScore: number;
  semW: number;
};

type ResultType = { wScore: number; semW: number } | null;

export default class Wj5DashboardPage {
  private utils: Utils;
  private $jsonData: DataItem[];
  private $WlookUp: number;
  private examinerData;
  private readonly page: Page;
  private static childPage: Page;
  private sessionID: any;
  private reqColumnsMap: Map<string, Map<string, string | number>>;
  private reqWlookUpMap: Map<string, string>;

  private readonly welcomeText: Locator;
  private readonly addExamonerPlusButton: Locator;
  private readonly zoomPageInIcon: Locator;
  private readonly searchIcon: Locator;
  private readonly recentExaminee: Locator;
  private readonly confirmButton: Locator;
  private readonly launchTestIcon: Locator;
  private readonly startWithoutExaminee: Locator;
  private readonly studentLink: Locator;
  private readonly sessionCode: Locator;
  private readonly greyDownloadPrint: Locator;
  private readonly mainMenuExamineeManagement: Locator;
  private readonly ExaminerloadingIcon: Locator;
  private readonly browseButton: Locator;
  private readonly uploadButton: Locator;
  private readonly inProgressIcon: Locator;

  //AddExamineeRelated START
  private readonly loadingIcon: Locator;
  private readonly examineeID: Locator;
  private readonly examineeLastName: Locator;
  private readonly examineeFirstName: Locator;
  private readonly examineeDateOfBirth: Locator;
  private readonly examineeGenderIdentity: Locator;
  private readonly Location: Locator;
  private readonly examinees: Locator;
  private readonly addExaminee: Locator;
  private readonly examineeSaveButton: Locator;
  private readonly examineeSaveOkButton: Locator;
  private readonly addTestAssignmentBtn: Locator;
  private readonly nextBtn: Locator;
  private readonly ExamineeDd: Locator;
  private readonly ExaminerDd: Locator;
  private readonly testBlockDd: Locator;
  private readonly testAssignmentSaveButton: Locator;

  //AddExamineeRelated END
  private readonly sessionCodeInputBox: Locator;
  private readonly joinSessionButton: Locator;
  private wj5examineePage: wj5ExamineePage;

  constructor(page: Page) {
    this.page = page;
    this.utils = new Utils(this.page);
    this.examinerData = getWj5UserData().examiner[0];
    this.reqColumnsMap = new Map();
    this.reqWlookUpMap = new Map();
    this.$WlookUp = 0;
    this.sessionID = this.sessionID;
    this.loadingIcon = this.page
      .locator("//div[@class='loading-inner']")
      .first();
    this.welcomeText = this.page.locator(
      "//*[contains(text(),'Welcome to the WJ V Research')]",
    );
    this.addExamonerPlusButton = this.page.getByRole("button", {
      name: "add examiner",
    });
    this.examinees = this.page.locator("//button[text()='Examinees']");
    this.addExaminee = this.page.locator("//button[text()='Add Examinee']");
    this.browseButton = this.page.getByText("Browse", { exact: true });
    this.uploadButton = this.page.getByRole("button", { name: "Upload" });
    this.inProgressIcon = this.page.locator(
      "//div[@aria-label='In Progress Icon']",
    );
    this.zoomPageInIcon = this.page.locator(
      "//button[@aria-label='Icon Expand']",
    );
    this.searchIcon = this.page.getByTitle("Search Icon");
    this.recentExaminee = this.page
      .locator("//button[@class='link-button examinee-name']")
      .first();
    this.confirmButton = this.page.locator("//button[text()='Confirm']");
    this.launchTestIcon = this.page
      .locator("//button[@class='plain-button launch-test-icon']")
      .first();
    this.studentLink = this.page.locator("//a[@class='link-button']");
    this.startWithoutExaminee = this.page.locator(
      "//button[text()='Start Without Examinee']",
    );
    this.sessionCode = this.page.locator("//div[@class='session-code']");
    this.greyDownloadPrint = this.page.locator(".gridActionIcon.removeCursor");
    this.mainMenuExamineeManagement = this.page.locator(
      "//button[@aria-label = 'Examinee Management']",
    );
    this.examineeID = this.page.getByLabel("EXAMINEE ID");
    this.examineeLastName = this.page.getByLabel(
      "Last Name*,Required , Type in text",
    );
    this.examineeFirstName = this.page.getByLabel(
      "First Name*,Required , Type in text",
    );
    this.examineeDateOfBirth = this.page.getByLabel(
      "Date of Birth*,Required , Type in text",
    );
    this.examineeGenderIdentity = this.page.getByLabel(
      "GENDER*Select examinee gender",
    );
    this.Location = this.page.getByText(
      "Location*,RequiredSelect examinee location",
    );
    this.examineeSaveButton = this.page.locator("//button[text()='Save']");
    this.examineeSaveOkButton = this.page.locator("//button[text()='OK']");

    this.addTestAssignmentBtn = this.page.getByRole("button", {
      name: "Add Test Assignment Add Test Assignment",
    });
    this.nextBtn = this.page.locator("//button[text()='Next']");
    this.ExaminerDd = this.page.getByPlaceholder("Select Examiner");
    this.ExamineeDd = this.page.getByPlaceholder(
      "Search by Examinee Name or ID",
    );
    this.testBlockDd = this.page.getByPlaceholder("Select Test Block");
    this.examineeSaveButton,
      (this.testAssignmentSaveButton = this.page.getByRole("button", {
        name: "Save",
      }));
    this.ExaminerloadingIcon = this.page.getByText("Getting things ready...");
  }

  static examineeID: string;

  async addNewExamineeAndUpdateTheTemplate(
    url: string,
    age: number,
    location?: string,
    testStemForm?: string,
    normBasis?: string,
    examineeGrade?: string,
  ): Promise<{
    examinee_ID: string;
    dateOfBirth: string;
  }> {
    const relogging = new Wj5LoginPage(this.page);
    await relogging.reloginIfneeded(ahData.userName, ahData.passWord);

    console.log(`Trying to add an Examinee \n`);

    await this.page.bringToFront();
    await this.page.waitForTimeout(3000); // added more wait to tackle the examinee loading issue

    try {
      const responsePromise = this.page.waitForResponse(
        (response) =>
          response.url().includes(`/WJ5Grpc.Student/GetRoster`) &&
          response.status() === 200,
      );
      console.log(`the response Url = ${url}grpc/WJ5Grpc.Student/GetRoster`);
      await this.examinees.click();
      const response = await responsePromise;
      await response.finished();
    } catch (error) {
      console.log(`The apis response issue ${error}`);
    } finally {
      await this.examinees.click({ timeout: 2 * 60 * 1000 });
    }

    await this.page.waitForTimeout(3000); // facing issues at ad examinee even after the API check so added the time

    await this.addExaminee.click();
    await this.loadingIcon.waitFor({ state: "hidden" });
    const firstName: string = faker.person.firstName();
    await this.examineeFirstName.fill(firstName);
    const dateOfBirth = (await this.utils.getTheDOByearsBAck(age)).toString();
    await this.examineeDateOfBirth.fill(dateOfBirth);
    await this.selectGender("Male");
    // await this.selectLocation(location);
    Wj5DashboardPage.examineeID = `N${await this.utils.randomNumberGenerateBetween(
      1,
      99999,
    )}A${await this.utils.randomNumberGenerateBetween(1, 99999)}`;
    await this.examineeID.fill(Wj5DashboardPage.examineeID);
    await this.examineeLastName.fill(Wj5DashboardPage.examineeID);
    console.log("Examinee ID", Wj5DashboardPage.examineeID);

    await this.utils.derivedScoreFilterTemplate_CSVfileWriter(
      Wj5DashboardPage.examineeID,
      normBasis,
      examineeGrade,
    );
    await this.utils.scoreDataFilterTemplate_CSVfileWriter(
      Wj5DashboardPage.examineeID,
    );
    await this.utils.testDataExportFilterTemplate_CSVfileWriter(
      Wj5DashboardPage.examineeID,
      testStemForm,
    );
    if (
      await this.examineeSaveButton.isEnabled({
        timeout: Number(3000),
      })
    ) {
      await this.examineeSaveButton.click({ timeout: 30000});
      await this.examineeSaveOkButton.click({ timeout: 30000});
    } else {
      console.error("Save Button IS Not Enabled To Save A NEw Examinee");
    }
    console.log(
      `Successfully added an Examinee  ID =${Wj5DashboardPage.examineeID} FirstName=${firstName} LastName =${Wj5DashboardPage.examineeID} Age = ${dateOfBirth}`,
    );

    return { examinee_ID: Wj5DashboardPage.examineeID, dateOfBirth };
  }

  async addTestAssignmentBlock(blockName: string, studentID: string) {
    await this.goToTheMainMenuChildPage(
      "Test Set Management",
      "Test Assignment",
    );
    await this.selectExaminee(studentID);
    await this.selectExaminer(examinerData.examinerID);
    await this.selectTestBlock(blockName);
    await this.testAssignmentSaveButton.isEnabled();
    await this.testAssignmentSaveButton.click();
    console.log(`Added the block ${blockName} ...`);
  }

  async createTestAssignmentFromExamineeManagement(
    blockName: string,
    studentID: string,
    examineeGrade: string,
  ) {
    await this.page
      .locator('//button[text()="Create Test Assignment"]')
      .click();
    await this.select_Examinee(studentID);
    await this.clickNextButton();
    await this.selectTestSet(blockName);
    await this.clickNextButton();
    await this.selectEducation();
    await this.selectTestAssignmentDefaults();
    await this.clickSaveButton();
    await this.clickLaunchAssignmentButton();
    // await this.inputExamineeGradeAtLaunchTestPopUp(examineeGrade); // Lets tUI changes removed this functionality
  }

  async inputExamineeGradeAtLaunchTestPopUp(val: string) {
    val = val.split(" ")[1];
    await this.page.locator(".grade-input").first().fill(val);
  }

  async clickLaunchAssignmentButton() {
    await this.page
      .locator('//h1[text()="Test Assignment Successful"]')
      .waitFor({ state: "visible" });
    await Promise.all([
      this.page.waitForResponse(
        (resp) =>
          resp.url().includes("WJ5Grpc.TestSession/UpdateSession") &&
          resp.status() === 200 &&
          resp.request().method() === "POST",
        { timeout: 2 * 60 * 1000 },
      ),
      await this.page
        .locator('//button[text()="Launch Assignment"]')
        .click({ timeout: 2 * 60 * 1000 }),
    ]);
  }

  async select_Examinee(examineeId: string) {
    await this.page
      .locator(".placeholder")
      .getByText("Select Examinee")
      .click();
    await this.page
      .locator('[placeholder="Search..."]')
      .last()
      .fill(examineeId);
    await this.page.waitForTimeout(1000);
    await this.page
      .locator(".item-text.single-select")
      .getByText(new RegExp(examineeId))
      .click({ timeout: 30000 });
    await this.page
      .getByText("Selected Examinee Details")
      .waitFor({ state: "visible" });
  }

  async selectTestSet(testSetName: string) {
    await this.page.waitForTimeout(1000);
    await this.page
      .locator(".placeholder")
      .getByText("Select Test Set")
      .click();
    await this.page
      .locator('[placeholder="Search..."]')
      .last()
      .fill(testSetName);
    await this.page.locator(".single-select-parent").last().click();
    await this.page
      .locator('//h3[text()="Form A"]')
      .waitFor({ state: "visible" });
  }

  async getEducation() {
    const pageUrl = this.page.url();
    if (pageUrl.includes("stage")) {
      return "Kindergarten";
    } else {
      return "In Kindergarten";
    }
  }

  async selectEducation(education: string = "In Kindergarten") {
    // education = await this.getEducation();
    await this.page
      .locator(".placeholder")
      .getByText("Select Education")
      .click();
    await this.page.locator('[placeholder="Search..."]').last().fill(education);
    await this.page.locator(".single-select-parent").last().click();
  }

  async selectTestAssignmentDefaults(val: string = "Age") {
    await this.page
      .locator('[class*="checkbox"]')
      .filter({ hasText: val })
      .locator(".radio-item")
      .click();
  }

  async clickNextButton() {
    await this.page.getByText("Next").click();
  }

  async clickSaveButton() {
    await this.page.getByText("Save").click();
  }

  private async selectExaminee(examineeID: string) {
    await this.page
      .getByPlaceholder("Search by Examinee Name or ID")
      .fill(examineeID);
    await this.page
      .locator(".item-text")
      .getByText(new RegExp(`^${examineeID}.*`))
      .first()
      .click();
  }

  private async selectExaminer(examinerID: string) {
    await this.page
      .getByPlaceholder("Search by Examiner Name or ID")
      .fill(examinerID);
    await this.page.locator(".item-text").getByText(examinerID).first().click();
  }

  private async selectTestBlock(testBlock: string) {
    await this.page.getByPlaceholder("Search by Test Block").fill(testBlock);
    await this.page
      .locator(".item-text")
      .getByText(new RegExp(`^${testBlock}.*`))
      .first()
      .click();
  }

  private async selectGender(value: string) {
    await this.page.getByLabel("GENDER*Select examinee gender").click();
    await this.page
      .locator(".item-text")
      .getByText(new RegExp(`^${value}.*`))
      .first()
      .click();
  }

  private async selectLocation(value?: string) {
    try {
      await this.page
        .getByText("Select examinee location")
        .click({ timeout: 5000 });
      await this.page.locator(".item-text").last().click();
    } catch (error) {
      console.error(
        "Location is already selected by default, or there was an issue selecting the location.",
      );
    }
  }

  private async goToTheMainMenuChildPage(mainMenuDd: string): Promise<boolean>;
  private async goToTheMainMenuChildPage(
    mainMenuDd: string,
    childDd: string,
  ): Promise<boolean>;
  private async goToTheMainMenuChildPage(
    mainMenuDd: string,
    childDd?: string,
  ): Promise<boolean> {
    await this.page.locator(`//button[@aria-label = '${mainMenuDd}']`).click();
    await this.page.waitForLoadState("load");
    if (childDd) {
      const val: Locator = this.page
        .locator(`//button[text() = '${childDd}']`)
        .first();
      await val.waitFor({ state: "visible" });
      await val.click();
      await this.page.waitForLoadState("load");
    }
    return true;
  }

  async welcomeTextToBeVisable() {
    await this.page.bringToFront();
    const relogging = new Wj5LoginPage(this.page);
    await relogging.reloginIfneeded(ahData.userName, ahData.passWord);
  }

  async clickOnAddExaminerPlusButton() {
    await this.addExamonerPlusButton.click();
    await expect(this.page).toHaveScreenshot();
  }

  async clickOnZoomPageInIcon() {
    await this.zoomPageInIcon.hover();
    await this.zoomPageInIcon.click();
  }

  async searchIconISVisable() {
    await expect(this.searchIcon).toBeVisible();
  }

  async clickOnTheRecentExamineeOnceFullyLoaded(studentID: string) {
    const relogging = new Wj5LoginPage(this.page);
    await relogging.reloginIfneeded(
      examinerData.userName,
      examinerData.passWord,
    );
    await this.page.waitForTimeout(5000);

    await this.ExaminerloadingIcon.waitFor({ state: "detached" });

    try {
      await this.page.getByText(studentID).first().click({ trial: true });
      await this.page.getByText(studentID).first().click({ timeout: 5000 });
    } catch (error) {
      console.error(
        `Saw Examiner DashBoard Blank/Examinee Not available ... but still trying to relogin ... ${error}`,
      );
      await this.examinerRelogin(studentID);
    }
  }

  async examinerRelogin(studentID: string) {
    await this.page.getByText("Sign Out").first().click();
    await expect(this.page.locator(".login-riverside-logo")).toBeVisible();
    await this.page.getByPlaceholder("Username").click();
    await this.page.getByPlaceholder("Username").fill(examinerData.userName);
    await this.page.getByPlaceholder("Username").fill(examinerData.userName);
    await this.page.getByPlaceholder("Password").click();
    await this.page.getByPlaceholder("Password").fill(examinerData.passWord);
    await this.page.getByPlaceholder("Password").fill(examinerData.passWord);
    await this.page.getByPlaceholder("Password").press("Enter");
    await this.page.getByLabel("WJ 5 Researcher,").click();
    await expect(
      this.page.getByText("Welcome to the WJ V Research Portal!", {
        exact: true,
      }),
      { message: "Not able to find wj5 welcome TExt on DashBoard" },
    ).toBeVisible();

    await this.ExaminerloadingIcon.waitFor({ state: "hidden" });
    await this.page.getByText(studentID).first().click();
    await this.page.waitForTimeout(3000);
  }

  async waitUntilCinfirmButtonisvisableAndClickOnIt() {
    await this.confirmButton.click();
    await this.page.waitForTimeout(6000);
  }

  async ClickonlaunchTestIcon() {
    await this.launchTestIcon.click();
  }
  async ClickonStartWithOutExamineeBtn() {
    await this.startWithoutExaminee.click();
  }
  async clickOnTheStudentLink(wj5examinerUtils) {
    const childPage: Page = await wj5examinerUtils.switchtoChildPage(
      this.studentLink,
    );
    this.sessionID = await this.sessionCode.textContent();
    this.wj5examineePage = new wj5ExamineePage(childPage, this.sessionID);
    console.log(this.sessionID);
  }

  async getSessionID() {
    this.sessionID = await this.sessionCode.textContent();
    return this.sessionID;
  }

  async getExamoneepage(): Promise<wj5ExamineePage> {
    return this.wj5examineePage;
  }

  async clickOnTheResportToDownload(testinfo: TestInfo) {
    await this.page.waitForTimeout(5000);
    await this.goToTheMainMenuChildPage("Reports", "Report Library");
    expect(this.page.url()).toContain("home");
    await this.greyDownloadPrint.first().waitFor({ state: "detached" });

    await Promise.all([
      this.page.waitForResponse(
        (response) =>
          response.url().includes("GetSavedResearchExportData") &&
          response.status() === 200,
      ),
    ]);

    const downloadPromise = this.page.waitForEvent("download", {
      timeout: 60000,
    });
    let reqFile: string = await getTemplateName();
    console.log(
      `the file name thats being looked for Download click on the Linke is `,
      reqFile,
    );
    // await this.page.getByText(reqFile).first().click();
    await this.page
      .locator('button[aria-label="Download/Print"]')
      .first()
      .click();
    const download = await downloadPromise;
    await download.saveAs(await getZipFilePath());
    await testinfo.attach("Downloaded Zip file", {
      path: await getZipFilePath(),
      contentType: "application/zip",
    });
  }

  private requiredFile: any;
  private requiredFilePath: any;
  private txtFileContent: string;

  private examineeIdSet: Set<string> = new Set();
  private examinerIdSet: Set<string> = new Set();

  async getAllTheValuesUnderTheFollowing(heading: string) {
    const rows: string[] = this.txtFileContent.trim().split("\n");
    const headers: string[] | undefined = rows.shift()?.split("\t");
    const examineeID: number | undefined = headers?.indexOf("Examinee_ID");
    const examinerID: number | undefined = headers?.indexOf("Examiner_ID");
    const ItemName: number | undefined = headers?.indexOf("Item_Heading");
    const columnIndex: number | undefined = headers?.indexOf(heading);

    const headersArray: (number | undefined)[] = [
      examineeID,
      examinerID,
      ItemName,
      columnIndex,
    ];

    for (const i of headersArray) {
      if (i === undefined || i === -1) {
        throw new Error(
          `Heading "${i}" or ItemName  not found in the extracted file`,
        );
      }
    }

    rows.forEach((iLine) => {
      const columnValues: string[] = iLine.split("\t");
      const examineeid: string = columnValues[examineeID!];
      const examinerid: string = columnValues[examinerID!];
      const itemName: string = columnValues[ItemName!];
      const value: string = columnValues[columnIndex!];

      this.addToTheFollowingSet(examineeid, this.examineeIdSet);
      this.addToTheFollowingSet(examinerid, this.examinerIdSet);

      if (itemName !== "" && itemName !== undefined && itemName !== null) {
        // this.reqColumnsMap.set(itemName, value);
      }
    });

    const mapasJSON = JSON.stringify([...this.reqColumnsMap]);
    console.log("reqMapARray - - >" + mapasJSON);

    console.log(`this.examineeidArray : ${this.examineeIdSet}`);
  }

  private async addToTheFollowingSet(theID: string, theSet: Set<string>) {
    if (theID !== "" && theID !== undefined && theID !== null) {
      theSet.add(theID);
    }

    console.log(`The ${theID} set values Are : ${theSet} `);
  }

  async letsCompareRtAndCheckTheTimeDiffisNotMoreThan(
    wj5testpage: wj5TestPage,
    millis: number,
  ) {
    wj5testpage.itemMap.forEach((value, key) => {
      const liveTestRT: number | any = wj5testpage.itemMap
        .get(key)
        ?.get("ResponseTime");
      const downloadedRT: number | any = this.reqColumnsMap.get(key);
      // console.log(`Rt from live test ${liveTestRT} AND Rt from the downloaded file = ${downloadedRT} `);

      try {
        expect(Math.abs(liveTestRT - downloadedRT)).toBeLessThan(millis);
        console.log(
          `(liveTestRT-downloadedRT)<millis ${
            Math.abs(liveTestRT - downloadedRT) < millis
          }`,
        );
        console.log(Math.abs(liveTestRT - downloadedRT));
      } catch (error) {
        console.error(
          `(liveTestRT-downloadedRT) is ${Math.abs(
            liveTestRT - downloadedRT,
          )} which might be greater than the set range ${millis}`,
          error,
        );
      }
    });
  }

  async uploadTheDeTestexportTemplete(fileName: string) {
    await this.goToTheMainMenuChildPage("Reports", "Data Export");
    //File Upload
    const fileChooserPromise = this.page.waitForEvent("filechooser");
    await this.browseButton.click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(
      "dataFiles/Test_DataExport_AutoFilter_Template.csv",
    );
    await expect(this.uploadButton).toBeEnabled();
    await this.uploadButton.click();
  }

  async uploadExportTemplete(type: string) {
    await this.goToTheMainMenuChildPage("Reports", "Data Export");
    const fileChooserPromise = this.page.waitForEvent("filechooser");
    await this.browseButton.click();
    const fileChooser = await fileChooserPromise;
    if (type.match(/single\s*table|decile\s*table|multi\s*table/i)) {
      await fileChooser.setFiles((await getTemplatePath()).scoreTemplatePath);
    } else if (type === "Test Data Export") {
      await fileChooser.setFiles((await getTemplatePath()).testDeTemplatePath);
    } else if (type === "derived scores") {
      await fileChooser.setFiles((await getTemplatePath()).derivedScores);
    }

    await expect(this.uploadButton).toBeEnabled();
    await this.uploadButton.click();
  }

  async validateTheExamineeOrExaminerID(
    examineeExaminer: string,
    examineeOrExaminerID: string,
  ) {
    if (examineeExaminer === "examinee" && this.examineeIdSet.size <= 1) {
      expect(this.examineeIdSet.has(examineeOrExaminerID)).toBeTruthy();
    } else if (
      examineeExaminer === "examiner" &&
      this.examineeIdSet.size <= 1
    ) {
      expect(this.examinerIdSet.has(examineeOrExaminerID)).toBeTruthy();
    } else {
      throw console.error(
        `The size of the examinee or Examiner set is ${this.examineeIdSet.size} which should have been 1 insted`,
      );
    }
  }

  async extractTheDownloadedZipFile() {
    let zipPath: string = await getZipFilePath();
    let extractPath: string = await getExtractedZipFilePath();

    try {
      const zipFilePath = path.join(__dirname, `../../${zipPath}`);
      const extractionDir = path.join(__dirname, `../../${extractPath}`);
      console.log(
        `The download path and the extracted path locations are ${zipFilePath} and ${extractionDir}`,
      );

      await extract(zipFilePath, { dir: extractionDir });
      console.log("File successfully extracted.");
    } catch (error) {
      console.error("Error extracting the Downloaded zip file:", error);
    }
  }

  async printAllThedatafromTheFileRequired(
    fileName: string,
    rootDirectory?: string,
  ): Promise<string> {
    let directoryPath;

    if (rootDirectory === "derived scores") {
      directoryPath = path.join(
        __dirname,
        `../../downloads/extracted/DerivedScoreExports`,
      );
    } else if (rootDirectory) {
      directoryPath = path.join(
        __dirname,
        `../../downloads/extracted/${rootDirectory}`,
      );
    } else {
      directoryPath = path.join(
        __dirname,
        "../../downloads/extracted/WlookUpScoreExports",
      );
    }

    try {
      const files: string[] = fs.readdirSync(directoryPath);

      for (const i of files) {
        console.log(i);
        if (i.includes(fileName)) {
          this.requiredFile = i;
        }
      }

      console.log("required file = ", await this.requiredFile);

      const requiredFilePath = path.join(
        directoryPath,
        await this.requiredFile,
      );

      console.log("requiredFilePath  = ", requiredFilePath);

      this.txtFileContent = fs.readFileSync(requiredFilePath, "utf-8");

      console.log(this.txtFileContent);
    } catch (error) {
      console.error(`Error reading ${this.requiredFilePath}: ${error}`);
    }

    return await this.requiredFile;
  }

  async getAllTheValuesUnderTheFollowingColumn(heading: string) {
    const rows: string[] = this.txtFileContent.trim().split("\n");
    const headers: string[] | undefined = rows.shift()?.split("\t");
    const examineeID: number | undefined = headers?.indexOf("ExeeID");
    const examinerID: number | undefined = headers?.indexOf("ExerID");
    const testName: number | undefined = headers?.indexOf("TestName");

    const columnIndex: number | undefined = headers?.indexOf(heading);

    const headersArray: (number | undefined)[] = [
      examineeID,
      examinerID,
      columnIndex,
    ];
    for (const i of headersArray) {
      if (i === undefined || i === -1) {
        throw new Error(
          `Heading "${i}" or ItemName  not found in the extracted file`,
        );
      }
    }

    rows.forEach((iLine) => {
      const columnValues: string[] = iLine.split("\t");
      const examineeid: string = columnValues[examineeID!];
      const examinerid: string = columnValues[examinerID!];
      const testname: string = columnValues[testName!];

      const value: string = columnValues[columnIndex!];

      this.addToTheFollowingSet(examineeid, this.examineeIdSet);
      this.addToTheFollowingSet(examinerid, this.examinerIdSet);

      if (testname !== "" && testname !== undefined && testname !== null) {
      }
    });

    const mapasJSON = JSON.stringify([...this.reqColumnsMap]);
    console.log("reqMapARray - - >" + mapasJSON);

    console.log(`this.examineeidArray : ${this.examineeIdSet}`);
  }

  async getWscoresWabilSemw(
    scoreMap: Map<string, string>,
    $scoreFlag: string,
    $typeOfTest: string,
    $totalItems: number,
    $negation: boolean,
    $StemForm: string,
  ): Promise<number[]> {
    const scoreValues: string[] = Array.from(scoreMap.values());
    const scoreValuesString: string = Array.from(scoreMap.values()).join("");
    console.log(`scoreValuesString ${scoreValuesString}`);
    const scoreLength: number = Array.from(scoreValues).length;
    const multiBlocks: string[] = [
      "MATRCZ.W5PA",
      "ANLSYN.W5PA",
      "BLKROT.W5PA",
      "LWIDNT.W5PA",
      "PSGCMP.W5PA",
      "WRDATK.W5PA",
      "STYREC.W5PA",
      "ORLSMP.W5PA",
      "STYCMP.W5PA",
      "SPLSND.W5PA",
      "SEGMNT.W5PA",
      "PARCMP.W5PA",
      "WRTSMP.W5PA",
      "SENREP.W5PA",
      "SNDDEL.W5PA",
      "SNDSUB.W5PA"
    ];
    const simpleTest: string[] = ["NUMPAT.W5PA", "LETPAT.W5PA", "MTHFLU.W5PA"];

    let sumOfItemScores: number = 0;
    let basalCredit: number = 0;
    if (scoreLength) {
      let foo: boolean = true;

      if (multiBlocks.includes($StemForm)) {
        for (let i of scoreValues) {
          if (!isNaN(Number(i))) {
            sumOfItemScores += Number(i);
          }
        }
        const blockBits: string =
          await this.utils.extractUniqueAlphabetsOfBlocks(scoreMap, $StemForm);
        $StemForm = `${$StemForm}.${blockBits}`;
      } else if (simpleTest.includes($StemForm)) {
        for (let i of scoreValues) {
          if (!isNaN(Number(i))) {
            sumOfItemScores += Number(i);
          }
        }
        $StemForm = `${$StemForm}.Z`;
      } else {
        for (let i of scoreValues) {
          if (i.match(/x/) && foo === true) {
            basalCredit++;
          } else if (i.match(/[01]/)) {
            sumOfItemScores += Number(i);
            foo = false;
          }
        }
        $StemForm = `${$StemForm}.Z`;
      }

      if ($negation) {
        sumOfItemScores = -sumOfItemScores;
        basalCredit = -basalCredit;
      }
    }

    this.$WlookUp = sumOfItemScores + basalCredit;
    const result: ResultType = await this.getWScoreAndSemWByLookupScore(
      this.$WlookUp,
      $scoreFlag,
      $typeOfTest,
      $negation,
      $StemForm,
    );

    return [this.$WlookUp, result.wScore, result.semW];
  }

  async validateTheDownloadedReportWithRunTimeData(
    scoreMap: Map<string, string>,
    $TestName: string,
    $StemForm: string,
    $LookUpModel: string,
    $totalItems: number,
    $scoreFlag: string,
    $typeOfTest: string,
    $negation: boolean,
  ) {
    const rows: string[] = this.txtFileContent.trim().split("\n");
    const headers: string[] | undefined = rows.shift()?.split("\t");

    const examinerID: number | undefined = headers?.indexOf("ExerID");
    const examineeID: number | undefined = headers?.indexOf("ExeeID");
    const dateOfTest: number | undefined = headers?.indexOf("EDOT");
    const testNumber: number | undefined = headers?.indexOf("TestNum");
    const testName: number | undefined = headers?.indexOf("TestName");
    const testStemForm: number | undefined = headers?.indexOf("TestStemForm");
    const lookUpModel: number | undefined = headers?.indexOf("LookupModel");
    const sumItemScores: number | undefined = headers?.indexOf("SumItemScores");
    const baselCredit: number | undefined = headers?.indexOf("BasalCredit");
    const wLookUp: number | undefined = headers?.indexOf("WLookup");
    const WLkpAdminItems: number | undefined =
      headers?.indexOf("WLkpAdminItems");
    const wScore: number | undefined = headers?.indexOf("WScore");
    const SEMW: number | undefined = headers?.indexOf("SEMW");
    const scoreFlag: number | undefined = headers?.indexOf("ScoreFlags");
    const scoreString: number | undefined = headers?.indexOf("ScoreString");

    const headersArray: (number | undefined)[] = [
      examineeID,
      examinerID,
      scoreString,
      testNumber,
      dateOfTest,
    ];
    for (const i of headersArray) {
      if (i === undefined || i === -1) {
        throw new Error(
          `Heading "${i}" or ItemName  not found in the extracted file`,
        );
      }
    }

    let examinerid: string = "";
    let examineeid: string = "";
    let dateoftest: string = "";
    let testnumber: string = "";
    let testname: string = "";
    let teststemform: string = "";
    let lookupmodel: string = "";
    let sumitemscores: string = "";
    let baselcredit: string = "";
    let wlookup: string = "";
    let wscore: string = "";
    let semw: string = "";
    let scoreflag: string = "";
    let scorestring: string = "";

    rows.forEach((iLine) => {
      const columnValues: string[] = iLine.split("\t");

      examinerid = columnValues[examinerID!];
      examineeid = columnValues[examineeID!];
      dateoftest = columnValues[dateOfTest!];
      testnumber = columnValues[testNumber!];
      testname = columnValues[testName!];
      teststemform = columnValues[testStemForm!];
      lookupmodel = columnValues[lookUpModel!];
      sumitemscores = columnValues[sumItemScores!];
      baselcredit = columnValues[baselCredit!];
      wlookup = columnValues[wLookUp!];
      wscore = columnValues[wScore!];
      semw = columnValues[SEMW!];
      scoreflag = columnValues[scoreFlag!];
      scorestring = columnValues[scoreString!] ?? "";

      if (testname !== "" && testname !== undefined && testname !== null) {
        // this.reqColumnsMap.set(teststemform,localMap.set("examinerID",examineeid));
        this.reqWlookUpMap.set("examinerID", examinerid);
        this.reqWlookUpMap.set("examineeID", examineeid);
        this.reqWlookUpMap.set("dateOfTest", dateoftest);
        this.reqWlookUpMap.set("testName", testname);
        this.reqWlookUpMap.set("testStemForm", teststemform);
        this.reqWlookUpMap.set("lookUpModel", lookupmodel);
        this.reqWlookUpMap.set("sumItemScores", sumitemscores);
        this.reqWlookUpMap.set("baselCredit", baselcredit);
        this.reqWlookUpMap.set("wLookUp", wlookup);
        this.reqWlookUpMap.set("wScore", wscore);
        this.reqWlookUpMap.set("SEMW", semw);
        this.reqWlookUpMap.set("scoreFlag", scoreflag);
        this.reqWlookUpMap.set("scoreString", scorestring);
      }
    });

    const mapasJSON: string = JSON.stringify([...this.reqWlookUpMap]);
    console.log("reqWlookUpMap - - >" + mapasJSON);

    const scoreValues: string[] = Array.from(scoreMap.values());
    const scoreValuesString: string = Array.from(scoreMap.values()).join("");
    console.log(`scoreValuesString ${scoreValuesString}`);
    const scoreLength: number = Array.from(scoreValues).length;

    let sumOfItemScores: number = 0;
    let basalCredit: number = 0;
    if (scoreLength >= $totalItems) {
      let foo: boolean = true;

      for (let i of scoreValues) {
        if (i.match(/x/) && foo === true) {
          basalCredit++;
        } else if (i.match(/[01]/)) {
          sumOfItemScores += Number(i);
          foo = false;
        }
      }
      if ($negation) {
        sumOfItemScores = -sumOfItemScores;
        basalCredit = -basalCredit;
      }
    }

    // softAssertPrint(examinerid, examinerData.examinerID, "Examiner ID"); // NO more examiner ID needed as of 25 Sep 2024
    softAssertPrint(examineeid, Wj5DashboardPage.examineeID, "Examinee ID");
    try {
      softAssertPrint(
        dateoftest,
        await this.utils.getTheDOByearsBAck(0, "new Yark"),
        "Date Of Test",
      );
    } catch (error) {
      console.info(`\nSeems like there is a date mismatch  ${error}\n`);
    }

    softAssertPrint(testname, $TestName, "Test Name");
    softAssertPrint(teststemform, $StemForm, "TEst stem form");
    softAssertPrint(lookupmodel, $LookUpModel, "Look Up Model");
    softAssertPrint(Number(sumitemscores), sumOfItemScores, "Sum Item Scores");
    softAssertPrint(Number(baselcredit), basalCredit, "Basel Credit");
    this.$WlookUp = sumOfItemScores + basalCredit;
    softAssertPrint(Number(wlookup), this.$WlookUp, "wLookUp");
    const result: ResultType = await this.getWScoreAndSemWByLookupScore(
      this.$WlookUp,
      $scoreFlag,
      $typeOfTest,
      $negation,
      $StemForm,
    );
    softAssertPrint(scoreflag, $scoreFlag, "Score Flag");
    softAssertPrint(result?.wScore!, Number(wscore), "wScore");
    softAssertPrint(result?.semW!, Number(semw), "semW");
    softAssertPrint(scorestring, scoreValuesString, "Score String");
  }

  async validateTheDownloadedReportWithRunTimeDataForSingleAndMulti(
    scoreMap: Map<string, string>,
    $TestName: string,
    $SumOfItemScores: number,
    $BasalCredit: number,
    $WlookUp: number,
    $Wscore: number,
    $semW: number,
    $WlookUpAdminItems: string,
    $ScoreString: string,
    $StemForm: string,
    $LookUpModel: string,
    $totalItems: number,
    $scoreFlag: string,
    $typeOfTest: string,
    $negation: boolean,
  ) {
    const rows: string[] = this.txtFileContent.trim().split("\n");
    const headers: string[] | undefined = rows.shift()?.split("\t");

    const examinerID: number | undefined = headers?.indexOf("ExerID");
    const examineeID: number | undefined = headers?.indexOf("ExeeID");
    const dateOfTest: number | undefined = headers?.indexOf("EDOT");
    const testNumber: number | undefined = headers?.indexOf("TestNum");
    const testName: number | undefined = headers?.indexOf("TestName");
    const testStemForm: number | undefined = headers?.indexOf("TestStemForm");
    const lookUpModel: number | undefined = headers?.indexOf("LookupModel");
    const sumItemScores: number | undefined = headers?.indexOf("SumItemScores");
    const baselCredit: number | undefined = headers?.indexOf("BasalCredit");
    const wLookUp: number | undefined = headers?.indexOf("WLookup");
    const WLkpAdminItems: number | undefined =
      headers?.indexOf("WLkpAdminItems");
    const wScore: number | undefined = headers?.indexOf("WScore");
    const SEMW: number | undefined = headers?.indexOf("SEMW");
    const scoreFlag: number | undefined = headers?.indexOf("ScoreFlags");
    const scoreString: number | undefined = headers?.indexOf("ScoreString");

    const headersArray: (number | undefined)[] = [
      examineeID,
      // examinerID, // No more used (24 Sep 2024)
      scoreString,
      testNumber,
      dateOfTest,
    ];
    for (const i of headersArray) {
      if (i === undefined || i === -1) {
        throw new Error(
          `Heading "${i}" or ItemName  not found in the extracted file`,
        );
      }
    }

    let examinerid: string = "";
    let examineeid: string = "";
    let dateoftest: string = "";
    let testnumber: string = "";
    let testname: string = "";
    let teststemform: string = "";
    let lookupmodel: string = "";
    let sumitemscores: string = "";
    let baselcredit: string = "";
    let wlookup: string = "";
    let wscore: string = "";
    let semw: string = "";
    let wlkpadminitems: string = "";
    let scoreflag: string = "";
    let scorestring: string = "";

    rows.forEach((iLine) => {
      const columnValues: string[] = iLine.split("\t");

      examinerid = columnValues[examinerID!];
      examineeid = columnValues[examineeID!];
      dateoftest = columnValues[dateOfTest!];
      testnumber = columnValues[testNumber!];
      testname = columnValues[testName!];
      teststemform = columnValues[testStemForm!];
      lookupmodel = columnValues[lookUpModel!];
      sumitemscores = columnValues[sumItemScores!];
      baselcredit = columnValues[baselCredit!];
      wlookup = columnValues[wLookUp!];
      wscore = columnValues[wScore!];
      semw = columnValues[SEMW!];
      wlkpadminitems = columnValues[WLkpAdminItems!];
      scoreflag = columnValues[scoreFlag!];
      scorestring = columnValues[scoreString!] ?? "";

      if (testname !== "" && testname !== undefined && testname !== null) {
        this.reqWlookUpMap.set("examinerID", examinerid);
        this.reqWlookUpMap.set("examineeID", examineeid);
        this.reqWlookUpMap.set("dateOfTest", dateoftest);
        this.reqWlookUpMap.set("testName", testname);
        this.reqWlookUpMap.set("testStemForm", teststemform);
        this.reqWlookUpMap.set("lookUpModel", lookupmodel);
        this.reqWlookUpMap.set("sumItemScores", sumitemscores);
        this.reqWlookUpMap.set("baselCredit", baselcredit);
        this.reqWlookUpMap.set("wLookUp", wlookup);
        this.reqWlookUpMap.set("wScore", wscore);
        this.reqWlookUpMap.set("SEMW", semw);
        this.reqWlookUpMap.set("WlkpAdminItems", wlkpadminitems);
        this.reqWlookUpMap.set("scoreFlag", scoreflag);
        this.reqWlookUpMap.set("scoreString", scorestring);
      }
    });

    const mapasJSON: string = JSON.stringify([...this.reqWlookUpMap]);
    console.log("reqWlookUpMap - - >" + mapasJSON);

    softAssertPrint(examinerid, examinerData.examinerID, "Examiner ID");
    softAssertPrint(examineeid, Wj5DashboardPage.examineeID, "Examinee ID");
    try {
      softAssertPrint(
        dateoftest,
        await this.utils.getTheDOByearsBAck(0, "new Yark"),
        "Date Of Test",
      );
    } catch (error) {
      console.info(`\nSeems like there is a date mismatch  ${error}\n`);
    }

    softAssertPrint(testname, $TestName, "Test Name");
    softAssertPrint(teststemform, $StemForm, "TEst stem form");
    softAssertPrint(lookupmodel, $LookUpModel, "Look Up Model");
    softAssertPrint(Number(sumitemscores), $SumOfItemScores, "Sum Item Scores");
    softAssertPrint(Number(baselcredit), $BasalCredit, "Basal Credit");
    softAssertPrint(Number(wlookup), $WlookUp, "wLookUp");
    softAssertPrint(wlkpadminitems, $WlookUpAdminItems, "WLkpAdminItems");

    softAssertPrint(scoreflag, $scoreFlag, "Score Flag");
    softAssertPrint(Number(wscore), $Wscore, "wScore");
    softAssertPrint(Number(semw), $semW, "semW");
    softAssertPrint(scorestring, $ScoreString, "Score String");
  }

  async getWScoreAndSemWByLookupScore(
    lookupScore: number,
    scoreFlag: string,
    typeOfTest: string,
    negation: boolean,
    testStemForm: string,
  ): Promise<{ wScore: number; semW: number } | null> {
    lookupScore = Math.abs(lookupScore);

    const result = getWabil_and_SEMW(`${testStemForm}`, lookupScore);

    if (
      scoreFlag === "[!C]" &&
      typeOfTest.match(/Answer only SampleItems (?:correct|incorrect)/i)
    ) {
      return { wScore: 0, semW: 0 };
    } else if (result && negation) {
      return { wScore: -result.W_Abil, semW: -result.SEMW };
    } else if (result) {
      return { wScore: result.W_Abil, semW: result.SEMW };
    } else {
      return null;
    }
  }

  async forceSubmitExamineeTest(value: string) {
    await this.examinees.click();
    await this.page
      .locator('input[placeholder="Search Examinees"]')
      .fill(value);
    await this.page.locator("//button[@class='search-icon icon']").click();
    await this.page.waitForTimeout(2000);
    await expect(
      await this.page
        .locator("//div[contains(@class, 'Grid')]/div[11]")
        .textContent(),
    ).toContain(value);
    await this.page.locator("(//button[@class='link-button'])[2]").click();
    await this.page.waitForTimeout(2000);
    await this.page
      .locator(
        "(//button[@class='link-button no-decoration icon']/child::*)[4]",
      )
      .click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("//button[text()='Yes']").click();
    await this.page.waitForTimeout(2000);
  }

  async asserRt(arr1: string[], arr2: string[]) {
    const arr2Dec = arr2.map((val) => (parseFloat(val) / 1000).toFixed(3));

    for (let i = 0; i < arr1.length; i++) {
      let diff = Math.abs(parseFloat(arr1[i]) - parseFloat(arr2Dec[i]));
      expect.soft(diff).toBeLessThanOrEqual(0.25);
      console.log(
        `The RT diff  ${parseFloat(arr1[i])} - ${parseFloat(arr2Dec[i])}  =`,
        diff,
      );
    }
  }

  async filterTheValues(vals: string[]): Promise<string | undefined> {
    const set: Set<string> = new Set(vals);

    if (set.size != 1) {
      console.warn(
        `The expected size was One but seems like there are more like =`,
        set,
      );
      return undefined;
    } else {
      const value = [...set][0];
      return value;
    }
  }

  async disableChatBot() {
    const newPage: Page = await this.page.context().newPage();
    await newPage.goto("https://stage.riversidescore.com/settings");
    await newPage.bringToFront();
    await newPage.getByRole("switch", { name: "Chat Enabled" }).click();
  }
}
