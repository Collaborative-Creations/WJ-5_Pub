import { test, expect, Page, Locator } from "../base/basePageFixtures";
import wj5ExamineePage from "./wj5_examinee.page";

export default class wj5MultiPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly nextORendTestButton: Locator;
  private readonly lestBeginButton: Locator;
  private readonly startTestButton: Locator;
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly videoPlayButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly addTestObservations: Locator;
  private readonly checkBoxNoneOfTheabove: Locator;
  private readonly endSessionButton: Locator;
  private readonly areYouSureYesButton: Locator;
  private readonly testNameAtAdminOverview: Locator;

  private readonly lastRadioYEsButton: Locator;
  private readonly multiRadioButtons: Locator;
  private readonly dropDowns: Locator;
  private readonly dropDownOption: Locator;
  private readonly nextButton: Locator;
  private readonly continueButton: Locator;
  private readonly submitTestBlockAndFinsihAdminstration: Locator;
  private readonly submitTestAssignment: Locator;
  private readonly sspDropDown: Locator;
  private readonly syncDevicePopUp: Locator;
  private readonly mainNavigation: Locator;
  private readonly mainNavigationHome: Locator;
  private readonly openNotesIcon: Locator;
  private readonly notesText: Locator;
  private readonly notesSaveButton: Locator;
  private readonly flagForLater: Locator;
  private readonly notesDropdown: Locator;
  private readonly notesDropdownOptions: Locator;
  private readonly notesErrorMessage: Locator;
  private readonly closeNotes: Locator;

  private readonly optionA: Locator;
  private readonly optionB: Locator;
  private readonly optionC: Locator;
  private readonly activateTabletControlButton: Locator;
  private readonly correctTickMark: Locator;
  private readonly AC: Locator;
  private readonly NR: Locator;
  private readonly correctAnswerButton: Locator;
  private readonly incorrectAnswerButton: Locator;
  private readonly playAudioButton: Locator;
  private readonly resolveButton: Locator;
  private readonly scores: Locator;
  private readonly scoresBlockB: Locator;
  private readonly submitButton: Locator;
  private readonly blockAButton: Locator;
  private readonly blockBButton: Locator;
  private readonly blockCButton: Locator;

  private readonly NextAndendTestBtn: Locator;
  private readonly ResolveBtn: Locator;
  private readonly ScoreEntryFields: Locator;
  private readonly ScoreLaterContinue: Locator;
  private readonly ScoreLaterSubmit: Locator;
  private readonly EndTestCloseIcon: Locator;
  private readonly IDK: Locator;
  private readonly parcmpdonebtn: Locator;
  private readonly replayButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.nextORendTestButton = this.page.locator(
      "//button[@class='plain-button next-item-button' or @class='plain-button nav-button']",
    );

    this.lestBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
    this.startTestButton = this.page.locator("//button[text()='Start Test']");
    this.videoPlayButton = this.page.locator("//button[@class='large-play']");
    this.replayButton = this.page.locator(
      '//button[@class="plain-button replay-button"]',
    );
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

    this.lastRadioYEsButton = this.page.getByRole("radio", {
      name: "Yes (Please explain; include test names and details.)",
    });

    this.multiRadioButtons = this.page.locator(
      "//div[@class= 'observations']//div[@class='option-wrapper']//button",
    );

    this.dropDowns = this.page.locator(
      "//div[@class= 'observations']//button[@class='select-box']",
    );

    this.dropDownOption = this.page.locator("//following-sibling::ul/li");

    this.nextButton = this.page.getByRole("button", { name: "Next" });
    this.continueButton = this.page.getByRole("button", { name: "Continue" });
    this.submitTestBlockAndFinsihAdminstration = this.page.getByRole("button", {
      name: "Submit test block and finish administration",
    });

    this.submitTestAssignment = this.page.getByRole("button", {
      name: "Submit Test Assignment",
    });

    this.sspDropDown = this.page.locator(".starting-point-dropdown");
    this.syncDevicePopUp = this.page.locator(".popup-header");
    this.mainNavigation = this.page.locator(".plain-button.menu-button");
    this.mainNavigationHome = this.page.locator(
      ".main .plain-button:nth-child(2)",
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

    this.optionA = this.page.locator("//button[@data-position='0']");
    this.optionB = this.page.locator("//button[@data-position='1']");
    this.optionC = this.page.locator("//button[@data-position='2']");

    this.activateTabletControlButton = this.page.locator(
      "//button[@class='plain-button examinee-cursor-button']",
    );
    this.correctTickMark = this.page.locator(
      "//span[@class='correct-marker']/following-sibling::div",
    );
    this.AC = this.page.locator("//button[text()='All Correct']");
    this.NR = this.page.locator("//button[text()='No Response']");
    this.correctAnswerButton = this.page.locator(
      "//div[@class='select-group correct item-score-group no-border']//button",
    );
    this.incorrectAnswerButton = this.page.locator(
      "//div[@class='select-group incorrect item-score-group no-border']//button",
    );
    this.playAudioButton = this.page.locator(
      "//button[@class='small-blue-button']",
    );

    this.resolveButton = this.page.getByRole("button", { name: "Resolve" });
    this.scores = this.page.locator(
      "//input[@placeholder='Number Correct (0-5)']",
    );
    this.scoresBlockB = this.page.locator(
      "//input[@placeholder='Number Correct (0-10)']",
    );
    this.submitButton = this.page.getByRole("button", { name: "Submit" });

    this.blockAButton = this.page.getByText("Block A (Items 1-5)");
    this.blockBButton = this.page.getByText("Block B (Items 6-15)");
    this.blockCButton = this.page.getByText("Block C (Items 16-20)");

    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.ResolveBtn = this.page.locator(
      "//button[@class='link-button']/b[text()='Resolve']",
    );
    this.ScoreEntryFields = this.page.locator("//input[@class='score-text']");
    this.ScoreLaterContinue = this.page.locator(
      "//button[@class='blue-button-no-margin' or text()='Continue']",
    );
    this.ScoreLaterSubmit = this.page.locator("//button[text()='Submit']");
    this.EndTestCloseIcon = this.page.locator("//button[@class='close-btn']");
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.parcmpdonebtn = this.page.locator("//button[text()='Done']");
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

  async pickTheTestNeeded(testName: string) {
    await this.page.bringToFront();
    await this.page.waitForTimeout(Number(2000));

    // if (await this.page.locator(".top-line").isVisible()) {
    //   await this.page.locator(".blue-button").getByText("Letʼs Begin").click();
    // }

    await this.page.locator(".plain-button.menu-button").click();
    await this.page.locator(".main .plain-button:nth-child(3)").click();
    await this.page
      .locator(".second-level .test-name")
      .getByText(testName)
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

  async completeTheTakenTestForWlookUpScoresForLWIDNTTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/6 Correct & 6 Incorrect Scenario/i)) {
        if (/^Item (1[6-9]|2[0-1])$/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (2[2-7])$/.test(itemDetails)) {
          await incorrectlocator.click();
        }
      } else if (
        typeOfTest.match(/Block A Correct & Block B Incorrect Scenario/i)
      ) {
        if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 4) {
            await correctlocator.click();
          } else if (itemNumber >= 5 && itemNumber <= 15) {
            await incorrectlocator.click();
          }
        }
      } else if (itemDetails.startsWith("Introduction")) {
        await this.plainNextButtonOrEndButton.click();
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

  async completeTheTakenTestForWlookUpScoresForPSGCMPTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/5 Correct & 5 Incorrect Scenario/i)) {
        if (/^Item (1[2-6])$/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[7-9]|2[0-1])$/.test(itemDetails)) {
          await incorrectlocator.click();
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block A Correct & Block B Incorrect Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 7) {
            await correctlocator.click();
          } else if (itemNumber >= 8 && itemNumber <= 12) {
            await incorrectlocator.click();
          }
        }
      } else if (itemDetails.startsWith("Introduction")) {
        await this.plainNextButtonOrEndButton.click();
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

  async completeTheTakenTestForWlookUpScoresForWRDATKTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/6 Correct & 6 Incorrect Scenario/i)) {
        if (/^Item (2[9]|3[0-4])$/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (3[5-9]|4[0])$/.test(itemDetails)) {
          await incorrectlocator.click();
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block A Correct & Block B Incorrect Scenario/i)
      ) {
        if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 3) {
            await correctlocator.click();
          } else if (itemNumber >= 4 && itemNumber <= 10) {
            await incorrectlocator.click();
          }
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        }
      } else if (itemDetails.startsWith("Introduction")) {
        await this.plainNextButtonOrEndButton.click();
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

  async completeTheTakenTestForWlookUpScoresForORLRDGTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const AllCorrect: Locator = this.AC;
      const NoResponse: Locator = this.NR;
      const locatorWrapper: Locator = this.page.locator(
        "//div[@class='option-wrapper']//child::*",
      );
      const elements = await locatorWrapper.count();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Story")) {
          await AllCorrect.click();
        }
      } else if (typeOfTest.match(/Story 1 to Story 6 Incorrect Scenario/i)) {
        if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(13, elements); i++) {
            await locatorWrapper.nth(i).click();
            await this.page.waitForTimeout(500);
          }
        } else if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        } else if (itemDetails === "Story 5") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        } else if (itemDetails === "Story 6") {
          await NoResponse.click();
          await this.page.waitForTimeout(2000);
        }
      } else if (
        typeOfTest.match(
          /Story 3 to Story 2 & 1 logic flow & EndTest Scenario/i,
        )
      ) {
        if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(20, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i <= Math.min(13, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        } else if (itemDetails === "Story 1") {
          for (let i = 0; i <= Math.min(7, elements); i++) {
            await locatorWrapper.nth(i).click();
          }
        }
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

  async completeTheTakenTestForWlookUpScoresForWRTSMPTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (
        typeOfTest.match(
          /Block A all correct scenario with score of 9 in Block B/i,
        )
      ) {
        if (/^Item [1-5]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item [6-9]\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 10") {
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("9"); //RS becomes 14
          await this.ScoreLaterSubmit.click();
          await this.ScoreLaterContinue.click();
          return;
        }
      } else if (
        typeOfTest.match(/Block B & C with zero scores to A Correct Scenario/i)
      ) {
        if (/^Item ([6-9]|1[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(1).fill("0"); //RS becomes 0
          await this.ScoreLaterSubmit.click();
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
          await correctlocator.click();
        } else if (/^Item [2-5]\b/.test(itemDetails)) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block C & D with zero scores to Block B with RS 10/i)
      ) {
        if (/^Item (1[1-5]|1[6-9])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 20") {
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(2).fill("0"); //RS becomes 0
          await this.ScoreLaterSubmit.click();
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item [6-9]\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 10") {
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 10
          await this.ScoreLaterSubmit.click();
          await this.ScoreLaterContinue.click();
          return;
        }
      } else if (
        typeOfTest.match(/Block D & E with zero scores to Block C with RS 10/i)
      ) {
        if (/^Item (1[6-9]|2[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 25") {
          await expect(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(2).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(3).fill("0"); //RS becomes 0
          await this.ScoreLaterSubmit.click();
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item (1[1-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("10"); //RS becomes 10
          await this.ScoreLaterSubmit.click();
          await this.ScoreLaterContinue.click();
          return;
        }
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

  async completeTheTakenTestForWlookUpScoresForMATRCZTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = await this.itemDetails.textContent();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.videoPlayButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await this.correctTickMark.click();
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block A/)) {
            if (itemDetails.match(/Item 1/)) {
              await this.verifyCharacterLimitOnItemLevelNotes();
              await this.correctTickMark.click();
            } else if (itemDetails.match(/Item 2/)) {
              await this.correctTickMark.click();
            } else if (itemDetails.match(/Item ([3-8])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          } else if (itemDetails.match(/Block B/)) {
            if (itemDetails.match(/Item ([1-8])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          } else if (itemDetails.match(/Block D/)) {
            if (itemDetails.match(/Item ([1-8])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          }
        }
      } else if (typeOfTest.match(/test ends in Block A/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.videoPlayButton.click();
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block A/)) {
            if (itemDetails.match(/Item 1/)) {
              await this.verifyCharacterLimitOnItemLevelNotes();
              await this.optionA.click();
            } else if (itemDetails.match(/Item 2/)) {
              await this.optionA.click();
            } else if (itemDetails.match(/Item ([3]|[5-6]|[8])/)) {
              await this.activateTabletControlButton.click();
              await this.optionA.click();
            } else if (itemDetails.match(/Item ([4]|[7])/)) {
              await this.activateTabletControlButton.click();
              await this.optionB.click();
            }
          }
        }
      } else if (
        typeOfTest.match(/Block A- 2 Incorrect & Block C- 8 Correct scenario/i)
      ) {
        if (itemDetails.startsWith("Introduction")) {
          await this.videoPlayButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await this.correctTickMark.click();
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block A/)) {
            if (itemDetails.match(/Item 1/)) {
              await this.verifyCharacterLimitOnItemLevelNotes();
              await this.optionC.click();
            } else if (itemDetails.match(/Item 2/)) {
              await this.optionC.click();
            } else if (itemDetails.match(/Item ([3-6])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            } else if (itemDetails.match(/Item ([7]|[8])/)) {
              await this.activateTabletControlButton.click();
              await this.optionB.click();
            }
          } else if (itemDetails.match(/Block C/)) {
            if (itemDetails.match(/Item ([1-8])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          }
        }
      } else if (
        typeOfTest.match(/Block B- 4 Incorrect & Block C- 8 correct scenario/i)
      ) {
        if (itemDetails.startsWith("Introduction")) {
          await this.videoPlayButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await this.correctTickMark.click();
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block B/)) {
            if (itemDetails.match(/Item (9|1[0-2])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            } else if (itemDetails.match(/Item 13/)) {
              await this.activateTabletControlButton.click();
              await this.optionB.click();
            } else if (itemDetails.match(/Item (1[4-6])/)) {
              await this.activateTabletControlButton.click();
              await this.optionA.click();
            }
          } else if (itemDetails.match(/Block C/)) {
            if (itemDetails.match(/Item (1[7-9]|2[0-4])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          }
        }
      } else if (
        typeOfTest.match(/Block B and Block D All correct scenario/i)
      ) {
        if (itemDetails.startsWith("Introduction")) {
          await this.videoPlayButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await this.correctTickMark.click();
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block B/)) {
            if (itemDetails.match(/Item (9|1[0-6])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          } else if (itemDetails.match(/Block D/)) {
            if (itemDetails.match(/Item (2[5-9]|3[0-2])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          }
        }
      } else if (
        typeOfTest.match(
          /Block B- All incorrect scenario and Block A- All incorrect scenario/,
        )
      ) {
        if (itemDetails.startsWith("Introduction")) {
          await this.videoPlayButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await this.correctTickMark.click();
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block B/)) {
            if (itemDetails.match(/Item 9/)) {
              await this.verifyCharacterLimitOnItemLevelNotes();
              await this.activateTabletControlButton.click();
              await this.optionA.click();
            }
            if (itemDetails.match(/Item (1[0-2]|1[4-6])/)) {
              await this.activateTabletControlButton.click();
              await this.optionA.click();
            } else if (itemDetails.match(/Item 13/)) {
              await this.activateTabletControlButton.click();
              await this.optionB.click();
            }
          } else if (itemDetails.match(/Block A/)) {
            if (itemDetails.match(/Item ([1-2])/)) {
              await this.optionA.click();
            } else if (itemDetails.match(/Item (3|[5-6]|8)/)) {
              await this.activateTabletControlButton.click();
              await this.optionA.click();
            } else if (itemDetails.match(/Item (4|7)/)) {
              await this.activateTabletControlButton.click();
              await this.optionB.click();
            }
          }
        }
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

  async completeTheTakenTestForWlookUpScoresForAnalysisSynthesisTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      await this.clickCorrectOption(correctlocator, itemDetails);
      await this.plainNextButtonOrEndButton.click();
      await this.clickCorrectOption(correctlocator, itemDetails);
      await this.plainNextButtonOrEndButton.click();
      await this.clickCorrectOption(correctlocator, itemDetails);
      await this.plainNextButtonOrEndButton.click();
      await this.clickCorrectOption(correctlocator, itemDetails);
      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForTimeout(2000);
      await this.videoPlayButton.click();
      await this.page.waitForTimeout(50000);
      await this.plainNextButtonOrEndButton.click();
      await this.clickCorrectOption(correctlocator, itemDetails);
      await this.plainNextButtonOrEndButton.click();
      if (typeOfTest.match("All Examinees - All incorrect scenario")) {
        for (var i = 1; i <= 8; i++) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (typeOfTest.match("All Examinees - test ends at item 19")) {
        for (var i = 1; i <= 8; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(19000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 11; i++) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (typeOfTest.match("All Examinees - test ends at item 25")) {
        for (var i = 1; i <= 8; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(19000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 7; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        for (var i = 1; i <= 5; i++) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(46000);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.page.waitForTimeout(1000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 5; i++) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (typeOfTest.match("All Examinees - test ends at item 31")) {
        for (var i = 1; i <= 8; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(19000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 12; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(46000);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.page.waitForTimeout(1000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 11; i++) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (typeOfTest.match("All Examinees - All correct scenario")) {
        await this.page.waitForTimeout(1000);
        await this.verifyCharacterLimitOnItemLevelNotes();
        for (var i = 1; i <= 8; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(19000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 12; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
        }
        await this.page.waitForTimeout(2000);
        await this.videoPlayButton.click();
        await this.page.waitForTimeout(46000);
        await this.plainNextButtonOrEndButton.click();
        await this.clickCorrectOption(correctlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickCorrectOption(correctlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.clickCorrectOption(correctlocator, itemDetails);
        await this.plainNextButtonOrEndButton.click();
        await this.page.waitForTimeout(1000);
        await this.plainNextButtonOrEndButton.click();
        for (var i = 1; i <= 15; i++) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          await this.plainNextButtonOrEndButton.click();
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

  async completeTheTakenTestForWlookUpScoresForSWRTACTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const sampleCorrectAnswer1: Locator = this.correctAnswerButton.nth(0);
      const sampleCorrectAnswer2: Locator = this.correctAnswerButton.nth(1);
      const sampleCorrectAnswer3: Locator = this.correctAnswerButton.nth(2);
      const sampleCorrectAnswer4: Locator = this.correctAnswerButton.nth(3);
      const sampleinCorrectAnswer1: Locator = this.incorrectAnswerButton.nth(0);
      const sampleinCorrectAnswer2: Locator = this.incorrectAnswerButton.nth(1);
      const sampleinCorrectAnswer3: Locator = this.incorrectAnswerButton.nth(2);
      const sampleinCorrectAnswer4: Locator = this.incorrectAnswerButton.nth(3);
      const playAudioButton: Locator = this.playAudioButton.first();
      const dictationAccuracy: Locator = this.scores.nth(0);
      const spelling: Locator = this.scores.nth(1);
      const capitalization: Locator = this.scores.nth(2);
      const punctuation: Locator = this.scores.nth(3);
      const dictationAccuracyBlockB: Locator = this.scoresBlockB.nth(0);
      const spellingBlockB: Locator = this.scoresBlockB.nth(1);
      const capitalizationBlockB: Locator = this.scoresBlockB.nth(2);
      const punctuationBlockB: Locator = this.scoresBlockB.nth(3);

      if (typeOfTest.match(/Block A and B correct Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await sampleCorrectAnswer1.click();
          await sampleCorrectAnswer2.click();
          await sampleCorrectAnswer3.click();
          await sampleCorrectAnswer4.click();
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Item")) {
          await playAudioButton.click();
          await this.page.waitForTimeout(5000);
          await this.plainNextButtonOrEndButton.click();
        } else if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          await this.resolveButton.click();

          if (await this.blockBButton.isDisabled()) {
            await dictationAccuracy.fill("5");
            await spelling.fill("5");
            await capitalization.fill("5");
            await punctuation.fill("5");
            await this.submitButton.click();
            await this.continueButton.click();
            await this.lestBeginButton.click();
            await this.page.waitForTimeout(5000);
          } else {
            await dictationAccuracyBlockB.fill("10");
            await spellingBlockB.fill("10");
            await capitalizationBlockB.fill("10");
            await punctuationBlockB.fill("10");
            await this.submitButton.click();
            await this.continueButton.click();
            break;
          }
        }
      } else if (typeOfTest.match(/Block B and C correct Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Item")) {
          await playAudioButton.click();
          await this.page.waitForTimeout(5000);
          await this.plainNextButtonOrEndButton.click();
        } else if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          await this.resolveButton.click();

          if (await this.blockCButton.isDisabled()) {
            await dictationAccuracyBlockB.fill("10");
            await spellingBlockB.fill("10");
            await capitalizationBlockB.fill("10");
            await punctuationBlockB.fill("10");
            await this.submitButton.click();
            await this.continueButton.click();
            await this.lestBeginButton.click();
            await this.page.waitForTimeout(5000);
          } else {
            await dictationAccuracy.fill("5");
            await spelling.fill("5");
            await capitalization.fill("5");
            await punctuation.fill("5");
            await this.submitButton.click();
            await this.continueButton.click();
            break;
          }
        }
      } else if (typeOfTest.match(/Block C Correct Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Item")) {
          await playAudioButton.click();
          await this.page.waitForTimeout(5000);
          await this.plainNextButtonOrEndButton.click();
        } else if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          await this.resolveButton.click();
          await dictationAccuracy.fill("5");
          await spelling.fill("5");
          await capitalization.fill("5");
          await punctuation.fill("5");
          await this.submitButton.click();
          await this.continueButton.click();
          break;
        }
      } else if (typeOfTest.match(/Block A Incorrect Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await sampleCorrectAnswer1.click();
          await sampleCorrectAnswer2.click();
          await sampleCorrectAnswer3.click();
          await sampleCorrectAnswer4.click();
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Item")) {
          await playAudioButton.click();
          await this.page.waitForTimeout(5000);
          await this.plainNextButtonOrEndButton.click();
        } else if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          await this.resolveButton.click();
          await dictationAccuracy.fill("0");
          await spelling.fill("0");
          await capitalization.fill("0");
          await punctuation.fill("0");
          await this.submitButton.click();
          await this.continueButton.click();

          break;
        }
      } else if (typeOfTest.match(/Block B and A Incorrect Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Item")) {
          await playAudioButton.click();
          await this.page.waitForTimeout(5000);
          await this.plainNextButtonOrEndButton.click();
        } else if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          await this.resolveButton.click();

          if (await this.blockAButton.isDisabled()) {
            await dictationAccuracyBlockB.fill("0");
            await spellingBlockB.fill("0");
            await capitalizationBlockB.fill("0");
            await punctuationBlockB.fill("0");
            await this.submitButton.click();
            await this.continueButton.click();
            await this.lestBeginButton.click();
            await this.page.waitForTimeout(5000);
          } else {
            await dictationAccuracy.fill("0");
            await spelling.fill("0");
            await capitalization.fill("0");
            await punctuation.fill("0");
            await this.submitButton.click();
            await this.continueButton.click();
            break;
          }
        }
      } else if (typeOfTest.match(/Block C and B Incorrect Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Item")) {
          await playAudioButton.click();
          await this.page.waitForTimeout(5000);
          await this.plainNextButtonOrEndButton.click();
        } else if (
          (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
        ) {
          await this.resolveButton.click();

          if (await this.blockBButton.isDisabled()) {
            await dictationAccuracy.fill("0");
            await spelling.fill("0");
            await capitalization.fill("0");
            await punctuation.fill("0");
            await this.submitButton.click();
            await this.continueButton.click();
            await this.lestBeginButton.click();
            await this.page.waitForTimeout(5000);
          } else {
            await dictationAccuracyBlockB.fill("0");
            await spellingBlockB.fill("0");
            await capitalizationBlockB.fill("0");
            await punctuationBlockB.fill("0");
            await this.submitButton.click();
            await this.continueButton.click();
            break;
          }
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }
    }

    console.log(this.scoreMap);

    return this.scoreMap;
  }

  async completeTheTakenTestForWlookUpScoresForSNDDELTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/6 Correct & 6 Incorrect Scenario/i)) {
        if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 5 && itemNumber <= 10) {
            await correctlocator.click();
          } else if (itemNumber >= 11 && itemNumber <= 16) {
            await incorrectlocator.click();
          }
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block A Correct & Block B Incorrect Scenario/i)
      ) {
        if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 4) {
            await correctlocator.click();
          } else if (itemNumber >= 5 && itemNumber <= 16) {
            await incorrectlocator.click();
          }
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        }
      } else if (itemDetails.startsWith("Introduction")) {
        await this.plainNextButtonOrEndButton.click();
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
  async completeTheTakenTestForWlookUpScoresForBLKROTTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForLoadState("load");
      await this.page.waitForTimeout(2500);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All incorrect scenario/i)) {
        if (/^Introduction (1|2)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await incorrectlocator.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (/^Introduction (1|2|4)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/6 Correct & 6 Incorrect Scenario/i)) {
        if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Introduction 4")) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (/^Item (1[0-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[6-9]|2[0-1])\b/.test(itemDetails)) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Answer only one sample item/i)) {
        if (/^Introduction (1|2)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await expect(this.replayButton).toBeVisible({
            timeout: 2 * 60 * 1000,
          });
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
          return;
        }
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

  async completeTheTakenTestForWlookUpScoresForSPLSNDTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        } else if (itemDetails === "Item 28") {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block A correct and Block B incorrect scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item [1-5]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item ([6-9]|1[0-9]|2[0-3])\b/.test(itemDetails)) {
          await incorrectlocator.click();
        }
      } else if (
        typeOfTest.match(
          /Block A All incorrect scenario|Block B All incorrect Scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (
        typeOfTest.match(/Block B and Block C All correct scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Answer only Sample Items/i)) {
        if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          break;
        }
      } else if (typeOfTest.match(/Discontinue Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await incorrectlocator.click();
        }
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

  async completeTheTakenTestForWlookUpScoresForSNDSUBTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;

      if (typeOfTest.match(/All Correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block A end test scenario with RS 3/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item ([1-3])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item ([4-8])\b/)) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(
          /Block B Rerouting to Intro 1 with RS 4 and Sample Items AB Incorrect/i,
        )
      ) {
        if (itemDetails.match(/Sample Item (A|B), Trial (1|2)/i)) {
          await iDontKnow.click();
        } else if (itemDetails.match(/^Item (9|1[0-2])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (1[3-6])\b/)) {
          await iDontKnow.click();
        } else if (["Introduction 1", "Introduction 2"].includes(itemDetails)) {
        } else {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Sample AB Discontinue Scenario/i)) {
        if (itemDetails.match(/Sample Item (A|B), Trial (1|2)/i)) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(/Sample A Correct and Force Submit Scenario/i)
      ) {
        if (itemDetails.match(/Sample Item A, Trial 1/i)) {
          await correctlocator.click();
          await this.page.waitForTimeout(2000);
          return;
        }
      } else if (
        typeOfTest.match(/Sample C Incorrect and Force Submit Scenario/i)
      ) {
        if (itemDetails.match(/Sample Item C, Trial 1/i)) {
          await iDontKnow.click();
          this.scoreMap.clear();
          return;
        }
      } else if (typeOfTest.match(/Sample CD Discontinue Scenario/i)) {
        if (
          itemDetails.endsWith("Trial 1") ||
          itemDetails.endsWith("Trial 2")
        ) {
          await iDontKnow.click();
        }
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

  async completeTheTakenTestForWlookUpScoresForSTYCMPTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;

      if (typeOfTest.match(/Block A end test scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.endsWith("Presentation")) {
          await this.playAudioButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Story")) {
          if (itemDetails === "Story 1, Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block B end test scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.playAudioButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block C end test scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.playAudioButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block D end test scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.playAudioButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block E end test scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.playAudioButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Sample A Correct and Force Submit Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
          return;
        }
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
  async completeTheTakenTestForWlookUpScoresForORLSMPTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;

      if (typeOfTest.match(/Block A All Correct/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block")) {
          if (itemDetails === "Block A, Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block B All Correct/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block C All Correct/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Sample A Correct and Force Submit Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
          return;
        }
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

  async completeTheTakenTestForWlookUpScoresForPARCMPTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;

      if (typeOfTest.match(/All Correct ABC Block/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.activateTabletControlButton.click();
          await this.parcmpdonebtn.click();
        } else if (itemDetails.startsWith("Story")) {
          if (itemDetails === "Story 1, Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/All Correct BCD Block/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.activateTabletControlButton.click();
          await this.parcmpdonebtn.click();
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/All Correct CDE Block/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.activateTabletControlButton.click();
          await this.parcmpdonebtn.click();
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/All Correct DE Block/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.endsWith("Presentation")) {
          await this.activateTabletControlButton.click();
          await this.parcmpdonebtn.click();
        } else if (itemDetails.startsWith("Story")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Sample A Correct and Force Submit Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
          return;
        }
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

  async completeTheTakenTestForWlookUpScoresForSEGMNTTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (
        typeOfTest.match(
          /All correct scenario|Block B and Block C correct scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/All Incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Answer only Sample Items/i)) {
        if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          break;
        }
      } else if (typeOfTest.match(/Discontinue Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample")) {
          await incorrectlocator.click();
        }
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

  async completeTheTakenTestForWlookUpScoresForSENREPTest(
    typeOfTest: string,
    BbyC: number,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/Block A All Incorrect Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Block B All Correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block B Basal and Ceiling Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item (9|10|11|12)/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (13|14|15|16)/.test(itemDetails)) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Answer only Sample Items/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await incorrectlocator.click();
        } else if (itemDetails.startsWith("Sample Item A, Trial 2")) {
          break;
        }
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

  async verifyCharacterLimitOnItemLevelNotes() {
    await this.openNotesIcon.click();
    await this.page.waitForTimeout(1000);
    await expect(this.notesText).toBeVisible();
    await expect(this.notesSaveButton).toBeVisible();
    await expect(this.notesDropdown).toBeVisible();
    await this.notesDropdown.click();
    await expect(this.notesDropdownOptions.nth(0)).toHaveText("Item");
    await expect(this.notesDropdownOptions.nth(1)).toHaveText("Test");
    await expect(this.notesDropdownOptions.nth(2)).toHaveText("Test Block");
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
  }

  async endSessionRSB() {
    // await this.addTestObservations.click();
    // await this.checkBoxNoneOfTheabove.check();
    await this.endSessionButton.click();
    await this.areYouSureYesButton.click();
  }

  async itemsAndTestToReview() {
    await this.nextButton.click();
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
      "Responded slowly and hesitantly",
      "Care in Responding",
    );
    await this.selectTheDropdownOPtion(
      6,
      "Made random guesses",
      "Response to Difficult Items",
    );
    await this.selectTheDropdownOPtion(
      7,
      "Was resistant to tasks",
      "Motivation",
    );
    // await this.selectThecheckBox(4, "fairEstimate");
    // await this.selectThecheckBox(7, "modificationToTheStandardise");
    await this.nextButton.click();
    await this.submitTestAssignment.click();
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
}
