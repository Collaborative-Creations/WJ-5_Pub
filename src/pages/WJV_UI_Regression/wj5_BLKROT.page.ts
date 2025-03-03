import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5BlockRotationPage {
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
  private readonly notesIcon: Locator;
  private readonly listOfOptionsForWordReadingFluency: Locator;
  private readonly listOfOptionsForSentenceReadingFluency: Locator;
  private readonly startPracticeAndStartTimerButton: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly NextAndendTestBtn: Locator;
  private readonly RawScoreText: Locator;
  private readonly ResolveBtn: Locator;
  private readonly ReviewFlaggedItems: Locator;
  private readonly NotesCloseBtn: Locator;
  private readonly ScoreEntryFields: Locator;
  private readonly AdminMore: Locator;
  private readonly ScoreLaterContinue: Locator;
  private readonly ScoreLaterSubmit: Locator;
  private readonly ScoreSubmitted: Locator;
  private readonly EndTestCloseIcon: Locator;
  private readonly EndTestEditScores: Locator;
  private readonly GoBack: Locator;
  private readonly FlagIcon: Locator;
  private readonly EndTestReviewLink: Locator;
  private readonly ReviewDoneBtn: Locator;
  private readonly LauchTestAndResolve: Locator;
  

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
    this.notesIcon = this.page.locator(".notes-button");
    this.listOfOptionsForWordReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options WRDGFL')]//child::button",
    );
    this.listOfOptionsForSentenceReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options')]//child::button");
    this.startPracticeAndStartTimerButton = this.page.locator(
      "//button[text()='Start Practice Exercise ']",
    );
    this.doneOrNextButton = this.page.locator(
      "//button[@class='plain-button nav-button']",
    );
    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.itemScoreValue = this.page.locator("//div[@class='select-group item-score-group']//child::div[@class='item-score']");
    this.rawScoreText = this.page.locator("//div[@class='raw-score']");
    this.FlagIcon = this.page.locator("(//button[@class='plain-button no-border flag-button']//child::*)[1]");
    this.EndTestReviewLink = this.page.locator("(//button[@class='link-button']/b)[1]");
    this.ReviewDoneBtn = this.page.locator("//button[@class='plain-button nav-button' or text()='Done']");
    this.LauchTestAndResolve = this.page.locator("//button[@class='hollow-button-no-margin' or text()='Launch Test and Resolve']");
    this.ReviewFlaggedItems = this.page.locator("//button[text()='Review Flagged Items']");
    this.NotesCloseBtn = this.page.locator("//button[@class='plain-button close-btn']");
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

  async completeTheTakenTestForBLKROTTest(
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
     
      if (typeOfTest.match(/Block A End Test Scenario With All incorrect/i)) {
        if (/^Introduction (1|2)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await incorrectlocator.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Block A and Block B All correct Scenario/i)) {
        if (/^Introduction (1|2|4)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block A All correct and Block B All incorrect Scenario|Block B Basal and ceiling scenario with 6 incorrect/i)) {
        if (/^Introduction (1|2|4)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (/^Item [1-9]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[0-5])\b/.test(itemDetails)) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Block B 6 correct and 6 incorrect scenario/i)) {
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
      } else if (typeOfTest.match(/Block B All correct scenario/i)) {
        if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Introduction 4")) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Item")) { 
          await correctlocator.click();
        }
       } else if (typeOfTest.match(/Block B Review Flow Logic/i)) {
        if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Introduction 4")) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (/^Item (1[0-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[6-8]|20)\b/.test(itemDetails)) {
          await incorrectlocator.click();
        } else if (itemDetails === 'Item 19') {
          await incorrectlocator.click();
          await this.FlagIcon.click();
        } else if (itemDetails === "Item 21") {
          await incorrectlocator.click();
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.EndTestReviewLink.click();
          await this.ReviewFlaggedItems.click();
          await this.NotesCloseBtn.click();
          await incorrectlocator.click();
          await correctlocator.click();
          await this.ReviewDoneBtn.click();
          await this.LauchTestAndResolve.click();
          for (let i = 1; i <= 3; i++) {
            await incorrectlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          await incorrectlocator.click();
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
