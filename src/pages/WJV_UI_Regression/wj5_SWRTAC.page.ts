import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5SwrtacPage {
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
  private readonly IDK: Locator;
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
  private readonly sspDropDown: Locator;
  private readonly syncDevicePopUp: Locator;
  private readonly mainNavigation: Locator;
  private readonly mainNavigationHome: Locator;
  private readonly leftNavContainer: Locator;
  private readonly nextText: Locator;
  private readonly reroutingContinue: Locator;
  private readonly itemDetails1: Locator;
  private readonly notesIcon: Locator;
  private readonly listOfOptionsForWordReadingFluency: Locator;
  private readonly listOfOptionsForSentenceReadingFluency: Locator;
  private readonly startPracticeAndStartTimerButton: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly NextAndendTestBtn: Locator;
  private readonly playAudioButton: Locator;
  private readonly correctAnswerButton: Locator;
  private readonly incorrectAnswerButton: Locator;
  private readonly resolveButton: Locator;
  private readonly scores: Locator;
  private readonly scoresBlockB: Locator;
  private readonly submitButton: Locator;
  private readonly blockAButton: Locator;
  private readonly blockBButton: Locator;
  private readonly blockCButton: Locator;

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

    this.correctAnswerButton = this.page.locator(
      "//div[@class='select-group correct item-score-group no-border']//button",
    );
    this.incorrectAnswerButton = this.page.locator(
      "//div[@class='select-group incorrect item-score-group no-border']//button",
    );
    this.playAudioButton = this.page.locator(
      "//button[@class='small-blue-button']",
    );

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

    this.sspDropDown = this.page.locator(".starting-point-dropdown");
    this.syncDevicePopUp = this.page.locator(".popup-header");
    this.mainNavigation = this.page.locator(".plain-button.menu-button");
    this.mainNavigationHome = this.page.locator(
      ".main .plain-button:nth-child(2)",
    );
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.leftNavContainer = this.page.locator("//span[@class='item-text']");
    this.nextText = this.page.locator("//div[@class ='next-text']");
    this.reroutingContinue = this.page.locator("//button[text()='Continue']");
    this.itemDetails1 = this.page.locator(".introduction b.semibold, b");
    this.notesIcon = this.page.locator(".notes-button");
    this.listOfOptionsForWordReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options WRDGFL')]//child::button",
    );
    this.listOfOptionsForSentenceReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options')]//child::button",
    );
    this.startPracticeAndStartTimerButton = this.page.locator(
      "//button[text()='Start Practice Exercise ']",
    );
    this.doneOrNextButton = this.page.locator(
      "//button[@class='plain-button nav-button']",
    );
    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
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

  async completeTheTakenTestForSWRTAC(
    typeOfTest: string,
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

  async correctLocator(): Promise<Locator> {
    return this.corectOptionButton.first();
  }

  async inCorrectLocator(): Promise<Locator> {
    return this.incorrectOptionButton.first();
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
}
