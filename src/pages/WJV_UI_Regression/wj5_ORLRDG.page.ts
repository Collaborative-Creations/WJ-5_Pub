import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5OrlrdgPage {
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
  private readonly NR: Locator;
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
  private readonly RawScoreText: Locator;
  private readonly ErrorScoreText: Locator;
  private readonly ResolveBtn: Locator;
  private readonly ReviewFlaggedItems: Locator;
  private readonly NotesCloseBtn: Locator;
  private readonly ScoreEntryField: Locator;
  private readonly AdminMore: Locator;
  private readonly AdminMoreContinue: Locator;

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
    this.NR = this.page.locator("//button[text()='No Response']");
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
    this.RawScoreText = this.page.locator("//div[@class='raw-score']");
    this.ResolveBtn = this.page.locator(
      "//button[@class='link-button']/b[text()='Resolve']",
    );
    this.ReviewFlaggedItems = this.page.locator(
      "//button[@class='hollow-button-no-margin' and text()='Review Flagged Items']",
    );
    this.NotesCloseBtn = this.page.locator(
      "//button[@class='plain-button close-btn']",
    );
    this.ScoreEntryField = this.page.getByPlaceholder("Number Correct (0-10)");
    this.AdminMore = this.page.locator("(//h4[@class='no-bold'])[1]");
    this.AdminMoreContinue = this.page.locator(
      "//button[@class='blue-button-no-margin' and text()='Continue']",
    );
    this.ErrorScoreText = this.page.locator("//div[@class='item-score']");
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

  async completeTheTakenTestForORLRDG(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    this.scoreMap.set(` `, "^");

    console.log("The first Score Map" + this.scoreMap);

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const NoResponse: Locator = this.NR;
      const locatorWrapper: Locator = this.page.locator(
        "//div[@class='option-wrapper']//child::*",
      );
      const elements = await locatorWrapper.count();

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/Story 1 Discontinue Scenario with RS 5/i)) {
        for (let i = 0; i < Math.min(8, elements); i++) {
          if (i === 7) {
            await locatorWrapper.nth(i).click();
            await this.page.waitForTimeout(500);
            await expect.soft(this.RawScoreText).toHaveText("RS: 5");
            await expect.soft(this.ErrorScoreText).toHaveText("5");
          } else {
            await locatorWrapper.nth(i).click();
            await this.page.waitForTimeout(500);
          }
        }
      } else if (
        typeOfTest.match(/Story 1 to Story 2 Discontinue Scenario with RS 5/i)
      ) {
        if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            if (i === 6) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 2");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(14, elements); i++) {
            if (i === 13) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 11");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (
        typeOfTest.match(/Story 1 to Story 3 Discontinue Scenario with RS 5/i)
      ) {
        if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            if (i === 6) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 2");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(13, elements); i++) {
            if (i === 12) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 3");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(20, elements); i++) {
            if (i === 19) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 17");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (
        typeOfTest.match(/Story 1 to Story 4 Discontinue Scenario with RS 5/i)
      ) {
        if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            if (i === 6) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 2");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(13, elements); i++) {
            if (i === 12) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 3");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            if (i === 18) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 18");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 4");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(25, elements); i++) {
            if (i === 24) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 23");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (
        typeOfTest.match(/Story 1 to Story 5 Discontinue Scenario with RS 5/i)
      ) {
        if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            if (i === 6) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 2");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(13, elements); i++) {
            if (i === 12) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 3");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            if (i === 18) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 18");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 4");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 24");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 5") {
          for (let i = 0; i < Math.min(25, elements); i++) {
            if (i === 24) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 29");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (typeOfTest.match(/Story 1 to Story 6 EndTest Scenario/i)) {
        if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            if (i === 6) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 2");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(13, elements); i++) {
            if (i === 12) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 3");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            if (i === 18) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 18");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 4");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 24");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 5") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 30");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 6");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 6") {
          await expect.soft(this.RawScoreText).toHaveText("RS: 36");
          await expect.soft(this.ErrorScoreText).toHaveText("0");
          await NoResponse.click();
          await this.page.waitForTimeout(2000);
          await expect.soft(this.RawScoreText).toHaveText("RS: 30");
          await expect.soft(this.ErrorScoreText).toHaveText("6");
        }
      } else if (
        typeOfTest.match(
          /Story 3 to Story 2 & 1 logic flow & EndTest Scenario/i,
        )
      ) {
        if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(20, elements); i++) {
            if (i === 19) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 5");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
              await expect.soft(this.nextText).toHaveText("Story 2");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 2") {
          for (let i = 0; i < Math.min(13, elements); i++) {
            if (i === 12) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(2000);
              await expect.soft(this.RawScoreText).toHaveText("RS: 11");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
              await locatorWrapper.nth(13).click();
              await this.page.waitForTimeout(2000);
              await expect.soft(this.RawScoreText).toHaveText("RS: 10");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
              await expect.soft(this.nextText).toHaveText("Story 1");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 1") {
          for (let i = 0; i < Math.min(7, elements); i++) {
            if (i === 6) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(2000);
              await expect.soft(this.RawScoreText).toHaveText("RS: 16");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
              await locatorWrapper.nth(7).click();
              await this.page.waitForTimeout(2000);
              await expect.soft(this.RawScoreText).toHaveText("RS: 15");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
              await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (typeOfTest.match(/Story 3 to Story 4 Discontinue Scenario/i)) {
        if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            if (i === 18) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 4");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 5");

              await locatorWrapper.nth(24).click();
              await this.page.waitForTimeout(2000);
              await expect.soft(this.RawScoreText).toHaveText("RS: 11");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
              await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (typeOfTest.match(/Story 3 to Story 5 Discontinue Scenario/i)) {
        if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            if (i === 18) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 4");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 5") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 18");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 6");

              await locatorWrapper.nth(24).click();
              await this.page.waitForTimeout(2000);
              await expect.soft(this.RawScoreText).toHaveText("RS: 17");
              await expect.soft(this.ErrorScoreText).toHaveText("5");
              await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        }
      } else if (typeOfTest.match(/Story 3 to Story 6 End Test Scenario/i)) {
        if (itemDetails === "Story 3") {
          for (let i = 0; i < Math.min(19, elements); i++) {
            if (i === 18) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 6");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 4");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 4") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 12");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 5");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 5") {
          for (let i = 0; i < Math.min(24, elements); i++) {
            if (i === 23) {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
              await expect.soft(this.RawScoreText).toHaveText("RS: 18");
              await expect.soft(this.ErrorScoreText).toHaveText("4");
              await expect.soft(this.nextText).toHaveText("Story 6");
            } else {
              await locatorWrapper.nth(i).click();
              await this.page.waitForTimeout(500);
            }
          }
        } else if (itemDetails === "Story 6") {
          await expect.soft(this.RawScoreText).toHaveText("RS: 24");
          await expect.soft(this.ErrorScoreText).toHaveText("0");
          await NoResponse.click();
          await this.page.waitForTimeout(2000);
          await expect.soft(this.RawScoreText).toHaveText("RS: 18");
          await expect.soft(this.ErrorScoreText).toHaveText("6");
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didn't match with any of the conditions provided`,
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
