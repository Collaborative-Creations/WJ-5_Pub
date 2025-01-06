import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5NumrevPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly IDK: Locator;
  private readonly NR: Locator;
  private readonly itemDetails: Locator;
  private readonly multiRadioButtons: Locator;
  private readonly dropDowns: Locator;
  private readonly NextAndendTestBtn: Locator;

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

    this.multiRadioButtons = this.page.locator(
      "//div[@class= 'observations']//div[@class='option-wrapper']//button"
    );

    this.dropDowns = this.page.locator(
      "//div[@class= 'observations']//button[@class='select-box']"
    );

    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.NR = this.page.locator("//button[text()='No Response']");

    this.NextAndendTestBtn = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]"
    );
  }

  async selectThecheckBox(radioButton: number, info?: string) {
    await this.multiRadioButtons.nth(radioButton).click();
  }

  async completeTheTakenTestForNUMREV(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );

    this.scoreMap.set(` `, "^");

    console.log("The first Score Map" + this.scoreMap);

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);

      const correctlocator: Locator = this.corectOptionButton.first();

      const iDontKnow: Locator = this.IDK;

      if (
        typeOfTest.match(
          /All Correct SSP(1|2|3)|Ceiling Check SSP1/i
        )
      ) {
        const isCeilingCheck =
          typeOfTest.match(/Ceiling Check/i) && itemDetails.startsWith("Item");
        if (itemDetails.startsWith("Introduction")) {
        } else if (itemDetails.startsWith("Sample")) {
          await correctlocator.click();
        } else {
          await (isCeilingCheck ? iDontKnow : correctlocator).click();
        }
      } else if (typeOfTest.match(/5 Correct and 5 Incorrect for SSP1/i)) {
        if (
          [
            "Introduction 1",
            "Introduction 2",
            "Introduction 3",
            "Introduction 4",
          ].includes(itemDetails)
        ) {
        } else if (
          ["Sample Item A, Trial 1", "Sample Item B, Trial 1"].includes(
            itemDetails
          )
        ) {
          await correctlocator.click();
        } else if (/^Item ([1-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item ([6-9]|10)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/5 Correct and 5 Incorrect for SSP2/i)) {
        if (
          [
            "Introduction 3",
            "Introduction 4",
            "Introduction 5",
            "Introduction 6",
          ].includes(itemDetails)
        ) {
        } else if (
          [
            "Sample Item B, Trial 1",
            "Sample Item C, Trial 1",
            "Sample Item D, Trial 1",
          ].includes(itemDetails)
        ) {
          await correctlocator.click();
        } else if (/^Item ([6-9]|10)\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[1-5])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/5 Correct and 5 Incorrect for SSP3/i)) {
        if (["Introduction 5", "Introduction 6"].includes(itemDetails)) {
        } else if (
          ["Sample Item C, Trial 1", "Sample Item D, Trial 1"].includes(
            itemDetails
          )
        ) {
          await correctlocator.click();
        } else if (/^Item (1[1-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (1[6-9]|20)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/Reverse Logic Scenario for SSP2/i)) {
        if (["Introduction 5", "Introduction 6"].includes(itemDetails)) {
        } else if (["Sample Item B, Trial 1"].includes(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item (6|[1-5])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/Reverse Logic Scenario for SSP3/i)) {
        if (["Introduction 5", "Introduction 6"].includes(itemDetails)) {
        } else if (
          ["Sample Item C, Trial 1", "Sample Item D, Trial 1"].includes(
            itemDetails
          )
        ) {
          await correctlocator.click();
        } else if (/^Item (11|6|[1-5])\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/Sample B Routing Change Scenario/i)) {
        if (["Introduction 3", "Introduction 2"].includes(itemDetails)) {
        } else if (
          [
            "Sample Item B, Trial 1",
            "Sample Item B, Trial 2",
            "Sample Item A, Trial 1",
            "Sample Item A, Trial 2",
          ].includes(itemDetails)
        ) {
          await iDontKnow.click();
        } else if (/^Item ([1-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item ([6-9]|10)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else if (typeOfTest.match(/Sample C Routing Change Scenario/i)) {
        if (["Introduction 5", "Introduction 2"].includes(itemDetails)) {
        } else if (
          [
            "Sample Item C, Trial 1",
            "Sample Item C, Trial 2",
            "Sample Item B, Trial 1",
            "Sample Item B, Trial 2",
            "Sample Item A, Trial 1",
            "Sample Item A, Trial 2",
          ].includes(itemDetails)
        ) {
          await iDontKnow.click();
        } else if (/^Item ([1-5])\b/.test(itemDetails)) {
          await correctlocator.click();
        } else if (/^Item ([6-9]|10)\b/.test(itemDetails)) {
          await iDontKnow.click();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didn't match with any of the conditions provided`
        );
      }

      await this.NextAndendTestBtn.click();

      if ((await this.NextAndendTestBtn.textContent()) === "End Test") {
        break;
      }
    }

    console.log(this.scoreMap);
    return this.scoreMap;
  }
}
