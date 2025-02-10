import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5WrdgflPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly nextText: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly nextAndEndTestButton: Locator;
  private readonly startPracticeOrStartTestButton: Locator;
  private readonly activateTabletControlButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button"
    );
    this.incorrectOptionButton = this.page.locator(
        ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button",
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.nextText = this.page.locator("//div[@class ='next-text']");
    this.doneOrNextButton = this.page.locator(".plain-button.nav-button");
    this.nextAndEndTestButton = this.page.locator(
        "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
      );
    this.startPracticeOrStartTestButton = this.page.locator(
        ".plain-button.blue-button",
      );
    this.activateTabletControlButton = this.page.locator(
        "//button[@class='plain-button examinee-cursor-button']",
      );  
  }

  async completeTheTakenTestForWRDGFL(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );
    while (await this.nextAndEndTestButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = this.corectOptionButton.first();
      const incorrectlocator: Locator = this.incorrectOptionButton.first();

      const practiceAndTestItemsElements = await this.page.locator(
        "//div[contains(@class,'options WRDGFL')]//button",
      );
      const practiceElementsAllCorrect: number[] = [0, 3, 5, 6, 8, 11, 12, 13];
      const practiceElementsAllIncorrect: number[] = [0, 1, 4, 5, 8, 9, 12, 14];
      const PracticeFeedBackItems: number[] = [1, 3, 4, 6, 9, 11, 14, 13];
      const practiceElementsTwoCorrect: number[] = [0, 3, 5, 6, 8, 9, 12, 14];


      const AllCorrectSets: number[][] = [
        [0, 2, 4, 5, 10, 11, 12, 15, 16, 19, 22, 23, 24, 26, 28, 31, 32, 33, 36, 37],
        [1, 3, 4, 7, 8, 9, 12, 14, 16, 19, 20, 23, 25, 26, 28, 30, 33, 35, 37, 38],
        [0, 2, 6, 7, 10, 11, 12, 13, 17, 18, 20, 22, 24, 25, 29, 30, 33, 34, 36, 37],
        [0, 3, 4, 6, 8, 11, 13, 14, 17, 19, 21, 22, 24, 26, 29, 30, 34, 35, 37, 38],
        [0, 1, 4, 7, 8, 11, 12, 14, 16, 18, 21, 23, 25, 27, 30, 31, 32, 33, 36, 37],
        [0, 3, 4, 6, 8, 11, 13, 14, 16, 19, 21, 23, 25, 26, 30, 31, 34, 35, 36, 37],
        [0, 2, 4, 5, 8, 11, 12, 13, 17, 18, 21, 22, 26, 27, 28, 30, 34, 35, 36, 37],
        [1, 3, 4, 5, 8, 11, 12, 14, 18, 19, 20, 22, 24, 27, 28, 30, 34, 35, 36, 37],
        [0, 1, 6, 7, 8, 11, 12, 15, 18, 19, 21, 22, 25, 27, 30, 31, 33, 34, 38, 39]
      ];

      const SixCorrectSets: number[][] = [
        [0, 2, 4, 5, 10, 11, 12, 15, 16, 19, 22, 23],
        [1, 3, 4, 7, 8, 9, 12, 14, 16, 19, 20, 23],
        [0, 2, 6, 7, 10, 11, 12, 13, 17, 18, 20, 22],
        [0, 3, 4, 6, 8, 11, 13, 14, 17, 19, 21, 22],
        [0, 1, 4, 7, 8, 11, 12, 14, 16, 18, 21, 23],
        [0, 3, 4, 6, 8, 11, 13, 14, 16, 19, 21, 23],
        [0, 2, 4, 5, 8, 11, 12, 13, 17, 18, 21, 22],
        [1, 3, 4, 5, 8, 11, 12, 14, 18, 19, 20, 22],
        [0, 1, 6, 7, 8, 11, 12, 15, 18, 19, 21, 22]
      ];

      const AllIncorrectSets: number[][] = [
        [0, 1, 4, 6, 9, 10, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 34, 36, 38],
        [0, 1, 4, 5, 8, 10, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37],
        [0, 1, 4, 5, 8, 9, 12, 14, 16, 17, 20, 21, 24, 26, 28, 29, 32, 33, 36, 38],
        [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37],
        [2, 3, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 34, 35, 38, 39],
        [0, 1, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 38, 39],
        [0, 1, 6, 7, 8, 9, 14, 15, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 38, 39],
        [0, 1, 6, 7, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 38, 39],
        [2, 3, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 28, 29, 32, 33, 36, 37]
      ];

      if (itemDetails.startsWith("Introduction")) {
      } else if (
        itemDetails.startsWith("Sample") &&
        !typeOfTest.match(
          /Sample Item EndTest Flow when RS is (0|1)|Sample Item Forward Flow when RS is 2/i
        )
      ) {
        await correctlocator.click();
      } else if(itemDetails.startsWith("Practice") && !typeOfTest.match(/Practice Exercise (All Correct|All Incorrect|InCorrect to All Correct in Practice Feedback|2 Correct)/i)){
        await this.startPracticeOrStartTestButton.click();
        for (const index of practiceElementsAllCorrect) {
            const element = practiceAndTestItemsElements.nth(index);
            await element.click();
          }
      } else if (
        typeOfTest.match(/Sample Item EndTest Flow when RS is (0|1)/i)
      ) {
        const RSisZero = typeOfTest.match(
          /Sample Item EndTest Flow when RS is 0/i
        );
        const RSisOne = typeOfTest.match(
          /Sample Item EndTest Flow when RS is 1/i
        );

        if (RSisZero) {
          await incorrectlocator.click();
        } else if (RSisOne) {
          if (itemDetails.match(/Sample Item A, Trial 1/i)) {
            await correctlocator.click();
          } else {
            await incorrectlocator.click();
          }
        }
      } else if (typeOfTest.match(/Sample Item Forward Flow when RS is 2/i)) {
        if (itemDetails.match(/Sample Item (A|B), Trial 1/i)) {
          if (itemDetails === "Sample Item B, Trial 1") {
            await correctlocator.click();
            await expect.soft(this.nextText).toHaveText("Practice Exercise");
            return;
          } else {
            await correctlocator.click();
          }
        }
      } else if(typeOfTest.match(/Practice Exercise (All Correct|All Incorrect|InCorrect to All Correct in Practice Feedback|2 Correct)/i)){
        const AllCorrect = typeOfTest.match(/Practice Exercise All Correct/i);
        const AllIncorrect = typeOfTest.match(/Practice Exercise All Incorrect/i);
        const AllInCorrectToCorrectinPF = typeOfTest.match(/Practice Exercise InCorrect to All Correct in Practice Feedback/i);
        const TwoCorrect = typeOfTest.match(/Practice Exercise 2 Correct/i);

        if (itemDetails.includes("Practice Exercise")) {
            await this.startPracticeOrStartTestButton.click();
            if(AllCorrect){
                for (const index of practiceElementsAllCorrect) {
                    const element = practiceAndTestItemsElements.nth(index);
                    await element.click();
                  }
                await this.doneOrNextButton.click();
                await expect.soft(this.itemDetails).toHaveText("Test Items");
                return;  
            }else if(TwoCorrect){
                for (const index of practiceElementsTwoCorrect) {
                    const element = practiceAndTestItemsElements.nth(index);
                    await element.click();
                  }
                await this.doneOrNextButton.click({delay: 200, clickCount: 2});
                await expect.soft(this.itemDetails).toHaveText("Test Items");
                return; 
            }else if(AllIncorrect){
                for (const index of practiceElementsAllIncorrect) {
                    const element = practiceAndTestItemsElements.nth(index);
                    await element.click();
                  }
                await this.doneOrNextButton.click({delay: 200, clickCount: 2});
            }else if(AllInCorrectToCorrectinPF){
                for (const index of practiceElementsAllIncorrect) {
                    const element = practiceAndTestItemsElements.nth(index);
                    await element.click();
                  }
                await this.doneOrNextButton.click();
                for (const index of PracticeFeedBackItems) {
                    const element = practiceAndTestItemsElements.nth(index);
                    await element.click();
                  }
                await this.doneOrNextButton.click();
                await expect.soft(this.itemDetails).toHaveText("Test Items");
                return; 
            }
        }
      }else if(typeOfTest.match(/Test Items (All Correct|All Incorrect|6 Correct)/i)){
        const AllCorrect = typeOfTest.match(/Test Items All Correct/i);
        const AllIncorrect = typeOfTest.match(/Test Items All Incorrect/i);
        const SixCorrect = typeOfTest.match(/Test Items 6 Correct/i);

        if (itemDetails.includes("Test Items")) {
            await this.startPracticeOrStartTestButton.click();
            await this.activateTabletControlButton.click();
            if(AllCorrect){
                for (const set of AllCorrectSets) {
                    for (const num of set) {
                      const element = practiceAndTestItemsElements.nth(num);
                      await element.click();
                    }
                    await this.doneOrNextButton.click();
                  }
            }else if(SixCorrect){
                for (const set of SixCorrectSets) {
                    for (const num of set) {
                      const element = practiceAndTestItemsElements.nth(num);
                      await element.click();
                    }
                    await this.doneOrNextButton.click();
                  }
            }else if(AllIncorrect){
                for (const set of AllIncorrectSets) {
                    for (const num of set) {
                      const element = practiceAndTestItemsElements.nth(num);
                      await element.click();
                    }
                    await this.doneOrNextButton.click();
                  }
            }
        }
      }else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }
      
      if (itemDetails === "Practice Exercise" && !typeOfTest.match(/Practice Exercise (All Correct|All Incorrect|InCorrect to All Correct in Practice Feedback|2 Correct)/i)) {
        await this.doneOrNextButton.click();
      } else {
        await this.nextAndEndTestButton.click();
      }
    
      if (
        (await this.nextAndEndTestButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }
}
