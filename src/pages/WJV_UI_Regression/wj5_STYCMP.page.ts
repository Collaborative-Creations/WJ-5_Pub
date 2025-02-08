import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5StycmpPage {
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

  async completeTheTakenTestForSTYCMP(
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
      } else if (
        itemDetails.startsWith("Sample") &&
        !typeOfTest.match(
          /Sample Item EndTest Flow when RS is (0|1)|Sample Item Forward Flow when RS is 2/i
        )
      ) {
        await correctlocator.click();
      } else if (itemDetails.endsWith("Presentation")) {
        await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
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
          await iDontKnow.click();
        } else if (RSisOne) {
          if (itemDetails.match(/Sample Item A, Trial 1/i)) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
        }
      } else if (typeOfTest.match(/Sample Item Forward Flow when RS is 2/i)) {
        if (itemDetails.match(/Sample Item (A|B), Trial 1/i)) {
          if (itemDetails === "Sample Item B, Trial 1") {
            await correctlocator.click();
            await expect.soft(this.nextText).toHaveText("Introduction 1");
            return;
          } else {
            await correctlocator.click();
          }
        }
      } else if (typeOfTest.match(/Block A EndTest Flow When RS is 5/i)) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-2])\b/;
        const Story3Items = /^(Story 3), Item ([1-2])\b/;
        const Story4Items = /^(Story 4), Item ([1-3])\b/; //Block A

        if (itemDetails.match(Story1Items) || itemDetails.match(Story2Items)) {
          await correctlocator.click();
        } else if (
          itemDetails.match(Story3Items) ||
          itemDetails.match(Story4Items)
        ) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(
          /Block A to Block B Forward Flow When RS is 6 and Block AB EndTest Scenario/i
        )
      ) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-2])\b/;
        const Story3Item1 = /^(Story 3), Item 1\b/;
        const Story4Item3 = /^(Story 4), Item 3\b/; //Block A

        const Story5Items = /^(Story 5), Item ([1-3])\b/;
        const Story6Items = /^(Story 6), Item ([1-3])\b/;
        const Story7Items = /^(Story 7), Item ([1-3])\b/; //Block B

        if (
          itemDetails.match(Story1Items) ||
          itemDetails.match(Story2Items) ||
          itemDetails.match(Story3Item1)
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.match(Story5Items) ||
          itemDetails.match(Story6Items) ||
          itemDetails.match(Story7Items)
        ) {
          await correctlocator.click();
        } else {
          await iDontKnow.click();
          if (itemDetails.match(Story4Item3)) {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 5, Presentation");
          }
        }
      } else if (
        typeOfTest.match(
          /Block B to Block A routing flow When RS is 5 in Block B and all (correct|incorrect) in Block A/i
        )
      ) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-2])\b/;
        const Story3Items = /^(Story 3), Item ([1-2])\b/;
        const Story4Items = /^(Story 4), Item ([1-3])\b/; //Block A

        const Story5Items = /^(Story 5), Item ([1-3])\b/;
        const Story6Items = /^(Story 6), Item ([1-2])\b/;
        const Story7Item3 = /^(Story 7), Item 3\b/; //Block B

        const isCorrectScenario = typeOfTest.match(
          /Block B to Block A routing flow When RS is 5 in Block B and all correct in Block A/i
        );

        if (itemDetails.match(Story5Items) || itemDetails.match(Story6Items)) {
          await correctlocator.click();
        } else if (
          itemDetails.match(Story1Items) ||
          itemDetails.match(Story2Items) ||
          itemDetails.match(Story3Items) ||
          itemDetails.match(Story4Items)
        ) {
          if (isCorrectScenario) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
        } else {
          await iDontKnow.click();
          if (itemDetails.match(Story7Item3)) {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 1, Presentation");
          }
        }
      } else if (
        typeOfTest.match(
          /Block B to Block C Forward flow When RS is 9 in Block B and all (correct|incorrect) in Block C/i
        )
      ) {
        const Story5Items = /^(Story 5), Item ([1-3])\b/;
        const Story6Items = /^(Story 6), Item ([1-3])\b/;
        const Story7Items = /^(Story 7), Item ([1-3])\b/; //Block B

        const Story8Items = /^(Story 8), Item ([1-4])\b/;
        const Story9Items = /^(Story 9), Item ([1-4])\b/;
        const Story10Items = /^(Story 10), Item ([1-5])\b/; //Block C

        const isCorrectScenario = typeOfTest.match(
          /Block B to Block C Forward flow When RS is 9 in Block B and all correct in Block C/i
        );

        if (
          itemDetails.match(Story5Items) ||
          itemDetails.match(Story6Items) ||
          itemDetails.match(Story7Items)
        ) {
          await correctlocator.click();
          if (itemDetails === "Story 7, Item 3") {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 8, Presentation");
          }
        } else if (
          itemDetails.match(Story8Items) ||
          itemDetails.match(Story9Items) ||
          itemDetails.match(Story10Items)
        ) {
          if (isCorrectScenario) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(
          /Block C to Block B routing flow When RS is 0 in Block C and all (correct|incorrect) in Block B/i
        )
      ) {
        const Story5Items = /^(Story 5), Item ([1-3])\b/;
        const Story6Items = /^(Story 6), Item ([1-3])\b/;
        const Story7Items = /^(Story 7), Item ([1-3])\b/; //Block B

        const Story8Items = /^(Story 8), Item ([1-4])\b/;
        const Story9Items = /^(Story 9), Item ([1-4])\b/;
        const Story10Items = /^(Story 10), Item ([1-5])\b/; //Block C

        const isCorrectScenario = typeOfTest.match(
          /Block C to Block B routing flow When RS is 0 in Block C and all correct in Block B/i
        );

        if (
          itemDetails.match(Story8Items) ||
          itemDetails.match(Story9Items) ||
          itemDetails.match(Story10Items)
        ) {
          await iDontKnow.click();
          if (itemDetails === "Story 10, Item 5") {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 5, Presentation");
          }
        } else if (
          itemDetails.match(Story5Items) ||
          itemDetails.match(Story6Items) ||
          itemDetails.match(Story7Items)
        ) {
          if (isCorrectScenario) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(
          /Block C to Block D Forward flow When RS is 13 in Block C and all (correct|incorrect) in Block D/i
        )
      ) {
        const Story8Items = /^(Story 8), Item ([1-4])\b/;
        const Story9Items = /^(Story 9), Item ([1-4])\b/;
        const Story10Items = /^(Story 10), Item ([1-5])\b/; //Block C

        const Story11Items = /^(Story 11), Item ([1-5])\b/;
        const Story12Items = /^(Story 12), Item ([1-3])\b/;
        const Story13Items = /^(Story 13), Item ([1-5])\b/; //Block D

        const isCorrectScenario = typeOfTest.match(
          /Block C to Block D Forward flow When RS is 13 in Block C and all correct in Block D/i
        );

        if (
          itemDetails.match(Story8Items) ||
          itemDetails.match(Story9Items) ||
          itemDetails.match(Story10Items)
        ) {
          await correctlocator.click();
          if (itemDetails === "Story 10, Item 5") {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 11, Presentation");
          }
        } else if (
          itemDetails.match(Story11Items) ||
          itemDetails.match(Story12Items) ||
          itemDetails.match(Story13Items)
        ) {
          if (isCorrectScenario) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(
          /Block D to Block C routing flow When RS is 0 in Block D and all (correct|incorrect) in Block C/i
        )
      ) {
        const Story8Items = /^(Story 8), Item ([1-4])\b/;
        const Story9Items = /^(Story 9), Item ([1-4])\b/;
        const Story10Items = /^(Story 10), Item ([1-5])\b/; //Block C

        const Story11Items = /^(Story 11), Item ([1-5])\b/;
        const Story12Items = /^(Story 12), Item ([1-3])\b/;
        const Story13Items = /^(Story 13), Item ([1-5])\b/; //Block D

        const isCorrectScenario = typeOfTest.match(
          /Block D to Block C routing flow When RS is 0 in Block D and all correct in Block C/i
        );

        if (
          itemDetails.match(Story11Items) ||
          itemDetails.match(Story12Items) ||
          itemDetails.match(Story13Items)
        ) {
          await iDontKnow.click();
          if (itemDetails === "Story 13, Item 5") {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 8, Presentation");
          }
        } else if (
          itemDetails.match(Story8Items) ||
          itemDetails.match(Story9Items) ||
          itemDetails.match(Story10Items)
        ) {
          if (isCorrectScenario) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
        }
      } else if (
        typeOfTest.match(
          /Block D to Block E Forward flow When RS is 13 in Block D and all (correct|incorrect) in Block E/i
        )
      ) {
        const Story11Items = /^(Story 11), Item ([1-5])\b/;
        const Story12Items = /^(Story 12), Item ([1-3])\b/;
        const Story13Items = /^(Story 13), Item ([1-5])\b/; //Block D

        const Story14Items = /^(Story 14), Item ([1-5])\b/;
        const Story15Items = /^(Story 15), Item ([1-5])\b/; //Block E

        const isCorrectScenario = typeOfTest.match(
          /Block D to Block E Forward flow When RS is 13 in Block D and all correct in Block E/i
        );

        if (
          itemDetails.match(Story11Items) ||
          itemDetails.match(Story12Items) ||
          itemDetails.match(Story13Items)
        ) {
          await correctlocator.click();
          if (itemDetails === "Story 13, Item 5") {
            await expect
              .soft(this.nextText)
              .toHaveText("Story 14, Presentation");
          }
        } else if (
          itemDetails.match(Story14Items) ||
          itemDetails.match(Story15Items)
        ) {
          if (isCorrectScenario) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
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
