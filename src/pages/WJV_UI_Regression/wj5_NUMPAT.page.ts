import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5NumberPatternMatchingPage {
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
  private readonly listOfOptionsForNumberPatternMatching: Locator;
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
    this.listOfOptionsForNumberPatternMatching = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options NUMPAT')]//child::button"
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

  
  async verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any, I13?: any, I14?: any, I15?: any, I16?: any, I17?: any, I18?: any, I19?: any, I20?: any) {
     
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);

    await this.listOfOptionsForNumberPatternMatching.nth(I1).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I2).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I3).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I4).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I5).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I6).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I7).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I8).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I9).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I10).click();
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForNumberPatternMatching.nth(I11).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I12).click();
    await this.doneOrNextButton.isEnabled();
    await this.listOfOptionsForNumberPatternMatching.nth(I13).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I14).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I15).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I16).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I17).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I18).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I19).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I20).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
    await this.doneOrNextButton.click();
  }

  async verifyScoringAllPracticeExerciseForNumberPatternMatching(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any) {
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForNumberPatternMatching.nth(I1).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I2).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I3).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I4).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I5).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I6).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I7).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I8).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I9).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I10).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I11).click();
    await this.listOfOptionsForNumberPatternMatching.nth(I12).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
  }

  async completeTheTakenTestForNUMPATTest(
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
          expect(await this.introItemText.textContent()).toContain("Go ahead and choose the two that are alike.");
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','29');
          await this.doneOrNextButton.click();
          break;
        }
      } else if (
        typeOfTest.match(/Practice Exercise 5 Correct 1 Incorrect scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
          await this.startPracticeAndStartTimerButton.click();
          await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','26');
          await this.doneOrNextButton.click();
          await expect(this.listOfPracticeExerciseItems.nth(0)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(1)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(2)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(3)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(4)).toHaveAttribute("data-correct", "true");
          await expect(this.listOfPracticeExerciseItems.nth(5)).toHaveAttribute("data-correct", "false");
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
          await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('1','3','5','7','10','11','15','16','22','23','25','26');
          await this.doneOrNextButton.click();
          await expect(this.listOfPracticeExerciseItems.nth(0)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(1)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(2)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(3)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(4)).toHaveAttribute("data-correct", "false");
          await expect(this.listOfPracticeExerciseItems.nth(5)).toHaveAttribute("data-correct", "false");
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
          await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','29');
          await this.doneOrNextButton.click();
          await this.startPraciceAndTimerButton.click();
          await this.timerActive.isEnabled();
          await expect(this.startPraciceAndTimerButton).toHaveAttribute("disabled", "");
          await this.examineeCursorButton.click();
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '2', '9', '10', '12', '14', '19', '22', '24', '29', '31', '34', '36', '40', '45', '46', '48', '53', '56', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '4', '6', '11', '15', '16', '19', '21', '24', '28', '32', '35', '36', '37', '43', '45', '49', '52', '56', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '9', '10', '13', '17', '18', '20', '26', '28', '31', '33', '36', '41', '44', '47', '51', '52', '54', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('4', '5', '9', '11', '14', '17', '19', '22', '26', '27', '30', '33', '37', '41', '44', '46', '48', '50', '55', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('2', '5', '9', '10', '12', '17', '19', '20', '28', '29', '30', '33', '37', '40', '42', '45', '50', '53', '55', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '7', '11', '13', '15', '18', '22', '24', '26', '31', '33', '38', '41', '43', '45', '50', '52', '56', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '8', '10', '12', '17', '19', '22', '24', '27', '31', '34', '38', '41', '44', '46', '48', '51', '55', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('2', '4', '7', '10', '12', '15', '19', '23', '26', '28', '31', '33', '37', '41', '44', '46', '49', '51', '54', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '3', '6', '10', '12', '14', '20', '23', '26', '29', '30', '33', '36', '41', '42', '45', '49', '52', '56', '59');
          await this.examineeCursorButton.click();
        } 
      } else if (
        typeOfTest.match(/Test Items 5 Correct 5 Incorrect Two Tap scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
         } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','29');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '2', '9', '10', '12', '14', '19', '22', '24', '29', '30', '31', '36', '37', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '4', '6', '11', '15', '16', '19', '21', '24', '28', '30', '31', '36', '39', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '9', '10', '13', '17', '18', '20', '26', '28', '30', '31', '36', '37', '43', '44', '49',' 50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('4', '5', '9', '11', '14', '17', '19', '22', '26', '27', '30', '31', '36', '37', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('2', '5', '9', '10', '12', '17', '19', '20', '28', '29', '30', '31', '36', '37', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '7', '11', '13', '15', '18', '22', '24', '26', '30', '31', '36', '37', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '8', '10', '12', '17', '19', '22', '24', '27', '30', '31', '36', '37', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('2', '4', '7', '10', '12', '15', '18', '23', '26', '28', '30', '31', '36', '37', '43', '44', '49', '51', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '3', '6', '10', '12', '14', '20', '23', '26', '29', '30', '31', '36', '37', '43', '44', '49', '51', '55', '56');
            await this.examineeCursorButton.click();
          }
      } else if (
        typeOfTest.match(/Test Items All incorrect scenario/i)
      ) {
         if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','29');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '39', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '25', '26', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '56', '57');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.examineeCursorButton.click();
          }
      } else if (
        typeOfTest.match(/Test Items When Timer Counts Down 180 Sec On First Test Item Page/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','29');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.page.locator("//div[@class='less-than-5']").waitFor({ state: "visible" });
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
            await this.verifyScoringAllPracticeExerciseForNumberPatternMatching('2','4','5','8','11','12','16','18','23','24','25','29');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '2', '9', '10', '12', '14', '19', '22', '24', '29', '31', '34', '36', '40', '45', '46', '48', '53', '56', '58');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('1', '4', '6', '11', '15', '16', '19', '21', '24', '28', '32', '35', '36', '37', '43', '45', '49', '52', '56', '59');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '9', '10', '13', '17', '18', '20', '26', '28', '31', '33', '36', '41', '44', '47', '51', '52', '54', '58');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('4', '5', '9', '11', '14', '17', '19', '22', '26', '27', '30', '33', '37', '41', '44', '46', '48', '50', '55', '58');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('2', '5', '9', '10', '12', '17', '19', '20', '28', '29', '30', '33', '37', '40', '42', '45', '50', '53', '55', '57');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '7', '11', '13', '15', '18', '22', '24', '26', '31', '33', '38', '41', '43', '45', '50', '52', '56', '59');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('0', '3', '8', '10', '12', '17', '19', '22', '24', '27', '31', '34', '38', '41', '44', '46', '48', '51', '55', '59');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForNumberPatternMatching('2', '4', '7', '10', '12', '15', '19', '23', '26', '28', '31', '33', '37', '41', '44', '46', '49', '51', '54', '57');
            await this.page.locator("//div[@class='less-than-5']").waitFor({ state: "visible" });
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

