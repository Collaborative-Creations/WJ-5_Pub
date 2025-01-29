import {
  test,
  expect,
  Page,
  Locator,
  ElementHandle,
} from "../base/basePageFixtures";
import { softAssertArray, softAssertPrint } from "../utils/assertions";
import {
  calculatePRconfBand,
  calculateT_Score,
  calculateWabilConfBand,
  getAE_Equiv,
  getAgeYM,
  getCAMOS,
  getCompositeSEMW,
  getCompositeW_abil,
  getConfidenceRange,
  getGE_Equiv,
  getGradePlacement,
  getGradeYM,
  getREFW_SDLo_SDUp,
  getRPI_and_WDIFF_Data,
  getSDUsed,
  getSEMSS,
  getSEMT,
  getStdScore_Computed,
  getStdScore_Display,
  getTScoreComputed,
  getT_Score_Display,
  getWDIFF,
  getZ_Score,
  get_PR_SS_PR_Classification,
  setWabilSemw,
} from "../utils/derivedScoresEquations";
import Utils from "../utils/utils";
import wj5ExamineePage from "./wj5_examinee.page";
import { format } from "date-fns";

export default class wj5TestPage {
  private readonly page;
  private utils: Utils;

  readonly itemMap: Map<string, Map<string, string | number>>;
  private scoreMap: Map<string, string>;
  private contribTaskStems: string[];
  private index: number;

  private readonly nextORendTestButton: Locator;
  private readonly letsBeginButton: Locator;
  private readonly startTestButton: Locator;
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly videoPlayButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly replayButton: Locator;
  private readonly endSessionButton: Locator;
  private readonly areYouSureYesButton: Locator;
  private readonly testNameAtAdminOverview: Locator;

  private readonly sspPopUpTestName: Locator;
  private readonly multiRadioButtons: Locator;
  private readonly dropDowns: Locator;
  private readonly administrationOverviewPageTestName: Locator;
  private readonly nextButton: Locator;
  private readonly sideNavLock: Locator;
  private readonly submitTestBlockAndFinsihAdminstration: Locator;
  private readonly sspDropDown: Locator;
  private readonly syncDevicePopUp: Locator;
  private readonly mainNavigation: Locator;
  private readonly mainNavigationHome: Locator;
  private readonly beginNextTestButton: Locator;
  private readonly nextTestSelectValue: Locator;
  private readonly loading: Locator;
  private readonly startTimer: Locator;
  private readonly buttonPlus: Locator;
  private readonly timerStopPopup: Locator;
  private readonly startPracticeExercise: Locator;
  private readonly startTheTimer: Locator;
  private readonly activateTabletControl: Locator;
  private readonly doneButton: Locator;
  private readonly runingTimer: Locator;
  private readonly stoppedTimer: Locator;
  private readonly doneIcon: Locator;
  private readonly endSessionReviewBtn: Locator;
  private readonly audioPlayer: Locator;
  private readonly audioPlayButton: Locator;
  private readonly ResolveBtn: Locator;
  private readonly ScoreEntryFields: Locator;
  private readonly ScoreLaterSubmit: Locator;
  private readonly ScoreLaterContinue: Locator;
  private readonly stopIcon: Locator;
  private readonly scoreText: Locator;
  private readonly introDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.utils = new Utils(this.page);

    this.itemMap = new Map();
    this.scoreMap = new Map();
    this.contribTaskStems = new Array();
    this.index = 1;

    this.nextORendTestButton = this.page.locator(
      "//button[@class='plain-button next-item-button' or @class='plain-button nav-button']",
    );

