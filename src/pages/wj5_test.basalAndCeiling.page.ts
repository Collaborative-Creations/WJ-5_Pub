import {
  test,
  expect,
  Page,
  Locator,
  ElementHandle,
} from "../base/basePageFixtures";
import Utils from "../utils/utils";

export default class wj5TestBasalAndCeilingPage {
  private readonly page;
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
  private readonly basalIndicator: Locator;
  private readonly ceilingIndicator: Locator;
  private readonly flagIcon: Locator;
  private readonly IDK: Locator;
  private readonly launchTestAndResolveButton: Locator;
  private readonly reviewInfoPopUp: Locator;

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
    this.videoPlayButton = this.page.locator("//div[@class='play-circle']");
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

    this.basalIndicator = this.page.locator('//div[text()="Basal"]');
    this.ceilingIndicator = this.page.locator('//div[text()="Ceiling"]');
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.launchTestAndResolveButton = this.page.locator(
      '//button[text()="Launch Test and Resolve"]',
    );
    this.reviewInfoPopUp = this.page.locator(".session-intro");
  }

  async getRawScoredDisplayed(): Promise<number> {
    const val = await this.rawScoreDisplayed.textContent();

    console.log(`The Raw Score is = ${val}`);
    return Number(val.split(" ")[1]);
  }

  async clickOnVideoPlayButton() {
    await this.page.waitForTimeout(2000);
    while (await this.videoPlayButton.isVisible()) {
      await this.page.waitForTimeout(1500);
      if (await this.page.locator(".video-time").isVisible()) {
        break;
      }
      await this.videoPlayButton.click();
    }
  }

  async assertWithScreenShots() {
    await expect.soft(this.itemDetails).toHaveScreenshot();
    await expect.soft(this.basalIndicator).toHaveScreenshot();
    await expect.soft(this.ceilingIndicator).toHaveScreenshot();
    await expect.soft(this.rawScoreDisplayed).toHaveScreenshot();
  }

  async clickOneCorrect(
    correctlocator: Locator,
    itemDetails: string,
    flagged?: string,
  ) {
    try {
      await correctlocator.click();
      if (itemDetails.startsWith("Item ")) {
        const itemNumber: number = Number(itemDetails.split(" ")[1]);

        this.rawScore = this.rawScore + 1;

        await this.assertWithScreenShots();

        this.scoreTrail.set(itemDetails, "1");

        if (flagged) {
          await this.flagIcon.click();
        }
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickOneIncorrect(
    incorrectlocator: Locator,
    itemDetails: string,
    flagged?: string,
  ) {
    try {
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
      }
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickCorrectOption(correctlocator: Locator, itemDetails: string) {
    try {
      await correctlocator.click();
      if (itemDetails.startsWith("Item ")) {
        this.scoreTrail.set(itemDetails, "1");
      }
      await this.assertWithScreenShots();
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async clickInCorrectOption(incorrectlocator: Locator, itemDetails: string) {
    try {
      await incorrectlocator.click();

      if (itemDetails.startsWith("Item ")) {
        this.scoreTrail.set(itemDetails, "0");
      }
      await this.assertWithScreenShots();
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async shakeMouse() {
    await this.page.mouse.move(100, 100);
  }

  async completeTheBaselAndCeilingTestingForTheTakenTests(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;

    const lastItemNumber = await this.page
      .locator(".items-container div span.item-text")
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
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        // await this.plainNextButtonOrEndButton.click();
        await this.assertWithScreenShots();
      } else if (itemDetails.startsWith("Sample")) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (stemForm.match(/OVSYN.W5PA/i)) {
        // ssp1,1_C,5_NC,b/c

        if (correctCount < 1) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 5) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/OVANT.W5PA/i)) {
        // ssp2,1_C,1_NC,(REV LOGIC START) , 5_C , 5_NC , b/c
        if (correctCount < 1) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 1) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        } else if (correctCount < 1 + 5) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 1 + 5) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/GIWHER.W5PA/i)) {
        //ssp(last), all-3_C  ,3_NC,b/c
        if (correctCount < 9) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 3) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/GIWHAT.W5PA/i)) {
        //ssp1,all_NC,b/c
        if (inCorrectCount < 4) {
          await this.clickOneIncorrect(iDontKnow, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/VRBANL.W5PA/i)) {
        //ssp(last), All_C,b/c
        if (correctCount < 20) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        }
      } else if (stemForm.match(/PICVOC.W5PA/i)) {
        //ssp2 , all_NC,b/c (reverse logic)
        if (inCorrectCount < 6) {
          await this.clickOneIncorrect(iDontKnow, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/VRBATN.W5PA/i)) {
        // ssp(MAX), 1_C,all_NC,b/c

        if (correctCount < 1) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < itemNumber) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/NWDREP.W5PA/i)) {
        // ssp2,1_C,1_NC,(REV LOGIC START) , all_C, b/c

        if (correctCount < 1) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 1) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        } else if (inCorrectCount < 1 + itemNumber) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/SNDREV.W5PA/i)) {
        //ssp2,5_C,5_NC,b/c
        if (correctCount < 5) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 5) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/ORLCMP.W5PA/i)) {
        //ssp2, 5_C ,4_NC,1_C,5_NC,b/c
        if (correctCount < 5) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 4) {
          await this.clickOneIncorrect(iDontKnow, itemDetails);
          inCorrectCount++;
        } else if (correctCount < 6) {
          //clicks one correct response as the correctcount already reached 4 at the beginning
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < 9) {
          //clicks five incorrect responses as the incorrectcount already reached 3 at the beginning
          await this.clickOneIncorrect(iDontKnow, itemDetails);
          inCorrectCount++;
        }
      } else if (stemForm.match(/MPRBID.W5PA/i)) {
        // ssp3,5_C,item10 change resp to NC,all Correct , b/c

        if (correctCount < 5) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (correctCount == 5) {
          // change the response of 10
          await this.page
            .locator('//span[@class="item-text" and text()="Item 10"]')
            .click();
          await this.shakeMouse();
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        } else if (correctCount < 1 + itemNumber) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
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

  async completeTheBaselAndCeilingTestingForTheHybridTests(
    typeOfTest: string,
    stemForm: string,
    BbyC: number,
    flag: string,
  ): Promise<Map<string, string>> {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;

    const isBlocksPresent: Locator = await this.page.locator(
      '//button[contains(@class,"block-button")]',
    );

    if (isBlocksPresent) {
      await isBlocksPresent.last().click();
    }

    const lastItemNumber = await this.page
      .locator(".items-container div span.item-text")
      .last()
      .textContent();

    const itemNumber: number = await lastItemNumber.split(" ")[1];
    console.log(`the last item number is = ${itemNumber}`);

    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);

      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const correctlocator: Locator = await this.correctLocator();
      const incorrectlocator: Locator = await this.inCorrectLocator();
      const iDontKnow: Locator = this.IDK;

      if (itemDetails.startsWith("Introduction")) {
        // await this.plainNextButtonOrEndButton.click();
        await this.assertWithScreenShots();
      } else if (itemDetails.startsWith("Sample")) {
        await this.clickCorrectOption(correctlocator, itemDetails);
      } else if (stemForm.match(/LWIDNT.W5PA/i)) {
        // ssp4,5_C,All_NC,b/c , group a & B corect
        if (correctCount < 5) {
          await this.clickOneCorrect(correctlocator, itemDetails);
          correctCount++;
        } else if (inCorrectCount < itemNumber) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        } else {
          throw new Error(
            `The ${stemForm} didnt match with any of the correct or InCorrect logics provided`,
          );
        }
      } else if (stemForm.match(/WRDATK.W5PA/i)) {
        // ssp5,All_NC,b/c , group a & B NC
        if (inCorrectCount < itemNumber) {
          await this.clickOneIncorrect(incorrectlocator, itemDetails);
          inCorrectCount++;
        } else {
          throw new Error(
            `The ${stemForm} didnt match with any of the correct or InCorrect logics provided`,
          );
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

  async correctLocator(): Promise<Locator> {
    return this.corectOptionButton.first();
  }

  async inCorrectLocator(): Promise<Locator> {
    return this.incorrectOptionButton.first();
  }

  async getItemNumber(stemForm?: string): Promise<number> {
    if (stemForm && stemForm.match(/PSGCMP.W5PA/i)) {
      const blockClass: Locator = await this.page.locator(
        '//button[contains(@class,"block-button")]/parent::div',
      );
      const isBlocksPresent: Locator = await this.page.locator(
        '//button[contains(@class,"block-button")]',
      );
      if (
        (await blockClass.last().getAttribute("class")).includes(
          "expanded-block",
        )
      ) {
      } else if (isBlocksPresent) {
        await isBlocksPresent.last().click();
        await this.shakeMouse();
      } else {
        throw new Error(`Seems like the Block is either expaned or closed`);
      }
    }

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

    const itemNumber: number = await this.getItemNumber(stemForm);
    this.scoreTrail.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreTrail.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(3000);
      const itemDetails = await this.getItemDetails();
      console.log(itemDetails);
      const iDontKnow: Locator = this.IDK;
      if (itemDetails.startsWith("Introduction")) {
        // await this.plainNextButtonOrEndButton.click();
        await this.assertWithScreenShots();
      } else if (itemDetails.startsWith("Sample")) {
        await this.clickCorrectOption(await this.correctLocator(), itemDetails);
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
          await this.clickOneIncorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        }
      } else if (stemForm.match(/PSGCMP.W5PA/i)) {
        // last ssp (Above Average Adult) , 5NC , 5th flag , item 8 block c
        if (inCorrectCount < 4) {
          await this.clickOneIncorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        } else if (inCorrectCount < 5) {
          await this.clickOneIncorrect(
            await this.inCorrectLocator(),
            itemDetails,
            "flag",
          );
          inCorrectCount++;
        } else if (inCorrectCount < itemNumber) {
          await this.clickOneIncorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        } else {
          throw new Error(
            `The ${stemForm} didnt match with any of the correct or InCorrect logics provided`,
          );
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

  async isCloseNoteIconVisable(): Promise<boolean> {
    return await this.closeNotesIcon.isVisible();
  }

  async isReviewInfoPopupVisable(): Promise<boolean> {
    return await this.reviewInfoPopUp.isVisible();
  }

  async answerTheReviewFlagItems(stemForm: string) {
    let correctCount: number = 0;
    let inCorrectCount: number = 0;

    await this.reviewFlag.click();
    await this.reviewFlaggesItemsButton.click();
    let itemNumber: number = await this.getItemNumber();
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const itemDetails = await this.getItemDetails();
      console.log(itemDetails);

      const closeNoteIcon: boolean = await this.closeNotesIcon.isVisible();
      const reviewInfoPopUp: boolean = await this.reviewInfoPopUp.isVisible();

      if (stemForm.match(/PSGCMP.W5PA/i)) {
        if (await this.isCloseNoteIconVisable()) {
          await this.closeNotesIcon.click();
        } else if (await this.isReviewInfoPopupVisable()) {
          await this.launchTestAndResolveButton.click();
        }
        if (inCorrectCount < 1) {
          await this.clickOneIncorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
          if (await this.isCloseNoteIconVisable()) {
            await this.closeNotesIcon.click();
          }
          await this.clickOneCorrect(await this.correctLocator(), itemDetails);
          correctCount++;
        } else if (correctCount < itemNumber) {
          // console.log(`The item number after review  = ${itemNumber}`);
          await this.clickOneCorrect(await this.correctLocator(), itemDetails);
          correctCount++;
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
      } else if (stemForm.match(/NWDREP.W5PA/i)) {
        if (closeNoteIcon) {
          await this.closeNotesIcon.click();
        } else if (reviewInfoPopUp) {
          await this.launchTestAndResolveButton.click();
        }
        if (correctCount < 1) {
          await this.clickOneCorrect(await this.correctLocator(), itemDetails);
          correctCount++;
          await this.clickOneIncorrect(
            await this.inCorrectLocator(),
            itemDetails,
          );
          inCorrectCount++;
        } else if (inCorrectCount < itemNumber) {
          await this.clickOneIncorrect(
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
