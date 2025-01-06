import { test, expect, Page, Locator } from "../base/basePageFixtures";
import wj5ExamineePage from "./wj5_examinee.page";

export default class wj5TestPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button",
    );
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button",
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
  }

  async completeTheTakenTest() {
    await this.plainNextButtonOrEndButton.click();

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const startTimer: number = performance.now();
      await this.page.waitForTimeout(1000);
      const itemInsideMap = new Map<string, string | number>();
      const itemDetails: string = (await this.itemDetails.textContent())!;
      const correctlocator: Locator = this.corectOptionButton.first();
      await correctlocator.click();
      const correctOption: string = (await correctlocator.textContent())!;
      const endTimer: number = performance.now();
      const RT: number = endTimer - startTimer;

      await this.plainNextButtonOrEndButton.click();
      itemInsideMap.set("ItemAnswer", correctOption);
      itemInsideMap.set("ResponseTime", RT / 1000);
      this.itemMap.set(itemDetails, itemInsideMap);
      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
      // console.log(this.itemMap);
    }
    console.log(this.itemMap);
  }

  async completeTheTakenTestForWlookUpScores(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 1;
    let inCorrectCount: number = 1;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    const testNames: string[] = ["OVSYN.W5PA", "OVANT.W5PA", "GIWHAT.W5PA"];

    if (testNames.includes(stemForm)) {
      await this.plainNextButtonOrEndButton.click();
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();
      if (itemDetails.startsWith("Introduction")) {
        await this.plainNextButtonOrEndButton.click();
      }

      if (typeOfTest.match(/All correct scenario/i)) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Quick Basal Ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/Attain Basel but not ceiling/i)) {
        if (BbyC && itemDetails.startsWith("Item ")) {
          if (correctCount <= BbyC) {
            await this.clickCorrectOption(correctlocator, itemDetails);
            correctCount++;
          } else if (inCorrectCount <= BbyC) {
            await this.clickInCorrectOption(incorrectlocator, itemDetails);
            inCorrectCount++;
          }
          if (inCorrectCount === BbyC) {
            break;
          }
        } else {
          await this.clickCorrectOption(correctlocator, itemDetails);
        }
      } else if (typeOfTest.match(/SampleItems correct/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/SampleItems incorrect/i)) {
        if (itemDetails.startsWith("Item")) {
          this.scoreMap.clear();
          break;
        }
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (
        typeOfTest.match(/All incorrect scenario/i) &&
        itemDetails.startsWith("Sample ")
      ) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/All incorrect scenario/i)) {
        await this.clickInCorrectOption(incorrectlocator, itemDetails);
      } else if (typeOfTest.match(/Answer Correct But No Basel/i)) {
        if (correctCount === BbyC) {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickCorrectOption(correctlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (typeOfTest.match(/Answer InCorrect But No Basel/i)) {
        if (itemDetails === "Item 1") {
          break;
        } else if (
          BbyC &&
          itemDetails.startsWith("Item ") &&
          correctCount <= BbyC
        ) {
          await this.clickInCorrectOption(incorrectlocator, itemDetails);
          correctCount++;
        } else await this.clickCorrectOption(correctlocator, itemDetails);
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
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
