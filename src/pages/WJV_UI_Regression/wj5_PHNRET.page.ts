import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5PhnretPage {
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

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.nextORendTestButton = this.page.locator(
      "//button[@class='plain-button next-item-button' or @class='plain-button nav-button']",
    );

    this.lestBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
    this.startTestButton = this.page.locator("//button[text()='Start Test']");
    this.videoPlayButton = this.page.locator("//div[@class='play-circle']");
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
      name: "Submit Test Assignment",
    });

    this.sspDropDown = this.page.locator(".starting-point-dropdown");
    this.syncDevicePopUp = this.page.locator(".popup-header");
    this.mainNavigation = this.page.locator(".plain-button.menu-button");
    this.mainNavigationHome = this.page.locator(
      ".main .plain-button:nth-child(2)",
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
  }

  async selectThecheckBox(radioButton: number, info?: string) {
    await this.multiRadioButtons.nth(radioButton).click();
  }

  async verifyCharacterLimitOnItemLevelNotes() {
    await this.page.waitForTimeout(1000);
    await this.openNotesIcon.click();
    await this.page.waitForTimeout(1000);
    await expect.soft(this.notesText).toBeVisible();
    await expect.soft(this.notesSaveButton).toBeVisible();
    await expect.soft(this.notesDropdown).toBeVisible();
    await this.notesDropdown.click();
    await expect.soft(this.notesDropdownOptions.nth(0)).toHaveText("Item");
    await expect.soft(this.notesDropdownOptions.nth(1)).toHaveText("Test");
    await expect
      .soft(this.notesDropdownOptions.nth(2))
      .toHaveText("Test Block");
    await this.notesDropdown.click();
    await expect.soft(this.flagForLater).toBeVisible();
    await expect.soft(this.closeNotes).toBeVisible();
    await expect
      .soft(this.notesText)
      .toHaveAttribute("placeholder", "Write Something...");
    await expect.soft(this.notesText).toHaveAttribute("maxlength", "140");
    await this.notesText.fill(
      "fhgghhgggffdgdgvhgdgsHdjadgjhadjhadhjagfhjagdhagdahfjhagdjgashgdahgdhjasbdhavdahsbdhjasdbsahdhagdashgdashgdhasgdashgdjasgdasdahsadbhsbbbzxbx",
    );
    await this.page.waitForTimeout(1000);
    expect
      .soft(await this.notesErrorMessage.textContent())
      .toEqual(" Max. Character Limit: 140 Characters");
    await this.notesText.clear();
    await this.closeNotes.click();
    await this.page.waitForTimeout(1000);
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

  async completeTheTakenTestForPHNRET(
    typeOfTest: string,
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent(),
    );

    while (await this.NextAndendTestBtn.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          if (itemDetails === "Item 1") {
            await this.verifyCharacterLimitOnItemLevelNotes();
          }
          await this.startTimer.click();
          const numberOfClicks = typeOfTest.match(/All correct scenario/i)
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
