import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5MathFactsFluencyPage {
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
  private readonly itemScoreValue: Locator;
  private readonly rawScoreText: Locator;
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
  
  private readonly startPracticeAndStartTimerButton: Locator;
  private readonly timeUpView: Locator;
  private readonly pencilIcon: Locator;
  private readonly totalScore: Locator;
  private readonly listOfPagesAndTotalText: Locator;
  private readonly submitButton: Locator;
  private readonly scoreLaterButton: Locator;
  private readonly closeEndTestPopUP: Locator;
  private readonly closeScoreFields: Locator;
  private readonly listOfScores: Locator;
  private readonly ItemScoreValue: Locator;
  private readonly editScoresLink: Locator;
  private readonly resolveLink: Locator;
  private readonly endTestValues: Locator;
  private readonly timeText: Locator;
  private readonly scoreText: Locator;
  private readonly timerActive: Locator;
  private readonly introductionError: Locator;
  private readonly introductionErrorText: Locator;
  private readonly timerButton: Locator;
  private readonly timerIcons: Locator;

  

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
    this.itemScoreValue = this.page.locator("//div[@class='select-group item-score-group']//child::div[@class='item-score']");
    this.rawScoreText = this.page.locator("//div[@class='raw-score']");
    this.timeUpView = this.page.locator("//b[text()='Time is up.']");
    this.pencilIcon = this.page.locator("//div[@class='time-score']//button[@class='link-button']");
    this.totalScore = this.page.locator("//div[@class='time-score']");
    this.listOfPagesAndTotalText = this.page.locator("//div[@class='time-score']//span");
    this.submitButton = this.page.locator("//button[text()='Submit']");
    this.scoreLaterButton = this.page.locator("//button[text()='Score Later']");
    this.closeEndTestPopUP = this.page.locator("//div[@class='popup-header']//button[@class='close-btn']");
    this.closeScoreFields = this.page.locator("//button[@class='close-btn']");
    this.listOfScores = this.page.locator("//input[@class='score-text']");
    this.ItemScoreValue = this.page.locator("//div[@class='select-group item-score-group']//child::div[@class='item-score']");
    this.editScoresLink = this.page.locator("//b[text()='Edit Scores']");
    this.resolveLink = this.page.locator("//b[text()='Resolve']");
    this.endTestValues = this.page.locator("//div[@class='mid-grid']//child::*");
    this.timeText = this.page.locator("//div[@class='time-score']//child::div[@class='time-text']");
    this.scoreText = this.page.locator("//input[@class='score-text']");
    this.timerActive = this.page.locator("//div[@class='timer active']");
    this.introductionError = this.page.locator("//div[@class='introduction error']//child::*[@class='error-icon']");
    this.introductionErrorText = this.page.locator("(//div[@class='introduction error']//following-sibling::div//child::b)");
    this.timerButton = this.page.locator("//div[@class='time-score']//child::button[@class='plain-button timer']");
    this.timerIcons = this.page.locator("//button[@class='plain-button timer']");
    this.startPracticeAndStartTimerButton = this.page.locator(
       "//button[@class='plain-button blue-button']",
    );
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

  async completeTheTakenTestForMTHFLUTest(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    this.scoreMap.set(` `, "^");
    console.log("The first Score Map" + this.scoreMap);

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (typeOfTest.match(/Practice Exercise Score Entry Equal To Zero/i)) {
        await expect(this.itemDetails).toHaveText("Practice Exercise"); 
        await expect(this.startPracticeAndStartTimerButton).toBeVisible();
        await this.startPracticeAndStartTimerButton.isEnabled();
        await this.startPracticeAndStartTimerButton.click();
        await this.timerActive.isEnabled();
        expect(await this.listOfPagesAndTotalText.nth(0).textContent()).toEqual("Practice Exercise:");
        await this.timeText.waitFor({ state: "visible" });
        await expect(this.introductionError).toBeVisible();
        await expect(this.introductionErrorText).toBeVisible();
        expect(await this.introductionErrorText.textContent()).toContain("Stop. Put your pencil down.");
        await expect(this.timerButton).toHaveAttribute("disabled", "");
        expect(await this.timeText.textContent()).toContain("0:20");
        await this.scoreText.isEnabled();
        await this.listOfScores.nth(0).click();
        await this.listOfScores.nth(0).fill("0");
      } else if (typeOfTest.match(/Practice Exercise Score Entry More Than Zero/i)) {
        await this.startPracticeAndStartTimerButton.click();
        await this.timerIcons.nth(0).click();
        await this.scoreText.isEnabled();
        await this.listOfScores.nth(0).click();
        await this.listOfScores.nth(0).fill("5");
        break;
      } else if (typeOfTest.match(/Page Score Entry With All Zero/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeText.waitFor({ state: "visible" });
          expect(await this.timeText.textContent()).toContain("0:20");
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("4");
        } else if (itemDetails.startsWith("Test Introduction")) {
          await expect(this.startPracticeAndStartTimerButton).toBeVisible();
          await expect(this.startPracticeAndStartTimerButton).toHaveText("Start Timer");
          await this.startPracticeAndStartTimerButton.click();
          await this.timeUpView.waitFor({ state: "visible" });
          expect(await this.timeUpView.textContent()).toEqual("Time is up.");
          await expect(this.pencilIcon.nth(0)).toBeVisible();
          await this.pencilIcon.nth(0).isEnabled();
          await expect(this.submitButton).toHaveAttribute("disabled", "");
          await this.scoreLaterButton.isEnabled();
          expect(await this.listOfPagesAndTotalText.nth(0).textContent()).toEqual("Page 4:");
          expect(await this.listOfPagesAndTotalText.nth(1).textContent()).toEqual("Page 5:");
          expect(await this.listOfPagesAndTotalText.nth(2).textContent()).toEqual("Total:");
          for (let i = 0; i <= 1; i++) {
            await this.listOfScores.nth(i).click();
            await this.listOfScores.nth(i).isEnabled();
            await this.listOfScores.nth(i).fill("0");
            if (i == 1) {
              await this.submitButton.isEnabled();
            } else {
              await expect(this.submitButton).toHaveAttribute("disabled", "");
            }
          }
          expect(await this.totalScore.nth(2).textContent()).toContain("0");
          await this.submitButton.isEnabled();
          await this.scoreLaterButton.isEnabled();
          await this.submitButton.click();
        }
      } else if (typeOfTest.match(/Page Score Entry With All Eighty/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeText.waitFor({ state: "visible" });
          expect(await this.timeText.textContent()).toContain("0:20");
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("4");
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeUpView.waitFor({ state: "visible" });
          for (let i = 0; i <= 1; i++) {
            await this.listOfScores.nth(i).click();
            await this.listOfScores.nth(i).fill("80");
          }
          await this.submitButton.click();
        }
      } else if (typeOfTest.match(/Total Score Entry/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeText.waitFor({ state: "visible" });
          expect(await this.timeText.textContent()).toContain("0:20");
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("4");
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeUpView.waitFor({ state: "visible" });
          expect(await this.timeUpView.textContent()).toEqual("Time is up.");
          await this.pencilIcon.nth(0).click();
          await this.listOfScores.nth(2).click();
          await this.listOfScores.nth(2).fill("50");
          await expect(this.listOfScores.nth(0)).toHaveAttribute("disabled", "");
          await expect(this.listOfScores.nth(1)).toHaveAttribute("disabled", "");
          await this.closeScoreFields.nth(0).click();
          await this.listOfScores.nth(0).isEnabled();
          await this.listOfScores.nth(1).isEnabled();
          await this.pencilIcon.nth(0).click();
          await this.listOfScores.nth(2).click();
          await this.listOfScores.nth(2).fill("60");
          await this.submitButton.isEnabled();
          await this.scoreLaterButton.isEnabled();
          await this.submitButton.click();
          
        }
      } else if (typeOfTest.match(/Edit Scores Scenario/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeText.waitFor({ state: "visible" });
          expect(await this.timeText.textContent()).toContain("0:20");
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("4");
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timerActive.isEnabled();
          await this.timeUpView.waitFor({ state: "visible" });
          await this.pencilIcon.nth(0).click();
          await this.listOfScores.nth(2).click();
          await this.listOfScores.nth(2).fill("25");
          await this.submitButton.click();
          expect(await this.editScoresLink.textContent()).toEqual("Edit Scores");
          await this.editScoresLink.click(); 
          await this.submitButton.isEnabled();
          await this.closeScoreFields.nth(0).click();
          await this.pencilIcon.nth(0).click();
          await this.listOfScores.nth(2).click();
          await this.listOfScores.nth(2).fill("30");
          await this.submitButton.click();
          await this.editScoresLink.click(); 
          await this.closeScoreFields.nth(0).click();
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("2");
          await expect(this.submitButton).toHaveAttribute("disabled", "");
          await this.listOfScores.nth(1).click();
          await this.listOfScores.nth(1).fill("2");
          expect(await this.totalScore.nth(2).textContent()).toContain("4");
          await this.submitButton.click();
        } 
      } else if (typeOfTest.match(/Score Entry After Clicking On Score Later Button/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeText.waitFor({ state: "visible" });
          expect(await this.timeText.textContent()).toContain("0:20");
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("4");
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeUpView.waitFor({ state: "visible" });
          expect(await this.timeUpView.textContent()).toEqual("Time is up.");
          for (let i = 0; i <= 1; i++) {
            await this.listOfScores.nth(i).click();
            await this.listOfScores.nth(i).fill("40");
          }
          expect(await this.totalScore.nth(2).textContent()).toContain("80");
          await this.submitButton.isEnabled();
          await this.scoreLaterButton.isEnabled();
          await this.scoreLaterButton.click();
          await this.page.waitForTimeout(1000);
          expect(await this.resolveLink.textContent()).toEqual("Resolve");
          expect(await this.endTestValues.nth(15).textContent()).toEqual("Test timer ran out.");
          await this.resolveLink.click(); 
          await expect(this.submitButton).toHaveAttribute("disabled", "");
          await this.scoreLaterButton.isEnabled();
          for (let j = 0; j <= 1; j++) {
            await this.listOfScores.nth(j).click();
            await this.listOfScores.nth(j).fill("2");
            if (j == 1) {
              await this.submitButton.isEnabled();
            } else {
              await expect(this.submitButton).toHaveAttribute("disabled", "");
            }
          }
          await this.pencilIcon.nth(0).click();
          await this.listOfScores.nth(2).click();
          await this.listOfScores.nth(2).clear();
          await this.listOfScores.nth(2).fill("30");
          await this.submitButton.click();
        } 
      } else if (typeOfTest.match(/Score Entry When End Test Modal Is Closed/i)) {
        if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeText.waitFor({ state: "visible" });
          expect(await this.timeText.textContent()).toContain("0:20");
          await this.listOfScores.nth(0).click();
          await this.listOfScores.nth(0).fill("4");
        } else if (itemDetails.startsWith("Test Introduction")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.timeUpView.waitFor({ state: "visible" });
          for (let i = 0; i <= 1; i++) {
            await this.listOfScores.nth(i).click();
            await this.listOfScores.nth(i).fill("20");
          }
          await this.submitButton.click();
          await this.closeEndTestPopUP.click();
          await this.plainNextButtonOrEndButton.click();
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