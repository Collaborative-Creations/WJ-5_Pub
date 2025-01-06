import {
  test,
  expect,
  Page,
  Locator,
  ElementHandle,
} from "../base/basePageFixtures";
import Utils from "../utils/utils";

export default class wj5TestContentValidationPage {
  private readonly page;
  private examineepage;

  private utils: Utils;
  private rawScore: number;
  private itemName: number;
  private itemNumber: number;

  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreTrail: Map<string, string>;
  private contribTaskStems: string[];

  private readonly reviewFlag: Locator;
  private readonly reviewFlaggesItemsButton: Locator;
  private readonly closeNotesIcon: Locator;
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly videoPlayButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
  private readonly itemDetails: Locator;
  private readonly rawScoreDisplayed: Locator;
  private readonly webRtcIndicator: Locator;
  private readonly videoCompletedPlayingIcon: Locator;
  private readonly flagIcon: Locator;
  private readonly IDK: Locator;
  private readonly launchTestAndResolveButton: Locator;
  private readonly reviewInfoPopUp: Locator;
  private readonly sideNavLock: Locator;

  private readonly timerIcon: Locator;
  private readonly nextAndEndTestButton: Locator;
  private readonly startPracticeOrStartTestButton: Locator;
  private readonly activateTabletControlButton: Locator;
  private readonly doneOrNextButton: Locator;
  private readonly doneButton: Locator;
  private readonly AllCorrect: Locator;

  constructor(page: Page) {
    this.page = page;
    this.utils = new Utils(this.page);
    this.rawScore = 0;
    this.itemName;
    this.itemNumber = 1;

    this.itemMap = new Map();
    this.scoreTrail = new Map();
    this.contribTaskStems = new Array();

    this.reviewFlag = this.page.locator(
      '//button[@class="link-button"] //b[text()="Review"]',
    );

    this.reviewFlaggesItemsButton = this.page.locator(
      '//button[text()="Review Flagged Items"]',
    );
    this.closeNotesIcon = this.page.locator(".plain-button.close-btn");
    this.videoPlayButton = this.page.locator(".play-circle");
    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button",
    );
    this.corectOptionButton = this.page.locator(
      "//div[@class='select-group correct']//button",
    );
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button",
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();

    this.rawScoreDisplayed = this.page.locator(".raw-score");

    this.flagIcon = this.page.locator(".itemscore-wrapper .svg-icon");

    this.webRtcIndicator = this.page.locator(
      "//button[@class='plain-button RtcStatusIcon_mcs_rtcStatus']",
    );
    this.videoCompletedPlayingIcon = this.page.locator(".item-wrapper>svg");
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.launchTestAndResolveButton = this.page.locator(
      '//button[text()="Launch Test and Resolve"]',
    );
    this.reviewInfoPopUp = this.page.locator(".session-intro");
    this.sideNavLock = this.page.locator(".side-nav-locked-text");

