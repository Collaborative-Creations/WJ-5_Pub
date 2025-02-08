import { test, expect, Page, Locator } from "../base/basePageFixtures";
import wj5ExamineePage from "./wj5_examinee.page";

export default class wj5DecilePage {
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
  private readonly introDetails: Locator;
  private readonly doneButton: Locator;
  private readonly listOfInCorrectAnswers: Locator;
  private readonly reviewButton: Locator;
  private readonly sampleinCorrectAnswerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.nextORendTestButton = this.page.locator(
      "//button[@class='plain-button next-item-button' or @class='plain-button nav-button']"
    );

    this.lestBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
    this.startTestButton = this.page.locator("//button[text()='Start Test']");
    this.sspPopUp = this.page.locator(".popup-outer");
    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button"
    );
    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button"
    );
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button"
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
      "//div[@class= 'observations']//div[@class='option-wrapper']//button"
    );

    this.dropDowns = this.page.locator(
      "//div[@class= 'observations']//button[@class='select-box']"
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
      ".main .plain-button:nth-child(2)"
    );
    this.mainNavigationReview = this.page.locator(
      ".main .plain-button:nth-child(4)"
    );
    this.listOfOptionsForWordReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options WRDGFL')]//child::button"
    );
    this.startPracticeAndStartTimerButton = this.page.locator(
      "//button[text()='Start Practice Exercise ']"
    );
    this.doneOrNextButton = this.page.locator(
      "//button[@class='plain-button nav-button']"
    );
    this.examineeCursorButton = this.page.locator(
      "//button[@class='plain-button examinee-cursor-button']"
    );
    this.startPraciceAndTimerButton = this.page.locator(
      "//button[text()='Start the timer and display the test items']"
    );
    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]"
    );
    this.NextAndendTestBtn2 = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[2]"
    );
    this.startTimer = this.page.locator("[class='plain-button blue-button']");
    this.addButton = this.page.locator(
      "[class='plain-button blue-text-button correct-left']"
    );
    this.minusButton = this.page.locator(
      "[class='plain-button blue-text-button incorrect-right']"
    );
    this.timerclosebtn = this.page.locator("//button[text()='Close']");
    this.listOfOptionsForNumberPatternMatching = this.page.locator(
      "//div[@class='options NUMPAT']//button"
    );
    this.listOfOptionsForSentenceReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options')]//child::button"
    );
    this.listOfOptions = this.page.locator(
      "//div[@class='examinee-view']//child::div[@class='options ']//child::*"
    );
    this.startTimerAndDisplayTestItems = this.page.locator(
      "//button[text()='Start the timer and display the test items']"
    );
    this.openNotesIcon = this.page.locator(
      "//button[@class='plain-button notes-button']"
    );
    this.notesText = this.page.locator(
      "//div[@class='notes-modal']//child::div[@class='notes-main']//child::textarea"
    );
    this.notesSaveButton = this.page.locator(
      "//button[@class='notes-save-button']"
    );
    this.flagForLater = this.page.locator(
      "//child::span[@class='flag-for-later']"
    );
    this.notesDropdown = this.page.locator(
      "//div[@class='notes-modal']//select"
    );
    this.notesDropdownOptions = this.page.locator(
      "//div[@class='notes-modal']//select//option"
    );
    this.notesErrorMessage = this.page.locator("//span[@class='redError']");
    this.closeNotes = this.page.locator(
      "//button[@class='plain-button close-btn']"
    );
    this.AEValue = this.page.locator("//span[text()='Age Equivalent ']/b");
    this.GEValue = this.page.locator("//span[text()='Grade Equivalent ']/b");
    this.EndTestPopUpElements = this.page.locator(
      "//div[@class='mid-grid']//child::*"
    );
    this.addTestObservationsNew = this.page.getByRole("button", {
      name: "+ Add Response Style and Behavior Statements",
    });
    this.listOfOptionsForLetterPatternMatching = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options LETPAT')]//child::button"
    );
    this.listOfScoresForSentenceWritingFluency = this.page.locator(
      "//input[@class='score-text']"
    );
    this.submitButton = this.page.locator("//button[text()='Submit']");
    this.startTimerButton = this.page.locator("//button[text()='Start Timer']");
    this.listOfScoresForMathFactsFluency = this.page.locator(
      "//input[@class='score-text']"
    );
    this.introDetails = this.page.locator("//span[@class='item-text']").first();
    this.listOfInCorrectAnswers = this.page.locator("//div[@class='select-group incorrect']//child::div[@class='option-wrapper']//child::*");
    this.doneButton = this.page.locator(
      "//button[@class='plain-button blue-button']"
    );
    this.reviewButton = this.page.locator("//button[text()='Review']");
    this.sampleinCorrectAnswerButton = this.page.locator(
      "//button[@class='select-option']"
    );
  }

  async selectThecheckBox(radioButton: number, info?: string) {
    await this.multiRadioButtons.nth(radioButton).click();
  }

  async selectTheDropdownOPtion(
    dropDown: number,
    dropDownOpt: string,
    info?: string
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

    if (await this.page.locator(".top-line").isVisible()) {
      await this.page.locator(".blue-button").getByText("Letʼs Begin").click();
    }
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
        (ele) => (ele as HTMLSelectElement).value
      );
      console.log(`selected ssp is = ${selectedSsp}`);

      expect(selectedSsp).toContain(sspOption);
    } catch (error) {
      await this.sspDropDown.selectOption({ label: sspOption });
      console.error(
        `the ssp drop down didnt select the one we want at first attempt so trying one more time ... ${error}`
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

  async completeTheTakenTestForWlookUpScoresForRPDPHOTest(
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
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          await this.listOfInCorrectAnswers.nth(0).click();
          await this.listOfInCorrectAnswers.nth(1).click();
          await this.listOfInCorrectAnswers.nth(2).click();
          await this.listOfInCorrectAnswers.nth(3).click();
          await this.listOfInCorrectAnswers.nth(4).click();
          await this.listOfInCorrectAnswers.nth(5).click();
          await this.listOfInCorrectAnswers.nth(6).click();
          await this.listOfInCorrectAnswers.nth(7).click();
          await this.listOfInCorrectAnswers.nth(8).click();
          await this.listOfInCorrectAnswers.nth(9).click();
        }
      } else if (typeOfTest.match(/Answer only sample item/i)) {
         if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await this.doneButton.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          this.scoreMap.clear();
          break;
        }
      } else if (typeOfTest.match(/Discontinue Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          if (itemDetails.startsWith("Sample Item A, Trial 2")) {
            await this.doneButton.click();
          } else {
            await this.listOfInCorrectAnswers.nth(0).click();
            await this.doneButton.click();
          }
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

  async completeTheTakenTestForWlookUpScoresForRPDLETTest(
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
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        }
      } else if (typeOfTest.match(/Test Items 10 Incorrect scenario/i)) {
      if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        }else if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          for(let i=0;i<=9;i++){
          await this.listOfInCorrectAnswers.nth(i).click();
          } 
       }
      }else if (typeOfTest.match(/Answer only sample item/i)) {
         if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await this.doneButton.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          this.scoreMap.clear();
          break;
        }
      }else if (typeOfTest.match(/Discontinue Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          if (itemDetails.startsWith("Sample Item A, Trial 2")) {
            await this.doneButton.click();
          } else {
            await this.listOfInCorrectAnswers.nth(0).click();
            await this.doneButton.click();
          }
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

  async completeTheTakenTestForWlookUpScoresForRPDPICTest(
    typeOfTest: string,
    BbyC: number
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );
    const sampleinCorrectAnswer: Locator =
        this.sampleinCorrectAnswerButton.nth(0);

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        }
      } else if (typeOfTest.match(/Test Items 10 Incorrect scenario/i)) {
      if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        }else if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          for(let i=0;i<=9;i++){
          await this.listOfInCorrectAnswers.nth(i).click();
          } 
       }
      }else if (typeOfTest.match(/Answer only sample item/i)) {
         if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await this.doneButton.click();
          this.scoreMap.clear();
          break;
        }
      }else if (typeOfTest.match(/Discontinue Scenario/i)) {
          if (itemDetails.startsWith("Sample")) {
            await sampleinCorrectAnswer.click();
            await this.doneButton.click();
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
   await this.reviewButton.click();
  // await this.areYouSureYesButton.click();
   await this.page.waitForTimeout(2000);
   await this.nextButton.click();
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
      "Level of Conversational Proficiency"
    );
    await this.selectTheDropdownOPtion(
      1,
      "Was uncooperative at times",
      "Level of Cooperation"
    );
    await this.selectTheDropdownOPtion(
      2,
      "Seemed lethargic",
      "Level of Activity"
    );
    await this.selectTheDropdownOPtion(
      3,
      "Appeared distracted some of the time",
      "Attention and Concentration"
    );
    await this.selectTheDropdownOPtion(
      4,
      "Appeared overly anxious",
      "Self-Confidence"
    );
    await this.selectTheDropdownOPtion(
      5,
      "Responded impulsively and carelessly",
      "Care in Responding"
    );
    await this.selectTheDropdownOPtion(
      6,
      "Made random guesses",
      "Response to Difficult Items and Corrective Feedback"
    );
    await this.selectTheDropdownOPtion(
      7,
      "Was resistant to tasks",
      "Motivation"
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

  async breakTheLogicOutAndForceSubmitTheTestFromMainNavigation() {
    await this.mainNavigation.click();
    await this.mainNavigationReview.click();
    await this.page.waitForTimeout(2000);
    await this.nextButton.click();
  }
}
