import { test, expect, Page, Locator } from "../base/basePageFixtures";
import wj5ExamineePage from "./wj5_examinee.page";

export default class wj5TestPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly nextORendTestButton: Locator;
  private readonly lestBeginButton: Locator;
  private readonly startTestButton: Locator;
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly sspPopUp: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly addTestObservations: Locator;
  private readonly checkBoxNoneOfTheabove: Locator;
  private readonly endSessionButton: Locator;
  private readonly areYouSureYesButton: Locator;
  private readonly testNameAtAdminOverview: Locator;

  private readonly sspPopUpTestName: Locator;
  private readonly multiRadioButtons: Locator;
  private readonly dropDowns: Locator;
  private readonly administrationOverviewPageTestName: Locator;
  private readonly nextButton: Locator;
  private readonly continueButton: Locator;
  private readonly submitTestBlockAndFinsihAdminstration: Locator;
  private readonly sspDropDown: Locator;
  private readonly syncDevicePopUp: Locator;
  private readonly mainNavigation: Locator;
  private readonly mainNavigationHome: Locator;
  private readonly timeUpView: Locator;
  private readonly timeText: Locator;

  private readonly listOfOptionsForWordReadingFluency: Locator;
  private readonly startPracticeAndStartTimerButton: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly examineeCursorButton: Locator;
  private readonly startPraciceAndTimerButton: Locator;
  private readonly NextAndendTestBtn: Locator;
  private readonly NextAndendTestBtn2: Locator;
  private readonly startTimer: Locator;
  private readonly addButton: Locator;
  private readonly minusButton: Locator;
  private readonly timerclosebtn: Locator;
  private readonly listOfOptionsForNumberPatternMatching: Locator;
  private readonly listOfOptionsForSentenceReadingFluency: Locator;
  private readonly startTimerAndDisplayTestItems: Locator;
  private readonly listOfOptions: Locator;
  private readonly openNotesIcon: Locator;
  private readonly notesText: Locator;
  private readonly notesSaveButton: Locator;
  private readonly flagForLater: Locator;
  private readonly notesDropdown: Locator;
  private readonly notesDropdownOptions: Locator;
  private readonly notesErrorMessage: Locator;
  private readonly closeNotes: Locator;
  private readonly AEValue: Locator;
  private readonly GEValue: Locator;
  private readonly EndTestPopUpElements: Locator;
  private readonly addTestObservationsNew: Locator;
  private readonly mainNavigationReview: Locator;
  private readonly listOfOptionsForLetterPatternMatching: Locator;
  private readonly listOfScoresForSentenceWritingFluency: Locator;
  private readonly submitButton: Locator;
  private readonly startTimerButton: Locator;
  private readonly listOfScoresForMathFactsFluency: Locator;
  private readonly endSessionReviewBtn: Locator;
  private readonly IDK: Locator;
  private readonly introDetails: Locator;
  private readonly loading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.nextORendTestButton = this.page.locator(
      "//button[@class='plain-button next-item-button' or @class='plain-button nav-button']",
    );

    this.lestBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
    this.startTestButton = this.page.locator("//button[text()='Start Test']");
    this.sspPopUp = this.page.locator(".popup-outer");
    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button",
    );
    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button",
    );
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button",
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();

    this.checkBoxNoneOfTheabove = this.page.getByRole("checkbox", {
      name: "None of the above",
    });

    this.addTestObservations = this.page.getByRole("button", {
      name: "+ Add Test Observations",
    });

    // this.addTestObservations = this.page.locator("//b[text()='+ Add Test Observations']");

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

    this.nextButton = this.page.getByRole("button", { name: "Next" });
    this.continueButton = this.page.getByRole("button", { name: "Continue" });
    this.submitTestBlockAndFinsihAdminstration = this.page.getByRole("button", {
      name: "Submit Test Assignment",
    });

    this.sspDropDown = this.page.locator(".starting-point-dropdown");
    this.syncDevicePopUp = this.page.locator(".popup-header");
    this.mainNavigation = this.page.locator(".plain-button.menu-button");
    this.mainNavigationHome = this.page.locator(
      ".main .plain-button:nth-child(2)",
    );
    this.mainNavigationReview = this.page.locator(
      ".main .plain-button:nth-child(4)",
    );
    this.listOfOptionsForWordReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options WRDGFL')]//child::button",
    );
    this.startPracticeAndStartTimerButton = this.page.locator(
      "//button[text()='Start Practice Exercise ']",
    );
    this.doneOrNextButton = this.page.locator(
      "//button[@class='plain-button nav-button']",
    );
    this.examineeCursorButton = this.page.locator(
      "//button[@class='plain-button examinee-cursor-button']",
    );
    this.startPraciceAndTimerButton = this.page.locator(
      "//button[text()='Start the timer and display the test items']",
    );
    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.NextAndendTestBtn2 = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[2]",
    );
    this.startTimer = this.page.locator("[class='plain-button blue-button']");
    this.addButton = this.page.locator(
      "[class='plain-button blue-text-button correct-left']",
    );
    this.minusButton = this.page.locator(
      "[class='plain-button blue-text-button incorrect-right']",
    );
    this.timerclosebtn = this.page.locator("//button[text()='Close']");
    this.listOfOptionsForNumberPatternMatching = this.page.locator(
      "//div[@class='options NUMPAT']//button",
    );
    this.listOfOptionsForSentenceReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options')]//child::button",
    );
    this.listOfOptions = this.page.locator(
      "//div[@class='examinee-view']//child::div[@class='options ']//child::*",
    );
    this.startTimerAndDisplayTestItems = this.page.locator(
      "//button[text()='Start the timer and display the test items']",
    );
    this.openNotesIcon = this.page.locator(
      "//button[@class='plain-button notes-button']",
    );
    this.notesText = this.page.locator(
      "//div[@class='notes-modal']//child::div[@class='notes-main']//child::textarea",
    );
    this.notesSaveButton = this.page.locator(
      "//button[@class='notes-save-button']",
    );
    this.flagForLater = this.page.locator(
      "//child::span[@class='flag-for-later']",
    );
    this.notesDropdown = this.page.locator(
      "//div[@class='notes-modal']//select",
    );
    this.notesDropdownOptions = this.page.locator(
      "//div[@class='notes-modal']//select//option",
    );
    this.notesErrorMessage = this.page.locator("//span[@class='redError']");
    this.closeNotes = this.page.locator(
      "//button[@class='plain-button close-btn']",
    );
    this.AEValue = this.page.locator("//span[text()='Age Equivalent ']/b");
    this.GEValue = this.page.locator("//span[text()='Grade Equivalent ']/b");
    this.EndTestPopUpElements = this.page.locator(
      "//div[@class='mid-grid']//child::*",
    );
    this.addTestObservationsNew = this.page.getByRole("button", {
      name: "+ Add Response Style and Behavior Statements",
    });
    this.listOfOptionsForLetterPatternMatching = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options LETPAT')]//child::button");
    this.listOfScoresForSentenceWritingFluency = this.page.locator("//input[@class='score-text']");
    this.submitButton = this.page.locator("//button[text()='Submit']");
    this.startTimerButton = this.page.locator("//button[text()='Start Timer']");
    this.listOfScoresForMathFactsFluency = this.page.locator("//input[@class='score-text']");
    this.endSessionReviewBtn = page.locator("//button[text()='Review']");
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.timeUpView = this.page.locator("//b[text()='Time is up.']");
    this.timeText = this.page.locator("//div[@class='time-score']//child::div[@class='time-text']");
    this.introDetails = this.page.locator("//span[@class='item-text']").first();
    this.loading = this.page.locator("div[class='loading-inner']").first();
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

  async pickTheTestNeeded(testName: string) {
    await this.page.bringToFront();
    await this.page.waitForTimeout(Number(2000));

    // if((await this.administrationOverviewPageTestName.textContent()).includes(testName)) return;

    // if (await this.page.locator(".top-line").isVisible() && this.page.locator(".blue-button").getByText("Letʼs Begin").isVisible()) {
    //   await this.page.locator(".blue-button").getByText("Letʼs Begin").click();
    // }
    await expect(this.plainNextButtonOrEndButton).toBeVisible();

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const introDetails: string = (await this.introDetails.textContent())!;
      if (introDetails === "Intro 1" || introDetails === "Intro 2") {
        await this.plainNextButtonOrEndButton.click();
      } else if (introDetails === "Intro 3") {
        await this.page
          .locator("button.plain-button.nav-button")
          .getByText("Begin Administration")
          .click();
      }
    }
    await this.page.locator(".plain-button.menu-button").click();
    await this.page.locator(".main .plain-button:nth-child(3)").click();
    await this.page
      .locator(".second-level .test-name")
      .getByText(testName, { exact: true })
      .click();
  }

  async clickOnLetsBeginButtonAndStartTest(testName: string, ssp: string) {
    await this.loading.waitFor({ state: "hidden", timeout: 5 * 60 * 1000 });
    expect(await this.testNameAtAdminOverview.textContent(), {
      message: "The test name didnt match at Administration Overview page",
    }).toContain(testName);
    console.log(await this.testNameAtAdminOverview.textContent());
    await this.lestBeginButton.click();
    await this.page.waitForTimeout(1000);
    if (ssp === "All Examinees") {
      await this.startTestButton.click();
    } else {
      await this.setTheSSPto(ssp);
      await this.page.waitForTimeout(1500);
      await this.startTestButton.click();
    }
  }

  async setTheSSPto(sspOption: string) {
    await expect(this.startTestButton).toBeVisible({ timeout: 10000 });
    await this.page.waitForTimeout(Number(3000));
    await this.sspDropDown.selectOption({ label: sspOption });
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

  // itemMap = new Map<string, Map<string, string | number>>();
  async completeTheTakenTest() {
    await this.plainNextButtonOrEndButton.click();

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      //Start timer
      const startTimer: number = performance.now();

      await this.page.waitForTimeout(1000);
      const itemInsideMap = new Map<string, string | number>();
      const itemDetails: string = (await this.itemDetails.textContent())!;
      // console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      await correctlocator.click();

      const correctOption: string = (await correctlocator.textContent())!;
      // console.log(correctOption);

      const endTimer: number = performance.now();

      const RT: number = endTimer - startTimer;

      // console.log(`start time = ${startTimer} end time = ${endTimer} responseTIme = ${RT}`);

      await this.plainNextButtonOrEndButton.click();
      itemInsideMap.set("ItemAnswer", correctOption);
      itemInsideMap.set("ResponseTime", RT / 1000);
      this.itemMap.set(itemDetails, itemInsideMap);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
      // console.log(this.itemMap);
    }

    console.log(this.itemMap);
  }

  async completeTheTakenTestForWlookUpScores(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    const lastItemText: string = await this.page
      .locator(".items-container div span.item-text")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
      if (typeOfTest.match(/Answer only SampleItems incorrect scenario/i)) {
        this.scoreMap.clear();
      }
    }

    const testNames: string[] = [
      "OVSYN.W5PA",
      "OVANT.W5PA",
      "GIWHAT.W5PA",
      "CALC.W5PA",
      "SNDBLN.W5PA",
      "MEMWRD.W5PA",
    ];
    const testNames1: string[] = ["ACDVOC.W5PA"];

    if (testNames.includes(stemForm)) {
      await this.plainNextButtonOrEndButton.click();
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(2500);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnowlocator: Locator = this.IDK.first();

      if (itemDetails.startsWith("Introduction")) {
        // await this.plainNextButtonOrEndButton.click();
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails === "Item 1") {
          await this.verifyCharacterLimitOnItemLevelNotes();
        }
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
        typeOfTest.match(/Answer only SampleItems incorrect scenario/i)
      ) {
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
        if (testNames1.includes(stemForm)) {
          await this.clickIDontKnowOption(iDontKnowlocator, itemDetails);
        } else {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
        }
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
      } else if (typeOfTest.match(/Answer only one sample item/i)) {
        if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
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

  async completeTheTakenTestForWlookUpScoresForNUMPATTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    //  const itemNumber: number = Number(
    //     await this.page.locator(".itemnav-wrapper div span").last().textContent()
    //   );

   
    await this.page.waitForTimeout(1000);
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);
    await this.plainNextButtonOrEndButton.click();

    if (typeOfTest.match(/Answer only one sample item/i)) {
      await this.listOfOptionsForNumberPatternMatching.nth(1).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      if (itemDetails.startsWith("Sample Item A, Trial 1")) {
        
      }
    } else if (typeOfTest.match(/Answer both sample items/i)) {
      await this.listOfOptionsForNumberPatternMatching.nth(1).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForNumberPatternMatching.nth(0).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      if (itemDetails.startsWith("Practice Exercise")) {
        
      }
    } else if (typeOfTest.match(/Sample Items Incorrect Scenario/i)) {
      for (let i = 1; i <= 2; i++) {
        await this.listOfOptionsForNumberPatternMatching.nth(0).click();
        await this.listOfOptionsForNumberPatternMatching.nth(2).click();
        await this.plainNextButtonOrEndButton.click();
      }
      for (let i = 1; i <= 2; i++) {
        if (i === 2) {
          await this.listOfOptionsForNumberPatternMatching.nth(0).click();
          await this.listOfOptionsForNumberPatternMatching.nth(2).click();
        } else {
          await this.listOfOptionsForNumberPatternMatching.nth(0).click();
          await this.listOfOptionsForNumberPatternMatching.nth(2).click();
          await this.plainNextButtonOrEndButton.click();
        }
      }
    } else if (typeOfTest.match(/Practice Exercise Incorrect Scenario/i)) {
      await this.listOfOptionsForNumberPatternMatching.nth(1).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForNumberPatternMatching.nth(0).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForTimeout(1000);
      await this.startPracticeAndStartTimerButton.click();
      await this.listOfOptionsForNumberPatternMatching.nth(0).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(6).click();
      await this.listOfOptionsForNumberPatternMatching.nth(7).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(13).click();
      await this.listOfOptionsForNumberPatternMatching.nth(14).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(15).click();
      await this.listOfOptionsForNumberPatternMatching.nth(17).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(20).click();
      await this.listOfOptionsForNumberPatternMatching.nth(21).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(27).click();
      await this.listOfOptionsForNumberPatternMatching.nth(28).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      // await this.doneOrNextButton.click();
      // await this.page.waitForTimeout(1000);
    } else if (typeOfTest.match(/Answer Sample and Practice Exercise items/i)) {
      await this.listOfOptionsForNumberPatternMatching.nth(1).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForNumberPatternMatching.nth(0).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForTimeout(1000);
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(2).click();
      await this.listOfOptionsForNumberPatternMatching.nth(4).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(5).click();
      await this.listOfOptionsForNumberPatternMatching.nth(8).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(11).click();
      await this.listOfOptionsForNumberPatternMatching.nth(12).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(16).click();
      await this.listOfOptionsForNumberPatternMatching.nth(18).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(23).click();
      await this.listOfOptionsForNumberPatternMatching.nth(24).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(25).click();
      await this.listOfOptionsForNumberPatternMatching.nth(29).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      if (itemDetails.startsWith("Test Items")) {
        
      }
    } else {
      await this.listOfOptionsForNumberPatternMatching.nth(1).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForNumberPatternMatching.nth(0).click();
      await this.listOfOptionsForNumberPatternMatching.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForTimeout(1000);
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(2).click();
      await this.listOfOptionsForNumberPatternMatching.nth(4).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(5).click();
      await this.listOfOptionsForNumberPatternMatching.nth(8).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(11).click();
      await this.listOfOptionsForNumberPatternMatching.nth(12).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(16).click();
      await this.listOfOptionsForNumberPatternMatching.nth(18).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(23).click();
      await this.listOfOptionsForNumberPatternMatching.nth(24).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForNumberPatternMatching.nth(25).click();
      await this.listOfOptionsForNumberPatternMatching.nth(29).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      await this.startPraciceAndTimerButton.click();
      await this.page.waitForTimeout(2000);
      await this.examineeCursorButton.click();
      await this.page.waitForTimeout(1000);

      if (typeOfTest.match(/All correct scenario/i)) {
        await this.verifyCharacterLimitOnItemLevelNotes();
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "1",
          "2",
          "9",
          "10",
          "12",
          "14",
          "19",
          "22",
          "24",
          "29",
          "31",
          "34",
          "36",
          "40",
          "45",
          "46",
          "48",
          "53",
          "56",
          "58",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "1",
          "4",
          "6",
          "11",
          "15",
          "16",
          "19",
          "21",
          "24",
          "28",
          "32",
          "35",
          "36",
          "37",
          "43",
          "45",
          "49",
          "52",
          "56",
          "59",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "3",
          "9",
          "10",
          "13",
          "17",
          "18",
          "20",
          "26",
          "28",
          "31",
          "33",
          "36",
          "41",
          "44",
          "47",
          "51",
          "52",
          "54",
          "58",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "4",
          "5",
          "9",
          "11",
          "14",
          "17",
          "19",
          "22",
          "26",
          "27",
          "30",
          "33",
          "37",
          "41",
          "44",
          "46",
          "48",
          "50",
          "55",
          "58",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "2",
          "5",
          "9",
          "10",
          "12",
          "17",
          "19",
          "20",
          "28",
          "29",
          "30",
          "33",
          "37",
          "40",
          "42",
          "45",
          "50",
          "53",
          "55",
          "57",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "3",
          "7",
          "11",
          "13",
          "15",
          "18",
          "22",
          "24",
          "26",
          "31",
          "33",
          "38",
          "41",
          "43",
          "45",
          "50",
          "52",
          "56",
          "59",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "3",
          "8",
          "10",
          "12",
          "17",
          "19",
          "22",
          "24",
          "27",
          "31",
          "34",
          "38",
          "41",
          "44",
          "46",
          "48",
          "51",
          "55",
          "59",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "2",
          "4",
          "7",
          "10",
          "12",
          "15",
          "19",
          "23",
          "26",
          "28",
          "31",
          "33",
          "37",
          "41",
          "44",
          "46",
          "49",
          "51",
          "54",
          "57",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "1",
          "3",
          "6",
          "10",
          "12",
          "14",
          "20",
          "23",
          "26",
          "29",
          "30",
          "33",
          "36",
          "41",
          "42",
          "45",
          "49",
          "52",
          "56",
          "59",
        );
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.page.waitForTimeout(1000);
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
          "0",
          "1",
          "6",
          "7",
          "12",
          "13",
          "18",
          "19",
          "24",
          "25",
          "31",
          "32",
          "37",
          "38",
          "43",
          "44",
          "49",
          "50",
          "55",
          "56",
        );
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }
    }
    if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
      await this.NextAndendTestBtn.click();
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForWlookUpScoresForWRDGFLTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    await this.page.waitForTimeout(1000);
    const itemDetails: string = (await this.itemDetails.textContent())!;
    await this.plainNextButtonOrEndButton.click();
    if (typeOfTest.match(/Answer only one sample item/i)) {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      if (itemDetails.startsWith("Sample Item A, Trial 1")) {
        
      }
    }else if (typeOfTest.match(/Answer only one sample item incorrect/i)) {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.plainNextButtonOrEndButton.click();
      if (itemDetails.startsWith("Sample Item A, Trial 1")) {
       
      }
    } else if (typeOfTest.match(/Answer both sample items/i)) {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForWordReadingFluency.nth(1).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.plainNextButtonOrEndButton.click();
      if (itemDetails.startsWith("Practice Exercise")) {
        
      }
    } else if (typeOfTest.match(/Sample Items Incorrect Scenario/i)) {
      for (let i = 1; i <= 2; i++) {
        await this.listOfOptionsForWordReadingFluency.nth(0).click();
        await this.listOfOptionsForWordReadingFluency.nth(2).click();
        await this.plainNextButtonOrEndButton.click();
      }
      for (let i = 1; i <= 2; i++) {
        if (i === 2) {
          await this.listOfOptionsForWordReadingFluency.nth(0).click();
          await this.listOfOptionsForWordReadingFluency.nth(2).click();
        } else {
          await this.listOfOptionsForWordReadingFluency.nth(0).click();
          await this.listOfOptionsForWordReadingFluency.nth(2).click();
          await this.plainNextButtonOrEndButton.click();
        }
      }
    } else if (typeOfTest.match(/Both Sample Items Incorrect Force Submit Scenario/i)) {
          await this.listOfOptionsForWordReadingFluency.nth(0).click();
          await this.listOfOptionsForWordReadingFluency.nth(2).click();
          await this.plainNextButtonOrEndButton.click();

          await this.listOfOptionsForWordReadingFluency.nth(0).click();
          await this.listOfOptionsForWordReadingFluency.nth(2).click();
          await this.plainNextButtonOrEndButton.click();

          await this.listOfOptionsForWordReadingFluency.nth(0).click();
          await this.listOfOptionsForWordReadingFluency.nth(2).click();
          await this.plainNextButtonOrEndButton.click();

          if (itemDetails.startsWith("Sample Item B, Trial 2")) {
            
          }     
    }else if (typeOfTest.match(/Practice Exercise Incorrect Scenario/i)) {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForWordReadingFluency.nth(1).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(4).click();
      await this.listOfOptionsForWordReadingFluency.nth(6).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(8).click();
      await this.listOfOptionsForWordReadingFluency.nth(9).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(14).click();
      await this.listOfOptionsForWordReadingFluency.nth(15).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(2000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
    } else if (typeOfTest.match(/Practice Exercise Incorrect Force Submit Scenario/i)) {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForWordReadingFluency.nth(1).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(4).click();
      await this.listOfOptionsForWordReadingFluency.nth(6).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(8).click();
      await this.listOfOptionsForWordReadingFluency.nth(9).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(14).click();
      await this.listOfOptionsForWordReadingFluency.nth(15).click();
      await this.page.waitForTimeout(1000);
      if (itemDetails.startsWith("Practice Exercise")) {
        
      }
    } else if (typeOfTest.match(/Answer Sample and Practice Exercise items/i)) {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForWordReadingFluency.nth(1).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(5).click();
      await this.listOfOptionsForWordReadingFluency.nth(6).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(8).click();
      await this.listOfOptionsForWordReadingFluency.nth(11).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(12).click();
      await this.listOfOptionsForWordReadingFluency.nth(13).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      if (itemDetails.startsWith("Test Items")) {
        
      }
    } else {
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.plainNextButtonOrEndButton.click();
      await this.listOfOptionsForWordReadingFluency.nth(1).click();
      await this.listOfOptionsForWordReadingFluency.nth(2).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(0).click();
      await this.listOfOptionsForWordReadingFluency.nth(3).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(5).click();
      await this.listOfOptionsForWordReadingFluency.nth(6).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(8).click();
      await this.listOfOptionsForWordReadingFluency.nth(11).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForWordReadingFluency.nth(12).click();
      await this.listOfOptionsForWordReadingFluency.nth(13).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      await this.startPraciceAndTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.examineeCursorButton.click();
      await this.page.waitForTimeout(1000);

      if (typeOfTest.match(/All correct scenario/i)) {
        await this.verifyCharacterLimitOnItemLevelNotes();
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "2",
          "4",
          "5",
          "10",
          "11",
          "12",
          "15",
          "16",
          "19",
          "22",
          "23",
          "24",
          "26",
          "28",
          "31",
          "32",
          "33",
          "36",
          "37",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "3",
          "4",
          "7",
          "8",
          "9",
          "12",
          "14",
          "16",
          "19",
          "20",
          "23",
          "25",
          "26",
          "28",
          "30",
          "33",
          "35",
          "37",
          "38",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "2",
          "6",
          "7",
          "10",
          "11",
          "12",
          "13",
          "17",
          "18",
          "20",
          "22",
          "24",
          "25",
          "29",
          "30",
          "33",
          "34",
          "36",
          "37",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "3",
          "4",
          "6",
          "8",
          "11",
          "13",
          "14",
          "17",
          "19",
          "21",
          "22",
          "24",
          "26",
          "29",
          "30",
          "34",
          "35",
          "37",
          "38",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "1",
          "4",
          "7",
          "8",
          "11",
          "12",
          "14",
          "16",
          "18",
          "21",
          "23",
          "25",
          "27",
          "30",
          "31",
          "32",
          "33",
          "36",
          "37",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "3",
          "4",
          "6",
          "8",
          "11",
          "13",
          "14",
          "16",
          "19",
          "21",
          "23",
          "25",
          "26",
          "30",
          "31",
          "34",
          "35",
          "36",
          "37",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "2",
          "4",
          "5",
          "8",
          "11",
          "12",
          "13",
          "17",
          "18",
          "21",
          "22",
          "26",
          "27",
          "28",
          "30",
          "34",
          "35",
          "36",
          "37",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "3",
          "4",
          "5",
          "8",
          "11",
          "12",
          "14",
          "18",
          "19",
          "20",
          "22",
          "24",
          "27",
          "28",
          "30",
          "34",
          "35",
          "36",
          "37",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "1",
          "6",
          "7",
          "8",
          "11",
          "12",
          "15",
          "18",
          "19",
          "21",
          "22",
          "25",
          "27",
          "30",
          "31",
          "33",
          "34",
          "38",
          "39",
        );
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.page.waitForTimeout(1000);
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "3",
          "6",
          "7",
          "8",
          "9",
          "13",
          "14",
          "17",
          "18",
          "20",
          "21",
          "25",
          "27",
          "29",
          "30",
          "34",
          "35",
          "38",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "2",
          "5",
          "6",
          "10",
          "11",
          "13",
          "15",
          "17",
          "18",
          "21",
          "22",
          "24",
          "27",
          "29",
          "31",
          "32",
          "34",
          "36",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "3",
          "4",
          "5",
          "8",
          "9",
          "14",
          "15",
          "16",
          "19",
          "21",
          "23",
          "26",
          "27",
          "28",
          "31",
          "32",
          "35",
          "38",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "3",
          "5",
          "7",
          "9",
          "10",
          "12",
          "15",
          "16",
          "18",
          "20",
          "23",
          "25",
          "27",
          "28",
          "31",
          "32",
          "33",
          "36",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "2",
          "3",
          "5",
          "6",
          "9",
          "10",
          "13",
          "15",
          "17",
          "19",
          "20",
          "22",
          "24",
          "26",
          "28",
          "29",
          "34",
          "35",
          "38",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "2",
          "5",
          "7",
          "9",
          "10",
          "12",
          "15",
          "17",
          "18",
          "20",
          "22",
          "24",
          "27",
          "28",
          "29",
          "32",
          "33",
          "38",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "1",
          "3",
          "6",
          "7",
          "9",
          "10",
          "14",
          "15",
          "16",
          "19",
          "20",
          "23",
          "24",
          "25",
          "29",
          "31",
          "32",
          "33",
          "38",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "0",
          "2",
          "6",
          "7",
          "9",
          "10",
          "13",
          "15",
          "16",
          "17",
          "21",
          "23",
          "25",
          "26",
          "29",
          "31",
          "32",
          "33",
          "38",
          "39",
        );
        await this.verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
          "2",
          "3",
          "4",
          "5",
          "9",
          "10",
          "13",
          "14",
          "16",
          "17",
          "20",
          "23",
          "24",
          "26",
          "28",
          "29",
          "32",
          "35",
          "36",
          "37",
        );
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }
    }
    if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
      await this.NextAndendTestBtn.click();
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }
  async verifyScoringAllTestItemsInEachPageWithTwoTapForNUMPAT(
    I1?: any,
    I2?: any,
    I3?: any,
    I4?: any,
    I5?: any,
    I6?: any,
    I7?: any,
    I8?: any,
    I9?: any,
    I10?: any,
    I11?: any,
    I12?: any,
    I13?: any,
    I14?: any,
    I15?: any,
    I16?: any,
    I17?: any,
    I18?: any,
    I19?: any,
    I20?: any,
  ) {
    await this.page.waitForTimeout(1000);
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);
    await this.listOfOptionsForNumberPatternMatching.nth(I1).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I2).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I3).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I4).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I5).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I6).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I7).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I8).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I9).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I10).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I11).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I12).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I13).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I14).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I15).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I16).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I17).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I18).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I19).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I20).click();
    await this.page.waitForTimeout(1000);
    await this.doneOrNextButton.click();
  }
  async verifyScoringAllTestItemsInEachPageWithTwoTapForWordReadingFluency(
    I1?: any,
    I2?: any,
    I3?: any,
    I4?: any,
    I5?: any,
    I6?: any,
    I7?: any,
    I8?: any,
    I9?: any,
    I10?: any,
    I11?: any,
    I12?: any,
    I13?: any,
    I14?: any,
    I15?: any,
    I16?: any,
    I17?: any,
    I18?: any,
    I19?: any,
    I20?: any,
  ) {
    await this.page.waitForTimeout(1000);
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);

    await this.listOfOptionsForWordReadingFluency.nth(I1).click();
    await this.listOfOptionsForWordReadingFluency.nth(I2).click();
    await this.listOfOptionsForWordReadingFluency.nth(I3).click();
    await this.listOfOptionsForWordReadingFluency.nth(I4).click();
    await this.listOfOptionsForWordReadingFluency.nth(I5).click();
    await this.listOfOptionsForWordReadingFluency.nth(I6).click();
    await this.listOfOptionsForWordReadingFluency.nth(I7).click();
    await this.listOfOptionsForWordReadingFluency.nth(I8).click();
    await this.listOfOptionsForWordReadingFluency.nth(I9).click();
    await this.listOfOptionsForWordReadingFluency.nth(I10).click();
    await this.listOfOptionsForWordReadingFluency.nth(I11).click();
    await this.listOfOptionsForWordReadingFluency.nth(I12).click();
    await this.listOfOptionsForWordReadingFluency.nth(I13).click();
    await this.listOfOptionsForWordReadingFluency.nth(I14).click();
    await this.listOfOptionsForWordReadingFluency.nth(I15).click();
    await this.listOfOptionsForWordReadingFluency.nth(I16).click();
    await this.listOfOptionsForWordReadingFluency.nth(I17).click();
    await this.listOfOptionsForWordReadingFluency.nth(I18).click();
    await this.listOfOptionsForWordReadingFluency.nth(I19).click();
    await this.listOfOptionsForWordReadingFluency.nth(I20).click();
    await this.page.waitForTimeout(1000);
    await this.doneOrNextButton.click();
  }

  async completeTheTakenTestForWlookUpScoresForSEMRETTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );
    
    while (await this.NextAndendTestBtn.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;

      if (
        typeOfTest.match(/125 correct scenario/i) ||
        typeOfTest.match(/40 correct scenario/i)
      ) {
        if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await this.startTimer.click();
          const numberOfClicks = typeOfTest.match(/125 correct scenario/i)
            ? 125
            : 40;
          for (let i = 1; i <= numberOfClicks; i++) {
            await this.addButton.click();
          }
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          await this.startTimer.click();
          // No need to add any clicks since it's an incorrect scenario
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didn't match with any of the conditions provided`,
        );
      }
      await this.NextAndendTestBtn2.waitFor({ state: "visible" });

      await this.NextAndendTestBtn2.click();

      if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
        break;
      }
    }

    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForWlookUpScoresForPHNRETTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );
   
    while (await this.NextAndendTestBtn.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;

      if (
        typeOfTest.match(/125 correct scenario/i) ||
        typeOfTest.match(/20 correct scenario/i)
      ) {
        if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
         }
          await this.startTimer.click();
          const numberOfClicks = typeOfTest.match(/125 correct scenario/i)
            ? 125
            : 20;
          for (let i = 1; i <= numberOfClicks; i++) {
            await this.addButton.click();
          }
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          await this.startTimer.click();
          // No need to add any clicks since it's an incorrect scenario
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didn't match with any of the conditions provided`,
        );
      }
      await this.NextAndendTestBtn2.waitFor({ state: "visible" });

      await this.NextAndendTestBtn2.click();

      if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
        break;
      }
    }

    console.log(this.scoreMap);
    return this.scoreMap;
  }
  
  async clickCorrectOption(correctlocator: Locator, itemDetails: string) {
    try {
      await correctlocator.click();

      if (itemDetails.startsWith("Item ")) {
        this.scoreMap.set(itemDetails, "1");
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickInCorrectOption(incorrectlocator: Locator, itemDetails: string) {
    try {
      await incorrectlocator.click();

      if (itemDetails.startsWith("Item ")) {
        this.scoreMap.set(itemDetails, "0");
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }
  async clickIDontKnowOption(iDontKnowlocator: Locator, itemDetails: string) {
    try {
      await iDontKnowlocator.click();

      if (itemDetails.startsWith("Item ")) {
        this.scoreMap.set(itemDetails, "0");
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async verifyCharacterLimitOnItemLevelNotes() {
    await this.page.waitForTimeout(1000);
    await this.openNotesIcon.click();
    await this.page.waitForTimeout(1000);
    await expect(this.notesText).toBeVisible();
    await expect(this.notesSaveButton).toBeVisible();
    await expect(this.notesDropdown).toBeVisible();
    await this.notesDropdown.click();
    await expect(this.notesDropdownOptions.nth(0)).toHaveText("Item");
    await expect(this.notesDropdownOptions.nth(1)).toHaveText("Test");
    await expect(this.notesDropdownOptions.nth(2)).toHaveText("Test Set");
    await this.notesDropdown.click();
    await expect(this.flagForLater).toBeVisible();
    await expect(this.closeNotes).toBeVisible();
    await expect(this.notesText).toHaveAttribute(
      "placeholder",
      "Write Something...",
    );
    await expect(this.notesText).toHaveAttribute("maxlength", "140");
    await this.notesText.fill(
      "fhgghhgggffdgdgvhgdgsHdjadgjhadjhadhjagfhjagdhagdahfjhagdjgashgdahgdhjasbdhavdahsbdhjasdbsahdhagdashgdashgdhasgdashgdjasgdasdahsadbhsbbbzxbx",
    );
    await this.page.waitForTimeout(1000);
    expect(await this.notesErrorMessage.textContent()).toEqual(
      " Max. Character Limit: 140 Characters",
    );
    await this.notesText.clear();
    await this.closeNotes.click();
    await this.page.waitForTimeout(1000);
  }

  async verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
    I1?: any,
    I2?: any,
    I3?: any,
    I4?: any,
    I5?: any,
    I6?: any,
    I7?: any,
    I8?: any,
    I9?: any,
    I10?: any,
  ) {
    await this.page.waitForTimeout(1000);
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);

    await this.listOfOptionsForSentenceReadingFluency.nth(I1).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I2).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I3).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I4).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I5).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I6).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I7).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I8).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I9).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I10).click();
    await this.page.waitForTimeout(3000);

    await this.doneOrNextButton.click();
  }

  async completeTheTakenTestForWlookUpScoresForSRDGFLTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    await this.page.waitForTimeout(1000);
    const itemDetails: string = (await this.itemDetails.textContent())!;
    await this.plainNextButtonOrEndButton.click();
    await this.listOfOptionsForSentenceReadingFluency.nth(0).click();
    await this.plainNextButtonOrEndButton.click();
    if (typeOfTest.match(/Answer only one sample item/i)) {
      if (itemDetails.startsWith("Sample Item B, Trial 1")) {
        
      }
    } else if (typeOfTest.match(/Answer both sample items/i)) {
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.plainNextButtonOrEndButton.click();
      if (itemDetails.startsWith("Practice Exercise")) {
        
      }
    } else if (typeOfTest.match(/Answer only Practice Exercise items/i)) {
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(2).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(4).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(7).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      if (itemDetails.startsWith("Test Items")) {
        
      }
    } else if (typeOfTest.match(/Discontinue scenario/i)) {
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(3).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(5).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(7).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
    } else {
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.plainNextButtonOrEndButton.click();
      await this.startPracticeAndStartTimerButton.click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(1).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(2).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(4).click();
      await this.page.waitForTimeout(1000);
      await this.listOfOptionsForSentenceReadingFluency.nth(7).click();
      await this.page.waitForTimeout(1000);
      await this.doneOrNextButton.click();
      await this.page.waitForTimeout(1000);
      await this.startTimerAndDisplayTestItems.click();
      await this.page.waitForTimeout(1000);
      await this.examineeCursorButton.click();
      if (typeOfTest.match(/All correct scenario/i)) {
        await this.verifyCharacterLimitOnItemLevelNotes();
        await this.page.waitForTimeout(1000);
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "2",
          "4",
          "7",
          "8",
          "11",
          "12",
          "14",
          "16",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "2",
          "4",
          "7",
          "9",
          "11",
          "13",
          "15",
          "16",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "2",
          "5",
          "6",
          "9",
          "10",
          "13",
          "14",
          "16",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "3",
          "4",
          "7",
          "8",
          "10",
          "13",
          "15",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "5",
          "6",
          "8",
          "10",
          "12",
          "14",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "3",
          "4",
          "7",
          "9",
          "10",
          "13",
          "15",
          "17",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "2",
          "4",
          "7",
          "9",
          "11",
          "13",
          "14",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "2",
          "5",
          "7",
          "8",
          "10",
          "13",
          "14",
          "16",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "2",
          "4",
          "7",
          "8",
          "11",
          "13",
          "14",
          "16",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "3",
          "5",
          "6",
          "9",
          "11",
          "13",
          "14",
          "16",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "5",
          "6",
          "9",
          "11",
          "12",
          "14",
          "16",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "2",
          "4",
          "7",
          "9",
          "11",
          "13",
          "14",
          "16",
          "18",
        );
        await this.examineeCursorButton.click();
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.page.waitForTimeout(1000);
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "3",
          "5",
          "6",
          "9",
          "10",
          "13",
          "15",
          "17",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "5",
          "6",
          "8",
          "10",
          "12",
          "14",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "4",
          "7",
          "8",
          "11",
          "12",
          "15",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "2",
          "5",
          "6",
          "9",
          "11",
          "12",
          "14",
          "16",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "2",
          "4",
          "7",
          "9",
          "11",
          "13",
          "15",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "2",
          "5",
          "6",
          "8",
          "11",
          "12",
          "14",
          "16",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "5",
          "6",
          "8",
          "10",
          "12",
          "15",
          "16",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "3",
          "4",
          "6",
          "9",
          "11",
          "12",
          "15",
          "17",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "5",
          "6",
          "9",
          "10",
          "12",
          "15",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "2",
          "4",
          "7",
          "8",
          "10",
          "12",
          "15",
          "17",
          "19",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "1",
          "2",
          "4",
          "7",
          "8",
          "10",
          "13",
          "15",
          "17",
          "18",
        );
        await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceReadingFluency(
          "0",
          "3",
          "5",
          "6",
          "8",
          "10",
          "12",
          "15",
          "17",
          "19",
        );
        await this.examineeCursorButton.click();
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }
    }
    if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
      await this.NextAndendTestBtn.click();
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any, I13?: any, I14?: any, I15?: any, I16?: any, I17?: any, I18?: any, I19?: any, I20?: any) {
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);
    await this.listOfOptionsForLetterPatternMatching.nth(I1).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I2).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I3).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I4).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I5).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I6).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I7).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I8).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I9).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I10).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I11).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I12).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I13).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I14).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I15).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I16).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I17).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I18).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I19).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I20).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.click();
  }

  async verifyScoringAllPracticeExerciseForLetterPatternMatching(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any) {
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForLetterPatternMatching.nth(I1).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I2).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I3).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I4).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I5).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I6).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I7).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I8).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I9).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I10).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I11).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I12).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
  }

  async completeTheTakenTestForWlookUpScoresForLETPATTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
     
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;
      if (typeOfTest.match(/Answer only one sample item/i)) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
          return;
        }
      } else if (typeOfTest.match(/Answer both sample items/i)) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          await correctlocator.click();
          return;
        }
      } else if (typeOfTest.match(/Answer only Practice Exercise items/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('0', '1', '3', '5', '6', '7', '10', '12', '14', '15', '18', '19');
          await this.doneOrNextButton.click();
          await this.doneOrNextButton.click();
          return;
        }
      } else if (typeOfTest.match(/Discontinue scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await incorrectlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('0', '1', '3', '5', '6', '7', '10', '12', '14', '15', '18', '19');
          await this.doneOrNextButton.click();
          await this.doneOrNextButton.waitFor({ state: "visible" });
          await this.doneOrNextButton.click();
          return;
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
          await this.doneOrNextButton.click();
          await this.startPraciceAndTimerButton.click();
          await this.examineeCursorButton.click();
          await this.verifyCharacterLimitOnItemLevelNotes();
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '2', '3', '4', '7', '8', '10', '11', '12', '14', '17', '18', '20', '23', '26', '28', '29', '31', '34', '38');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '2', '7', '11', '13', '16', '21', '23', '24', '27', '32', '35', '38', '40', '43', '46', '48', '50', '55', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '5', '6', '10', '14', '16', '19', '22', '24', '26', '31', '34', '38', '39', '45', '47', '48', '51', '55', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '5', '6', '11', '15', '17', '20', '22', '26', '29', '31', '34', '37', '40', '42', '47', '48', '50', '55', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '4', '8', '10', '16', '17', '18', '23', '25', '28', '30', '33', '38', '41', '43', '46', '48', '53', '55', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '4', '7', '9', '14', '15', '20', '23', '25', '27', '32', '34', '40', '41', '42', '45', '50', '52', '56', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '5', '7', '11', '14', '16', '20', '23', '26', '27', '32', '35', '38', '41', '43', '46', '49', '51', '55', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '3', '6', '9', '12', '16', '21', '23', '25', '28', '31', '34', '38', '40', '45', '47', '48', '49', '55', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '5', '6', '9', '12', '17', '20', '23', '26', '28', '31', '34', '37', '40', '45', '47', '50', '53', '54', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('1', '3', '6', '10', '13', '14', '19', '23', '24', '27', '31', '35', '36', '39', '45', '47', '49', '51', '54', '56');
          await this.examineeCursorButton.click();
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
          await this.doneOrNextButton.click();
          await this.startPraciceAndTimerButton.click();
          await this.examineeCursorButton.click();
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '4', '5', '6', '7', '9', '10', '12', '13', '16', '17', '20', '21', '24', '25', '29', '30', '34', '35');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
          await this.examineeCursorButton.click();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }

      await this.NextAndendTestBtn.click();
      if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }
  async verifyScoringAllTestItemsInEachPageWithOneTapForSentenceWritingFluency(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, value?: any) {
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);
    await this.listOfScoresForSentenceWritingFluency.nth(I1).click();
    await this.listOfScoresForSentenceWritingFluency.nth(I1).fill(value);
    await this.listOfScoresForSentenceWritingFluency.nth(I2).click();
    await this.listOfScoresForSentenceWritingFluency.nth(I2).fill(value);
    await this.listOfScoresForSentenceWritingFluency.nth(I3).click();
    await this.listOfScoresForSentenceWritingFluency.nth(I3).fill(value);
    await this.listOfScoresForSentenceWritingFluency.nth(I4).click();
    await this.listOfScoresForSentenceWritingFluency.nth(I4).fill(value);
    await this.listOfScoresForSentenceWritingFluency.nth(I5).click();
    await this.listOfScoresForSentenceWritingFluency.nth(I5).fill(value);
  }

  async completeTheTakenTestForWlookUpScoresForSWRTFLTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

     while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;
      if (typeOfTest.match(/Answer only one sample item/i)) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
          return;
        }
      } else if (typeOfTest.match(/Answer two sample items/i)) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          await correctlocator.click();
          return;
        }
      } else if (typeOfTest.match(/Answer three sample items/i)) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item C, Trial 1")) {
          await correctlocator.click();
          return;
        }
      } else if (typeOfTest.match(/Discontinue scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startTimerButton.click();
          await this.verifyCharacterLimitOnItemLevelNotes();
          await this.timeUpView.waitFor({ state: "visible" });
          await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceWritingFluency('0', '1', '2', '3', '4', '8');
          await this.submitButton.click();
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startTimerButton.click();
          await this.timeUpView.waitFor({ state: "visible" });
          await this.verifyScoringAllTestItemsInEachPageWithOneTapForSentenceWritingFluency('0', '1', '2', '3', '4', '0');
          await this.submitButton.click();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }
      if (itemDetails !== "Test Introduction") {
        await this.plainNextButtonOrEndButton.click();
      }

      if ((await this.plainNextButtonOrEndButton.textContent()) === "End Test") {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }
     
  async verifyScoringAllTestItemsInEachPageWithOneTapForMathFactsFluency(I1?: any, I2?: any, value?: any) {
    
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);
    await this.listOfScoresForMathFactsFluency.nth(I1).click();
    await this.listOfScoresForMathFactsFluency.nth(I1).fill(value);
    await this.page.waitForTimeout(1000);
    await this.listOfScoresForMathFactsFluency.nth(I2).click();
    await this.listOfScoresForMathFactsFluency.nth(I2).fill(value);
    await this.page.waitForTimeout(1000);
  }

  async completeTheTakenTestForWlookUpScoresForMTHFLUTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

     while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;
      if (typeOfTest.match(/Answer only Practice Exercise/i)) {
        if (itemDetails.match(/Practice Exercise/i)) {
          await this.startTimer.click();
          await this.timeText.waitFor({ state: "visible" });
          await this.listOfScoresForMathFactsFluency.nth(0).click();
          await this.listOfScoresForMathFactsFluency.nth(0).fill('5');
          return;
        }
      } else if (typeOfTest.match(/Discontinue scenario/i)) {
        if (itemDetails.match(/Practice Exercise/i)) {
        await this.startTimer.click();
        await this.timeText.waitFor({ state: "visible" });
        await this.listOfScoresForMathFactsFluency.nth(0).click();
        await this.listOfScoresForMathFactsFluency.nth(0).fill('0');
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startTimer.click();
          await this.timeText.waitFor({ state: "visible" });
          await this.listOfScoresForMathFactsFluency.nth(0).click();
          await this.listOfScoresForMathFactsFluency.nth(0).fill('5');
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startTimer.click();
          await this.verifyCharacterLimitOnItemLevelNotes();
          await this.timeUpView.waitFor({ state: "visible" });
          await this.verifyScoringAllTestItemsInEachPageWithOneTapForMathFactsFluency('0', '1', '80');
          await this.submitButton.click();
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startTimer.click();
          await this.timeText.waitFor({ state: "visible" });
          await this.listOfScoresForMathFactsFluency.nth(0).click();
          await this.listOfScoresForMathFactsFluency.nth(0).fill('5');
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startTimer.click();
          await this.timeUpView.waitFor({ state: "visible" });
          await this.verifyScoringAllTestItemsInEachPageWithOneTapForMathFactsFluency('0', '1', '0');
          await this.submitButton.click();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }
      if (itemDetails !== "Test Introduction") {
        await this.plainNextButtonOrEndButton.click();
      }

      if ((await this.plainNextButtonOrEndButton.textContent()) === "End Test") {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

  async completeTheTakenTestForWlookUpScoresForSNDBLNTest(
    typeOfTest: string,
    BbyC: number
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;
      
      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Item")) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(/Answer only one sample item/i)
      ) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
          return;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
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

  async completeTheTakenTestForWlookUpScoresForNUMREVTest(
    typeOfTest: string,
    BbyC: number
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All Correct scenario (SSP1|SSP2|SSP3)/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } if (/5 Correct and 5 Incorrect Scenario for (SSP1|SSP2|SSP3)/i.test(typeOfTest)) {
        const testType = typeOfTest.match(/SSP1|SSP2|SSP3/i)?.[0];
        const itemNumber = parseInt(itemDetails.match(/^Item (\d+)\b/)?.[1], 10);
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (testType && itemNumber) {
          const conditions = {
            SSP1: { correct: [1, 2, 3, 4, 5], dontKnow: [6, 7, 8, 9, 10] },
            SSP2: { correct: [6, 7, 8, 9, 10], dontKnow: [11, 12, 13, 14, 15] },
            SSP3: { correct: [11, 12, 13, 14, 15], dontKnow: [16, 17, 18, 19, 20] },
          };
          const { correct, dontKnow } = conditions[testType];
          if (correct.includes(itemNumber)) {
            await correctlocator.click();
          } else if (dontKnow.includes(itemNumber)) {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(/Sample Item (A|B|C) Correct Force Submit Scenario/i)
      ) {
        if (itemDetails.match(/Sample Item (A|B|C), Trial 1/i)) {
          await correctlocator.click();
          return;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
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

  async endSessionRSB() {
    //await this.addTestObservations.click();
    await this.addTestObservationsNew.click();
    await this.checkBoxNoneOfTheabove.check();
    await this.endSessionButton.click();
    //await this.areYouSureYesButton.click();
    await this.endSessionReviewBtn.click();
    await this.page.waitForTimeout(2000);
    await this.nextButton.click();
    await this.page.waitForTimeout(2000);
  }

  async validateEndTestPopUpTextContent(
    AE: string,
    GE: string,
    ScoreCheckText: string,
    FlagsText: string,
    OutcomeMsg: string,
    rsb: string[],
    testStemForm: string,
    typeOfTest: string,
  ) {
    
    const testNames: string[] = ["WRTSMP.W5PA"];
    const testNames1: string[] = ["SWRTFL.W5PA", "MTHFLU.W5PA"];
    const testNames2: string[] = ["RPDPHO.W5PA","LETPAT.W5PA","RPDLET.W5PA","RPDPIC.W5PA", "NUMPAT.W5PA", "SRDGFL.W5PA"];
    await expect.soft(this.AEValue).toHaveText(AE);
    await expect.soft(this.GEValue).toHaveText(GE);
    expect
      .soft(await this.EndTestPopUpElements.nth(1).textContent())
      .toContain(ScoreCheckText);
    if (testNames.includes(testStemForm) && !typeOfTest.match(/Block A Discontinue Scenario WRTSMP/i)
    ) {
      expect
        .soft(await this.EndTestPopUpElements.nth(10).textContent())
        .toContain(FlagsText);
      expect
        .soft(await this.EndTestPopUpElements.nth(15).textContent())
        .toContain(OutcomeMsg);
      await this.EndTestPopUpElements.nth(17).click();
    } else if (testNames2.includes(testStemForm)){
      expect
        .soft(await this.EndTestPopUpElements.nth(9).textContent())
        .toContain(FlagsText);
      expect
        .soft(await this.EndTestPopUpElements.nth(14).textContent())
        .toContain(OutcomeMsg);
      await this.EndTestPopUpElements.nth(18).click();
    } else if(testStemForm === 'SEMRET.W5PA' && typeOfTest.match(/125 correct scenario|All incorrect scenario/i)){
      expect
      .soft(await this.EndTestPopUpElements.nth(9).textContent())
      .toContain(FlagsText);
      expect
        .soft(await this.EndTestPopUpElements.nth(14).textContent())
        .toContain(OutcomeMsg);
      await this.EndTestPopUpElements.nth(16).click();
    } else if(
      (testStemForm === 'WRDGFL.W5PA' && typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)|Practice Exercise All Incorrect|Test Items (All Correct|All Incorrect|6 Correct)/i))
    ){
      expect
      .soft(await this.EndTestPopUpElements.nth(9).textContent())
      .toContain(FlagsText);
      expect
        .soft(await this.EndTestPopUpElements.nth(14).textContent())
        .toContain(OutcomeMsg);
      await this.EndTestPopUpElements.nth(17).click();
    }else if (testNames1.includes(testStemForm)){
      expect
        .soft(await this.EndTestPopUpElements.nth(11).textContent())
        .toContain(FlagsText);
      expect
        .soft(await this.EndTestPopUpElements.nth(16).textContent())
        .toContain(OutcomeMsg);
      await this.EndTestPopUpElements.nth(19).click();
    } else {
      expect
        .soft(await this.EndTestPopUpElements.nth(8).textContent())
        .toContain(FlagsText);
      expect
        .soft(await this.EndTestPopUpElements.nth(13).textContent())
        .toContain(OutcomeMsg);
      if (testNames1.includes(testStemForm))
       {
         await this.EndTestPopUpElements.nth(17).click();
       } else if  (testNames2.includes(testStemForm)) {
          await this.EndTestPopUpElements.nth(18).click();
       } else if (
        (testStemForm === 'STYCMP.W5PA' && typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
        (testStemForm === 'WRDATK.W5PA' && typeOfTest === 'Block A EndTest Flow when RS is 2') ||
        (testStemForm === 'LWIDNT.W5PA' && typeOfTest.match(/Block A EndTest Flow when RS is 0|Block AB EndTest flow scenario when RS is 9/)) ||
        (testStemForm === 'MPRBID.W5PA' && typeOfTest.match(/Sample Items AB discontinue Scenario for SSP (1|2|3)/i))
      ) {
        await this.EndTestPopUpElements.nth(16).click();
      }else if(
        (testStemForm === 'WRDGFL.W5PA' && typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)|Practice Exercise All Incorrect|Test Items (All Correct|All Incorrect|6 Correct)/i))
      ){
        await this.EndTestPopUpElements.nth(17).click();
      }else {
         await this.EndTestPopUpElements.nth(15).click();
       }
    }
    const rsbelements = await this.page.locator(
      "//button[@class='rsi-checkbox']",
    );
    const count = await rsbelements.count();
    // Array to store text contents
    const responseStyleBehaviours: string[] = [];
    // Iterate over each element and fetch text content
    for (let i = 0; i < count; i++) {
      const element = rsbelements.nth(i);
      const textContent = await element.textContent();
      responseStyleBehaviours.push(textContent?.trim() || "");
    }
    console.log(responseStyleBehaviours);
    rsb.forEach((rsbehaviourText, index) => {
      expect(responseStyleBehaviours[index]).toContain(rsbehaviourText);
    });
    if (testNames.includes(testStemForm)) {
      await this.EndTestPopUpElements.nth(17).click();
    } else if  (testNames2.includes(testStemForm)) {
      await this.EndTestPopUpElements.nth(18).click();
    } else if  (testNames1.includes(testStemForm)) {
      await this.EndTestPopUpElements.nth(19).click();
    } else if (
      (testStemForm === 'STYCMP.W5PA' && typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)) ||
      (testStemForm === 'WRDATK.W5PA' && typeOfTest === 'Block A EndTest Flow when RS is 2') ||
      (testStemForm === 'LWIDNT.W5PA' && typeOfTest.match(/Block A EndTest Flow when RS is 0|Block AB EndTest flow scenario when RS is 9/)) ||
      (testStemForm === 'SEMRET.W5PA' && typeOfTest.match(/125 correct scenario|All incorrect scenario/i)) ||
      (testStemForm === 'MPRBID.W5PA' && typeOfTest.match(/Sample Items AB discontinue Scenario for SSP (1|2|3)/i))
    ) {
      await this.EndTestPopUpElements.nth(16).click();
    }else if(
      (testStemForm === 'WRDGFL.W5PA' && typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)|Practice Exercise All Incorrect|Test Items (All Correct|All Incorrect|6 Correct)/i))
    ){
      await this.EndTestPopUpElements.nth(17).click();
    } else {
        await this.EndTestPopUpElements.nth(15).click();
    }
    await this.page.waitForTimeout(2000);
  }

  async completeTSObservationsandClickNext() {
    await this.page.bringToFront();

    //await this.lastRadioYEsButton.waitFor({ state: "visible" });

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
      "Responded impulsively and carelessly",
      "Care in Responding",
    );
    await this.selectTheDropdownOPtion(
      6,
      "Made random guesses",
      "Response to Difficult Items and Corrective Feedback",
    );
    await this.selectTheDropdownOPtion(
      7,
      "Was resistant to tasks",
      "Motivation",
    );
    // await this.selectThecheckBox(4, "fairEstimate");
    // await this.selectThecheckBox(7, "modificationToTheStandardise");
    await this.nextButton.click();
    await this.submitTestBlockAndFinsihAdminstration.click();
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

  async breakTheLogicOutAndForceSubmitTheTestFromMainNavigation(
    
  ) {
      await this.mainNavigation.click();
      await this.mainNavigationReview.click();
      await this.page.waitForTimeout(2000);
      await this.nextButton.click();
  }
}