    this.timerIcon = this.page.locator("//div[@class='time-surround']");
    this.nextAndEndTestButton = this.page.locator(
      "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
    );
    this.startPracticeOrStartTestButton = this.page.locator(
      ".plain-button.blue-button",
    );
    this.activateTabletControlButton = this.page.locator(
      "//button[@class='plain-button examinee-cursor-button']",
    );
    this.doneOrNextButton = this.page.locator(".plain-button.nav-button");
    this.doneButton = this.page.locator(
      "//button[@class='plain-button blue-button']",
    );
    this.AllCorrect = this.page.locator("//button[text()='All Correct']");
  }

  async getRawScoredDisplayed(): Promise<number> {
    const val = await this.rawScoreDisplayed.textContent();

    console.log(`The Raw Score is = ${val}`);
    return Number(val.split(" ")[1]);
  }

  async clickOnVideoPlay() {
    await this.videoPlayButton.waitFor({ state: "visible", timeout: 3000 });
    await this.assertWithScreenShots();
    await this.videoPlayButton.click();
    await this.videoCompletedPlayingIcon.waitFor({
      state: "visible",
      timeout: 1.7 * 60 * 1000,
    });
  }

  async assertWithScreenShots() {
    await expect
      .soft(this.page)
      .toHaveScreenshot({ mask: [this.webRtcIndicator] });
    await expect.soft(this.examineepage).toHaveScreenshot();
  }

  async assertWithScreenShotsForTimerTests() {
    await expect
      .soft(this.page)
      .toHaveScreenshot({ mask: [this.webRtcIndicator, this.timerIcon] });
    await expect.soft(this.examineepage).toHaveScreenshot();
  }

  async clickOneCorrect(
    correctlocator: Locator,
    itemDetails: string,
    flagged?: string,
  ) {
    try {
      await this.assertWithScreenShots();
      await correctlocator.click();
      if (itemDetails.startsWith("Item ")) {
        const itemNumber: number = Number(itemDetails.split(" ")[1]);
        this.rawScore = this.rawScore + 1;
        await this.assertWithScreenShots();
        this.scoreTrail.set(itemDetails, "1");
        if (flagged) {
          await this.flagIcon.click();
        }
      } else if (itemDetails.includes("Trial")) {
        await this.sideNavLock.waitFor({
          state: "detached",
          timeout: 1 * 30 * 1000,
        });
        await this.assertWithScreenShots();
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickOneInCorrect(
    incorrectlocator: Locator,
    itemDetails: string,
    flagged?: string,
  ) {
    try {
      await this.assertWithScreenShots();
      await incorrectlocator.click();
      if (itemDetails.startsWith("Item ")) {
        const itemNumber: number = Number(itemDetails.split(" ")[1]);
        this.rawScore = this.rawScore + 0;
        const rawScoreDisplayed: number = await this.getRawScoredDisplayed();
        await this.assertWithScreenShots();
        this.scoreTrail.set(itemDetails, "0");
        if (flagged) {
          await this.flagIcon.click();
        }
      } else if (itemDetails.includes("Trial")) {
        await this.sideNavLock.waitFor({
          state: "detached",
          timeout: 1 * 30 * 1000,
        });
        await this.assertWithScreenShots();
      }
    } catch (error) {
      console.error(`Not able to click on the InCorrect Options ${error}`);
    }
  }

  async completeTheContentValidationForTakenTests(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;

    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const testNames: string[] = [
        "OVSYN.W5PA",
        "OVANT.W5PA",
        "GIWHER.W5PA",
        "GIWHAT.W5PA",
        "APPROB.W5PA",
        "CALC.W5PA",
        "NWDREP.W5PA",
        "NUMSER.W5PA",
        "VRBANL.W5PA",
        "MPRBID.W5PA",
        "PICVOC.W5PA",
        "SNDREV.W5PA",
        "ORLCMP.W5PA",
        "SPELL.W5PA",
        "SNDBLN.W5PA",
        "SNDSUB.W5PA",
        "NUMREV.W5PA",
        "MEMWRD.W5PA",
        "ACDVOC.W5PA",
        "SPAREL.W5PA",
        "VRBATN.W5PA",
        "ORLSMP.W5PA",
      ];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        await this.assertWithScreenShots();
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (testNames.includes(stemForm)) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
        correctCount++;
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

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForANLSYNTests(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;

    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const testNames: string[] = ["ANLSYN.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        if (!itemDetails.startsWith("Introduction 4"))
          await this.clickOnVideoPlay();
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (/Sample.*Trial 1/.test(itemDetails)) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (/Sample.*Trial 2/.test(itemDetails)) {
        await this.clickOneCorrect(await this.inCorrectLocator(), itemDetails);
      } else if (testNames.includes(stemForm)) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
        correctCount++;
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

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async correctLocator(): Promise<Locator> {
    return this.corectOptionButton.first();
  }

  async inCorrectLocator(): Promise<Locator> {
    return this.incorrectOptionButton.first();
  }

  async completeTheContentValidationForWRDGFLTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;
    let flagValue: boolean = true;
    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.nextAndEndTestButton.isVisible()) {
      const testNames: string[] = ["WRDGFL.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;
      const practiceAndTestItemsElements = await this.page.locator(
        "//div[contains(@class,'options WRDGFL')]//button",
      );
      const practiceElementsIndexes: number[] = [0, 3, 5, 6, 8, 11, 12, 13];
      const sets: number[][] = [
        [
          0, 2, 4, 5, 10, 11, 12, 15, 16, 19, 22, 23, 24, 26, 28, 31, 32, 33,
          36, 37,
        ],
        [
          1, 3, 4, 7, 8, 9, 12, 14, 16, 19, 20, 23, 25, 26, 28, 30, 33, 35, 37,
          38,
        ],
        [
          0, 2, 6, 7, 10, 11, 12, 13, 17, 18, 20, 22, 24, 25, 29, 30, 33, 34,
          36, 37,
        ],
        [
          0, 3, 4, 6, 8, 11, 13, 14, 17, 19, 21, 22, 24, 26, 29, 30, 34, 35, 37,
          38,
        ],
        [
          0, 1, 4, 7, 8, 11, 12, 14, 16, 18, 21, 23, 25, 27, 30, 31, 32, 33, 36,
          37,
        ],
        [
          0, 3, 4, 6, 8, 11, 13, 14, 16, 19, 21, 23, 25, 26, 30, 31, 34, 35, 36,
          37,
        ],
        [
          0, 2, 4, 5, 8, 11, 12, 13, 17, 18, 21, 22, 26, 27, 28, 30, 34, 35, 36,
          37,
        ],
        [
          1, 3, 4, 5, 8, 11, 12, 14, 18, 19, 20, 22, 24, 27, 28, 30, 34, 35, 36,
          37,
        ],
        [
          0, 1, 6, 7, 8, 11, 12, 15, 18, 19, 21, 22, 25, 27, 30, 31, 33, 34, 38,
          39,
        ],
      ];

      if (itemDetails.startsWith("Introduction")) {
        await this.assertWithScreenShots();
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (itemDetails.includes("Practice Exercise")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();

        for (const index of practiceElementsIndexes) {
          const element = practiceAndTestItemsElements.nth(index);
          await element.click();
        }
        await this.assertWithScreenShotsForTimerTests();
      } else if (itemDetails.includes("Test Items")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();
        this.activateTabletControlButton.click();
        for (const set of sets) {
          for (const num of set) {
            const element = practiceAndTestItemsElements.nth(num);
            await element.click();
          }

          await this.assertWithScreenShotsForTimerTests();
          await this.doneOrNextButton.click();
          await this.assertWithScreenShotsForTimerTests();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      if (itemDetails === "Practice Exercise") {
        await this.doneOrNextButton.click();
      } else {
        await this.nextAndEndTestButton.click();
      }

      if ((await this.nextAndEndTestButton.textContent()) === "End Test") {
        break;
      }
    }

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForSRDGFLTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;
    let flagValue: boolean = true;
    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.nextAndEndTestButton.isVisible()) {
      const testNames: string[] = ["SRDGFL.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;
      const practiceAndTestItemsElements = await this.page.locator(
        "//div[contains(@class,'options ')]//button",
      );
      const practiceElementsIndexes: number[] = [1, 2, 4, 7];
      const sets: number[][] = [
        [0, 2, 4, 7, 8, 11, 12, 14, 16, 18],
        [1, 2, 4, 7, 9, 11, 13, 15, 16, 19],
        [1, 2, 5, 6, 9, 10, 13, 14, 16, 19],
        [1, 3, 4, 7, 8, 10, 13, 15, 17, 18],
        [0, 3, 5, 6, 8, 10, 12, 14, 17, 18],
        [1, 3, 4, 7, 9, 10, 13, 15, 17, 19],
        [1, 2, 4, 7, 9, 11, 13, 14, 17, 18],
        [0, 2, 5, 7, 8, 10, 13, 14, 16, 18],
        [1, 2, 4, 7, 8, 11, 13, 14, 16, 19],
        [1, 3, 5, 6, 9, 11, 13, 14, 16, 18],
        [0, 3, 5, 6, 9, 11, 12, 14, 16, 19],
        [0, 2, 4, 7, 9, 11, 13, 14, 16, 18],
      ];

      if (itemDetails.startsWith("Introduction")) {
        await this.assertWithScreenShots();
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (itemDetails.includes("Practice Exercise")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();

        for (const index of practiceElementsIndexes) {
          const element = practiceAndTestItemsElements.nth(index);
          await element.click();
        }
        await this.assertWithScreenShotsForTimerTests();
      } else if (itemDetails.includes("Test Items")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();
        this.activateTabletControlButton.click();
        for (const set of sets) {
          for (const num of set) {
            const element = practiceAndTestItemsElements.nth(num);
            await element.click();
          }

          await this.assertWithScreenShotsForTimerTests();
          await this.doneOrNextButton.click();
          await this.assertWithScreenShotsForTimerTests();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      if (itemDetails === "Practice Exercise") {
        await this.doneOrNextButton.click();
      } else {
        await this.nextAndEndTestButton.click();
      }

      if ((await this.nextAndEndTestButton.textContent()) === "End Test") {
        break;
      }
    }

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForNUMPATTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;
    let flagValue: boolean = true;
    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.nextAndEndTestButton.isVisible()) {
      const testNames: string[] = ["NUMPAT.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;
      const practiceAndTestItemsElements = await this.page.locator(
        "//div[contains(@class,'options NUMPAT')]//button",
      );
      const practiceElementsIndexes: number[] = [
        2, 4, 5, 8, 11, 12, 16, 18, 23, 24, 25, 29,
      ];
      const sets: number[][] = [
        [
          1, 2, 9, 10, 12, 14, 19, 22, 24, 29, 31, 34, 36, 40, 45, 46, 48, 53,
          56, 58,
        ],
        [
          1, 4, 6, 11, 15, 16, 19, 21, 24, 28, 32, 35, 36, 37, 43, 45, 49, 52,
          56, 59,
        ],
        [
          0, 3, 9, 10, 13, 17, 18, 20, 26, 28, 31, 33, 36, 41, 44, 47, 51, 52,
          54, 58,
        ],
        [
          4, 5, 9, 11, 14, 17, 19, 22, 26, 27, 30, 33, 37, 41, 44, 46, 48, 50,
          55, 58,
        ],
        [
          2, 5, 9, 10, 12, 17, 19, 20, 28, 29, 30, 33, 37, 40, 42, 45, 50, 53,
          55, 57,
        ],
        [
          0, 3, 7, 11, 13, 15, 18, 22, 24, 26, 31, 33, 38, 41, 43, 45, 50, 52,
          56, 59,
        ],
        [
          0, 3, 8, 10, 12, 17, 19, 22, 24, 27, 31, 34, 38, 41, 44, 46, 48, 51,
          55, 59,
        ],
        [
          2, 4, 7, 10, 12, 15, 19, 23, 26, 28, 31, 33, 37, 41, 44, 46, 49, 51,
          54, 57,
        ],
        [
          1, 3, 6, 10, 12, 14, 20, 23, 26, 29, 30, 33, 36, 41, 42, 45, 49, 52,
          56, 59,
        ],
      ];

      if (itemDetails.startsWith("Introduction")) {
        await this.assertWithScreenShots();
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (itemDetails.includes("Practice Exercise")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();

        for (const index of practiceElementsIndexes) {
          const element = practiceAndTestItemsElements.nth(index);
          await element.click();
        }
        await this.assertWithScreenShotsForTimerTests();
      } else if (itemDetails.includes("Test Items")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();
        this.activateTabletControlButton.click();
        for (const set of sets) {
          for (const num of set) {
            const element = practiceAndTestItemsElements.nth(num);
            await element.click();
          }

          await this.assertWithScreenShotsForTimerTests();
          await this.doneOrNextButton.click();
          await this.assertWithScreenShotsForTimerTests();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      if (itemDetails === "Practice Exercise") {
        await this.doneOrNextButton.click();
      } else {
        await this.nextAndEndTestButton.click();
      }

      if ((await this.nextAndEndTestButton.textContent()) === "End Test") {
        break;
      }
    }

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForLETPATTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;
    let flagValue: boolean = true;
    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.nextAndEndTestButton.isVisible()) {
      const testNames: string[] = ["LETPAT.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;
      const practiceAndTestItemsElements = await this.page.locator(
        "//div[contains(@class,'options LETPAT')]//button",
      );
      const practiceElementsIndexes: number[] = [
        1, 2, 3, 4, 6, 8, 10, 11, 14, 16, 18, 21,
      ];
      const sets: number[][] = [
        [
          0, 2, 3, 4, 7, 8, 10, 11, 12, 14, 17, 18, 20, 23, 26, 28, 29, 31, 34,
          38,
        ],
        [
          0, 2, 7, 11, 13, 16, 21, 23, 24, 27, 32, 35, 38, 40, 43, 46, 48, 50,
          55, 58,
        ],
        [
          0, 5, 6, 10, 14, 16, 19, 22, 24, 26, 31, 34, 38, 39, 45, 47, 48, 51,
          55, 59,
        ],
        [
          2, 5, 6, 11, 15, 17, 20, 22, 26, 29, 31, 34, 37, 40, 42, 47, 48, 50,
          55, 57,
        ],
        [
          0, 4, 8, 10, 16, 17, 18, 23, 25, 28, 30, 33, 38, 41, 43, 46, 48, 53,
          55, 58,
        ],
        [
          0, 4, 7, 9, 14, 15, 20, 23, 25, 27, 32, 34, 40, 41, 42, 45, 50, 52,
          56, 58,
        ],
        [
          0, 5, 7, 11, 14, 16, 20, 23, 26, 27, 32, 35, 38, 41, 43, 46, 49, 51,
          55, 59,
        ],
        [
          2, 3, 6, 9, 12, 16, 21, 23, 25, 28, 31, 34, 38, 40, 45, 47, 48, 49,
          55, 57,
        ],
        [
          2, 5, 6, 9, 12, 17, 20, 23, 26, 28, 31, 34, 37, 40, 45, 47, 50, 53,
          54, 57,
        ],
        [
          1, 3, 6, 10, 13, 14, 19, 23, 24, 27, 31, 35, 36, 39, 45, 47, 49, 51,
          54, 56,
        ],
      ];

      if (itemDetails.startsWith("Introduction")) {
        await this.assertWithScreenShots();
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (itemDetails.includes("Practice Exercise")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();

        for (const index of practiceElementsIndexes) {
          const element = practiceAndTestItemsElements.nth(index);
          await element.click();
        }
        await this.assertWithScreenShotsForTimerTests();
      } else if (itemDetails.includes("Test Items")) {
        await this.assertWithScreenShotsForTimerTests();
        await this.startPracticeOrStartTestButton.click();
        await this.assertWithScreenShotsForTimerTests();
        this.activateTabletControlButton.click();
        for (const set of sets) {
          for (const num of set) {
            const element = practiceAndTestItemsElements.nth(num);
            await element.click();
          }

          await this.assertWithScreenShotsForTimerTests();
          await this.doneOrNextButton.click();
          await this.assertWithScreenShotsForTimerTests();
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      if (itemDetails === "Practice Exercise") {
        await this.doneOrNextButton.click();
      } else {
        await this.nextAndEndTestButton.click();
      }

      if ((await this.nextAndEndTestButton.textContent()) === "End Test") {
        break;
      }
    }

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForBLKROTTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;

    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const testNames: string[] = ["BLKROT.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        if (/^Introduction (1|2|4)/.test(itemDetails))
          await this.clickOnVideoPlay();
      } else if (/^Introduction (3|5)/.test(itemDetails)) {
        await this.page.waitForTimeout(1000);
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (/Sample.*Trial 1/.test(itemDetails)) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
        await this.page.waitForTimeout(1000);
      } else if (/Sample.*Trial 2/.test(itemDetails)) {
        await this.clickOneCorrect(await this.inCorrectLocator(), itemDetails);
      } else if (testNames.includes(stemForm)) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
        correctCount++;
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

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForSPLSNDTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;

    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const testNames: string[] = ["SPLSND.W5PA"];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        await this.page.waitForTimeout(1000);
      } else if (itemDetails.includes("Trial 1")) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (itemDetails.includes("Trial 2")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (/Sample.*Trial 1/.test(itemDetails)) {
        await this.clickOneInCorrect(
          await this.inCorrectLocator(),
          itemDetails,
        );
      } else if (/Sample.*Trial 2/.test(itemDetails)) {
        await this.clickOneCorrect(await this.inCorrectLocator(), itemDetails);
      } else if (testNames.includes(stemForm)) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
        correctCount++;
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

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }

  async completeTheContentValidationForRPDPHOTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    this.examineepage = examineePage;

    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const testNames: string[] = ["RPDPHO.W5PA"];
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);

      if (itemDetails.startsWith("Sample")) {
        await this.doneButton.click();
        await this.assertWithScreenShots();
      } else if (itemDetails.startsWith("Introduction")) {
        await this.assertWithScreenShots();
      } else if (itemDetails.match(/^Item [1-7]/)) {
        await this.page.waitForTimeout(3000);
        await this.assertWithScreenShotsForTimerTests();
      } else if (itemDetails === "Item Set 8") {
        await this.page.waitForTimeout(3000);
        await this.assertWithScreenShotsForTimerTests();
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

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }
  async completeTheContentValidationForORLRDGTest(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
    examineePage,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    this.examineepage = examineePage;

    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const testNames: string[] = [
        "ORLRDG.W5PA",
        ];
      await this.page.waitForTimeout(1000);
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);


        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All Correct/i)) {
          if (SampleAndIntroductionAction) {
            if (["Introduction 1", "Introduction 2"].includes(itemDetails)) {
              await this.assertWithScreenShots();
            }

          } else if (itemDetails.match(/^Story ([1-6])\b/)) {
            await this.AllCorrect.click();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          }
        }else if(typeOfTest.match(/SampleItems/i)){
          if (["Introduction 2"].includes(itemDetails)) {
            await this.assertWithScreenShots();
            return;
          }
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

    console.log(`The Scores Trail = `, this.scoreTrail);

    return this.scoreTrail;
  }
  async getItemNumber(): Promise<number> {
    const lastItemNumber = await this.page
      .locator(".items-container div span.item-text")
      .last()
      .textContent();
    const itemNumber: number = await lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);
    return itemNumber;
  }

  async getItemDetails(): Promise<string> {
    const itemDetails: string = await this.itemDetails.textContent();
    return itemDetails;
  }

  async completeTheBaselAndCeilingTestingForTheTakenTestsUsingLeftNav(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<boolean> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    let reviewflagStatus: boolean;
    const lastItemNumber = await this.page
      .locator(".item-text")
      .last()
      .textContent();

    const itemNumber: number = await this.getItemNumber();

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);

      const itemDetails = await this.getItemDetails();
      console.log(itemDetails);

      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        // await this.plainNextButtonOrEndButton.click();
        await this.assertWithScreenShots();
      } else if (itemDetails.startsWith("Sample")) {
        await this.clickOneCorrect(await this.correctLocator(), itemDetails);
      } else if (stemForm.match(/NWDREP.W5PA/i)) {
        // SSP3 , 6_C {2nd correc t flag } , 6 NC , popUp , Revire > then C > NC , review items , conduct test , ALL C , b/c
        if (correctCount < 1) {
          await this.clickOneCorrect(await this.correctLocator(), itemDetails);
          correctCount++;
        } else if (correctCount < 2) {
          await this.clickOneCorrect(
            await this.correctLocator(),
            itemDetails,
            "flag",
          );
          correctCount++;
        } else if (correctCount < 6) {
          await this.clickOneCorrect(await this.correctLocator(), itemDetails);
          correctCount++;
        } else if (inCorrectCount < 6) {
          await this.clickOneInCorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      await this.plainNextButtonOrEndButton.click();

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        reviewflagStatus = await this.reviewFlag.isVisible();
        break;
      }
    }

    return reviewflagStatus;
  }

  async getRunTimeRawScore(): Promise<number> {
    const scoreValues: string[] = Array.from(this.scoreTrail.values());
    let sumOfItemScores: number = 0;
    let basalCredit: number = 0;
    let foo: boolean = true;

    for (let i of scoreValues) {
      if (i.match(/x/) && foo === true) {
        basalCredit++;
      } else if (i.match(/[01]/)) {
        sumOfItemScores += Number(i);
        foo = false;
      }
    }
    return sumOfItemScores + basalCredit;
  }

  async answerTheReviewFlagItems(stemForm: string) {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;
    let itemNumber: number = await this.getItemNumber();

    await this.reviewFlag.click();
    await this.reviewFlaggesItemsButton.click();

    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails = await this.getItemDetails();
      console.log(itemDetails);

      const closeNoteIcon: boolean = await this.closeNotesIcon.isVisible();
      const reviewInfoPopUp: boolean = await this.reviewInfoPopUp.isVisible();

      if (stemForm.match(/NWDREP.W5PA/i)) {
        if (closeNoteIcon) {
          await this.closeNotesIcon.click();
        } else if (reviewInfoPopUp) {
          await this.launchTestAndResolveButton.click();
        }
        if (correctCount < 1) {
          await this.clickOneCorrect(await this.correctLocator(), itemDetails);
          correctCount++;
          await this.clickOneInCorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        } else if (inCorrectCount < itemNumber) {
          await this.clickOneInCorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        } else {
          throw new Error(`Didnt match with any of the conditions provided`);
        }

        await this.plainNextButtonOrEndButton.click();

        if (
          ["End Test", "Review Item(s)"].includes(
            await this.plainNextButtonOrEndButton.textContent(),
          )
        ) {
          break;
        }
      } else {
        throw new Error(`Didnt match with any of the Test Stem provided`);
      }
    }
  }
}
