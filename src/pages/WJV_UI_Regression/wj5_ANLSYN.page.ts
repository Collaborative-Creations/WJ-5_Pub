import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5AnalysisSynthesisPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

   
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly videoPlayButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly continueButton: Locator;
  private readonly NextAndendTestBtn: Locator;
  private readonly ReviewFlaggedItems: Locator;
  private readonly NotesCloseBtn: Locator;
  private readonly FlagIcon: Locator;
  private readonly EndTestReviewLink: Locator;
  private readonly ReviewDoneBtn: Locator;
   

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    
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
    this.continueButton = this.page.getByRole("button", { name: "Continue" });
    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.FlagIcon = this.page.locator("(//button[@class='plain-button no-border flag-button']//child::*)[1]");
    this.EndTestReviewLink = this.page.locator("(//button[@class='link-button']/b)[1]");
    this.ReviewDoneBtn = this.page.locator("//button[@class='plain-button nav-button' or text()='Done']");
    this.ReviewFlaggedItems = this.page.locator("//button[text()='Review Flagged Items']");
    this.NotesCloseBtn = this.page.locator("//button[@class='plain-button close-btn']");
  }

  
  async completeTheTakenTestForANLSYNTest(
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
     
      if (typeOfTest.match(/Color Pretest End Test Flow scenario/i)) {
        if (itemDetails.includes("Color Pretest")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.includes("Color Pretest")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Introduction 1")) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await incorrectlocator.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.includes("Color Pretest")) {
          await correctlocator.click();
        } else if (/^Introduction (1|2|3)/.test(itemDetails)) {
          await this.videoPlayButton.click();
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        } else if (itemDetails.includes("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/End Test scenario when test ends at item 19/i)) {
        if (itemDetails.includes("Color Pretest")) {
            await correctlocator.click();
          } else if (/^Introduction (1|2)/.test(itemDetails)) {
            await this.videoPlayButton.click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.includes("Sample")) {
            await correctlocator.click();
          } else if (/^Item [1-7]\b/.test(itemDetails)) {
            await correctlocator.click();
          } else if (/^Item ([8-9]|1[0-9])\b/.test(itemDetails)) {
            await incorrectlocator.click(); 
          }
      } else if (typeOfTest.match(/End Test scenario when test ends at item 25/i)) {
        if (itemDetails.includes("Color Pretest")) {
            await correctlocator.click();
          } else if (/^Introduction (1|2|3)/.test(itemDetails)) {
            await this.videoPlayButton.click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.includes("Sample")) {
            await correctlocator.click();
          } else if (/^Item ([1-9]|1[0-5])\b/.test(itemDetails)) {
            await correctlocator.click();
          } else if (/^Item (1[6-9]|2[0-5])\b/.test(itemDetails)) {
            await incorrectlocator.click(); 
          }
      } else if (typeOfTest.match(/End Test scenario when test ends at item 31/i)) {
        if (itemDetails.includes("Color Pretest")) {
            await correctlocator.click();
          } else if (/^Introduction (1|2|3)/.test(itemDetails)) {
            await this.videoPlayButton.click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.includes("Sample")) {
            await correctlocator.click();
          } else if (/^Item ([1-9]|1[0-9]|20)\b/.test(itemDetails)) {
            await correctlocator.click();
          } else if (/^Item (2[1-9]|3[0-1])\b/.test(itemDetails)) {
            await incorrectlocator.click(); 
          }
       } else if (typeOfTest.match(/Review flow Scenario/i)) {
        if (itemDetails.includes("Color Pretest")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Introduction 1")) {
            await this.videoPlayButton.click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.includes("Sample")) {
            await correctlocator.click();
          } else if (/^Item [1-2]\b/.test(itemDetails)) {
            await correctlocator.click();
          } else if (itemDetails === 'Item 3') {
            await incorrectlocator.click();
            await this.FlagIcon.click();
          } else if (/^Item [4-6]\b/.test(itemDetails)) {
            await incorrectlocator.click();
          } else if (itemDetails === "Item 7") {
            await incorrectlocator.click();
            await expect.soft(this.NextAndendTestBtn).toHaveText("End Test");
            await this.NextAndendTestBtn.click();
            await this.EndTestReviewLink.click();
            await this.ReviewFlaggedItems.click();
            await this.NotesCloseBtn.click();
            await incorrectlocator.click();
            await correctlocator.click();
            await this.ReviewDoneBtn.click();
            await this.continueButton.click();
            break;
          }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }
       
      if (typeOfTest.match(/Review flow Scenario/i)) {
        break;
      } else {
        await this.plainNextButtonOrEndButton.click();
      }

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