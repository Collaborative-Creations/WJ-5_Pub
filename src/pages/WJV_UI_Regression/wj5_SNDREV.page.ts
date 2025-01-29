import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5SoundReversalPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly NextAndendTestBtn: Locator;
  private readonly ReviewFlaggedItems: Locator;
  private readonly NotesCloseBtn: Locator;
  private readonly FlagIcon: Locator;
  private readonly EndTestReviewLink: Locator;
  private readonly ReviewDoneBtn: Locator;
  private readonly LauchTestAndResolve: Locator;
  private readonly audioPlayer: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

     
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
    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.FlagIcon = this.page.locator("(//button[@class='plain-button no-border flag-button']//child::*)[1]");
    this.EndTestReviewLink = this.page.locator("(//button[@class='link-button']/b)[1]");
    this.ReviewDoneBtn = this.page.locator("//button[@class='plain-button nav-button' or text()='Done']");
    this.LauchTestAndResolve = this.page.locator("//button[@class='hollow-button-no-margin' or text()='Launch Test and Resolve']");
    this.ReviewFlaggedItems = this.page.locator("//button[text()='Review Flagged Items']");
    this.NotesCloseBtn = this.page.locator("//button[@class='plain-button close-btn']");
    this.audioPlayer = this.page.locator("//div[@class='audio-player']//child::button[@class='small-blue-button']");
  }

  
  async completeTheTakenTestForSNDREVTest(
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
     
      if (typeOfTest.match(/Basal and ceiling with 5 incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await incorrectlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/5 correct and 5 incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          for (let i = 1; i <= 5; i++) {
            await correctlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          for (let j = 1; j <= 4; j++) {
            await incorrectlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Reverse logic with 5 correct and 5 incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          for (let i = 1; i <= 3; i++) {
            await correctlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          for (let j = 1; j <= 3; j++) {
            await incorrectlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Review flow Scenario for SSP1/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item [1-3]\b/.test(itemDetails)) {
          await incorrectlocator.click();
        } else if (itemDetails === 'Item 4') {
          await incorrectlocator.click();
          await this.FlagIcon.click();
       } else if (itemDetails === "Item 5") {
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
      } else if (typeOfTest.match(/Review flow Scenario for SSP2/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (/^Item ([1-2]|5)\b/.test(itemDetails)) {
          await incorrectlocator.click();
        } else if (itemDetails === 'Item 3') {
          await incorrectlocator.click();
          await this.FlagIcon.click();
       } else if (itemDetails === "Item 4") {
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
          for (let i = 1; i <= 2; i++) {
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
