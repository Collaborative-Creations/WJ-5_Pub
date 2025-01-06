import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5WrtsmpPage {
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
      "//button[text()='Review Flagged Items']",
    );
    this.NotesCloseBtn = this.page.locator(
      "//button[@class='plain-button close-btn']",
    );
    this.ScoreEntryFields = this.page.locator("//input[@class='score-text']");
    this.AdminMore = this.page.locator("(//h4[@class='no-bold'])[1]");
    this.ScoreLaterContinue = this.page.locator(
      "//button[@class='blue-button-no-margin' or text()='Continue']",
    );
    this.ScoreLaterSubmit = this.page.locator("//button[text()='Submit']");
    this.ScoreSubmitted = this.page.locator("(//div[@class='intro-text'])[2]");
    this.EndTestCloseIcon = this.page.locator("//button[@class='close-btn']");
    this.EndTestEditScores = this.page.locator(
      "(//button[@class= 'link-button']/b)[1]",
    );
    this.GoBack = this.page.locator("//button[text()='Go Back']");
    this.FlagIcon = this.page.locator(
      "(//button[@class='plain-button no-border']//child::*)[1]",
    );
    this.EndTestReviewLink = this.page.locator(
      "(//button[@class='link-button']/b)[1]",
    );
    this.ReviewDoneBtn = this.page.locator(
      "//button[@class='plain-button nav-button' or text()='Done']",
    );
    this.LauchTestAndResolve = this.page.locator(
      "//button[@class='hollow-button-no-margin' or text()='Launch Test and Resolve']",
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

  async completeTheTakenTestForWRTSMP(
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
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;
      const AdministerMoreText: string =
        "Based on the scores you entered, you need to administer additional items to complete the Written Language Samples test.";
      const AdministrationCompleteText: string =
        "Score SubmittedBased on the scores you entered, the Written Language Samples test administration is now complete.  You do not need to administer additional items.";

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/Block A Discontinue Scenario WRTSMP/i)) {
        if (/^Item (1|2)/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (3|4)/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
          await expect.soft(this.RawScoreText).toHaveText("RS: 2");
        }
      } else if (typeOfTest.match(/Block A Test Forward Scenario/i)) {
        if (/^Item (1|2|3)/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (4)/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
          await expect.soft(this.RawScoreText).toHaveText("RS: 3");
          await expect.soft(this.nextText).toHaveText("Introduction 3");
          return;
        }
      } else if (
        typeOfTest.match(
          /Block A&B End Test Scenario With RS:14 and also routing check when RS is 10/i,
        )
      ) {
        if (/^Item [1-5]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item [6-9]\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 10") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("9"); //RS becomes 14
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.EndTestEditScores.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 15
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
          await expect.soft(this.nextText).toHaveText("Item 11");
          await this.NextAndendTestBtn.click();
          await expect.soft(this.itemDetails).toHaveText("Item 11"); //To confirm that we are routed to Block C
          return;
        }
      } else if (
        typeOfTest.match(
          /Block A&B to Block C flow Scenario when RS is 10 and also End Test check when score is edited to 9/i,
        )
      ) {
        if (/^Item [1-5]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item [6-9]\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 10") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 15
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.GoBack.click();
          await this.ScoreEntryFields.nth(0).fill("9"); //RS becomes 14
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(
          /Block A&B to Block C End Test Scenario when RS is 24 & 25/i,
        )
      ) {
        if (/^Item [1-5]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item [6-9]\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 10") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 15
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item 1[1-4]\b/.test(itemDetails)) {
          // Block C Administration
        } else if (itemDetails === "Item 15") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("9"); //RS becomes 24
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.EndTestEditScores.click();
          await this.ScoreEntryFields.nth(1).fill("10"); // RS Becomes 25
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(
          /Block B & C to D End Test Scenario when RS is 20 and 10 for Block D/i,
        )
      ) {
        if (/^Item ([6-9]|1[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 10
          await this.ScoreEntryFields.nth(1).fill("10"); //RS becomes 20
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item (1[6-9])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 20") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(2).fill("10"); //RS becomes 30
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block B & C End Test Scenario with RS of 1/i)
      ) {
        if (/^Item ([6-9]|1[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(1).fill("1"); //RS becomes 1
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block B & C End Test Scenario with RS of 19/i)
      ) {
        if (/^Item ([6-9]|1[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 10
          await this.ScoreEntryFields.nth(1).fill("9"); //RS becomes 19
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block B & C to A End Test Scenario with RS of 0/i)
      ) {
        if (/^Item ([6-9]|1[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(1).fill("0"); //RS becomes 0
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
          await correctlocator.click();
        } else if (/^Item [2-4]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails === "Item 5") {
          await correctlocator.click();
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(
          /Block C & D to E End Test Scenario when RS is 20 and 10 for Block E/i,
        )
      ) {
        if (/^Item (1[1-5]|1[6-9])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 20") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("10"); //RS becomes 10
          await this.ScoreEntryFields.nth(2).fill("10"); //RS becomes 20
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item (2[1-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 25") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(3).fill("10"); //RS becomes 30
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block C & D End Test Scenario with RS of 1/i)
      ) {
        if (/^Item (1[1-5]|1[6-9])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 20") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(2).fill("1"); //RS becomes 1
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block C & D End Test Scenario with RS of 19/i)
      ) {
        if (/^Item (1[1-5]|1[6-9])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 20") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("10"); //RS becomes 10
          await this.ScoreEntryFields.nth(2).fill("9"); //RS becomes 19
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block C & D to B End Test Scenario with RS of 0/i)
      ) {
        if (/^Item (1[1-5]|1[6-9])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 20") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(2).fill("0"); //RS becomes 0
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item [6-9]\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 10") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(0).fill("10"); //RS becomes 10
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block D to E End Test Scenario with RS of 1/i)
      ) {
        if (/^Item (1[6-9]|2[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 25") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(2).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(3).fill("1"); //RS becomes 1
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block D to E End Test Scenario with RS of 20/i)
      ) {
        if (/^Item (1[6-9]|2[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 25") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(2).fill("10"); //RS becomes 10
          await this.ScoreEntryFields.nth(3).fill("10"); //RS becomes 20
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Block D & E to C End Test Scenario with RS of 0/i)
      ) {
        if (/^Item (1[6-9]|2[0-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 25") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(2).fill("0"); //RS becomes 0
          await this.ScoreEntryFields.nth(3).fill("0"); //RS becomes 0
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.AdminMore.textContent())
            .toContain(AdministerMoreText);
          await this.ScoreLaterContinue.click();
          await this.lestBeginButton.click();
        } else if (/^Item (1[1-4])\b/.test(itemDetails)) {
        } else if (itemDetails === "Item 15") {
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.ResolveBtn.click();
          await this.ScoreEntryFields.nth(1).fill("10"); //RS becomes 10
          await this.ScoreLaterSubmit.click();
          expect
            .soft(await this.ScoreSubmitted.textContent())
            .toContain(AdministrationCompleteText);
          await this.ScoreLaterContinue.click();
          await expect.soft(this.EndTestEditScores).toBeEnabled();
          await this.EndTestCloseIcon.click();
        }
      } else if (
        typeOfTest.match(/Review Flow Check from End Test to Intro 3 for SSP1/i)
      ) {
        if (/^Item (1|2)/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (3|4)/.test(itemDetails)) {
          await iDontKnow.click();
          await this.FlagIcon.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
          await this.FlagIcon.click();
          await expect.soft(this.RawScoreText).toHaveText("RS: 2");
          await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
          await this.NextAndendTestBtn.click();
          await this.EndTestReviewLink.click();
          for (let i = 1; i <= 3; i++) {
            await this.ReviewFlaggedItems.click();
            await this.NotesCloseBtn.click();
            await iDontKnow.click();
            await correctlocator.click();
            await this.ReviewDoneBtn.click();
          }
          await this.LauchTestAndResolve.click();
          await this.page.waitForTimeout(2000);
          await expect.soft(this.itemDetails).toHaveText("Introduction 3");
          await expect.soft(this.nextText).toHaveText("Item 6");
          return;
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
