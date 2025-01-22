import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5OralVocabularyAntonymPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly audioPlayer: Locator;
  private readonly nextText: Locator;

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
    this.audioPlayer = this.page.locator("//div[@class='audio-player']//child::button[@class='small-blue-button']");
    this.nextText = this.page.locator("//div[@class='next-item-group']//div[1]");
  }

  
  async completeTheTakenTestForOVANTTest(
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

      if (typeOfTest.match(/Basal and ceiling with 5 incorrect scenario SSP1/i)) {
        if (["Introduction 1","Introduction 2"].includes(itemDetails)) {
        }else if (["Sample Item A, Trial 1", "Sample Item A, Trial 2", "Sample Item B, Trial 1", "Sample Item B, Trial 2"].includes(itemDetails)) {
          if (itemDetails.startsWith("Sample Item B")) {
            await this.audioPlayer.isEnabled();
            await this.audioPlayer.click();
          }
          await incorrectlocator.click();
        } else if (/^Item [1-5]\b/.test(itemDetails)) {
          await incorrectlocator.click();
         
        }
      } else if (typeOfTest.match(/5 correct and 5 incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
            if (itemDetails.startsWith("Sample Item B")) {
                await this.audioPlayer.isEnabled();
                await this.audioPlayer.click();
            }
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
      } else if (typeOfTest.match(/Reverse logic with 5 incorrect scenario SSP2/i)) {
        if (["Introduction 1","Introduction 2"].includes(itemDetails)) {
        }else if (["Sample Item A, Trial 1", "Sample Item A, Trial 2", "Sample Item B, Trial 1", "Sample Item B, Trial 2"].includes(itemDetails)) {
          if (itemDetails.startsWith("Sample Item B")) {
            await this.audioPlayer.isEnabled();
            await this.audioPlayer.click();
          }
          await correctlocator.click();
        } else if (itemDetails.includes("Item 4")) {
          await incorrectlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 1");    
        } else if (itemDetails.startsWith("Item")) {
          for (let j = 1; j <= 3; j++) {
            await incorrectlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Reverse logic with 5 incorrect scenario SSP3/i)) {
        if (["Introduction 1","Introduction 2"].includes(itemDetails)) {
        }else if (["Sample Item A, Trial 1", "Sample Item A, Trial 2", "Sample Item B, Trial 1", "Sample Item B, Trial 2"].includes(itemDetails)) {
          if (itemDetails.startsWith("Sample Item B")) {
            await this.audioPlayer.isEnabled();
            await this.audioPlayer.click();
          }
          await correctlocator.click();
        } else if (itemDetails.includes("Item 6")) {
          await incorrectlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 1");
          await this.plainNextButtonOrEndButton.click();
          await incorrectlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 2");
        } else if (itemDetails.startsWith("Item")) {
          for (let j = 1; j <= 3; j++) {
            await incorrectlocator.click();
            await this.plainNextButtonOrEndButton.click();
          }
          await incorrectlocator.click();
        }
    } else if (typeOfTest.match(/Reverse logic with 5 incorrect scenario SSP4/i)) {
        if (["Introduction 1","Introduction 2"].includes(itemDetails)) {
        }else if (["Sample Item A, Trial 1", "Sample Item A, Trial 2", "Sample Item B, Trial 1", "Sample Item B, Trial 2"].includes(itemDetails)) {
          if (itemDetails.startsWith("Sample Item B")) {
            await this.audioPlayer.isEnabled();
            await this.audioPlayer.click();
          }
          await correctlocator.click();
        } else if (itemDetails.includes("Item 10")) {
          await incorrectlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 5");
          await this.plainNextButtonOrEndButton.click();
          await incorrectlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 1");
        } else if (itemDetails.startsWith("Item")) {
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
          await this.audioPlayer.isEnabled();
          await correctlocator.click();
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

