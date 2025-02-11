import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5LetterPatternMatchingPage {
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
  private readonly itemScoreValue: Locator;
  private readonly rawScoreText: Locator;
  private readonly endTest: Locator;
  private readonly nextItemNavigation: Locator;
  private readonly introItemText: Locator;
  private readonly listOfPracticeExerciseItems: Locator;
  private readonly introductionError: Locator;
  private readonly inCorrectAnswerErrorMessage: Locator;
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
  private readonly listOfOptionsForLetterPatternMatching: Locator;
  
  private readonly startPracticeAndStartTimerButton: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly NextAndendTestBtn: Locator;
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

    this.nextORendTestButton = this.page.locator(
      "//button[@class='plain-button next-item-button' or @class='plain-button nav-button']",
    );

    this.lestBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
    this.startTestButton = this.page.locator("//button[text()='Start Test']");
    this.videoPlayButton = this.page.locator("//button[@class='large-play']");
    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button",
    );
    this.nextItemNavigation = this.page.locator(
      "//button[@class='plain-button next-item-button']",
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
    this.itemScoreValue = this.page.locator("//div[@class='select-group item-score-group']//child::div[@class='item-score']");
    this.rawScoreText = this.page.locator("//div[@class='raw-score']");
    this.endTest = this.page.locator("//button[text()='End Test']");
    this.listOfPracticeExerciseItems = this.page.locator("//div[@class='examinee-view']//child::div[@class='fluency-mc']");
    this.introductionError = this.page.locator("//div[@class='introduction  error']//child::*[@class='error-icon']");
    this.inCorrectAnswerErrorMessage = this.page.locator("(//div[@class='intro-text']//child::span)");
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
    this.listOfOptionsForLetterPatternMatching = this.page.locator(
      "//div[@class='fluency-mc']//child::div[contains(@class,'options LETPAT')]//child::button"
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

  async verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any, I13?: any, I14?: any, I15?: any, I16?: any, I17?: any, I18?: any, I19?: any, I20?: any) {
     
    const itemDetails: string = (await this.itemDetails.textContent())!;
    console.log(itemDetails);

    await this.listOfOptionsForLetterPatternMatching.nth(I1).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I2).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I3).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I4).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I5).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I6).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I7).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I8).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I9).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I10).click();
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForLetterPatternMatching.nth(I11).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I12).click();
    await this.doneOrNextButton.isEnabled();
    await this.listOfOptionsForLetterPatternMatching.nth(I13).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I14).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I15).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I16).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I17).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I18).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I19).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I20).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
    await this.doneOrNextButton.click();
  }

  async verifyScoringAllPracticeExerciseForLetterPatternMatching(I1?: any, I2?: any, I3?: any, I4?: any, I5?: any, I6?: any, I7?: any, I8?: any, I9?: any, I10?: any, I11?: any, I12?: any) {
    await expect(this.doneOrNextButton).toHaveAttribute("disabled", "");
    await this.listOfOptionsForLetterPatternMatching.nth(I1).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I2).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I3).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I4).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I5).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I6).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I7).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I8).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I9).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I10).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I11).click();
    await this.listOfOptionsForLetterPatternMatching.nth(I12).click();
    await this.doneOrNextButton.waitFor({ state: "visible" });
    await this.doneOrNextButton.isEnabled();
  }

  async completeTheTakenTestForLETPATTest(
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
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
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
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '19');
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
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('0', '1', '3', '5', '6', '7', '10', '12', '14', '15', '18', '19');
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
          await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
          await this.doneOrNextButton.click();
          await this.startPraciceAndTimerButton.click();
          await this.timerActive.isEnabled();
          await expect(this.startPraciceAndTimerButton).toHaveAttribute("disabled", "");
          await this.examineeCursorButton.click();
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '2', '3', '4', '7', '8', '10', '11', '12', '14', '17', '18', '20', '23', '26', '28', '29', '31', '34', '38');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '2', '7', '11', '13', '16', '21', '23', '24', '27', '32', '35', '38', '40', '43', '46', '48', '50', '55', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '5', '6', '10', '14', '16', '19', '22', '24', '26', '31', '34', '38', '39', '45', '47', '48', '51', '55', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '5', '6', '11', '15', '17', '20', '22', '26', '29', '31', '34', '37', '40', '42', '47', '48', '50', '55', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '4', '8', '10', '16', '17', '18', '23', '25', '28', '30', '33', '38', '41', '43', '46', '48', '53', '55', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '4', '7', '9', '14', '15', '20', '23', '25', '27', '32', '34', '40', '41', '42', '45', '50', '52', '56', '58');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '5', '7', '11', '14', '16', '20', '23', '26', '27', '32', '35', '38', '41', '43', '46', '49', '51', '55', '59');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '3', '6', '9', '12', '16', '21', '23', '25', '28', '31', '34', '38', '40', '45', '47', '48', '49', '55', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '5', '6', '9', '12', '17', '20', '23', '26', '28', '31', '34', '37', '40', '45', '47', '50', '53', '54', '57');
          await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('1', '3', '6', '10', '13', '14', '19', '23', '24', '27', '31', '35', '36', '39', '45', '47', '49', '51', '54', '56');
          await this.examineeCursorButton.click();
        }
      } else if (
        typeOfTest.match(/Test Items 5 Correct 5 Incorrect Two Tap scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
         } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '2', '3', '4', '7', '8', '10', '11', '12', '14', '16', '17', '20', '21', '24', '25', '29', '30', '34', '35');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '2', '7', '11', '13', '16', '21', '23', '24', '27', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '5', '6', '10', '14', '16', '19', '22', '24', '26', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '5', '6', '11', '15', '17', '20', '22', '26', '29', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '4', '8', '10', '16', '17', '18', '23', '25', '28', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '4', '7', '9', '14', '15', '20', '23', '25', '27', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '5', '7', '11', '14', '16', '20', '23', '26', '27', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '3', '6', '9', '12', '16', '21', '23', '25', '28', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('2', '5', '6', '9', '12', '17', '20', '23', '26', '28', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('1', '3', '6', '10', '13', '14', '19', '23', '24', '27', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.examineeCursorButton.click();
          }
      } else if (
        typeOfTest.match(/Test Items All incorrect scenario/i)
      ) {
         if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.timerActive.isEnabled();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '4', '5', '6', '7', '9', '10', '12', '13', '16', '17', '20', '21', '24', '25', '29', '30', '34', '35');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.examineeCursorButton.click();
          }
      } else if (
        typeOfTest.match(/Test Items When Timer Counts Down 180 Sec On First Test Item Page/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
        } else if (itemDetails.startsWith("Practice Exercise")) {
            await this.startPracticeAndStartTimerButton.click();
            await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
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
            await this.verifyScoringAllPracticeExerciseForLetterPatternMatching('1', '2', '3', '4', '6', '8', '10', '11', '14', '16', '18', '21');
            await this.doneOrNextButton.click();
            await this.startPraciceAndTimerButton.click();
            await this.examineeCursorButton.click();
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '4', '5', '6', '7', '9', '10', '12', '13', '16', '17', '20', '21', '24', '25', '29', '30', '34', '35');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
            await this.verifyScoringAllTestItemsInEachPageWithTwoTapForLetterPatternMatching('0', '1', '6', '7', '12', '13', '18', '19', '24', '25', '31', '32', '37', '38', '43', '44', '49', '50', '55', '56');
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