    this.letsBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
    this.startTestButton = this.page.locator("//button[text()='Start Test']");
    this.videoPlayButton = this.page.locator("//div[@class='play-circle']");
    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button, button[class^='blue-button']",
    );
    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button",
    );
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button",
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();

    this.replayButton = this.page.locator(
      '//button[@class="plain-button replay-button"]',
    );

    this.testNameAtAdminOverview = this.page.locator(".overview-header h2");

    this.endSessionButton = this.page.getByRole("button", {
      name: "End Session",
    });

    this.areYouSureYesButton = this.page.getByRole("button", { name: "Yes" });

    this.sspPopUpTestName = this.page.locator(".popup-mid-title>b");

    this.multiRadioButtons = this.page.locator(
      "//div[@class= 'observations']//div[@class='option-wrapper']//button",
    );

    this.dropDowns = this.page.locator(
      "//div[@class= 'observations']//button[@class='select-box']",
    );

    this.administrationOverviewPageTestName = this.page.locator(".top-line>h2");

    this.nextButton = this.page.locator("//button[text()='Next']");
    this.sideNavLock = this.page.locator(".side-nav-locked-overlay");
    this.submitTestBlockAndFinsihAdminstration = this.page.getByRole("button", {
      name: "Submit Test Assignment",
    });

    this.sspDropDown = this.page.locator(".starting-point-dropdown");
    this.syncDevicePopUp = this.page.locator(".popup-outer.done");
    this.mainNavigation = this.page.locator(".plain-button.menu-button");
    this.mainNavigationHome = this.page.locator(
      ".main .plain-button:nth-child(2)",
    );
    this.beginNextTestButton = this.page.getByText("Begin Next Test");
    this.nextTestSelectValue = page.locator(".selected-value");
    this.loading = page.locator(".CircleProgress_mcs_percentage").first();
    this.startTimer = page.locator(
      `//button[text()="Start Timer" or text()="START TIMER"]`,
    );
    this.buttonPlus = page.locator('//button[text()="+"]');
    this.timerStopPopup = page.locator('//div[@class="time-stop"]');
    this.startPracticeExercise = page.getByRole("button", {
      name: "Start Practice Exercise",
    });
    this.startTheTimer = page.getByRole("button", {
      name: "Start the timer and display",
    });
    this.activateTabletControl = page.locator(
      '//button[@class="plain-button examinee-cursor-button"]',
    );
    this.doneButton = page.locator('//button[text()="Done"]');
    this.runingTimer = page.locator('//div[@class="timer active"]');
    this.stoppedTimer = page.locator('//div[@class="timer"]');
    this.doneIcon = page.locator('//div[@class="fade-in"]');
    this.endSessionReviewBtn = page.locator("//button[text()='Review']");
    this.audioPlayer = this.page.locator(".audio-player");
    this.audioPlayButton = this.page.locator(".small-blue-button");
    this.ResolveBtn = this.page.locator(
      "//button[@class='link-button']/b[text()='Resolve']",
    );
    this.ScoreEntryFields = this.page.locator("//input[@class='score-text']");
    this.ScoreLaterSubmit = this.page.locator("//button[text()='Submit']");
    this.ScoreLaterContinue = this.page.locator(
      "//button[@class='blue-button-no-margin' or text()='Continue']",
    );
    this.stopIcon = this.page.locator("div[class='icon']");
    this.scoreText = this.page.locator("input[class='score-text']");
    this.introDetails = this.page.locator("//span[@class='item-text']").first();
  }

  async selectThecheckBox(radioButton: number, info?: string) {
    await this.multiRadioButtons.nth(radioButton).click();
  }

  async selectTheDropdownOPtion(
    dropDown: number,
    dropDownOpt: string,
    info?: string,
  ) {
    await this.dropDowns.nth(dropDown).click();
    await this.page.waitForTimeout(650);
    // await this.dropDowns.locator(this.dropDownOption).nth(dropDownOption).click();
    await this.dropDowns
      .locator("//following-sibling::ul/li//*[text()='" + dropDownOpt + "']")
      .click();
  }

  //   async clickOnNextButton() {
  //     await this.nextButton.click();
  //   }

  async completeTheTestSessionIntro(acceptButtonMethod: void): Promise<void> {
    await this.page.bringToFront();

    // await this.page.waitForTimeout(3000);

    await expect(this.nextORendTestButton).toBeVisible();

    while (await this.nextORendTestButton.isVisible()) {
      try {
        await this.nextORendTestButton.click();
      } catch (error) {
        acceptButtonMethod;
        console.error(" Cant click on ");
      }

      // await this.page.waitForSelector(this.nextORendTestButton, { visible: true }, { timeout: 1000 });

      await this.page.waitForTimeout(1000);
    }
  }

  async getSspPopUpTestName(): Promise<string> {
    return await this.sspPopUpTestName.textContent();
  }

  async getPageUrl() {
    return await this.page.url();
  }

  async pickTheTestNeeded(
    testName: string,
    ssp: string,
    examinee: wj5ExamineePage,
  ) {
    await this.page.bringToFront();
    await this.page.waitForTimeout(Number(2000));
    if (
      (await this.administrationOverviewPageTestName.isVisible()) &&
      (await this.administrationOverviewPageTestName.textContent()).includes(
        testName,
      )
    )
      return;
    let popUpCheck: boolean = await this.syncDevicePopUp.isVisible();
    const popUp: boolean = await this.page
      .locator(".popup-mid-title")
      .isVisible();

    if (popUpCheck) {
      examinee.clickOnAcceptBUtton();
    }

    const topLine: Locator = await this.page.locator(".top-line");

    console.log(`await topLine.isVisible() : ${await topLine.isVisible()}`);

    if (
      (await topLine.isVisible()) &&
      !(await this.getPageUrl()).includes("stage")
    ) {
      await this.page.locator(".blue-button").getByText("Letʼs Begin").click();
    }

    await this.page.waitForTimeout(2000);

    const introText: Locator = await this.page.locator(".intro-text");

    console.log(`await introText.isVisible() = ${await introText.isVisible()}`);

    if (await introText.isVisible()) {
      await this.page.locator(".plain-button.menu-button").click();
      await this.page.locator(".main .plain-button:nth-child(3)").click();
      await this.page
        .locator(".second-level .test-name")
        .getByText(testName, { exact: true })
        .click();
    } else {
      return;
    }
  }
  
  async clickOnLetsBeginButtonAndStartTest(
    testName: string,
    ssp: string,
    i: number,
  ) {
    expect(await this.testNameAtAdminOverview.textContent(), {
      message: "The test name didnt match at Administration Overview page",
    }).toContain(testName);
    console.log(await this.testNameAtAdminOverview.textContent());
    // if (i == 0)
    await this.letsBeginButton.click();
    if (ssp === "All Examinees") {
      await this.startTestButton.click();
    } else {
      await this.setTheSSPto(ssp);
      await this.startTestButton.click();
    }
  }

  async setTheSSPto(sspOption: string) {
    await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
    await this.page.waitForTimeout(Number(3000));
    if (this.loading.isVisible())
      await this.loading.waitFor({ state: "hidden", timeout: 3 * 60 * 1000 });
    await this.sspDropDown.selectOption(
      { label: sspOption },
      { timeout: 60000 },
    );
    await this.page.waitForTimeout(Number(2000));

    try {
      const selectedSsp = await this.page.$eval(
        ".starting-point-dropdown",
        (ele) => (ele as HTMLSelectElement).value,
      );
      console.log(`selected ssp is = ${selectedSsp}`);

      expect(selectedSsp).toContain(sspOption);
    } catch (error) {
      await this.sspDropDown.selectOption({ label: sspOption });
      console.error(
        `the ssp drop down didnt select the one we want at first attempt so trying one more time ... ${error}`,
      );
    }
  }

  async completeTheTakenTestForDerivedScoresForVRBATNTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".itemnav-wrapper div span").last().textContent(),
    );

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (
        (await this.plainNextButtonOrEndButton.isVisible()) &&
        (await this.plainNextButtonOrEndButton.isEnabled())
      ) {
        await this.plainNextButtonOrEndButton.waitFor();
        await this.plainNextButtonOrEndButton.click();
        continue;
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    // console.log(this.scoreMap);
    return this.scoreMap;
  }

  async clickOnVideoPlayButton() {
    await this.page.waitForTimeout(2000);
    while (await this.videoPlayButton.isVisible()) {
      await this.page.waitForTimeout(1500);
      if (await this.page.locator(".video-time").isVisible()) {
        break;
      }
      await this.videoPlayButton.click();
    }
  }

  async clickCorrectOption(
    correctlocator: Locator,
    itemDetails: string,
    stemForm?: string,
  ) {
    try {
      await correctlocator.click();

      if (
        itemDetails.startsWith("Item ") ||
        itemDetails.match(/Block\s\w+,\sItem\s\d+/i)
      ) {
        if (stemForm && stemForm.includes("ORLSMP.W5PA")) {
          if (itemDetails.match(/Block C,\sItem\s\d+/i)) {
            this.scoreMap.set(itemDetails, "2");
          } else {
            this.scoreMap.set(itemDetails, "1");
          }
        } else {
          this.scoreMap.set(itemDetails, "1");
        }
      } else if (itemDetails.match(/Story\s\d+,\sItem\s\d+/i)) {
        this.scoreMap.set(itemDetails, "1");
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickInCorrectOption(incorrectlocator: Locator, itemDetails: string) {
    try {
      await incorrectlocator.click();

      if (
        itemDetails.startsWith("Item ") ||
        itemDetails.match(/Block\s\w+,\sItem\s\d+/i)
      ) {
        this.scoreMap.set(itemDetails, "0");
      } else if (itemDetails.match(/Story\s\d+,\sItem\s\d+/i)) {
        this.scoreMap.set(itemDetails, "0");
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickAllCorrectOption(
    correctlocators: Promise<Locator[]>,
    itemDetails: string,
  ) {
    for (const correctlocator of await correctlocators) {
      try {
        await correctlocator.click();
      } catch (error) {
        console.error(`Not able to click on the Correct Options ${error}`);
      }
    }
    this.scoreMap.set(itemDetails, (await correctlocators).length.toString());
  }

  async clickAllIncorrectOption(
    incorrectlocators: Promise<Locator[]>,
    itemDetails: string,
  ) {
    for (const incorrectlocator of await incorrectlocators) {
      try {
        await incorrectlocator.click();
      } catch (error) {
        console.error(`Not able to click on the incorrect Options ${error}`);
      }
    }
    this.scoreMap.set(itemDetails, (await incorrectlocators).length.toString());
  }

  async clickPlusCorrectOption(itemDetails: string) {
    await this.startTimer.click();
    let score = 0;
    for (let i = 0; i < 10; i++) {
      try {
        await this.buttonPlus.click();
        score++;
      } catch (error) {
        console.error(`Not able to click on the Correct Options ${error}`);
      }
    }
    if (itemDetails.startsWith("Item ")) {
      this.scoreMap.set(itemDetails, score.toString());
    }
  }

  async answerCorrectForTimerTest(
    stemForm: string,
    itemDetails: string,
    correctResp: Map<string, string[]>,
  ) {
    const locatorPathConfig: Record<string, { path: string }> = {
      "NUMPAT.W5PA": { path: "NUMPAT" },
      "LETPAT.W5PA": { path: "LETPAT_Left" },
    };
    console.log(`taskStem value: ${stemForm}`);
    if (!locatorPathConfig[stemForm]) {
      throw new Error(
        `Invalid taskStem: ${stemForm}. Please check your input.`,
      );
    }
    let localItemDetails = itemDetails;
    await this.page.waitForTimeout(3000);

    if (localItemDetails.startsWith("Test Items")) {
      localItemDetails = "Item";
    }
    let isPracticeTimerVisable = await this.startPracticeExercise.isVisible();
    let isStartTimerVisable = await this.startTheTimer.isVisible();
    if (isPracticeTimerVisable) {
      await this.startPracticeExercise.click();
      this.index = 1;
    } else if (isStartTimerVisable) {
      try {
        await this.startTheTimer.click({ timeout: 1000 });
        await this.activateTabletControl.click();
        this.index = 1;
      } catch (error) {
        console.error(
          `Either timer is already started or not able to start ${error}`,
        );
      }
    } else {
      throw new Error(`Not able to start the timer`);
    }

    const locatorPath = locatorPathConfig[stemForm].path;

    let rows: Locator[] = await this.page
      .locator(`//div[@class="options ${locatorPath}"]`)
      .all();

    let breaker = 0;

    while (rows.length == 0 && breaker < 10) {
      await this.page.waitForTimeout(1000);

      rows = await this.page
        .locator(`//div[@class="options ${locatorPath}"]`)
        .all();

      console.log("The number of rows are", rows.length);

      breaker++;
    }

    let updatedItemDetails;

    // Iterate through the rows to click the correct responses

    for (const row of rows) {
      updatedItemDetails = `${localItemDetails} ${this.index}`;

      const correctResponse = correctResp.get(updatedItemDetails);

      if (correctResponse) {
        await row
          .locator(`//button[text() = "${correctResponse}"]`)
          .first()
          .click();

        await row
          .locator(`//button[text() = "${correctResponse}"]`)
          .last()
          .click();

        this.index++;

        if (itemDetails.startsWith("Test ")) {
          this.scoreMap.set(updatedItemDetails, "1");
        }
      } else {
        console.warn(`No correct response found for: ${updatedItemDetails}`);
      }
    }
  }

  async answerMTHFLUTest(itemDetails: string, typeOfTest: string) {
    if (itemDetails.startsWith("Practice Exercise")) {
      await this.startPracticeExercise.click();

      await this.stopIcon.waitFor({ state: "visible", timeout: 25000 });

      await this.scoreText.fill(this.scoreMap.get("Practice Exercise"));

      this.scoreMap.set("Practice Exercise", ""); // coz practise item scores is not counted in total score
    } else if (itemDetails.startsWith("Test Introduction")) {
      this.scoreMap.set("Practice Exercise", "");

      await this.startTimer.click();

      await this.stopIcon.waitFor({
        state: "attached",
        timeout: 3.1 * 60 * 1000,
      });

      await this.scoreText.first().fill(this.scoreMap.get("Page 4"));

      await this.scoreText.last().fill(this.scoreMap.get("Page 5"));
    } else {
      throw new Error(
        `The ${typeOfTest} didnt match with any of the conditions`,
      );
    }
  }

  async endSessionRSB() {
    // await this.checkBoxNoneOfTheabove.check();
    await this.endSessionButton.click();
    //await this.areYouSureYesButton.click();
    await this.endSessionReviewBtn.click();
  }

  async completeTSObservationsandClickNext() {
    await this.page.bringToFront();
    await this.nextButton.click(); // latest changes

    // await this.lastRadioYEsButton.waitFor({ state: "visible" }); // The Code has been removed

    await this.selectThecheckBox(0, "Examinee MAsk");
    await this.selectThecheckBox(2, "examiner MAsk");
    await this.selectTheDropdownOPtion(
      0,
      "Advanced",
      "Level of Conversational Proficiency",
    );
    await this.selectTheDropdownOPtion(
      1,
      "Was uncooperative at times",
      "Level of Cooperation",
    );
    await this.selectTheDropdownOPtion(
      2,
      "Seemed lethargic",
      "Level of Activity",
    );
    await this.selectTheDropdownOPtion(
      3,
      "Appeared distracted some of the time",
      "Attention and Concentration",
    );
    await this.selectTheDropdownOPtion(
      4,
      "Appeared overly anxious",
      "Self-Confidence",
    );
    await this.selectTheDropdownOPtion(
      5,
      "Responded deliberately and assuredly",
      "Care in Responding",
    );
    await this.selectTheDropdownOPtion(
      6,
      "Persevered on difficult items",
      "Response to Difficult Items and Corrective Feedback",
    );
    await this.selectTheDropdownOPtion(
      7,
      "Was highly engaged with tasks",
      "Motivation",
    );
    // await this.selectThecheckBox(4, "fairEstimate"); // UI changed
    // await this.selectThecheckBox(7, "modificationToTheStandardise"); // UI changed
    await this.nextButton.click();
    await this.submitTestBlockAndFinsihAdminstration.click();

    await this.waitUntilTestBlockCompletePopUpInvisible();
  }

  async waitUntilTestBlockCompletePopUpInvisible() {
    const popUp: Locator = await this.page.getByText("Test block complete.");
    await popUp.waitFor({ state: "detached" });
  }

  async breakTheLogicOut() {
    await this.mainNavigation.click();
    await this.mainNavigationHome.click();
    await this.page.waitForSelector(".centered-buttons button");
    await this.page
      .locator(".centered-buttons button")
      .getByText("Yes")
      .click();
    await this.page.waitForLoadState();
  }

  async completeTheTakenTestForDerivedScores(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    let timerTest = false;
    let patternTestCorrectResponses;
    let tapFluency = false;

    if (stemForm.includes("MATRCZ.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "MATRCZ.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
        
    } else if (stemForm.includes("SEGMNT.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "SEGMNT.W5PA_TestSchema.xlsx",
          "Heading",
        );
    } else if (/^(NUMPAT|LETPAT)\.W5PA$/.test(stemForm)) {
      const matchedPattern = stemForm;
      const patternConfig: Record<string, { schemaFile: string }> = {
        "NUMPAT.W5PA": { schemaFile: "NUMPAT.W5PA_TestSchema.xlsx" },
        "LETPAT.W5PA": { schemaFile: "LETPAT.W5PA_TestSchema.xlsx" },
      };

      if (!matchedPattern || !patternConfig[matchedPattern]) {
        throw new Error(`No configuration found for the stemForm: ${stemForm}`);
      }

      const { schemaFile } = patternConfig[matchedPattern];

      this.scoreMap.clear();

      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          schemaFile,
          "Heading",
        );

      patternTestCorrectResponses =
        await this.utils.readCorrectValuesFromPatternTest(
          matchedPattern,
          "Heading",
          "TabStim Resps",
        );
    } else if (stemForm.includes("MTHFLU.W5PA")) {
      // compared to other fluency tests, MTHFLU.W5PA is total diff, it has to be handled diff

      this.scoreMap.clear();

      this.scoreMap.set("Practice Exercise", "");
      this.scoreMap.set("Page 4", "");
      this.scoreMap.set("Page 5", "");
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        if (stemForm.includes("STYREC.W5PA")) {
          this.scoreMap.set(`Story ${index}`, "x");
        } else {
          this.scoreMap.set(`Item ${index}`, "x");
        }
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.first().isVisible()) {
      await this.page.waitForTimeout(1500);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const correctlocatorsAll: Promise<Locator[]> =
        this.corectOptionButton.all();
      const incorrectlocatorAll: Promise<Locator[]> =
        this.incorrectOptionButton.all();

      let startTimerVisable: boolean = await this.startTimer.isVisible();

      if (itemDetails.startsWith("Introduction")) {
        if (await this.videoPlayButton.isVisible()) {
          await this.videoPlayButton.click();
          await expect(this.replayButton).toBeVisible({ timeout: 70000 });
        }
      } else if (
        typeOfTest.match(/All correct scenario/i) &&
        stemForm.match("MTHFLU.W5PA")
      ) {
        this.scoreMap.set("Practice Exercise", "5");
        this.scoreMap.set("Page 4", "80");
        this.scoreMap.set("Page 5", "80");

        await this.answerMTHFLUTest(itemDetails, typeOfTest);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        stemForm.match("MTHFLU.W5PA")
      ) {
        this.scoreMap.set("Practice Exercise", "0");

        await this.answerMTHFLUTest(itemDetails, typeOfTest);
      } else if (
        typeOfTest.match(/All correct scenario/i) &&
        /^(Story)/.test(itemDetails)
      ) {
        await this.clickAllCorrectOption(correctlocatorsAll, itemDetails);
      } else if (
        typeOfTest.match(/All correct scenario/i) &&
        startTimerVisable
      ) {
        await this.clickPlusCorrectOption(itemDetails);
        timerTest = true;
      } else if (
        typeOfTest.match(/All correct scenario/i) &&
        /^(Practice Exercise|Test Items)/.test(itemDetails)
      ) {
        await this.answerCorrectForTimerTest(
          stemForm,
          itemDetails,
          patternTestCorrectResponses,
        );
        tapFluency = true;
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        /^(Sample|.*Trial.*)/.test(itemDetails)
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      if (timerTest) {
        await this.timerStopPopup.waitFor({ state: "visible", timeout: 60000 });
        await this.plainNextButtonOrEndButton.last().click();
      } else if (tapFluency) {
        if (await this.doneButton.isVisible()) {
          await this.doneButton.click();
          if (itemDetails.startsWith("Test")) {
            await this.runingTimer.waitFor({
              state: "detached",
              timeout: 3 * 60 * 1000,
            });
            await this.doneIcon.waitFor({
              state: "visible",
              timeout: 3 * 60 * 1000,
            });
            await this.page.waitForTimeout(2000);
            await this.plainNextButtonOrEndButton.first().click();
          }
        } else if (await this.nextButton.isVisible()) {
          await this.nextButton.click();
        }
      } else {
        await this.plainNextButtonOrEndButton.last().click({ timeout: 60000 });
      }

      if (
        (await this.plainNextButtonOrEndButton.first().textContent()) ===
        "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForGVCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("BLKROT.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "BLKROT.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(2000);
        if (await this.videoPlayButton.isVisible()) {
          await this.videoPlayButton.click();
          await expect(this.replayButton).toBeVisible({ timeout: 70000 });
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForACDSKLCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("LWIDNT.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "LWIDNT.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(2000);
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForRDGBASCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("LWIDNT.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "LWIDNT.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else if (stemForm.includes("WRDATK.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "WRDATK.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForRDGBRFCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("LWIDNT.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "LWIDNT.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else if (stemForm.includes("PSGCMP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "PSGCMP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForORLEXPCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("ORLSMP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "ORLSMP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails, stemForm);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForLSTCMPCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("STYCMP.W5PA")) {
      this.scoreMap.clear();
      if (stemForm.includes("STYCMP.W5PA")) {
        this.scoreMap =
          await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
            "STYCMP.W5PA_TestSchema.xlsx",
            "/Heading/",
          );
      } else if (stemForm.includes("ORLCMP.W5PA")) {
        this.scoreMap =
          await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
            "ORLCMP.W5PA_TestSchema.xlsx",
            "/Heading/",
          );
      }
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (itemDetails.match(/Presentation/)) {
        if (await this.audioPlayer.isVisible()) {
          await this.audioPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({
            state: "visible",
            timeout: 50000,
          });
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.match(/(Item|Sample)\s/)) {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForPHGRKNCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("WRDATK.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "WRDATK.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else if (stemForm.includes("SPLSND.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "SPLSND.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1500);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.first().click();

      if (
        (await this.plainNextButtonOrEndButton.first().textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForRDGCMPCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("PSGCMP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "PSGCMP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else if (stemForm.includes("PARCMP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "PARCMP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (itemDetails.match(/Presentation/)) {
        await this.activateTabletControl.click();
        if (await this.doneButton.isVisible()) {
          await this.doneButton.click();
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForACDAPPCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    let lastItem: number = 0;

    if (stemForm.includes("PSGCMP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "PSGCMP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else if (stemForm.includes("WRTSMP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "WRTSMP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (stemForm.includes("WRTSMP.W5PA")) {
          if (itemDetails.match(/^Item ([1-5])\b/)) {
            await this.clickCorrectOption(correctlocator, itemDetails);
          } else if (itemDetails.match(/^Item ([6-9]|10)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);

            if (itemNumber === 10) {
              await this.plainNextButtonOrEndButton.waitFor({
                state: "visible",
                timeout: 60000,
              });
              await this.plainNextButtonOrEndButton.click();
              await this.ResolveBtn.click();
              await this.ScoreEntryFields.nth(0).fill("10");
              this.scoreMap.set("Items 6–10 Score Entry", "10");
              await this.ScoreLaterSubmit.click();
              await this.ScoreLaterContinue.click();
              await this.letsBeginButton.click();
            }
          } else if (itemDetails.match(/^Item (1[1-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if (itemNumber === 15) {
              await this.plainNextButtonOrEndButton.waitFor({
                state: "visible",
                timeout: 60000,
              });
              await this.plainNextButtonOrEndButton.click();
              await this.ResolveBtn.click();
              await this.ScoreEntryFields.nth(1).fill("10");
              this.scoreMap.set("Items 11–15 Score Entry", "10");
              await this.ScoreLaterSubmit.click();
              await this.ScoreLaterContinue.click();
              lastItem = itemNumber;
            }
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      if (stemForm.includes("WRTSMP.W5PA")) {
        if (!(lastItem === 15)) {
          await this.plainNextButtonOrEndButton.click();
        }

        if (
          (await this.plainNextButtonOrEndButton.textContent()) ===
            "End Test" &&
          !itemDetails.match(/^Item (9|1[0]|1[4-5])\b/)
        ) {
          break;
        }
      } else {
        await this.plainNextButtonOrEndButton.click();

        if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          break;
        }
      }
    }

    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForSPLSKLCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("SPLSND.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "SPLSND.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForAMSPANCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("SENREP.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "SENREP.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForDerivedScoresForPHNMANCluster(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    if (stemForm.includes("SNDDEL.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "SNDDEL.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else if (stemForm.includes("SNDSUB.W5PA")) {
      this.scoreMap.clear();
      this.scoreMap =
        await this.utils.getRowDataOfSpecifiedColumnFromSchemaFiles(
          "SNDSUB.W5PA_TestSchema.xlsx",
          "/Heading/",
        );
    } else {
      const lastItemNumber = await this.page
        .locator(".items-container div span.item-text")
        .last()
        .textContent();
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
      this.scoreMap.clear();
      this.scoreMap.set(` `, "^");
      for (let index = 1; index <= itemNumber; index++) {
        this.scoreMap.set(`Item ${index}`, "x");
      }
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.sideNavLock.waitFor({ state: "detached" });
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.first().textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async jumpToNextTest(testName: string) {
    let nextTestName: string = await this.nextTestSelectValue.textContent();
    if (nextTestName.match(testName)) {
      await this.beginNextTestButton.click();
    } else {
      await this.page.locator(".select-box").click();
      await this.page.locator(`//span[text()='${testName}']`).click();
      nextTestName = await this.nextTestSelectValue.textContent();
      expect(nextTestName).toEqual(testName);
      await this.beginNextTestButton.click();
      // await this.letsBeginButton.click();
    }
  }

  // MOVE THE BELOW CODE TO DIFF sheet

  async getExcelFileDate(normTableFilePath) {
    const excelFileData = await this.utils.getExcelSheetData(normTableFilePath);
    return excelFileData;
  }

  async validateTheDownloadedDerivedScoresReportWithRunTimeData(
    txtFileContent: {
      [key: string]: {
        [key: string]: string;
      };
    },
    examineeID: string,
    taskStem: string,
    testStemForm: string,
    examineeDOB: string,
    examineeGrade: string,
    scores,
    ExcelFileData,
    normBasis: string,
    testsStemForm?: string[],
  ) {
    console.log(
      `\n ==== Assertion ${testStemForm} for NormBasis as ${normBasis} ==== \n`,
    );
    const taskStems = await this.utils.getColumnOrValueFromExcel("TaskStem");
    const subTests: string[] = ["OVSYN", "OVANT", "GIWHER", "GIWHAT"];

    // console.log (`\n TAsk stems from sel test table = `,taskStems);

    let Wabil: number;
    let Semw: number;

    const testsAndSubtests = await this.utils.getTestsAndSubtestsFromSheet();

    if (
      testsAndSubtests.includes(taskStem) &&
      taskStem !== "ORLVOC" &&
      taskStem !== "GENINF"
    ) {
      ({ Wabil, Semw } = await setWabilSemw(scores, testStemForm));
    }

    const excelFileData = ExcelFileData;

    // const excelFileData = await this.utils.getExcelSheetData(normTableFilePath);

    if(examineeID == "" || examineeID == undefined || examineeID == null || examineeID.includes("No examinees meet the criteria specified.")){
      throw new Error("The Examinee ID assertion failed, probable cause the Report could be empty.");
    }

    const txtData = txtFileContent[testStemForm];
    softAssertPrint(examineeID, txtData.Examinee_ID, "Examinee ID");
    softAssertPrint(taskStem, txtData.TaskStem, "Task Stem");
    softAssertPrint(testStemForm, txtData.TaskStemForm, "TaskStemForm");

    const compoundsAndClusters: string[] =
      await this.utils.getAllCompoundsAndClustersFromSelTestTable();

    if (compoundsAndClusters.includes(taskStem)) {
      const reportData = txtData.ContribTaskStems.split(";").map(
        (i) => i.split(".")[0],
      );
      const ContribTaskStemFromSheet =
        await this.utils.getContribTaskStemsForCluster(taskStem);

      softAssertArray(ContribTaskStemFromSheet, reportData, "contribTaskStems");
    } else {
      this.contribTaskStems.push(testStemForm);
    }

    const EDOT = await this.utils.getTheDOByearsBAck(0, "new Yark");

    try {
      softAssertPrint(EDOT, txtData.EDOT, "EDOT");
    } catch (error) {
      console.info(`\nSeems like there is a date mismatch  ${error}\n`);
    }

    try {
      softAssertPrint(
        await this.utils.getTheDOByearsBAck(0, "new Yark"),
        txtData.LDOT,
        "LDOT",
      );
    } catch (error) {
      console.info(`\nSeems like there is a date mismatch  ${error}\n`);
    }

    softAssertPrint(
      format(new Date(examineeDOB), "yyyy-MM-dd"),
      txtData.DOB,
      "DOB",
    );

    const { camos, getCHRON } = getCAMOS(examineeDOB, EDOT);

    softAssertPrint(camos, Number(txtData.CAMOS), "CAMOS");

    const gradePlacement: string = getGradePlacement(examineeGrade, EDOT);

    softAssertPrint(gradePlacement, txtData.GradePlacement, "GradePlacement");

    let comp_clus_W_abil: number;

    if (compoundsAndClusters.includes(taskStem)) {
      const testsListForCluster: string[] = (
        await this.utils.getContribTaskStemsForCluster(taskStem)
      ).map((name) => `${name}.W5PA`);

      Wabil = Number(await getCompositeW_abil(testsListForCluster, scores));
      Semw = Number(await getCompositeSEMW(testsListForCluster, scores));
      scores[`${taskStem}.W5PA`] = {
        wScores: "",
        Wabil: Wabil,
        Semw: Semw,
      };

      softAssertPrint(Wabil, Number(txtData.W_Abil), "Composite W_Abil");
      softAssertPrint(Semw, Number(txtData.SEMW), "Composite SEMW");
    } else {
      softAssertPrint(Wabil, Number(txtData.W_Abil), "W_Abil");
      softAssertPrint(Semw, Number(txtData.SEMW), "SEMW");
    }

    // New;y added 6/7 Columns
    if (!subTests.includes(taskStem)) {
      softAssertPrint(
        calculateWabilConfBand("W68_Low", Wabil, Semw),
        Number(txtData.W68_Low),
        "W68_Low",
      );

      softAssertPrint(
        calculateWabilConfBand("W68_High", Wabil, Semw),
        Number(txtData.W68_High),
        "W68_High",
      );

      softAssertPrint(
        calculateWabilConfBand("W90_Low", Wabil, Semw),
        Number(txtData.W90_Low),
        "W90_Low",
      );

      softAssertPrint(
        calculateWabilConfBand("W90_High", Wabil, Semw),
        Number(txtData.W90_High),
        "W90_High",
      );

      softAssertPrint(
        calculateWabilConfBand("W95_Low", Wabil, Semw),
        Number(txtData.W95_Low),
        "W95_Low",
      );

      softAssertPrint(
        calculateWabilConfBand("W95_High", Wabil, Semw),
        Number(txtData.W95_High),
        "W95_High",
      );
    }

    softAssertPrint(normBasis, txtData.NormBasis, "NormBasis");

    const chron: string | number = await getCHRON(normBasis, gradePlacement);

    softAssertPrint(Number(chron), Number(txtData.CHRON), "CHRON");

    if (normBasis === "K12") {
      softAssertPrint(getGradeYM(gradePlacement), txtData.GradeYM, "GradeYM");
    } else {
      softAssertPrint(getAgeYM(camos), txtData.AgeYM, "AgeYM");
    }

    const { REFW, SDLo, SDUp } = getREFW_SDLo_SDUp(
      normBasis,
      chron,
      taskStem,
      excelFileData,
    );

    if (!subTests.includes(taskStem)) {
      softAssertPrint(REFW, Number(txtData.REFW), "REFW");

      softAssertPrint(SDLo, Number(txtData.SDLo), "SDLo");

      softAssertPrint(SDUp, Number(txtData.SDUp), "SDUp");

      if (taskStems.includes(taskStem)) {
        softAssertPrint(
          getAE_Equiv(excelFileData, Wabil),
          txtData.AE_Equiv,
          "AE_Equiv",
        );
        softAssertPrint(
          getGE_Equiv(excelFileData, Wabil),
          txtData.GE_Equiv,
          "GE_Equiv",
        );
      } else {
        softAssertPrint(
          getAE_Equiv(excelFileData),
          txtData.AE_Equiv,
          "AE_Equiv",
        );
        softAssertPrint(
          getGE_Equiv(excelFileData),
          txtData.GE_Equiv,
          "GE_Equiv",
        );
      }

      softAssertPrint(
        getAE_Equiv(excelFileData, Wabil - 10),
        txtData.AE_Low,
        "AE_Low",
      );

      softAssertPrint(
        getAE_Equiv(excelFileData, Wabil + 10),
        txtData.AE_High,
        "AE_High",
      );

      softAssertPrint(
        getGE_Equiv(excelFileData, Wabil - 10),
        txtData.GE_Low,
        "GE_Low",
      );

      softAssertPrint(
        getGE_Equiv(excelFileData, Wabil + 10),
        txtData.GE_High,
        "GE_High",
      );

      const Wdiff = getWDIFF(REFW, Wabil);

      softAssertPrint(Wdiff, Number(txtData.WDIFF), "WDIFF");

      const {
        RPI_Num,
        WDIFF_Proficiency,
        WDIFF_Functionality,
        WDIFF_Development,
        WDIFF_Fluency,
        WDIFF_Implication,
        CALP_Level,
      } = getRPI_and_WDIFF_Data(Wdiff);

      softAssertPrint(RPI_Num, txtData.RPI_Num, "RPI_Num");

      softAssertPrint(
        WDIFF_Proficiency,
        txtData.WDIFF_Proficiency,
        "WDIFF_Proficiency",
      );

      softAssertPrint(
        WDIFF_Functionality,
        txtData.WDIFF_Functionality,
        "WDIFF_Functionality",
      );

      softAssertPrint(
        WDIFF_Development,
        txtData.WDIFF_Development,
        "WDIFF_Development",
      );

      softAssertPrint(WDIFF_Fluency, txtData.WDIFF_Fluency, "WDIFF_Fluency");

      softAssertPrint(
        WDIFF_Implication,
        txtData.WDIFF_Implication,
        "WDIFF_Implication",
      );

      softAssertPrint(CALP_Level, txtData.CALP_Level, "CALP_Level");

      const SDUsed = getSDUsed(Wdiff, SDLo, SDUp);

      softAssertPrint(SDUsed, Number(txtData.SDUsed), "SDUsed");

      const Z_Score = getZ_Score(REFW, SDUsed, Wabil);

      softAssertPrint(Z_Score, Number(txtData.Z_Score), "Z_Score");

      const [StdScore_Computed, stdScoreComputed] = getStdScore_Computed();

      softAssertPrint(
        StdScore_Computed,
        Number(txtData.StdScore_Computed),
        "StdScore_Computed",
      );

      softAssertPrint(
        getStdScore_Display(stdScoreComputed),
        txtData.StdScore_Display,
        "StdScore_Display",
      );

      const { PR, SS_PR_classification } = get_PR_SS_PR_Classification();

      softAssertPrint(
        SS_PR_classification,
        txtData.SS_PR_Classification,
        "SS_PR_Classification",
      );

      const SEMSS = getSEMSS(SDUsed, Semw);

      softAssertPrint(SEMSS, Number(txtData.SEMSS), "SEMSS");

      softAssertPrint(
        getConfidenceRange("SS68_Low"),
        txtData.SS68_Low,
        "SS68_Low",
      );

      softAssertPrint(
        getConfidenceRange("SS68_High"),
        txtData.SS68_High,
        "SS68_High",
      );

      softAssertPrint(
        getConfidenceRange("SS90_Low"),
        txtData.SS90_Low,
        "SS90_Low",
      );

      softAssertPrint(
        getConfidenceRange("SS90_High"),
        txtData.SS90_High,
        "SS90_High",
      );

      softAssertPrint(
        getConfidenceRange("SS95_Low"),
        txtData.SS95_Low,
        "SS95_Low",
      );

      softAssertPrint(
        getConfidenceRange("SS95_High"),
        txtData.SS95_High,
        "SS95_High",
      );

      softAssertPrint(PR, txtData.PR, "PR");

      softAssertPrint(
        calculatePRconfBand("PR68_Low", Wabil, Semw),
        txtData.PR68_Low,
        "PR68_Low",
      );

      softAssertPrint(
        calculatePRconfBand("PR68_High", Wabil, Semw),
        txtData.PR68_High,
        "PR68_High",
      );

      softAssertPrint(
        calculatePRconfBand("PR90_Low", Wabil, Semw),
        txtData.PR90_Low,
        "PR90_Low",
      );

      softAssertPrint(
        calculatePRconfBand("PR90_High", Wabil, Semw),
        txtData.PR90_High,
        "PR90_High",
      );

      softAssertPrint(
        calculatePRconfBand("PR95_Low", Wabil, Semw),
        txtData.PR95_Low,
        "PR95_Low",
      );

      softAssertPrint(
        calculatePRconfBand("PR95_High", Wabil, Semw),
        txtData.PR95_High,
        "PR95_High",
      );

      softAssertPrint(
        getTScoreComputed(),
        txtData.T_Score_Computed,
        "T_Score_Computed",
      );

      softAssertPrint(
        getT_Score_Display(),
        txtData.T_Score_Display,
        "T_Score_Display",
      );

      softAssertPrint(getSEMT(SDUsed, Semw), txtData.SEMT, "SEMT");

      softAssertPrint(
        calculateT_Score("T_Score68_Low"),
        txtData.T_Score68_Low,
        "T_Score68_Low",
      );

      softAssertPrint(
        calculateT_Score("T_Score68_High"),
        txtData.T_Score68_High,
        "T_Score68_High",
      );

      softAssertPrint(
        calculateT_Score("T_Score90_Low"),
        txtData.T_Score90_Low,
        "T_Score90_Low",
      );

      softAssertPrint(
        calculateT_Score("T_Score90_High"),
        txtData.T_Score90_High,
        "T_Score90_High",
      );

      softAssertPrint(
        calculateT_Score("T_Score95_Low"),
        txtData.T_Score95_Low,
        "T_Score95_Low",
      );

      softAssertPrint(
        calculateT_Score("T_Score95_High"),
        txtData.T_Score95_High,
        "T_Score95_High",
      );
    }
  }

  async validateCompositesAndClusters(
    txtFileContent: {
      [key: string]: {
        [key: string]: string;
      };
    },
    examineeID: string,
    taskStem: string,
    testStemForm: string,
    examineeDOB: string,
    examineeGrade: string,
    scores,
    ExcelFileData,
    normBasis: string,
    testsStemForm: string[],
  ) {
    await this.validateTheDownloadedDerivedScoresReportWithRunTimeData(
      txtFileContent,
      examineeID,
      taskStem,
      testStemForm,
      examineeDOB,
      examineeGrade,
      scores,
      ExcelFileData,
      normBasis,
      testsStemForm,
    );
  }
}
