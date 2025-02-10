import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5SentenceReadingFluencyPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

   
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly IDK: Locator;
  private readonly itemDetails: Locator;
  private readonly introItemText: Locator;
  private readonly listOfPracticeExerciseItems: Locator;
  private readonly introductionError: Locator;
  private readonly inCorrectAnswerErrorMessage: Locator;
  private readonly listOfOptionsForSentenceReadingFluency: Locator;
  private readonly startPracticeAndStartTimerButton: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly examineeCursorButton: Locator;
  private readonly startPraciceAndTimerButton: Locator;
  private readonly timerActive: Locator;
  private readonly closeBtnTimer: Locator;
  private readonly secondRemain: Locator;
  private readonly nextAndEndTestButton: Locator;
  private readonly timeUpView: Locator;



  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button",
    );
    this.introItemText = this.page.locator(
      "//div[@class='intro-text']//child::span",
    );
    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button",
    );
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button",
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.listOfPracticeExerciseItems = this.page.locator("//div[@class='examinee-view']//child::div[@class='fluency-mc']");
    this.introductionError = this.page.locator("//div[@class='introduction  error']//child::*[@class='error-icon']");
    this.inCorrectAnswerErrorMessage = this.page.locator("(//div[@class='intro-text']//child::span)");
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.listOfOptionsForSentenceReadingFluency = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options')]//child::button",
    );
    this.startPracticeAndStartTimerButton = this.page.locator(
      "//button[text()='Start Practice Exercise ']",
    );
    this.doneOrNextButton = this.page.locator(
      "//button[@class='plain-button nav-button']",
    );
    this.startPraciceAndTimerButton = this.page.locator("//button[text()='Start the timer and display the test items']")
    this.examineeCursorButton = this.page.locator("//button[@class='plain-button examinee-cursor-button']");
    this.timerActive = this.page.locator("//div[@class='timer active']");
    this.secondRemain = this.page.locator("//div[@class='less-than-5']");
    this.closeBtnTimer = this.page.locator("//div[@class='ReactModal__Content ReactModal__Content--after-open popup-infopage-modal']//button[text()='Close']");
    this.nextAndEndTestButton = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.timeUpView = this.page.locator("//b[text()='Time is up.']");
  }

   
  async verifyScoringAllTestItemsInEachPageForSentenceReadingFluency(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any, I13?: any, I14?: any, I15?: any, I16?: any, I17?: any, I18?: any, I19?: any, I20?: any) {
     
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);
    await this.listOfOptionsForSentenceReadingFluency.nth(I1).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I2).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I3).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I4).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I5).click();
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForSentenceReadingFluency.nth(I6).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I7).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I8).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I9).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I10).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
    await this.doneOrNextButton.click();
  }

  async verifyScoringAllPracticeExerciseForSentenceReadingFluency(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any) {
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForSentenceReadingFluency.nth(I1).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I2).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I3).click();
    await this.listOfOptionsForSentenceReadingFluency.nth(I4).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
  }

  async completeTheTakenTestForSRDGFLTest(
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
      const iDontKnow: Locator = this.IDK;
     if (
        typeOfTest.match(/Sample Items End Test Flow scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) { 
          await incorrectlocator.click();
        }
      } else if (
        typeOfTest.match(/Practice Exercise All correct scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          expect(await this.introItemText.textContent()).toContain("Go ahead.");
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '7');
          await this.doneOrNextButton.click();
          break;
        }
      } else if (
        typeOfTest.match(/Practice Exercise 3 Correct 1 Incorrect scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '6');
          await this.doneOrNextButton.click();
          await expect(this.listOfPracticeExerciseItems.nth(0)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(1)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(2)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(3)).toHaveAttribute("data-correct", "false");
          await expect(this.itemDetails).toHaveText("Practice Exercise");
          await expect(this.introductionError).toBeVisible();
          await expect(this.inCorrectAnswerErrorMessage.nth(0)).toBeVisible();
          expect(await this.inCorrectAnswerErrorMessage.nth(0).textContent()).toContain("Let’s do this one again.");
          await this.doneOrNextButton.waitFor({ state: "visible" });
          await this.doneOrNextButton.click();
          break;
        }
      } else if (
        typeOfTest.match(/Practice Exercise All incorrect scenario/i)
      ){
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('0', '3', '5', '6');
          await this.doneOrNextButton.click();
          await expect(this.listOfPracticeExerciseItems.nth(0)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(1)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(2)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(3)).toHaveAttribute("data-correct", "false");
          await expect(this.itemDetails).toHaveText("Practice Exercise");
          await expect(this.introductionError).toBeVisible();
          await expect(this.inCorrectAnswerErrorMessage.nth(0)).toBeVisible();
          expect(await this.inCorrectAnswerErrorMessage.nth(0).textContent()).toContain("Let’s do this one again.");
          await this.doneOrNextButton.waitFor({ state: "visible" });
          await this.doneOrNextButton.click();
        }
      } else if (
        typeOfTest.match(/Test Items All correct scenario/i)
      ){
       if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await expect(this.startPracticeAndStartTimerButton).toHaveAttribute("disabled", "");
          await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '7');
          await this.doneOrNextButton.click();
          await this.startPraciceAndTimerButton.click();
          await this.timerActive.isEnabled();
          await expect(this.startPraciceAndTimerButton).toHaveAttribute("disabled", "");
          await this.examineeCursorButton.click();
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '4', '7', '8', '11', '12', '14', '16', '18');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '11', '13', '15', '16', '19');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '5', '6', '9', '10', '13', '14', '16', '19');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '7', '8', '10', '13', '15', '17', '18');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '8', '10', '12', '14', '17', '18');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '7', '9', '10', '13', '15', '17', '19');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '11', '13', '14', '17', '18');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '5', '7', '8', '10', '13', '14', '16', '18');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '8', '11', '13', '14', '16', '19');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '5', '6', '9', '11', '13', '14', '16', '18');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '9', '11', '12', '14', '16', '19');
          await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '4', '7', '9', '11', '13', '14', '16', '18');
          await this.examineeCursorButton.click();
        }
      } else if (
        typeOfTest.match(/Test Items 5 Correct 5 Incorrect Two Tap scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
         } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '7');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '4', '7', '8', '10', '13', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '10', '12', '14', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '5', '6', '9', '11', '12', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '7', '8', '11', '12', '14', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '8', '11', '13', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '7', '9', '11', '12', '14', '16', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '10', '12', '15', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '5', '7', '8', '11', '12', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '8', '10', '12', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '5', '6', '9', '10', '12', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '9', '10', '13', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '10', '12', '15', '17', '19');
          }
      } else if (
        typeOfTest.match(/Test Items All incorrect scenario/i)
      ) {
         if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '7');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '5', '6', '9', '10', '13', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '8', '10', '12', '14', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '4', '7', '8', '11', '12', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '5', '6', '9', '11', '12', '14', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '11', '13', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '5', '6', '8', '11', '12', '14', '16', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '8', '10', '12', '15', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '6', '9', '11', '12', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '9', '10', '12', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '4', '7', '8', '10', '12', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '8', '10', '13', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '8', '10', '12', '15', '17', '19');
            await this.examineeCursorButton.click();
          }
      } else if (
        typeOfTest.match(/Test Items When Timer Counts Down 180 Sec On First Test Item Page/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '7');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.page.locator("//div[@class='less-than-5']").waitFor({ state: "visible" });
            expect(await this.secondRemain.textContent()).toContain("0:05 seconds remain!");
            await this.timeUpView.waitFor({ state: "visible" });
            await this.closeBtnTimer.click();
          }
        } else if (
          typeOfTest.match(/Test Items When Timer Counts Down 180 Sec On Last Test Item Page/i)
        ) {
          if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForSentenceReadingFluency('1', '2', '4', '7');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '4', '7', '8', '11', '12', '14', '16', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '11', '13', '15', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '5', '6', '9', '10', '13', '14', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '7', '8', '10', '13', '15', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '8', '10', '12', '14', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '4', '7', '9', '10', '13', '15', '17', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '9', '11', '13', '14', '17', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '2', '5', '7', '8', '10', '13', '14', '16', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '2', '4', '7', '8', '11', '13', '14', '16', '19');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('1', '3', '5', '6', '9', '11', '13', '14', '16', '18');
            await this.verifyScoringAllTestItemsInEachPageForSentenceReadingFluency('0', '3', '5', '6', '9', '11', '12', '14', '16', '19');
            await this.page.locator("//div[@class='less-than-5']").waitFor({ state: "visible" });
            expect(await this.secondRemain.textContent()).toContain("0:05 seconds remain!");
            await this.timeUpView.waitFor({ state: "visible" });
            await this.closeBtnTimer.click();
          }
        }  else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`
          );
        }
         
        await this.nextAndEndTestButton.click();
       if ((await this.nextAndEndTestButton.textContent()) === "End Test") {
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

