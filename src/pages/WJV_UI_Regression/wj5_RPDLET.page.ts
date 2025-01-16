import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5RpdletPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly itemDetails: Locator;
  private readonly doneButton: Locator;
  private readonly sampleinCorrectAnswerButton: Locator;
  private readonly noneAttemptedButton: Locator;
  private readonly timeUpView: Locator;
  private readonly listOfInCorrectAnswers: Locator;
  private readonly listOfAnswersInTimeUpModal: Locator;
  private readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button"
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.doneButton = this.page.locator(
      "//button[@class='plain-button blue-button']"
    );
    this.sampleinCorrectAnswerButton = this.page.locator(
      "//button[@class='select-option']"
    );
    this.noneAttemptedButton = this.page.locator(
      "//button[text()='None Attempted']"
    );
    this.timeUpView = this.page.locator("//b[text()='Time is up.']");
    this.listOfInCorrectAnswers = this.page.locator("//div[@class='select-group incorrect']//child::div[@class='option-wrapper']//child::*");
    this.listOfAnswersInTimeUpModal = this.page.locator("//div[@class='select-group no-space-group correct']//child::div[@class='option-wrapper']//child::*");
    this.continueButton = this.page.getByRole("button", { name: "Continue" });
  }

  async completeTheTakenTestForRPDLETTest(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    this.scoreMap.set(` `, "^");

    console.log("The first Score Map" + this.scoreMap);

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const sampleinCorrectAnswer: Locator =
        this.sampleinCorrectAnswerButton.nth(0);

      if (typeOfTest.match(/Ages 4 to 7 - Sample Items End Test Flow scenario|Ages 8 to Adult - Sample Items End Test Flow scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          if (itemDetails.startsWith("Sample Item A, Trial 2")) {
            await this.doneButton.click();
          } else {
            await sampleinCorrectAnswer.click();
            await this.doneButton.click();
          }
        }
      }else if (typeOfTest.match(/Ages 4 to 7 - Test Items All correct scenario|Ages 8 to Adult - Test Items All correct scenario/i)
      ) {
          if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        }else if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
        }
      }else if (typeOfTest.match(/Ages 4 to 7 - Test Items 10 incorrect scenario|Ages 8 to Adult - Test Items 10 incorrect scenario/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        }else if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.match(/^Item Set [1-8]/)) {
          for(let i=0;i<=9;i++){
          await this.listOfInCorrectAnswers.nth(i).click();
          } 
       }
      } else if (typeOfTest.match(/Ages 4 to 7 - When Timer Ran Out for First Item set|Ages 8 to Adult - When Timer Ran Out for First Item set/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        }else if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails === 'Item Set 1') {
          await this.timeUpView.waitFor({ state: "visible" });
          await this.noneAttemptedButton.click();
          break;
        }
      } else if (
        typeOfTest.match(/Ages 4 to 7 - Test Items When Timer Ran Out for Last Item set|Ages 8 to Adult - Test Items When Timer Ran Out for Last Item set/i)
      ) {
        if (itemDetails.startsWith("Sample")) {
          await this.doneButton.click();
        } else if (itemDetails.match(/^Item Set [1-6]/)) {
        } else if (itemDetails === 'Item Set 7') {
          await this.timeUpView.waitFor({ state: "visible" });
          await this.listOfAnswersInTimeUpModal.nth(6).click();
          await this.continueButton.click();
          await this.listOfInCorrectAnswers.nth(18).click();
          await this.continueButton.click();
          break;
        }
      }
      else {
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
}
