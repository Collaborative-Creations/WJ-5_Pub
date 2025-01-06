import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5SndsubPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly plainNextButtonOrEndButton: Locator;

  private readonly corectOptionButton: Locator;

  private readonly IDK: Locator;
  private readonly itemDetails: Locator;



  private readonly nextText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button"
    );
    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button"
    );
 
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();

    

    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");

    this.nextText = this.page.locator("//div[@class ='next-text']");
  }

  async completeTheTakenTestForSNDSUB(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();

      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/Sample item AB Discontinue scenario/i)) {
        if (itemDetails.match(/Trial 1|Trial 2/i)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/Sample item AB forward scenario/i)) {
        if (itemDetails.match(/Trial 1|(?<!Sample Item B, )Trial 2/i)) {
          await iDontKnow.click();
        } else if (itemDetails === "Sample Item B, Trial 2") {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 1");
          await this.plainNextButtonOrEndButton.click();
          await expect.soft(this.itemDetails).toHaveText("Item 1");
          return;
        }
      } else if (typeOfTest.match(/Block A end test scenario with RS 3/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item ([1-3])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item ([4-8])\b/)) {
          if (itemDetails === "Item 8") {
            await iDontKnow.click();
            await expect
              .soft(this.plainNextButtonOrEndButton)
              .toHaveText("End Test");

            await this.page.waitForTimeout(2000);
          } else {
            await iDontKnow.click();
          }
        }
      } else if (typeOfTest.match(/Block A forward scenario with RS 4/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item ([1-4])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item ([5-8])\b/)) {
          if (itemDetails === "Item 8") {
            await iDontKnow.click();
            await expect.soft(this.nextText).toHaveText("Introduction 2");
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Introduction 2");
            return;
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(/Sample item CD Routing back to Intro 1 Scenario/i)
      ) {
        if (itemDetails.match(/Trial 1|(?<!Sample Item D, )Trial 2/i)) {
          await iDontKnow.click();
        } else if (itemDetails === "Sample Item D, Trial 2") {
          await iDontKnow.click();
          await expect.soft(this.nextText).toHaveText("Introduction 1");
          await this.plainNextButtonOrEndButton.click();
          await expect.soft(this.itemDetails).toHaveText("Introduction 1");
          return;
        }
      } else if (typeOfTest.match(/Sample item CD Forward Scenario/i)) {
        if (itemDetails.match(/Trial 1|(?<!Sample Item D, )Trial 2/i)) {
          await iDontKnow.click();
        } else if (itemDetails === "Sample Item D, Trial 2") {
          await correctlocator.click();
          await expect.soft(this.nextText).toHaveText("Item 9");
          await this.plainNextButtonOrEndButton.click();
          await expect.soft(this.itemDetails).toHaveText("Item 9");
          return;
        }
      } else if (
        typeOfTest.match(/Block B Routing back to Intro 1 with RS 4 Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (9|1[0-2])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (1[3-6])\b/)) {
          if (itemDetails === "Item 16") {
            await iDontKnow.click();

            await expect.soft(this.nextText).toHaveText("Introduction 1");
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Introduction 1");
            return;
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(/Block B Forward to Block C Scenario with RS 5 /i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (9|1[0-3])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (1[4-6])\b/)) {
          if (itemDetails === "Item 16") {
            await iDontKnow.click();

            await expect.soft(this.nextText).toHaveText("Item 17");
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 17");
            return;
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(/Block B to Block C End test Scenario with RS 5/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (9|1[0-3])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (1[4-6])\b/)) {
          await iDontKnow.click();
        } else if (itemDetails.match(/^Item (1[7-9]|2[0-8])\b/)) {
          await iDontKnow.click();
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
}
