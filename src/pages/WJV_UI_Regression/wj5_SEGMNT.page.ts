import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5SegmntPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly IDK: Locator;
  private readonly itemDetails: Locator;

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
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button"
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
  }

  async completeTheTakenTestForSEGMNT(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
      } else if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      } else if (typeOfTest.match(/All Incorrect scenario/i)) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item")) {
          await incorrectlocator.click();
        }
      } else if (typeOfTest.match(/Discontinue Scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample")) {
          await incorrectlocator.click();
        }
      } else if (
        typeOfTest.match(/Block B incorrect and Block A correct Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item [6-9]|1[0-3]/)) {
          await incorrectlocator.click();
        } else if (itemDetails.match(/^Item [1-5]/)) {
          await correctlocator.click();
        }
      } else if (
        typeOfTest.match(/Block C incorrect and Block B correct Scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.match(/^Item 1[4-9]|2[0-6]/)) {
          await incorrectlocator.click();
        } else if (itemDetails.match(/^Item [6-9]|1[0-3]/)) {
          await correctlocator.click();
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
}
