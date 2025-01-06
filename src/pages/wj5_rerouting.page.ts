import { test, expect, Page, Locator } from "../base/basePageFixtures";
import wj5ExamineePage from "./wj5_examinee.page";

export default class wj5ReroutingPage {
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

  async completeTheReroutingTestingforAllPossibleTests(
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

      if (
        (itemDetails.startsWith("Introduction 1") ||
          itemDetails.startsWith("Introduction 2") ||
          itemDetails.startsWith("Introduction 3")) &&
        typeOfTest.match(/ANLSYN/i)
      ) {
        await this.page.waitForTimeout(5000);
        await this.videoPlayButton.click();
        await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
      } else if (
        (itemDetails.startsWith("Introduction 1") ||
          itemDetails.startsWith("Introduction 2") ||
          itemDetails.startsWith("Introduction 3")) &&
        typeOfTest.match(/MATRCZ/i)
      ) {
        await this.page.waitForTimeout(5000);
        await this.videoPlayButton.click();
        await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
      } else if (
        itemDetails.startsWith("Introduction 4") &&
        typeOfTest.match(/ANLSYN/i)
      ) {
      } else if (itemDetails.startsWith("Introduction")) {
      } else if (
        itemDetails.endsWith("Presentation") &&
        typeOfTest.match(/STYCMP/i)
      ) {
        await this.page.locator("//button[@class='small-blue-button']").click();
        await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
      } else if (
        itemDetails.endsWith("Presentation") &&
        typeOfTest.match(/PARCMP/i)
      ) {
        await this.page
          .locator("//button[@class='plain-button examinee-cursor-button']")
          .click();
        await this.page.locator("//button[text()='Done']").click();
      } else if (typeOfTest.match(/ANLSYN Item 1 to 7 Scenario/i)) {
        if (
          itemDetails.startsWith("Color") ||
          itemDetails.startsWith("Sample")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 3) {
            await correctlocator.click();
          } else if (itemNumber >= 4 && itemNumber <= 6) {
            await iDontKnow.click();
          } else if (itemNumber === 7) {
            await iDontKnow.click();
            await expect.soft(this.nextText).toHaveText("Introduction 2");
            await this.leftNavContainer.nth(13).click();
            await this.page.mouse.move(100, 200); //As tooltip is obstructing the locator click
            await correctlocator.click();
            await iDontKnow.click();
            await expect
              .soft(this.itemDetails1.nth(2))
              .toHaveText("Test Routing Change");
            await this.page.waitForTimeout(2000);
            await this.reroutingContinue.click();
          }
        }
      } else if (typeOfTest.match(/ANLSYN Item 1 to 19 Scenario/i)) {
        if (
          itemDetails.startsWith("Color") ||
          itemDetails.startsWith("Sample")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 12) {
            await correctlocator.click();
          } else if (itemNumber >= 13 && itemNumber <= 18) {
            await iDontKnow.click();
          } else if (itemNumber === 19) {
            await iDontKnow.click();
            await expect.soft(this.nextText).toHaveText("Introduction 3");
            await this.leftNavContainer.nth(25).click();
            await this.page.mouse.move(100, 200); //As tooltip is obstructing the locator click
            await correctlocator.click();
            await iDontKnow.click();
            await expect
              .soft(this.itemDetails1.nth(2))
              .toHaveText("Test Routing Change");
            await this.page.waitForTimeout(2000);
            await this.reroutingContinue.click();
          }
        }
      } else if (typeOfTest.match(/ANLSYN Item 1 to 25 Scenario/i)) {
        if (
          itemDetails.startsWith("Color") ||
          itemDetails.startsWith("Sample")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 17) {
            await correctlocator.click();
          } else if (itemNumber >= 18 && itemNumber <= 24) {
            await iDontKnow.click();
          } else if (itemNumber === 25) {
            await iDontKnow.click();
            await expect.soft(this.nextText).toHaveText("Item 26");
            await this.leftNavContainer.nth(30).click();
            await this.page.mouse.move(100, 200); //As tooltip is obstructing the locator click
            await correctlocator.click();
            await iDontKnow.click();
            await expect
              .soft(this.itemDetails1.nth(2))
              .toHaveText("Test Routing Change");
            await this.page.waitForTimeout(2000);
            await this.reroutingContinue.click();
          }
        }
      } else if (typeOfTest.match(/ANLSYN Item 1 to 31 Scenario/i)) {
        if (
          itemDetails.startsWith("Color") ||
          itemDetails.startsWith("Sample")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 22) {
            await correctlocator.click();
          } else if (itemNumber >= 23 && itemNumber <= 30) {
            await iDontKnow.click();
          } else if (itemNumber === 31) {
            await iDontKnow.click();
            await expect.soft(this.nextText).toHaveText("Item 32");
            await this.leftNavContainer.nth(42).click();
            await this.page.mouse.move(100, 200); //As tooltip is obstructing the locator click
            await correctlocator.click();
            await iDontKnow.click();
            await expect
              .soft(this.itemDetails1.nth(2))
              .toHaveText("Test Routing Change");
            await this.page.waitForTimeout(2000);
            await this.reroutingContinue.click();
          }
        }
      } else if (typeOfTest.match(/ANLSYN Color Pretests End Test Scenario/i)) {
        if (
          itemDetails.startsWith("Color Pretest: Yellow, Trial 1") ||
          itemDetails.startsWith("Color Pretest: Black, Trial 1") ||
          itemDetails.startsWith("Color Pretest: Blue, Trial 1")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Color Pretest: Red, Trial 1")) {
          await incorrectlocator.click();
        } else if (itemDetails.startsWith("Color Pretest: Red, Trial 2")) {
          await incorrectlocator.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 200); //As tooltip is obstructing the locator click
          await incorrectlocator.click();
          await correctlocator.click();
          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect
            .soft(this.nextText)
            .toHaveText("Color Pretest: Red, Trial 2");
          await this.plainNextButtonOrEndButton.click();
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item ")) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]); // Extracting the item number
          if (itemNumber >= 1 && itemNumber <= 2) {
            await correctlocator.click();
          } else if (itemNumber >= 3 && itemNumber <= 7) {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(
          /STYCMP Sample Items to Block A rerouting End Test Scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Sample Item B, Trial 2")) {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(2).click();
          await iDontKnow.click();
          await correctlocator.click();
          await expect
            .soft(this.itemDetails1.nth(2))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Introduction 1");
        } else if (
          itemDetails.startsWith("Story 1") ||
          itemDetails.startsWith("Story 2") ||
          itemDetails.startsWith("Story 3") ||
          itemDetails.startsWith("Story 4")
        ) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/STYCMP Block A End Test Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 1") ||
          itemDetails.startsWith("Story 2")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 3, Item 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 3, Item 2")) {
          await iDontKnow.click();
        } else if (
          itemDetails.startsWith("Story 4, Item 1") ||
          itemDetails.startsWith("Story 4, Item 2")
        ) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Story 4, Item 3")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
          await this.leftNavContainer.nth(13).click();
          await correctlocator.click();
          await iDontKnow.click();
          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (
        typeOfTest.match(
          /STYCMP Block B to Block A rerouting End Test Scenario/i,
        )
      ) {
        if (
          itemDetails.startsWith("Story 5") ||
          itemDetails.startsWith("Story 6")
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 7, Item 1") ||
          itemDetails.startsWith("Story 7, Item 2")
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 7, Item 3")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 8, Presentation");

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(7).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(8).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(10).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Story 1, Presentation");
        } else if (
          itemDetails.startsWith("Story 1") ||
          itemDetails.startsWith("Story 2")
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 3") ||
          itemDetails.startsWith("Story 4")
        ) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(
          /STYCMP Block C to Block B rerouting End Test Scenario/i,
        )
      ) {
        if (
          itemDetails.startsWith("Story 8") ||
          itemDetails.startsWith("Story 9")
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 10") &&
          itemDetails !== "Story 10, Item 5"
        ) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Story 10, Item 5")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Story 11, Presentation");

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(7).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
        } else if (
          itemDetails.startsWith("Story 5") ||
          itemDetails.startsWith("Story 6") ||
          itemDetails.startsWith("Story 7")
        ) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(
          /STYCMP Block D to Block C rerouting End Test Scenario/i,
        )
      ) {
        if (
          itemDetails.startsWith("Story 11") ||
          itemDetails.startsWith("Story 12")
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 13") &&
          itemDetails !== "Story 13, Item 5"
        ) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Story 13, Item 5")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Story 14, Presentation");

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(7).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Story 8, Presentation");
        } else if (
          itemDetails.startsWith("Story 8") ||
          itemDetails.startsWith("Story 9") ||
          itemDetails.startsWith("Story 10")
        ) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/PARCMP Block A End Test Scenario/i)) {
        if (itemDetails.startsWith("Story 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 2, Item 1")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 2, Item 2")) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Story 2, Item 3")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Story 3, Presentation");

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (typeOfTest.match(/PARCMP Block B End Test Scenario/i)) {
        if (
          itemDetails.startsWith("Story 1") ||
          itemDetails.startsWith("Story 2") ||
          itemDetails.startsWith("Story 3")
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 4") &&
          itemDetails !== "Story 4, Item 6"
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 4, Item 6")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 5, Presentation");

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (
        typeOfTest.match(/Block B to Block A rerouting End Test Scenario/i)
      ) {
        if (itemDetails.startsWith("Story 3")) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 4") &&
          itemDetails !== "Story 4, Item 6"
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 4, Item 6")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 5, Presentation");

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(4).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(5).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Story 1, Presentation");
        } else if (
          itemDetails.startsWith("Story 1") ||
          itemDetails.startsWith("Story 2")
        ) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/PARCMP Block C End Test Scenario/i)) {
        if (/^Story (3|4|5)/.test(itemDetails)) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 6") &&
          itemDetails !== "Story 6, Item 5"
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 6, Item 5")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 7, Presentation");

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (
        typeOfTest.match(
          /PARCMP Block C to Block B rerouting End Test Scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Story 5")) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Story 6") &&
          itemDetails !== "Story 6, Item 5"
        ) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 6, Item 5")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 7, Presentation");

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(4).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(5).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(8).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Story 3, Presentation");
        } else if (/^Story 3(?!.*(Item 3|Item 4|Item 5))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Story 3(?!.*(Item 1|Item 2))/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Story 4")) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/PARCMP Block D End Test Scenario/i)) {
        if (/^Story (5|6|7)/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Story 8(?!.*(Item 5))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 8, Item 5")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 9, Presentation");

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (
        typeOfTest.match(
          /PARCMP Block D to Block C rerouting End Test Scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Story 7")) {
          await correctlocator.click();
        } else if (/^Story 8(?!.*(Item 5))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Story 8, Item 5")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Story 9, Presentation");

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(4).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(5).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(8).click();
          await this.page.mouse.move(100, 300); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
        } else if (/^Story 5(?!.*(Item 3|Item 4|Item 5))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Story 5(?!.*(Item 1|Item 2))/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Story 6")) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/ORLSMP Block A End Test Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Block A(?!.*(Item 4))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block A, Item 4")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Introduction 3");
          await this.leftNavContainer.nth(4).click();
          await correctlocator.click();
          await iDontKnow.click();
          await expect
            .soft(this.itemDetails1.nth(4))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (
        typeOfTest.match(
          /Block B to Block A ORLSMP rerouting End Test Scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Block B(?!.*(Item 5))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block B, Item 5")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Introduction 4");
          await this.leftNavContainer.nth(7).click();
          await correctlocator.click();
          await iDontKnow.click();
          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Introduction 1");
        } else if (itemDetails.startsWith("Block A")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Block A MATRCZ End Test Scenario/i)) {
        if (/^Block A(?!.*(Item 8))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block A, Item 8")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Introduction 2");

          await this.leftNavContainer.nth(1).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (
        typeOfTest.match(/Block A to Block C MATRCZ End Test Scenario/i)
      ) {
        if (/^Block A(?!.*(Item 6|Item 7|Item 8))/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Block A(?!.*(Item [1-5] | Item 8))/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Block A, Item 8")) {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");

          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Introduction 2");
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Block C")) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block C to Block A&B LWIDNT End Test Scenario/i)
      ) {
        if (/^Item (1[6-9]|20|21)\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item 2[2-6]\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Item 27")) {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");

          await this.leftNavContainer.nth(4).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Introduction 1");
        } else if (/^Item (0?[1-9]|1[0-5])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/LWIDNT Block A End Test Scenario/i)) {
        if (/^Item [1-3]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item 4")) {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Introduction 2");

          await this.leftNavContainer.nth(1).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await this.leftNavContainer.nth(4).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (typeOfTest.match(/WRDATK Block B End Test Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item [1-4]\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item [5-9]\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Item 10")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Introduction 2");

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (typeOfTest.match(/WRDATK Block C End Test Scenario/i)) {
        if (/^Item (1[1-4]|16|22)\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Item 15")) {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Introduction 1");
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails === "Item 1") {
          await correctlocator.click();
          await this.page.locator("(//span[@class='block-text'])[3]").click();

          await this.leftNavContainer.nth(11).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(2))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([2-9]|10|1[7-9]|20|21)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/PSGCMP Block A End Test Scenario/i)) {
        if (/^Item [1-6]\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails.startsWith("Item 7")) {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");

          await this.leftNavContainer.nth(0).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await this.leftNavContainer.nth(1).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await this.leftNavContainer.nth(3).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Sample Item A, Trial 1");
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item [8-9]|1[0-2]\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(/WRDGFL Practice Exercise End Test Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice")) {
          await this.startPracticeAndStartTimerButton.click();
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
          await expect.soft(this.itemDetails).toHaveText("Test Items");

          await this.leftNavContainer.nth(5).click();
          await this.listOfOptionsForWordReadingFluency.nth(3).click();
          await this.listOfOptionsForWordReadingFluency.nth(2).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForWordReadingFluency.nth(5).click();
          await this.listOfOptionsForWordReadingFluency.nth(4).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForWordReadingFluency.nth(8).click();
          await this.listOfOptionsForWordReadingFluency.nth(9).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForWordReadingFluency.nth(13).click();
          await this.listOfOptionsForWordReadingFluency.nth(14).click();
          await this.page.waitForTimeout(1000);
          await this.doneOrNextButton.click();
          await this.doneOrNextButton.click();

          await expect
            .soft(this.itemDetails1.nth(2))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (typeOfTest.match(/NUMPAT Sample Items End Test Scenario/i)) {
        if (
          [
            "Sample Item A, Trial 1",
            "Sample Item A, Trial 2",
            "Sample Item B, Trial 1",
          ].includes(itemDetails)
        ) {
          await iDontKnow.click();
        } else if (itemDetails === "Sample Item B, Trial 2") {
          await correctlocator.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(2).click();
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(2))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Practice Exercise");
          return;
        }
      } else if (
        typeOfTest.match(/SRDGFL Practice Exercise End Test Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice")) {
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
          await expect.soft(this.itemDetails).toHaveText("Test Items");

          await this.leftNavContainer.nth(5).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForSentenceReadingFluency.nth(0).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForSentenceReadingFluency.nth(3).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForSentenceReadingFluency.nth(5).click();
          await this.page.waitForTimeout(1000);
          await this.listOfOptionsForSentenceReadingFluency.nth(6).click();
          await this.page.waitForTimeout(1000);
          await this.doneOrNextButton.click();
          await this.doneOrNextButton.click();

          await expect
            .soft(this.itemDetails1.nth(2))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (typeOfTest.match(/SYMBIN Sample Items End Test Scenario/i)) {
        if (itemDetails.startsWith("Demonstration")) {
          await this.page
            .locator("(//button[@class='plain-button tally-button'])[1]")
            .click();
        } else if (
          ["Sample Item A, Trial 1", "Sample Item B, Trial 1"].includes(
            itemDetails,
          )
        ) {
          await incorrectlocator.click();
        } else if (itemDetails === "Sample Item A, Trial 2") {
          await correctlocator.click();
        } else if (itemDetails === "Sample Item B, Trial 2") {
          await correctlocator.click();
          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await incorrectlocator.click();
          await this.leftNavContainer.nth(4).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await incorrectlocator.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        }
      } else if (typeOfTest.match(/OVSYN next item check Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item (1[0-2]|9)\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails === "Item 13") {
          await correctlocator.click();
          await this.leftNavContainer.nth(17).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await this.page.waitForTimeout(2000);
          await expect.soft(this.nextText).toHaveText("Item 14");
          return;
        }
      } else if (
        typeOfTest.match(
          /OVANT next item check when response changed Scenario/i,
        )
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item (1[0-3])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails === "Item 14") {
          await correctlocator.click();
          await this.leftNavContainer.nth(18).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await this.page.waitForTimeout(2000);
          await expect.soft(this.nextText).toHaveText("Item 15");
          await correctlocator.click();
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Item 8");
          return;
        }
      } else if (
        typeOfTest.match(
          /PICVOC next item check when response changed Scenario/i,
        )
      ) {
        if (/^Item (1[8-9]|2[0-1])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (itemDetails === "Item 22") {
          await correctlocator.click();
          await this.leftNavContainer.nth(20).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await this.page.waitForTimeout(2000);
          await expect.soft(this.nextText).toHaveText("Item 23");
          await correctlocator.click();
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Item 16");
          return;
        }
      } else if (
        typeOfTest.match(
          /APPROB lowest numbered unadministered item rerouting Scenario/i,
        )
      ) {
        if (/^Item (14|9|4)\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 1") {
          await iDontKnow.click();
          await this.leftNavContainer.nth(13).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await this.page.waitForTimeout(2000);
          await expect.soft(this.nextText).toHaveText("Item 2");
          await iDontKnow.click();
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 2");
          await this.NextAndendTestBtn.click();
          await expect.soft(this.itemDetails).toHaveText("Item 2");
          return;
        }
      } else if (typeOfTest.match(/CALC basal break rerouting Scenario/i)) {
        if (/^Item (19|2[0-3])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (2[4-7])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 28") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(24).click();
          await correctlocator.click();
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Item 15");
        } else if (/^Item (1[5-8])\b/.test(itemDetails)) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/SNDREV Ceiling break rerouting Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
        } else if (/^Item ([1-3])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 4") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(7).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([6-9]|10)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/MPRBID Ceiling break rerouting Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item (11|6|[1-4])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(18).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([7-9]|10|1[2-6])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/GIWHAT Ceiling break rerouting Scenario/i)) {
        if (/^Item (6|[1-3])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 4") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(4))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item (5|[7-9]|10)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/GIWHER Ceiling break rerouting Scenario/i)) {
        if (/^Item (12|8|4|[1-2])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 3") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(11).click();
          await this.page.mouse.move(100, 600); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(4))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([5-7]|9|10|11|1[3-6])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/NWDREP Ceiling break rerouting Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item 1([0-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item 1([6-9])|20\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 21") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");

          await this.leftNavContainer.nth(22).click();
          await this.page.mouse.move(100, 600); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (itemDetails === "Item 22") {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/VRBANL Ceiling break rerouting Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item 1([6-9])|20\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item 2([1-4])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 25") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");

          await this.leftNavContainer.nth(26).click();
          await this.page.mouse.move(100, 600); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(5))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (itemDetails === "Item 26") {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/LETPAT Sample Items End Test Scenario/i)) {
        if (
          [
            "Sample Item A, Trial 1",
            "Sample Item A, Trial 2",
            "Sample Item B, Trial 1",
          ].includes(itemDetails)
        ) {
          await iDontKnow.click();
        } else if (itemDetails === "Sample Item B, Trial 2") {
          await correctlocator.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(2).click();
          await iDontKnow.click();
          await correctlocator.click();

          await expect
            .soft(this.itemDetails1.nth(2))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Practice Exercise");
          return;
        }
      } else if (typeOfTest.match(/SNDDEL Block A End Test Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item 1")) {
          await correctlocator.click();
        } else if (/^Item ([2-3])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 4") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(6).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();
          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Introduction 3");
          return;
        }
      } else if (typeOfTest.match(/SNDDEL Block B End Test Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item ([5-9]|1[0-3])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[4-5])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 16") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(17).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();
          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Item 17");
          return;
        }
      } else if (typeOfTest.match(/SNDDEL Block C End Test Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item (1[7-9])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (2[0-9]|3[0-1])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 32") {
          await iDontKnow.click();
          await expect
            .soft(this.plainNextButtonOrEndButton)
            .toHaveText("End Test");
          await this.leftNavContainer.nth(8).click();
          await this.page.mouse.move(100, 400); //As tooltip is obstructing the locator click
          await correctlocator.click();
          await iDontKnow.click();
          await expect
            .soft(this.itemDetails1.nth(3))
            .toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
          await expect.soft(this.nextText).toHaveText("Item 5");
          return;
        }
      } else if (typeOfTest.match(/SNDBLN Ceiling break rerouting Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item ([1-4])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
          await expect.soft(this.plainNextButtonOrEndButton).toHaveText("End Test");
          await this.leftNavContainer.nth(10).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();
          await this.page.waitForTimeout(1000);
          await expect.soft(this.itemDetails1.nth(2)).toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([6-9])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/MEMWRD Ceiling break rerouting Scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item ([1-3])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 4") {
          await iDontKnow.click();
          await expect.soft(this.plainNextButtonOrEndButton).toHaveText("End Test");
          await this.leftNavContainer.nth(8).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();
          await expect.soft(this.itemDetails1.nth(2)).toHaveText("Test Routing Change");
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([5-6])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/ACDVOC Ceiling break rerouting Scenario/i)) {
        if (/^Item ([1-4])\b/.test(itemDetails)) {
          await iDontKnow.click();
        } else if (itemDetails === "Item 5") {
          await iDontKnow.click();
          await expect.soft(this.plainNextButtonOrEndButton).toHaveText("End Test");
          await this.leftNavContainer.nth(2).click();
          await this.page.mouse.move(100, 500); //As tooltip is obstructing the locator click
          await iDontKnow.click();
          await correctlocator.click();
          await expect.soft(this.itemDetails1.nth(3)).toHaveText(
            "Test Routing Change",
          );
          await this.page.waitForTimeout(2000);
          await this.reroutingContinue.click();
        } else if (/^Item ([6-8])\b/.test(itemDetails)) {
          await iDontKnow.click();
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
