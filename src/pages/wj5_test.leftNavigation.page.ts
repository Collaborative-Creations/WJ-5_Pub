import {
    test,
    expect,
    Page,
    Locator,
    ElementHandle,
  } from "../base/basePageFixtures";
  import Utils from "../utils/utils";
  
  export default class wj5TestLeftNavigationPage {
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
    private readonly ceilingIndicator: Locator;
    private readonly flagIcon: Locator;
    private readonly IDK: Locator;
    private readonly launchTestAndResolveButton: Locator;
    private readonly reviewInfoPopUp: Locator;
    private readonly leftNavItems: Locator;
    private readonly leftNavExpandIcon: Locator;

    private readonly blockB: Locator;
    private readonly EndOfItems: Locator;
    private readonly ResolveBtn: Locator;
    private readonly ScoreEntryFields: Locator;
    private readonly ScoreLaterSubmit: Locator;
    private readonly lestBeginButton: Locator;
    private readonly ScoreLaterContinue: Locator;
    private readonly AC: Locator;
    private readonly NR: Locator;
    private readonly doneButton: Locator;
    private readonly closeButton: Locator;
    private readonly startPracticeOrStartTestButton: Locator;
    private readonly activateTabletControlButton: Locator;
    private readonly doneOrNextButton: Locator;
    private readonly nextAndEndTestButton: Locator;
    private readonly timerIcon: Locator;
    private readonly timeisup: Locator;
    private readonly swfmtfscorefields: Locator;
    private readonly EndTestCloseIcon: Locator;
    private readonly stopText: Locator;
    private readonly addButton: Locator;
    private readonly timeUpCloseBtn: Locator;
    private readonly parcmpdonebtn: Locator;

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
        '//button[@class="link-button"] //b[text()="Review"]'
      );

      this.reviewFlaggesItemsButton = this.page.locator(
        '//button[text()="Review Flagged Items"]'
      );
      this.closeNotesIcon = this.page.locator(".plain-button.close-btn");
      this.videoPlayButton = this.page.locator("//div[@class='play-circle']");
      this.plainNextButtonOrEndButton = this.page.locator(
        "button.plain-button.next-item-button, button.plain-button.nav-button"
      );
      this.corectOptionButton = this.page.locator(
        "//div[@class='select-group correct']//button"
      );
      this.incorrectOptionButton = this.page.locator(
        ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button"
      );
      this.itemDetails = this.page
        .locator(".introduction b.semibold, b")
        .first();

      this.rawScoreDisplayed = this.page.locator(".raw-score");

      this.flagIcon = this.page.locator(".itemscore-wrapper .svg-icon");

      this.webRtcIndicator = this.page.locator("//button[@class='plain-button RtcStatusIcon_mcs_rtcStatus']");
      this.ceilingIndicator = this.page.locator('//div[text()="Ceiling"]');
      this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
      this.launchTestAndResolveButton = this.page.locator(
        '//button[text()="Launch Test and Resolve"]'
      );
      this.reviewInfoPopUp = this.page.locator(".session-intro");
      this.leftNavItems = this.page.locator("//span[@class='item-text']");
      this.leftNavExpandIcon = this.page.locator(
        "(//div[@class='arrow-svg-container']//child::*)[2]"
      );

      this.blockB = this.page.locator("//span[text()='Items 5 - 16']");
      this.EndOfItems = this.page.locator("//div[text()='End of Items']");
      this.ResolveBtn = this.page.locator(
        "//button[@class='link-button']/b[text()='Resolve']",
      );
      this.ScoreEntryFields = this.page.locator("//input[@class='score-text']");
      this.ScoreLaterSubmit = this.page.locator("//button[text()='Submit']");
      this.lestBeginButton = this.page.locator("//button[text()='Letʼs Begin']");
  
      this.ScoreLaterContinue = this.page.locator(
        "//button[@class='blue-button-no-margin' or text()='Continue']",
      );
      this.AC = this.page.locator("//button[text()='All Correct']");
      this.NR = this.page.locator("//button[text()='No Response']");
      this.doneButton = this.page.locator(
        "//button[@class='plain-button blue-button']"
      );
      this.closeButton = this.page.locator("//button[@class='close-btn']");
      this.startPracticeOrStartTestButton = this.page.locator(
        ".plain-button.blue-button"
      );

      this.activateTabletControlButton = this.page.locator(
        "//button[@class='plain-button examinee-cursor-button']"
      );

      this.doneOrNextButton = this.page.locator(".plain-button.nav-button");

      this.nextAndEndTestButton = this.page.locator(
        "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]"
      );

      this.timerIcon = this.page.locator("//div[@class='time-surround']");
      this.timeisup = this.page.locator("//b[text()='Time is up.']");
      this.swfmtfscorefields = this.page.locator(
        "//input[@class='score-text']"
      );
      this.EndTestCloseIcon = this.page.locator("//button[@class='close-btn']");
      this.stopText = this.page.locator(
        "(//div[@class='intro-text']/child::*)[5]//b"
      );
      this.addButton = this.page.locator(
        "[class='plain-button blue-text-button correct-left']"
      );
      this.timeUpCloseBtn = this.page.locator("//button[text()='Close']");
      this.parcmpdonebtn = this.page.locator("//button[text()='Done']");

    }

    async getRawScoredDisplayed(): Promise<number> {
      const val = await this.rawScoreDisplayed.textContent();

      console.log(`The Raw Score is = ${val}`);
      return Number(val.split(" ")[1]);
    }

    async assertWithScreenShots() {
      await expect
        .soft(this.page)
        .toHaveScreenshot({ mask: [this.webRtcIndicator] });
    }

    async assertWithScreenShotsForTimerTests() {
      await expect
        .soft(this.page)
        .toHaveScreenshot({ mask: [this.webRtcIndicator, this.timerIcon] });
    }

    async correctLocator(): Promise<Locator> {
      return this.corectOptionButton.first();
    }

    async inCorrectLocator(): Promise<Locator> {
      return this.incorrectOptionButton.first();
    }

    async completeTheLeftNavValidationForTakenTests(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["OVSYN.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const itemArray: number[] = [6, 7, 8, 9, 10];
        const itemArray1: number[] = [11, 12, 13, 14, 15];
        if (typeOfTest.match(/basal and ceiling For SSP1/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 2")) {
            await this.leftNavItems.nth(3).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(4).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = itemArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([6-9]|10)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 6;
            const nthindex = itemArray1[indexToHover];
            await incorrectlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/left Nav For SSP2/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 2")) {
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(3).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(4).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Item 5")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 6")) {
            await incorrectlocator.click();
            await this.flagIcon.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(10).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(1).click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(11).hover();
            await this.assertWithScreenShots();
            await correctlocator.click();
            await this.assertWithScreenShots();
            await correctlocator.click();
            return;
          }
        } else if (typeOfTest.match(/left Nav For SSP3/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSNDDELTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        const ItemsArray: number[] = [
          4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 , 7, 8, 9, 10, 11, 
          12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 5 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 6 },
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Introduction 3": { navIndex: 4 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for SNDDEL SSP1/i)) {
          if (SampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 2", "Introduction 3"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-9]|[12]?[0-9]|3[0-2])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log("itemNumber:", itemNumber);
            console.log("indexToHover:", indexToHover);
            console.log("nthindex:", nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/SSP item check for SNDDEL SSP2/i)) {
          if (itemDetails === "Introduction 3") {
            await this.plainNextButtonOrEndButton.click();
            await correctlocator.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 5");
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for SNDDEL SSP3/i)
        ) {
          if (itemDetails === "Introduction 3") {
          } else if (itemDetails.match(/Sample Item B, Trial 1/i)) {
            await this.assertWithScreenShots();
            await correctlocator.click();
          } else if (itemDetails === "Item 17") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 18") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 19") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(7).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(8).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForGIWHATandGIWHERTests(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["OVSYN.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const itemArray: number[] = [1, 2, 3, 4];
        const itemArray1: number[] = [5, 6, 7, 8];
        const itemArray2: number[] = [8, 9, 10, 11];
        const itemArray3: number[] = [12, 13, 14, 15];

        const GIWHERSSP1Array: number[] = [0, 1, 2, 3];
        const GIWHERSSP1Array2: number[] = [4, 5, 6, 7];

        if (typeOfTest.match(/basal and ceiling For SSP1/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-4])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = itemArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([5-8])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 5;
            const nthindex = itemArray1[indexToHover];
            await iDontKnow.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
            if (itemDetails === "Item 8") {
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            }
          }
        } else if (
          typeOfTest.match(/left Nav when items are flagged for SSP2/i)
        ) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(3).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Item 4")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 5")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(4).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/left Nav when expanded and collapsed for SSP3/i)
        ) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/basal and ceiling For SSP4/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(7).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item (8|9|10|11)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 8;
            const nthindex = itemArray2[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item (1[2-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 12;
            const nthindex = itemArray3[indexToHover];
            await iDontKnow.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
            if (itemDetails === "Item 15") {
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            }
          }
        } else if (
          typeOfTest.match(
            /left Nav when items are flagged,expanded and collapsed for SSP5/i
          )
        ) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(10).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Item 11")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 12")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(11).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(12).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/bbyc For SSP1 For GIWHER/i)) {
          if (itemDetails.match(/^Item ([1-4])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = GIWHERSSP1Array[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([5-8])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 5;
            const nthindex = GIWHERSSP1Array2[indexToHover];
            await iDontKnow.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
            if (itemDetails === "Item 8") {
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            }
          }
        } else if (typeOfTest.match(/Flagged Items for GIWHER SSP2/i)) {
          if (itemDetails.startsWith("Item 6")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 7")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for GIWHER SSP3/i)
        ) {
          if (itemDetails.startsWith("Item 12")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 13")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(11).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(12).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }

    async  completeTheLeftNavValidationForSNDREVTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
         3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
        
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              ["Introduction 1"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item ([1-9]|[1]?[0-9]|20)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (
          typeOfTest.match(
            /Basal and Ceiling For SSP2/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          }else if(itemDetails.match(/Sample/i)){
            await correctlocator.click();    
          } else if (itemDetails.startsWith("Item 5")) {
            await this.assertWithScreenShots(); 
            await correctlocator.click();    
          } else if (itemDetails.match(/^Item [6-9]/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item 1[0-4]/)) {
            if (itemDetails === "Item 14"){
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click(); 
            }
            
          }
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP2/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          }else if(itemDetails.match(/Sample/i)){
            await correctlocator.click();    
          } else if (itemDetails === "Item 5") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 6") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 1") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(7).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(8).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


  async completeTheLeftNavValidationForPICVOCTest(
      typeOfTest: string,
  
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
      const lastItemNumber = await this.page
        .locator(".item-text")
        .last()
        .textContent();
  
      const itemNumber: number = lastItemNumber.split(" ")[1];
      console.log(`the last item number is = ${itemNumber}`);
  
      this.scoreTrail.set(` `, "^");
  
      console.log(`Type Of test ${typeOfTest} \n`);
      while (await this.plainNextButtonOrEndButton.isVisible()) {
        const testNames: string[] = [
          "PICVOC.W5PA"
  
        ];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        if (typeOfTest.match(/basal and ceiling for SSP1/i)) {
  
          if (itemDetails.match(/^Item ([1-9]|[1-3][0-9]|4[0-2])\b/)) {
            await correctlocator.click();
          }
          else if (itemDetails.match(/^Item (4[3-7])\b/)) {
            if (itemDetails.match(/^Item 46\b/)) {
              await iDontKnow.click();
            }
            else {
              await incorrectlocator.click();
            }
          }
  
          const itemNumber: number = Number(itemDetails.split(" ")[1]);
          const indexToHover = itemNumber - 1;
          await this.leftNavItems.nth(indexToHover).hover();
          await this.assertWithScreenShots();
        
        } else if (typeOfTest.match(/left Nav when items are flagged for SSP2/i)) {
          if (itemDetails.startsWith("Item 10")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 11")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.page.waitForTimeout(300);
            await this.leftNavItems.nth(9).hover();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(10).hover();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            return;
          }
          } else if (typeOfTest.match(/left Nav when items are flagged,expanded and collapsed for SSP3/i)) {
  
            if (itemDetails.startsWith("Item 14")) {
              await correctlocator.click();
              await this.flagIcon.click();
            } else if (itemDetails.startsWith("Item 15")) {
              await incorrectlocator.click();
              await this.flagIcon.click();
              await this.plainNextButtonOrEndButton.click();
              await this.page.waitForTimeout(300);
              await this.leftNavItems.nth(13).hover();
              await this.page.waitForTimeout(300);
              await this.assertWithScreenShots();
              await this.leftNavItems.nth(14).hover();
              await this.page.waitForTimeout(300);
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.page.waitForTimeout(300);
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              return;
            }
            } else if (typeOfTest.match(/left Nav when items are flagged,expanded and collapsed for SSP4/i)) {
              if (itemDetails.startsWith("Item 16")) {
                await correctlocator.click();
                await this.flagIcon.click();
              } else if (itemDetails.startsWith("Item 17")) {
                await incorrectlocator.click();
                await this.flagIcon.click();
                await this.plainNextButtonOrEndButton.click();
                await this.leftNavItems.nth(15).hover();
                await this.page.waitForTimeout(300);
                await this.assertWithScreenShots();
                await this.leftNavItems.nth(16).hover();
                await this.page.waitForTimeout(300);
                await this.assertWithScreenShots();
                await this.EndOfItems.scrollIntoViewIfNeeded();
                await this.page.waitForTimeout(300);
                await this.assertWithScreenShots();
                await this.leftNavExpandIcon.click();
                await this.assertWithScreenShots();
                await this.leftNavExpandIcon.click();
                await this.assertWithScreenShots();
                return;
              }
              } else if (typeOfTest.match(/left Nav when items are flagged,expanded and collapsed for SSP5/i)) {
                if (itemDetails.startsWith("Item 18")) {
                  await correctlocator.click();
                  await this.flagIcon.click();
              } else if (itemDetails.startsWith("Item 19")) {
                  await incorrectlocator.click();
                  await this.flagIcon.click();
                  await this.plainNextButtonOrEndButton.click();
                  await this.leftNavItems.nth(17).hover();
                  await this.page.waitForTimeout(300);
                  await this.assertWithScreenShots();
                  await this.leftNavItems.nth(18).hover();
                  await this.page.waitForTimeout(300);
                  await this.assertWithScreenShots();
                  await this.EndOfItems.scrollIntoViewIfNeeded();
                  await this.page.waitForTimeout(300);
                  await this.assertWithScreenShots();
                  await this.leftNavExpandIcon.click();
                  await this.assertWithScreenShots();
                  await this.leftNavExpandIcon.click();
                  await this.assertWithScreenShots();
                  return;
              }
              } else if (typeOfTest.match(/left Nav when items are flagged,expanded and collapsed for SSP6/i)) {
              if (itemDetails.startsWith("Item 22")) {
                await correctlocator.click();
                await this.flagIcon.click();
                } else if (itemDetails.startsWith("Item 23")) {
                  await incorrectlocator.click();
                  await this.flagIcon.click();
                  await this.plainNextButtonOrEndButton.click();
                  await this.page.waitForTimeout(300);
                  await this.leftNavItems.nth(21).hover();
                  await this.page.waitForTimeout(300);
                  await this.assertWithScreenShots();
                  await this.leftNavItems.nth(22).hover();
                  await this.page.waitForTimeout(300);
                  await this.assertWithScreenShots();
                  await this.EndOfItems.scrollIntoViewIfNeeded();
                  await this.page.waitForTimeout(300);
                  await this.assertWithScreenShots();
                  await this.leftNavExpandIcon.click();
                  await this.assertWithScreenShots();
                  await this.leftNavExpandIcon.click();
                  await this.assertWithScreenShots();
                  return;
                }
              } else if (typeOfTest.match(/left Nav when items are flagged,expanded and collapsed for SSP7/i)) {
                  if (itemDetails.startsWith("Item 28")) {
                    await correctlocator.click();
                    await this.flagIcon.click();
                  } else if (itemDetails.startsWith("Item 29")) {
                    await incorrectlocator.click();
                    await this.flagIcon.click();
                    await this.plainNextButtonOrEndButton.click();
                    await this.page.waitForTimeout(300);
                    await this.leftNavItems.nth(27).hover();
                    await this.page.waitForTimeout(300);
                    await this.assertWithScreenShots();
                    await this.leftNavItems.nth(28).hover();
                    await this.page.waitForTimeout(300);
                    await this.assertWithScreenShots();
                    await this.EndOfItems.scrollIntoViewIfNeeded();
                    await this.page.waitForTimeout(300);
                    await this.assertWithScreenShots();
                    await this.leftNavExpandIcon.click();
                    await this.assertWithScreenShots();
                    await this.leftNavExpandIcon.click();
                    await this.assertWithScreenShots();
                    return;
  
                    }
                  }
                     
                  else {
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
  
                console.log(`The Scores Trail = `, this.scoreTrail);
  
                return this.scoreTrail;
              
    }


    async completeTheLeftNavValidationForAPPROBTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["APPROB.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const ItemsArray: number[] = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        ];

        if (typeOfTest.match(/All correct scenario for APPROB SSP1/i)) {
          if (itemDetails.match(/^Item (4[0-8]|[123]?[0-9]|[1-9])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for APPROB SSP2/i)) {
          if (itemDetails.match(/^Item ([5-9])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[0-4])\b/)) {
            if (itemDetails === "Item 14") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for APPROB SSP3/i)) {
          if (itemDetails === "Item 10") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for APPROB SSP4/i)) {
          if (itemDetails === "Item 14") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for APPROB SSP5/i)) {
          if (itemDetails === "Item 16") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for APPROB SSP6/i)) {
          if (itemDetails === "Item 18") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for APPROB SSP7/i)) {
          if (itemDetails === "Item 20") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for APPROB SSP8/i)
        ) {
          if (itemDetails === "Item 22") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 23") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 18") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(21).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(22).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }


async  completeTheLeftNavValidationForCALCTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        const testNames: string[] = ["ORLCMP.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
         4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Introduction 3": { navIndex: 10 },
          "Sample Item A": { locator: correctlocator, navIndex: 1 },
          "Sample Item B": { locator: correctlocator, navIndex: 2 },
        
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              ["Introduction 1", "Introduction 2"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item ([1-9]|[1234]?[0-9]|5[0-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (
          typeOfTest.match(
            /Basal and Ceiling For SSP2/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 7")) {
            await this.assertWithScreenShots(); 
            await correctlocator.click();    
          } else if (itemDetails.match(/^Item [8-9]|1[0-1]/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item 1[2-6]/)) {
            if (itemDetails === "Item 16"){
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click(); 
            }
            
          }
        }  else if (
          typeOfTest.match(
            /SSP Item check For SSP3/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 11")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        }  else if (
          typeOfTest.match(
            /SSP Item check For SSP4/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          }  else if (itemDetails.startsWith("Item 15")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /SSP Item check For SSP5/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 19")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /SSP Item check For SSP6/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 23")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP7/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Item 27")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 28")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(31).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(32).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }   


async completeTheLeftNavValidationForMPRBIDTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["MPRBID.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const ItemsArray: number[] = [
          4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
          44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 2 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 3 },
          "Sample Item C, Trial 1": { locator: incorrectlocator, navIndex: 14 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 15 },
          "Sample Item D, Trial 1": { locator: incorrectlocator, navIndex: 16 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 17 },
        };

        const SampleAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for MPRBID SSP1/i)) {
          if (SampleAction) {
            await SampleAction.locator.click();
            await this.leftNavItems.nth(SampleAction.navIndex).hover();
            await this.assertWithScreenShots();
          } else if (
            itemDetails.match(/^Item (4[0-7]|3[0-9]|[12]?[0-9]|[1-9])\b/)
          ) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for MPRBID SSP2/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item ([5-9])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[0-4])\b/)) {
            if (itemDetails === "Item 14") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for MPRBID SSP3/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 8") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for MPRBID SSP4/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 11") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for MPRBID SSP5/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 15") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for MPRBID SSP6/i)
        ) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 22") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 23") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 18") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(29).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(30).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }


async completeTheLeftNavValidationForNUMSERTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["NUMSER.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
          42, 43, 44, 45,
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 2 },
          "Introduction 2": { navIndex: 12 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 13 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 14 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              ["Introduction 1", "Introduction 2"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item ([1-9]|[123]?[0-9]|40)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/Basal and Ceiling For SSP2/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 6")) {
            await this.assertWithScreenShots();
            await correctlocator.click();
          } else if (itemDetails.match(/^Item [7-9]/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item 1[0-3]/)) {
            if (itemDetails === "Item 13") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP Item check For SSP3/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 10")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP Item check For SSP4/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 12")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP5/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 14")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 15")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(19).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(20).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }



async completeTheLeftNavValidationForNWDREPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["NWDREP.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const ItemsArray: number[] = [
          6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 5 },
          "Introduction 3": { navIndex: 10 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for NWDREP SSP1/i)) {
          if (SampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 2", "Introduction 3"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item (3[0-3]|[12]?[0-9]|[1-9])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for NWDREP SSP2/i)) {
          if (itemDetails.match(/Introduction 1|Introduction 3/i)) {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item ([5-9]|10)\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[1-6])\b/)) {
            if (itemDetails === "Item 16") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for NWDREP SSP3/i)
        ) {
          if (itemDetails.match(/Introduction 1|Introduction 3/i)) {
          } else if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 10") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 11") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 5") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(16).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(17).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }


async completeTheLeftNavValidationForORLCMPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        const testNames: string[] = ["ORLCMP.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
          28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 4 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 2 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 3 },
          "Sample Item C, Trial 1": { locator: incorrectlocator, navIndex: 5 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 6 },
          "Sample Item D, Trial 1": { locator: incorrectlocator, navIndex: 7 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 8 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {       
          if (SampleAndIntroductionAction) {
            if (
              ["Introduction 1"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item ([1-9]|[12]?[0-9]|3[0-3])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (
          typeOfTest.match(
            /Bbyc For ORLCMP SSP2/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {          
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 1") {
            await this.assertWithScreenShots();
            await correctlocator.click();     
          } else if (itemDetails.match(/^Item [2-5]/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item [6-9]|10/)) {
            if (itemDetails === "Item 10"){
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click(); 
            }
            
          }
        }  else if (
          typeOfTest.match(
            /SSP Item check For ORLCMP SSP3/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 5")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        }  else if (
          typeOfTest.match(
            /SSP Item check For ORLCMP SSP4/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 8")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /SSP Item check For ORLCMP SSP5/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 12")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For ORLCMP SSP6/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.includes(" Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes(" Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 18")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 19")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(26).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(27).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }



async completeTheLeftNavValidationForVRBANLTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["VRBANL.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const ItemsArray: number[] = [
          4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 2 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 3 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 12 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 13 },
        };

        const SampleAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for VRBANL SSP1/i)) {
          if (SampleAction) {
            await SampleAction.locator.click();
            await this.leftNavItems.nth(SampleAction.navIndex).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item (3[0-5]|[12]?[0-9]|[1-9])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for VRBANL SSP2/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item ([4-8])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (9|1[0-3])\b/)) {
            if (itemDetails === "Item 13") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for VRBANL SSP3/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 9") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for VRBANL SSP4/i)) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 12") {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for VRBANL SSP5/i)
        ) {
          if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 16") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 17") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 12") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(21).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(22).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }


async completeTheLeftNavValidationForVRBATNTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["VRBATN.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const ItemsArray: number[] = [
          6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
          44,
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Introduction 3": { navIndex: 12 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 4 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 5 },
          "Sample Item C, Trial 1": { locator: incorrectlocator, navIndex: 13 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 14 },
        };

        const SampleAndIntroductionAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for VRBATN SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              ["Introduction 1", "Introduction 2", "Introduction 3"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item (3[0-6]|[12]?[0-9]|[1-9])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for VRBATN SSP2/i)) {
          if (itemDetails.match(/Introduction 3/i)) {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await incorrectlocator.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[0-1]|[7-9])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[2-6])\b/)) {
            if (itemDetails === "Item 16") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }

    async  completeTheLeftNavValidationForSPELLTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        const testNames: string[] = ["SPELL.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
         1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 7 },
        
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              ["Introduction 1", "Introduction 2"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item ([1-9]|[12345]?[0-9]|60)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (
          typeOfTest.match(
            /Basal and Ceiling For SSP2/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 7")) {
            await this.assertWithScreenShots(); 
            await correctlocator.click();    
          } else if (itemDetails.match(/^Item [8-9]|1[0-1]/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item 1[2-6]/)) {
            if (itemDetails === "Item 16"){
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click(); 
            }
            
          }
        }  else if (
          typeOfTest.match(
            /SSP Item check For SSP3/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 15")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        }  else if (
          typeOfTest.match(
            /SSP Item check For SSP4/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          }  else if (itemDetails.startsWith("Item 20")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /SSP Item check For SSP5/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 24")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /SSP Item check For SSP6/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 30")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /SSP Item check For SSP7/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
           
          } else if (itemDetails.startsWith("Item 33")) {
            await this.assertWithScreenShots();   
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots(); 
            return; 
          } 
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP8/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Item 43")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 44")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(44).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(45).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForPSGCMPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          0, 1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Introduction 1": { navIndex: 2 },
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for PSGCMP SSP1/i)) {
          if (SampleAndIntroAction) {
            if (
              ["Introduction 1"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-9]|[12]?[0-9]|3[0-8])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for PSGCMP SSP2/i)) {
          if (itemDetails.match(/Sample/i)) {
              await correctlocator.click();
          } else if (itemDetails.match(/Introduction 1/i)) {
          } else if (itemDetails.match(/^Item ([8-9]|1[0-3])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[4-8])\b/)) {
            if (itemDetails === "Item 18") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for PSGCMP SSP3/i)) {
          if (itemDetails === "Sample Item A, Trial 1") {
            await correctlocator.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 12");
            await this.assertWithScreenShots();
            return;
          }
        }else if (typeOfTest.match(/SSP item check for PSGCMP SSP4/i)) {
          if (itemDetails === "Sample Item A, Trial 1") {
            await correctlocator.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 15");
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for PSGCMP SSP5/i)) {
          if (itemDetails === "Sample Item A, Trial 1") {
            await correctlocator.click();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 18");
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for PSGCMP SSP6/i)
        ) {
          if (itemDetails.match(/Sample Item A, Trial 1/i)) {
            await correctlocator.click();
          } else if (itemDetails.match(/Introduction 1/i)) {
            await this.assertWithScreenShots();
          } else if (itemDetails === "Item 24") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 25") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 20") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(19).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(20).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForWRDATKTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
           3, 4, 5, 3, 4, 5, 6, 7, 8, 9, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
           27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
           54, 55, 56, 57, 58
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 4 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 5 },
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Introduction 3": { navIndex: 6 },
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for WRDATK SSP1/i)) {
          if (SampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 2", "Introduction 3"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-9]|[12345]?[0-9]|6[0-2])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for WRDATK SSP2/i)) {
          if (itemDetails.match(/Introduction 2/i)) {
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/Trial 1/i)) {
            await iDontKnow.click();
          } else if (itemDetails.match(/Trial 2/i)) {
            await correctlocator.click();
          } else if (itemDetails.match(/Introduction 3/i)) {
          } else if (itemDetails.match(/^Item (1[1-6])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[7-9]|2[0-2])\b/)) {
            if (itemDetails === "Item 22") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for WRDATK SSP3/i)) {
          if (itemDetails === "Introduction 2") {
            await this.plainNextButtonOrEndButton.click();
            await correctlocator.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 16");
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for WRDATK SSP4/i)) {
          if (itemDetails === "Introduction 2") {
            await this.plainNextButtonOrEndButton.click();
            await correctlocator.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 22");
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for WRDATK SSP5/i)) {
          if (itemDetails === "Introduction 2") {
            await this.plainNextButtonOrEndButton.click();
            await correctlocator.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Item 29");
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for WRDATK SSP6/i)) {
          if (itemDetails === "Introduction 2") {
          await this.plainNextButtonOrEndButton.click();
          await correctlocator.click();
          await this.assertWithScreenShots();
          await this.plainNextButtonOrEndButton.click();
          await this.assertWithScreenShots();
          await this.plainNextButtonOrEndButton.click();
          await expect.soft(this.itemDetails).toHaveText("Item 35");
          await this.assertWithScreenShots();
          return;
        }
      } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for WRDATK SSP7/i)
        ) {
          if (itemDetails.match(/Introduction 2 | Introduction 3/i)) {
          } else if (itemDetails.match(/Sample Item B, Trial 1/i)) {
            await this.assertWithScreenShots();
            await correctlocator.click();
          } else if (itemDetails === "Item 40") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 41") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 35") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(36).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(37).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForLWIDNTTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
          56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 1 },
          "Introduction 3": { navIndex: 2 },
          "Introduction 4": { navIndex: 3 },
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for LWIDNT SSP1/i)) {
          if (SampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 2", "Introduction 3", "Introduction 4"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-9]|[12345678]?[0-9])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for LWIDNT SSP2/i)) {
          if (itemDetails.match(/Introduction 4/i)) {
          } else if (itemDetails.match(/^Item (1[6-9]|2[0-1])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (2[2-7])\b/)) {
            if (itemDetails === "Item 27") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for LWIDNT SSP3/i)) {
          if (itemDetails === "Introduction 4") {
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for LWIDNT SSP4/i)) {
          if (itemDetails === "Introduction 4") {
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for LWIDNT SSP5/i)) {
          if (itemDetails === "Introduction 4") {
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            return;
          }
        }else if (
          typeOfTest.match(/Flagged,expanded and collapsed for LWIDNT SSP6/i)
        ) {
          if (itemDetails.match(/Introduction 4/i)) {
          } else if (itemDetails === "Item 60") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 61") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 55") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(48).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(49).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForBLKROTTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const videoPlayButton: Locator = await this.videoPlayButton;
        const ItemsArray: number[] = [
          7, 8, 9, 10, 11, 12, 13, 14, 15, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
          29
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 4 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 5 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 8 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 9 },
          "Introduction 1": { locator: videoPlayButton, navIndex: 0 },
          "Introduction 2": { locator: videoPlayButton, navIndex: 3 },
          "Introduction 3": { navIndex: 6 },
          "Introduction 4": { locator: videoPlayButton, navIndex: 7 },
          "Introduction 5": { navIndex: 10 },
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for BLKROT SSP1/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1", "Introduction 2", "Introduction 4"].includes(itemDetails)) {
                 await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
                 await this.assertWithScreenShots();
                 await SampleAndIntroAction.locator.click();
                 await this.plainNextButtonOrEndButton.waitFor({ state: "visible" }); 
            } else if(["Introduction 3", "Introduction 5"].includes(itemDetails)){
                 await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
                 await this.assertWithScreenShots();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
              await this.assertWithScreenShots();
            }
            
          } else if (itemDetails.match(/^Item ([1-9]|1[0-9]|2[0-8])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for BLKROT SSP2/i)) {
          if (itemDetails.match(/Introduction 4/i)) {
            await videoPlayButton.click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.match(/Sample/i)) {
            await correctlocator.click();
          } else if (itemDetails.match(/Introduction 5/i)) {
          } else if (itemDetails.match(/^Item (1[0-5])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[6-9]|2[0-1])\b/)) {
            if (itemDetails === "Item 21") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for BLKROT SSP2/i)
        ) {
          if (itemDetails === "Introduction 4") {
            await this.assertWithScreenShots();
            await videoPlayButton.click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if(itemDetails === "Introdcution 5"){
          } else if (itemDetails === "Item 10") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 11") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 12") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(11).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(12).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }
    async completeTheLeftNavValidationForSNDBLNTest(
      typeOfTest: string,
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        const testNames: string[] = ["SNDBLN.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const itemArray: number[] = [7, 8, 9, 10, 11];
        const itemArray1: number[] = [12, 13, 14, 15, 16];
        if (typeOfTest.match(/basal and ceiling For SSP1/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(1).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 2")) {
            await this.leftNavItems.nth(3).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(4).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 3")) {
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = itemArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([6-9]|10)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 6;
            const nthindex = itemArray1[indexToHover];
            await incorrectlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/left Nav when items are flagged for SSP2/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(1).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 2")) {
            await this.leftNavItems.nth(3).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(4).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 3")) {
            await this.leftNavItems.nth(6).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Item 4")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 5")) {
            await iDontKnow.click();
           await this.flagIcon.click();
           await this.plainNextButtonOrEndButton.click();
           await this.assertWithScreenShots();
           await this.leftNavItems.nth(10).hover();
           await this.page.waitForTimeout(1000);
           await this.assertWithScreenShots();
           await this.leftNavItems.nth(11).hover();
           await this.page.waitForTimeout(1000);
           await this.assertWithScreenShots();
           await this.EndOfItems.scrollIntoViewIfNeeded();
           await this.assertWithScreenShots();
           return;
          }
        } else if (typeOfTest.match(/left Nav When Items are Flagged,Expanded and collapsed For SSP3/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(1).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 2")) {
            await this.leftNavItems.nth(3).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(4).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 3")) {
            await this.leftNavItems.nth(6).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Item 8")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 9")) {
            await incorrectlocator.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.leftNavItems.nth(14).hover();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(15).hover();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
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
  
    async completeTheLeftNavValidationForSPLSNDTest(
      typeOfTest: string,
      
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
      
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
          "SPLSND.W5PA"
          
        ];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const blockAitemArray:number[] = [6,7,8,9,10];
        const blockBitemArray:number[] = [12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
        const blockCitemArray:number[] = [12,13,14,15,16];
  
      if(typeOfTest.match(/left Nav for All items for SSP1/i)){
        if (itemDetails.startsWith("Introduction 1")) {
          this.leftNavItems.nth(0).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Introduction 2")) {
          this.leftNavItems.nth(1).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
          await incorrectlocator.click();
          await this.leftNavItems.nth(2).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item A, Trial 2")) {
          await correctlocator.click();
          await this.leftNavItems.nth(3).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
          await incorrectlocator.click();
          await this.leftNavItems.nth(4).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item B, Trial 2")) {
          await correctlocator.click();
          await this.leftNavItems.nth(5).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.match(/^Item ([1-5])\b/)) {
          const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
          const indexToHover = itemNumber - 1;
          const nthindex=blockAitemArray[indexToHover]
          await correctlocator.click();
          await this.leftNavItems.nth(nthindex).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Introduction 3")) {
          await this.leftNavItems.nth(6).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item C, Trial 1")) {
          await incorrectlocator.click();
          await this.leftNavItems.nth(7).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item C, Trial 2")) {
          await correctlocator.click();
          await this.leftNavItems.nth(8).hover();
          await this.assertWithScreenShots();
       } else if (itemDetails.startsWith("Sample Item D, Trial 1")) {
          await incorrectlocator.click();
          await this.leftNavItems.nth(9).hover();
          await this.assertWithScreenShots();
       } else if (itemDetails.startsWith("Sample Item D, Trial 2")) {
          await correctlocator.click();
          await this.leftNavItems.nth(10).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Introduction 4")) {
          await this.leftNavItems.nth(11).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.match(/^Item ([6-9]|1[0-9]|2[0-3])\b/)) {
          const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
          const indexToHover = itemNumber - 6;
          const nthindex=blockBitemArray[indexToHover]
          await correctlocator.click();
          await this.leftNavItems.nth(nthindex).hover();
          await this.assertWithScreenShots();
        } else if (itemDetails.match(/^Item (2[4-8])\b/)) {
          const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
          const indexToHover = itemNumber - 24;
          const nthindex=blockCitemArray[indexToHover];
          await correctlocator.click();
          await this.leftNavItems.nth(nthindex).hover();
          await this.assertWithScreenShots();
        } 
      }else if(typeOfTest.match(/left Nav when items are flagged,expanded & collapsed for SSP2/i)){ 
        if (itemDetails.startsWith("Introduction 1")) {
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Introduction 3")) {
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item C, Trial 1")) {
          await incorrectlocator.click();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item C, Trial 2")) {
          await correctlocator.click();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item D, Trial 1")) {
          await incorrectlocator.click();
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Sample Item D, Trial 2")) {
          await correctlocator.click();
          await this.assertWithScreenShots();
        } else if(itemDetails.startsWith("Introduction 4")) {
          await this.assertWithScreenShots();
        } else if (itemDetails.startsWith("Item 6")) {
          await this.assertWithScreenShots();
          await correctlocator.click();
          await this.flagIcon.click();
        } else if (itemDetails.startsWith("Item 7")) {
          await incorrectlocator.click();
          await this.flagIcon.click();
          await this.plainNextButtonOrEndButton.click();
          await this.page.waitForTimeout(300);
          await this.leftNavItems.nth(12).hover();
          await this.page.waitForTimeout(300);
          await this.assertWithScreenShots();
          await this.leftNavItems.nth(13).hover(); 
          await this.page.waitForTimeout(300);
          await this.assertWithScreenShots();
          await correctlocator.click();
        } else if (itemDetails.match(/^Item (8|9|1[0-9]|2[0-7])\b/)) {
          await correctlocator.click();
        } else if (itemDetails.startsWith("Item 28")) {
          await correctlocator.click();
          await this.assertWithScreenShots();
          await this.leftNavExpandIcon.click();
          await this.assertWithScreenShots();
          await this.leftNavExpandIcon.click();
          await this.assertWithScreenShots();
         }
      
        }else {
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForSTYCMPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        const ItemsArrayBlockAB: number[][] = [
          [6, 7, 8],
          [10, 11],
          [13, 14],
          [16, 17, 18],
          [6, 7, 8],
          [10, 11, 12],
          [14, 15, 16],
        ];
  
        const ItemsArrayBlockBC: number[][] = [
          [6, 7, 8],
          [10, 11, 12],
          [14, 15, 16],
          [6, 7, 8, 9],
          [11, 12, 13, 14],
          [16, 17, 18, 19, 20],
        ];
  
        const ItemsArrayBlockCD: number[][] = [
          [6, 7, 8, 9],
          [11, 12, 13, 14],
          [16, 17, 18, 19, 20],
          [6, 7, 8, 9, 10],
          [12, 13, 14],
          [16, 17, 18, 19, 20],
        ];
  
        const ItemsArrayBlockDE: number[][] = [
          [6, 7, 8, 9, 10],
          [12, 13, 14],
          [16, 17, 18, 19, 20],
          [6, 7, 8, 9, 10],
          [12, 13, 14, 15, 16]
        ];
        const itemActions = {
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 2 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 3 },
          "Introduction 1": { navIndex: 4 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for STYCMP SSP1/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
            }
            await this.assertWithScreenShots();
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/STYCMP/i)
          ) {
            await this.page
              .locator("//button[@class='small-blue-button']")
              .click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.match(/^(Story [1-7]), Item ([1-3])\b/)) {
            const match = itemDetails.match(/^(Story ([1-7])), Item ([1-3])\b/);
            const storyIndex = parseInt(match[2], 10) - 1;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockAB.length) {
              const itemsToHover = ItemsArrayBlockAB[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (typeOfTest.match(/All correct scenario for STYCMP SSP2/i)) {
          if (itemDetails.includes("Introduction")) {
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/STYCMP/i)
          ) {
            await this.page
              .locator("//button[@class='small-blue-button']")
              .click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.match(/^(Story ([5-9]|1[0])), Item ([1-5])\b/)) {
            const match = itemDetails.match(
              /^(Story ([5-9]|1[0])), Item ([1-5])\b/
            );
            const storyIndex = parseInt(match[2], 10) - 5;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockBC.length) {
              const itemsToHover = ItemsArrayBlockBC[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        }else if (typeOfTest.match(/All correct scenario for STYCMP SSP3/i)) {
          if (itemDetails.includes("Introduction")) {
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/STYCMP/i)
          ) {
            await this.page
              .locator("//button[@class='small-blue-button']")
              .click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.match(/^(Story ([8-9]|1[0-3])), Item ([1-5])\b/)) {
            const match = itemDetails.match(
              /^(Story ([8-9]|1[0-3])), Item ([1-5])\b/
            );
            const storyIndex = parseInt(match[2], 10) - 8;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockCD.length) {
              const itemsToHover = ItemsArrayBlockCD[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (typeOfTest.match(/All correct scenario for STYCMP SSP4/i)) {
          if (itemDetails.includes("Introduction")) {
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/STYCMP/i)
          ) {
            await this.page
              .locator("//button[@class='small-blue-button']")
              .click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails.match(/^(Story (1[1-5])), Item ([1-5])\b/)) {
            const match = itemDetails.match(
              /^(Story (1[1-5])), Item ([1-5])\b/
            );
            const storyIndex = parseInt(match[2], 10) - 11;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockDE.length) {
              const itemsToHover = ItemsArrayBlockDE[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for STYCMP SSP4/i)
        ) {
            if (itemDetails.match(/Introduction 1/i)) {
            await this.assertWithScreenShots();
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/STYCMP/i)
          ) {
            await this.page
              .locator("//button[@class='small-blue-button']")
              .click();
            await this.plainNextButtonOrEndButton.waitFor({ state: "visible" });
          } else if (itemDetails === "Story 11, Item 1") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 11, Item 2") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 11, Item 3") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(7).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForSTYRECTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const locatorWrapper: Locator = this.page.locator("//button[@class='select-option']");
        const elements = await locatorWrapper.count();
        
        const elementCounts = {
          "Story 1" : 4,
          "Story 2" : 6,
          "Story 3" : 7,
          "Story 4" : 7,
          "Story 5" : 8,
          "Story 6" : 8,
          "Story 7" : 14,
          "Story 8" : 17,
          "Story 9" : 18,
          "Story 10": 19,
        }
  
        const Story1to6Array : number[] = [1, 2, 3, 4, 5, 6];
        const Story7to10Array : number[] = [7, 8, 9, 10];
  
  
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for STYREC SSP1/i)) {
          if (SampleAndIntroAction) {
            if (
              ["Introduction 1"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
            }
            await this.assertWithScreenShots();
          } else if (elementCounts[itemDetails]!== undefined) {
            const maxClicks = elementCounts[itemDetails];
            for(let i = 0; i < Math.min(maxClicks, elements); i++){
              await locatorWrapper.nth(i).click();
            }
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = Story1to6Array[indexToHover];
            await this.page.waitForTimeout(1000);
            console.log("itemNumber:", itemNumber);
            console.log("indexToHover:", indexToHover);
            console.log("nthindex:", nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/All correct scenario for STYREC SSP4/i)) {
          if (itemDetails.match(/Introduction 1/i)) {
            await this.assertWithScreenShots();
          } else if (elementCounts[itemDetails]!== undefined) {
            const maxClicks = elementCounts[itemDetails];
            for(let i = 0; i < Math.min(maxClicks, elements); i++){
              await locatorWrapper.nth(i).click();
            }
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 7;
            const nthindex = Story7to10Array[indexToHover];
            await this.page.waitForTimeout(1000);
            console.log("itemNumber:", itemNumber);
            console.log("indexToHover:", indexToHover);
            console.log("nthindex:", nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/SSP item check for STYREC SSP2/i)) {
          if (itemDetails === "Introduction 1") {
            await this.plainNextButtonOrEndButton.click();
            await expect.soft(this.itemDetails).toHaveText("Story 3");
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/Flagged,expanded and collapsed for STYREC SSP3/i)) {
          if (itemDetails === "Introduction 1") {
          } else if (itemDetails === "Story 5"){
            await locatorWrapper.nth(1).click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 6"){
            await iDontKnow.click();
            await this.flagIcon.click();
          }  else if (itemDetails === "Story 3") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForWRTSMPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const BlockAArray: number[] = [2, 3, 4, 5, 6];
        const BlockBCArray: number[] = [3, 4, 5, 6, 7];
        const BlockDEArray: number[] = [3, 4, 5, 6, 7, 3, 4, 5, 6, 7];

        
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 1 },
          "Introduction 3": { navIndex: 2 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (["Introduction 1", "Introduction 2", "Introduction 3"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = BlockAArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log("itemNumber:", itemNumber);
            console.log("indexToHover:", indexToHover);
            console.log("nthindex:", nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([6-9]|10)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if (itemNumber === 10) {
              const indexToHover = itemNumber - 6;
              const nthindex = BlockBCArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await this.plainNextButtonOrEndButton.click();
              await this.ResolveBtn.click();
              await this.ScoreEntryFields.nth(0).fill("10"); 
              await this.ScoreLaterSubmit.click();
              await this.ScoreLaterContinue.click();
              await this.lestBeginButton.click();
            } else {          
              const indexToHover = itemNumber - 6;
              const nthindex = BlockBCArray[indexToHover];
              await this.page.waitForTimeout(1000);
              console.log("itemNumber:", itemNumber);
              console.log("indexToHover:", indexToHover);
              console.log("nthindex:", nthindex);
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
            }
          } else if (itemDetails.match(/^Item (1[1-5])\b/)){
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if (itemNumber === 15) {
              const indexToHover = itemNumber - 11;
              const nthindex = BlockBCArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await this.plainNextButtonOrEndButton.click();
              await this.ResolveBtn.click();
              await this.ScoreEntryFields.nth(1).fill("10"); 
              await this.ScoreLaterSubmit.click();
              await this.ScoreLaterContinue.click();
              return;
            }else{
              const indexToHover = itemNumber - 11;
              const nthindex = BlockBCArray[indexToHover];
              await this.page.waitForTimeout(1000);
              console.log("itemNumber:", itemNumber);
              console.log("indexToHover:", indexToHover);
              console.log("nthindex:", nthindex);
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
            }
          }
        }else if (typeOfTest.match(/All correct For SSP4/i)) {
          if(["Introduction 1"].includes(itemDetails)){
            
          }else if(["Introduction 3"].includes(itemDetails)){
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item (1[6-9]|2[0-5])\b/)){
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if (itemNumber === 25) {
              const indexToHover = itemNumber - 16;
              const nthindex = BlockDEArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await this.plainNextButtonOrEndButton.click();
              await this.ResolveBtn.click();
              await this.ScoreEntryFields.nth(2).fill("10");
              await this.ScoreEntryFields.nth(3).fill("10"); 
              await this.ScoreLaterSubmit.click();
              await this.ScoreLaterContinue.click();
              return;
            }else{
              const indexToHover = itemNumber - 16;
              const nthindex = BlockDEArray[indexToHover];
              await this.page.waitForTimeout(1000);
              console.log("itemNumber:", itemNumber);
              console.log("indexToHover:", indexToHover);
              console.log("nthindex:", nthindex);
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
            }
          }
        }else if (typeOfTest.match(/SSP Item check for SSP 2/i)) {
          if(["Introduction 1"].includes(itemDetails)){
            
          }else if(["Introduction 3"].includes(itemDetails)){
            await this.assertWithScreenShots();
          }else if(itemDetails === 'Item 6'){
            await this.assertWithScreenShots();
            return;
          }
        }else if(typeOfTest.match(/left Nav When Items are Flagged,Expanded and collapsed For SSP3/)){
          if(["Introduction 1"].includes(itemDetails)){

          }else if(["Introduction 3"].includes(itemDetails)){
            await this.assertWithScreenShots();
          }else if(itemDetails === 'Item 11'){
            await this.flagIcon.click();
          }else if (itemDetails === "Item 12") {
            await this.flagIcon.click();
          }else if (itemDetails === "Item 13") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(3).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(4).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        }else {
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForORLRDGTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const AllCorrect: Locator = this.AC;
        const NoResponse: Locator = this.NR;
        const ItemsArray: number[] = [1, 2, 4, 5, 6, 7];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (["Introduction 1", "Introduction 2"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Story ([1-6])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await AllCorrect.click();
            await this.page.waitForTimeout(1000);
            console.log("itemNumber:", itemNumber);
            console.log("indexToHover:", indexToHover);
            console.log("nthindex:", nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP2/i
          )
        ) {
          if (itemDetails.startsWith("Introduction 2")) {
            await this.assertWithScreenShots();
          } else if (itemDetails === "Story 3") {
            await AllCorrect.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 4") {
            await this.page
              .locator("(//div[@class='option-wrapper']/button)[1]")
              .click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 5") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(4).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForORLSMPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        const ItemsArray: number[][] = [
          [4, 5, 6, 7],
          [7, 8, 9, 10, 11],
          [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Introduction 3": { navIndex: 4 },
          "Introduction 4": { navIndex: 7 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 5 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 6 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 8 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 9 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              [
                "Introduction 1",
                "Introduction 2",
                "Introduction 3",
                "Introduction 4",
              ].includes(itemDetails)
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^(Block [A-C]), Item ([1-9]|1[0-2])\b/)) {
            const match = itemDetails.match(
              /^(Block ([A-C])), Item ([1-9]|1[0-2])\b/
            );
            const blockIndex = match[2].charCodeAt(0) - "A".charCodeAt(0);
            const itemIndex = parseInt(match[3], 10) - 1;
  
            await correctlocator.click();
  
            if (blockIndex < ItemsArray.length) {
              const itemsToHover = ItemsArray[blockIndex];
              console.log(itemsToHover);
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Block ${match[2]}`
                );
              }
            } else {
              console.error(`Block index ${blockIndex} out of bounds`);
            }
          }
        } else if (typeOfTest.match(/SSP Item Check ORLSMP for SSP2/i)) {
          if (itemDetails === "Introduction 3") {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await correctlocator.click();
          } else if (itemDetails === "Block B, Item 1") {
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP3/i
          )
        ) {
          if (itemDetails.startsWith("Introduction 4")) {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await correctlocator.click();
          } else if (itemDetails === "Block C, Item 1") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Block C, Item 2") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Block C, Item 3") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(10).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(11).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSNDSUBTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        const testNames: string[] = ["SNDSUB.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        const ItemsArray: number[] = [
          5, 6, 7, 8, 9, 10, 11, 12, 10, 11, 12, 13, 14, 15, 16, 17, 10, 11, 12,
          13, 14, 15, 16, 17, 18, 19, 20, 21,
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 5 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 6 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 7 },
          "Sample Item D, Trial 1": { locator: iDontKnow, navIndex: 8 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 9 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for SNDSUB SSP1/i)) {
         if (SampleAndIntroAction){
          if (
            [
              "Introduction 1",
              "Introduction 2",
            ].includes(itemDetails)
          ) {
            await this.leftNavItems
              .nth(SampleAndIntroAction.navIndex)
              .hover();
          } else {
            await SampleAndIntroAction.locator.click();
            await this.leftNavItems
              .nth(SampleAndIntroAction.navIndex)
              .hover();
          }
          await this.assertWithScreenShots();
         } else if (itemDetails.match(/^Item ([1-9]|1[0-9]|2[0-8])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for SNDSUB SSP2/i)
        ) {
          if (itemDetails.includes("Introduction 2")) {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 9") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 10") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 11") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(10).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(11).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForNUMREVTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        const ItemsArray: number[] = [
          4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Introduction 4": { navIndex: 12 },
          "Introduction 6": { navIndex: 21 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 10 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 11 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 19 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 20 },
          "Sample Item D, Trial 1": { locator: iDontKnow, navIndex: 22 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 23 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for NUMREV SSP1/i)) {
         if (SampleAndIntroAction){
          if (
            [
              "Introduction 1",
              "Introduction 2",
              "Introduction 4",
              "Introduction 6",
            ].includes(itemDetails)
          ) {
            await this.leftNavItems
              .nth(SampleAndIntroAction.navIndex)
              .hover();
          } else {
            await SampleAndIntroAction.locator.click();
            await this.leftNavItems
              .nth(SampleAndIntroAction.navIndex)
              .hover();
          }
          await this.assertWithScreenShots();
         } else if (itemDetails.match(/^Item ([1-9]|[12]?[0-9]|3[0-4])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        }else if (typeOfTest.match(/Basal & Ceiling Scenario for NUMREV SSP2/i)) {
          if(itemDetails === "Introduction 3"){
            await this.assertWithScreenShots();
          }else if(itemDetails.match(/Trial 1/i)){
            await correctlocator.click();
          }else if(itemDetails === "Introduction 4"){
          }else if (itemDetails.match(/^Item ([6-9]|10)\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[1-5])\b/)) {
            if (itemDetails === "Item 15") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for NUMREV SSP3/i)
        ) {
          if (itemDetails.includes("Introduction 5")) {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails.includes("Introduction 6")) {
          } else if (itemDetails === "Item 11") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 12") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 7") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(24).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(25).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForSPARELTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
  
        const ItemsArray: number[] = [
          5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 
          35, 36, 37, 38, 39, 40, 41, 42, 43,
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 15 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 16 },
          "Sample Item D, Trial 1": { locator: iDontKnow, navIndex: 17 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 18 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for SPAREL SSP1/i)) {
         if (SampleAndIntroAction){
          if (
            [
              "Introduction 1"
            ].includes(itemDetails)
          ) {
            await this.leftNavItems
              .nth(SampleAndIntroAction.navIndex)
              .hover();
          } else {
            await SampleAndIntroAction.locator.click();
            await this.leftNavItems
              .nth(SampleAndIntroAction.navIndex)
              .hover();
          }
          await this.assertWithScreenShots();
         } else if (itemDetails.match(/^Item ([1-9]|[12]?[0-9]|3[0-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/Basal & Ceiling Scenario for SPAREL SSP2/i)) {
          if(itemDetails === "Introduction 1"){
            await this.assertWithScreenShots();
          }else if(itemDetails.match(/Trial 1/i)){
            await correctlocator.click();
          }else if (itemDetails.match(/^Item (1[1-5])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[6-9]|20)\b/)) {
            if (itemDetails === "Item 20") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for SPAREL SSP2/i)
        ) {
          if (itemDetails.includes("Introduction 1")) {
            await this.assertWithScreenShots();
          } else if (itemDetails.includes("Trial 1")) {
            await iDontKnow.click();
          } else if (itemDetails.includes("Trial 2")) {
            await correctlocator.click();
          } else if (itemDetails === "Item 11") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 12") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Item 7") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(19).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(20).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }
    async completeTheLeftNavValidationForMEMWRDTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        const testNames: string[] = ["MEMWRD.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        
        const ItemsArray: number[] = [
          7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 
        ];
        const itemArray1: number[] = [7, 8, 9, 10];
        const itemArray2: number[] = [11, 12, 13, 14];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Introduction 2": { navIndex: 3 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 4 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 5 },
          "Introduction 3": { navIndex: 6 },
        };
  
        const SampleAndIntroAction = itemActions[itemDetails];
  
        if (typeOfTest.match(/All correct scenario for MEMWRD SSP1/i)) {
         if (SampleAndIntroAction){
          if (["Introduction 1", "Introduction 2", "Introduction 3"].includes(itemDetails)) {
            await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
          } else {
            await SampleAndIntroAction.locator.click();
            await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
          }
          await this.assertWithScreenShots();
        } else if (itemDetails.match(/^Item ([1-9]|1[0-9]|2[0-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        
        }else if (typeOfTest.match(/Basal & Ceiling Scenario for MEMWRD SSP2/i)) {
          if(itemDetails === "Introduction 1"){
            await this.assertWithScreenShots();
          }else if(itemDetails.match(/Trial 1/i)){
            await correctlocator.click();
          }else if(["Introduction 2", "Introduction 3"].includes(itemDetails)) {
          }else if (itemDetails.match(/^Item ([6-9])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[0-3])\b/)) {
            if (itemDetails === "Item 13") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        
        } else if (typeOfTest.match(/left Nav When Items are Flagged,Expanded and collapsed For SSP2/i)) {
          if (itemDetails.startsWith("Introduction 1")) {
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item A, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 2")) {
            await this.leftNavItems.nth(3).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Sample Item B, Trial 1")) {
            await correctlocator.click();
            await this.leftNavItems.nth(4).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Introduction 3")) {
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShots();
          } else if (itemDetails.startsWith("Item 6")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 7")) {
            await incorrectlocator.click();
            await this.flagIcon.click();
            await this.plainNextButtonOrEndButton.click();
            await this.leftNavItems.nth(12).hover();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(13).hover();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(300);
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }
    async completeTheLeftNavValidationForRPDPHOTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        if (typeOfTest.match(/left Nav For SSP1/i)) {
          if (itemDetails.startsWith("Sample")) {
            await this.doneButton.click();
            await this.plainNextButtonOrEndButton.click();
          } else if (itemDetails.startsWith("Introduction")) {
            await this.page.waitForTimeout(1000);
            await this.plainNextButtonOrEndButton.click();
          } else if (itemDetails.startsWith("Item")) {
            const itemNumber = parseInt(itemDetails.split(" ")[2]);
            if (itemNumber >= 1 && itemNumber <= 7) {
              await this.page.waitForTimeout(2000);
              await this.plainNextButtonOrEndButton.click();
            } else if (itemNumber === 8) {
              await this.page.waitForTimeout(2000);
              await this.plainNextButtonOrEndButton.click();
              await this.closeButton.click();
              for (let i = 0; i <= 13; i++) {
                await this.leftNavItems.nth(i).hover();
                await this.assertWithScreenShots();
              }
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              return;
            }
          }
        
        } else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`
          );
        }
      }
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }
  
  
    async completeTheLeftNavValidationForACDVOCTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        const testNames: string[] = ["ACDVOC.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,  
        ];
        
        if (typeOfTest.match(/All correct scenario for SSP1/i)) {
           
          if (itemDetails.match(/^Item (3[0-6]|[12]?[0-9]|[1-9])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/Basal and Ceiling For SSP2/i)) {
          if (itemDetails.startsWith("Item 4")) {
            await this.assertWithScreenShots();
            await correctlocator.click();
          } else if (itemDetails.match(/^Item [5-8]/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item 1[0-3]|9/)) {
            if (itemDetails === "Item 13") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP Item check For SSP3/i)) {
          if (itemDetails.startsWith("Item 8")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP Item check For SSP4/i)) {
          if (itemDetails.startsWith("Item 10")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(
             /left Nav When Items are Flagged,Expanded and collapsed For SSP5/i
          )
        ) {
          if (itemDetails.startsWith("Item 15")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 16")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(14).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(15).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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
  
      console.log(`The Scores Trail = `, this.scoreTrail);
  
      return this.scoreTrail;
    }
    async completeTheLeftNavValidationForANLSYNTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
  
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const videoPlayButton: Locator = await this.videoPlayButton;
        const ItemsArray: number[] = [
          11, 12, 13, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 40, 41, 42, 43, 44, 45, 46, 47, 48,
          49, 50, 51, 52, 53, 54, 55,
        ];
        const itemActions = {
          "Color Pretest: Yellow, Trial 1": { locator: incorrectlocator, navIndex: 0 },
          "Color Pretest: Yellow, Trial 2": { locator: correctlocator, navIndex: 1 },
          "Color Pretest: Black, Trial 1": { locator: incorrectlocator, navIndex: 2 },
          "Color Pretest: Black, Trial 2": { locator: correctlocator, navIndex: 3 },
          "Color Pretest: Blue, Trial 1": { locator: incorrectlocator, navIndex: 4 },
          "Color Pretest: Blue, Trial 2": { locator: correctlocator, navIndex: 5 },
          "Color Pretest: Red, Trial 1": { locator: incorrectlocator, navIndex: 6 },
          "Color Pretest: Red, Trial 2": { locator: correctlocator, navIndex: 7 },
          "Introduction 1": { locator: videoPlayButton, navIndex: 8 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 9 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 10 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 14 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 15 },
          "Introduction 2": { locator: videoPlayButton, navIndex: 20 },
          "Introduction 3": { locator: videoPlayButton, navIndex: 33 },
          "Sample Item C": { locator: incorrectlocator, navIndex: 34 },
          "Sample Item D, Trial 1": { locator: incorrectlocator, navIndex: 35 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 36 },
          "Sample Item E, Trial 1": { locator: incorrectlocator, navIndex: 37 },
          "Sample Item E, Trial 2": { locator: correctlocator, navIndex: 38 },
          "Introduction 4": { navIndex: 39 },
          
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for ANLYSYN SSP1/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1", "Introduction 2", "Introduction 3"].includes(itemDetails)) {
                 await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
                 await this.assertWithScreenShots();
                 await SampleAndIntroAction.locator.click();
                 await this.plainNextButtonOrEndButton.waitFor({ state: "visible" }); 
            } else if(["Introduction 4"].includes(itemDetails)){
                 await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
                 await this.assertWithScreenShots();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
              await this.page.waitForTimeout(5000);
              await this.assertWithScreenShots();
            }
            
          } else if (itemDetails.match(/^Item ([1-9]|1[0-9]|2[0-9]|3[0-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            console.log('itemNumber:', itemNumber);
            console.log('indexToHover:', indexToHover);
            console.log('nthindex:', nthindex);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }
    async completeTheLeftNavValidationForMATRCZTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const videoPlayButton: Locator = await this.videoPlayButton;
        const itemArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
        const itemArray1: number[] = [7, 8, 9, 10, 11, 12, 13, 14];
        const itemActions = {
          "Introduction 1": { locator: videoPlayButton, navIndex: 0 },
          "Introduction 2": { locator: videoPlayButton, navIndex: 1 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 2 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 3 },
          "Introduction 3": { locator: videoPlayButton, navIndex: 4 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 5 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 6 }
          
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for MATRCZ SSP1/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1", "Introduction 2", "Introduction 3"].includes(itemDetails)) {
                 await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
                 await this.page.waitForTimeout(1000);
                 await this.assertWithScreenShots();
                 await SampleAndIntroAction.locator.click();
                 await this.plainNextButtonOrEndButton.waitFor({ state: "visible" }); 
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
              await this.assertWithScreenShots();
            }
          } else if (itemDetails.match(/Block A/)) {
            if (itemDetails.match(/Item ([1-8])/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = itemArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
            }
          } else if (itemDetails.match(/Block D/)) {
           if (itemDetails.match(/Item ([1-8])/)) {
           const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 25;
            const nthindex = itemArray1[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.page.waitForTimeout(1000);
            await this.assertWithScreenShots();
            
            }
          }
        } else if (
          typeOfTest.match(
            /left Nav when items are flagged,expanded & collapsed for SSP2/i
          )
        ) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
                 await this.leftNavItems.nth(SampleAndIntroAction.navIndex).hover();
                 await this.assertWithScreenShots();
                 await SampleAndIntroAction.locator.click();
                 await this.plainNextButtonOrEndButton.waitFor({ state: "visible" }); 
            }
          } else  if (itemDetails.match(/Block B/)) {
             if (itemDetails.match(/Item 9/)) {
              await correctlocator.click();
              await this.flagIcon.click();
            } else if (itemDetails.match(/Item 10/)) {
              await iDontKnow.click();
              await this.flagIcon.click();
              await this.assertWithScreenShots();
              await this.plainNextButtonOrEndButton.click();
              await this.assertWithScreenShots();
              await this.leftNavItems.nth(1).hover();
              await this.page.waitForTimeout(1000);
              await this.assertWithScreenShots();
              await this.leftNavItems.nth(2).hover();
              await this.page.waitForTimeout(1000);
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              await this.leftNavExpandIcon.click();
              await this.assertWithScreenShots();
              return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSWRTFLTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const itemActions = {
          "Demonstration 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 5 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 6 },
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for SWRTFL/i)) {
          if (SampleAndIntroAction) {
            if (["Demonstration 1"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.includes("Test Introduction")) {
            await this.leftNavItems.nth(7).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            await this.timeisup.waitFor({ state: "visible" });
            await this.swfmtfscorefields.nth(0).fill("8");
            await this.swfmtfscorefields.nth(1).fill("8");
            await this.swfmtfscorefields.nth(2).fill("8");
            await this.swfmtfscorefields.nth(3).fill("8");
            await this.swfmtfscorefields.nth(4).fill("8");
            await this.ScoreLaterSubmit.click();
            await this.EndTestCloseIcon.click();
            await this.leftNavItems.nth(7).hover();
            await this.assertWithScreenShotsForTimerTests();
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSRDGFLTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();

        const practiceAndTestItemsElements = await this.page.locator(
          "//div[contains(@class,'options ')]//button"
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
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for SRDGFL/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.startsWith("Practice")) {
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            for (const index of practiceElementsIndexes) {
              const element = practiceAndTestItemsElements.nth(index);
              await element.click();
            }
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.startsWith("Test Items")) {
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            await this.activateTabletControlButton.click();
            for (let i = 0; i < sets.length; i++) {
              const set = sets[i];
              for (const num of set) {
                const element = practiceAndTestItemsElements.nth(num);
                await element.click();
              }

              await this.doneOrNextButton.click();

              if (i === sets.length - 1) {
                await this.leftNavItems.nth(6).hover();
                await this.assertWithScreenShotsForTimerTests();
              }
            }
          }
        } else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`
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

    async completeTheLeftNavValidationForWRDGFLTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();

        const practiceAndTestItemsElements = await this.page.locator(
          "//div[contains(@class,'options WRDGFL')]//button"
        );
        const practiceElementsIndexes: number[] = [0, 3, 5, 6, 8, 11, 12, 13];
        const sets: number[][] = [
          [
            0, 2, 4, 5, 10, 11, 12, 15, 16, 19, 22, 23, 24, 26, 28, 31, 32, 33,
            36, 37,
          ],
          [
            1, 3, 4, 7, 8, 9, 12, 14, 16, 19, 20, 23, 25, 26, 28, 30, 33, 35,
            37, 38,
          ],
          [
            0, 2, 6, 7, 10, 11, 12, 13, 17, 18, 20, 22, 24, 25, 29, 30, 33, 34,
            36, 37,
          ],
          [
            0, 3, 4, 6, 8, 11, 13, 14, 17, 19, 21, 22, 24, 26, 29, 30, 34, 35,
            37, 38,
          ],
          [
            0, 1, 4, 7, 8, 11, 12, 14, 16, 18, 21, 23, 25, 27, 30, 31, 32, 33,
            36, 37,
          ],
          [
            0, 3, 4, 6, 8, 11, 13, 14, 16, 19, 21, 23, 25, 26, 30, 31, 34, 35,
            36, 37,
          ],
          [
            0, 2, 4, 5, 8, 11, 12, 13, 17, 18, 21, 22, 26, 27, 28, 30, 34, 35,
            36, 37,
          ],
          [
            1, 3, 4, 5, 8, 11, 12, 14, 18, 19, 20, 22, 24, 27, 28, 30, 34, 35,
            36, 37,
          ],
          [
            0, 1, 6, 7, 8, 11, 12, 15, 18, 19, 21, 22, 25, 27, 30, 31, 33, 34,
            38, 39,
          ],
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: incorrectlocator, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: incorrectlocator, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for WRDGFL/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.startsWith("Practice")) {
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            for (const index of practiceElementsIndexes) {
              const element = practiceAndTestItemsElements.nth(index);
              await element.click();
            }
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.startsWith("Test Items")) {
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            await this.activateTabletControlButton.click();
            for (let i = 0; i < sets.length; i++) {
              const set = sets[i];
              for (const num of set) {
                const element = practiceAndTestItemsElements.nth(num);
                await element.click();
              }

              await this.doneOrNextButton.click();

              if (i === sets.length - 1) {
                await this.leftNavItems.nth(6).hover();
                await this.assertWithScreenShotsForTimerTests();
              }
            }
          }
        } else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`
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

    async completeTheLeftNavValidationForLETPATTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const practiceAndTestItemsElements = await this.page.locator(
          "//div[contains(@class,'options LETPAT')]//button"
        );
        const PracticeElementsIndexes: number[] = [
          1, 2, 3, 4, 6, 8, 10, 11, 14, 16, 18, 21,
        ];
        const sets: number[][] = [
          [
            0, 2, 3, 4, 7, 8, 10, 11, 12, 14, 17, 18, 20, 23, 26, 28, 29, 31,
            34, 38,
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
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for LETPAT/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.includes("Practice Exercise")) {
            await this.startPracticeOrStartTestButton.click();
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
            for (const index of PracticeElementsIndexes) {
              const element = practiceAndTestItemsElements.nth(index);
              await element.click();
            }
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.includes("Test Items")) {
            await this.startPracticeOrStartTestButton.click();
            await this.activateTabletControlButton.click();
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShotsForTimerTests();
            for (let i = 0; i < sets.length; i++) {
              const set = sets[i];
              for (const num of set) {
                const element = practiceAndTestItemsElements.nth(num);
                await element.click();
              }
              await this.doneOrNextButton.click();
              if (i === sets.length - 1) {
                await this.leftNavItems.nth(6).hover();
                await this.assertWithScreenShotsForTimerTests();
              }
            }
          }
        } else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`
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

    async completeTheLeftNavValidationForNUMPATTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const practiceAndTestItemsElements = await this.page.locator(
          "//div[contains(@class,'options NUMPAT')]//button"
        );
        const PracticeElementsIndexes: number[] = [
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
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
        };
        const SampleAndIntroAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for NUMPAT/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.includes("Practice Exercise")) {
            await this.startPracticeOrStartTestButton.click();
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
            for (const index of PracticeElementsIndexes) {
              const element = practiceAndTestItemsElements.nth(index);
              await element.click();
            }
            await this.leftNavItems.nth(5).hover();
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.includes("Test Items")) {
            await this.startPracticeOrStartTestButton.click();
            await this.activateTabletControlButton.click();
            await this.leftNavItems.nth(6).hover();
            await this.assertWithScreenShotsForTimerTests();
            for (let i = 0; i < sets.length; i++) {
              const set = sets[i];
              for (const num of set) {
                const element = practiceAndTestItemsElements.nth(num);
                await element.click();
              }
              await this.doneOrNextButton.click();
              if (i === sets.length - 1) {
                await this.leftNavItems.nth(6).hover();
                await this.assertWithScreenShotsForTimerTests();
              }
            }
          }
        } else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`
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

    async completeTheLeftNavValidationForMTHFLUTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        if (typeOfTest.match(/All correct scenario for MTHFLU SSP1/i)) {
          if (itemDetails.includes("Practice Exercise")) {
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            await this.stopText.waitFor({ state: "visible" });
            await this.swfmtfscorefields.fill("5");
            await this.leftNavItems.nth(0).hover();
            await this.assertWithScreenShotsForTimerTests();
          } else if (itemDetails.includes("Test Introduction")) {
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            await this.timeisup.waitFor({ state: "visible" });
            await this.swfmtfscorefields.nth(0).fill("80");
            await this.swfmtfscorefields.nth(1).fill("80");
            await this.ScoreLaterSubmit.click();
            await this.page.waitForTimeout(2000);
            await this.EndTestCloseIcon.click();
            await this.page.waitForTimeout(2000);
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShotsForTimerTests();
          }
        } else if (typeOfTest.match(/All correct scenario for MTHFLU SSP2/i)) {
          if (itemDetails.includes("Test Introduction")) {
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShotsForTimerTests();
            await this.startPracticeOrStartTestButton.click();
            await this.timeisup.waitFor({ state: "visible" });
            await this.swfmtfscorefields.nth(0).fill("80");
            await this.swfmtfscorefields.nth(1).fill("80");
            await this.ScoreLaterSubmit.click();
            await this.page.waitForTimeout(2000);
            await this.EndTestCloseIcon.click();
            await this.page.waitForTimeout(2000);
            await this.leftNavItems.nth(1).hover();
            await this.assertWithScreenShotsForTimerTests();
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForPHNRETTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const startTimerBtn: Locator = this.startPracticeOrStartTestButton;
        const itemActions = {
          "Item 1": { locator: startTimerBtn, navIndex: 0 },
          "Item 2": { locator: startTimerBtn, navIndex: 1 },
          "Item 3": { locator: startTimerBtn, navIndex: 2 },
        };
        const itemAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for PHNRET/i)) {
          if (itemAction) {
            await this.leftNavItems.nth(itemAction.navIndex).hover();
            await this.assertWithScreenShotsForTimerTests();
            await itemAction.locator.click();
            await this.page.waitForTimeout(100);
            for (let i = 0; i < 20; i++) {
              await this.addButton.click();
            }
            await this.timeisup.waitFor({ state: "visible" });
            await this.timeUpCloseBtn.click();
            await this.leftNavItems.nth(itemAction.navIndex).hover();
            await this.assertWithScreenShotsForTimerTests();
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSEMRETTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const startTimerBtn: Locator = this.startPracticeOrStartTestButton;
        const itemActions = {
          "Item 1": { locator: startTimerBtn, navIndex: 0 },
          "Item 2": { locator: startTimerBtn, navIndex: 1 },
          "Item 3": { locator: startTimerBtn, navIndex: 2 },
        };
        const itemAction = itemActions[itemDetails];
        if (typeOfTest.match(/All correct scenario for SEMRET/i)) {
          if (itemAction) {
            await this.leftNavItems.nth(itemAction.navIndex).hover();
            await this.assertWithScreenShotsForTimerTests();
            await itemAction.locator.click();
            await this.page.waitForTimeout(100);
            for (let i = 0; i < 20; i++) {
              await this.addButton.click();
            }
            await this.timeisup.waitFor({ state: "visible" });
            await this.timeUpCloseBtn.click();
            await this.leftNavItems.nth(itemAction.navIndex).hover();
            await this.assertWithScreenShotsForTimerTests();
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForPARCMPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;

        const ItemsArrayBlockABC: number[][] = [
          [2, 3, 4],
          [6, 7, 8],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12, 13],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12],
        ];

        const ItemsArrayBlockBCD: number[][] = [
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12, 13],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12],
        ];

        const ItemsArrayBlockCDE: number[][] = [
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12, 13],
        ];

        const ItemsArrayBlockDE: number[][] = [
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12],
          [2, 3, 4, 5, 6],
          [8, 9, 10, 11, 12, 13],
        ];
        const itemActions = {
          "Introduction 1": { navIndex: 0 },
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        if (typeOfTest.match(/All correct scenario for PARCMP SSP1/i)) {
          if (SampleAndIntroAction) {
            if (["Introduction 1"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/PARCMP/i)
          ) {
            await this.activateTabletControlButton.click();
            await this.parcmpdonebtn.click();
          } else if (itemDetails.match(/^(Story [1-6]), Item ([1-6])\b/)) {
            const match = itemDetails.match(/^(Story ([1-6])), Item ([1-6])\b/);
            const storyIndex = parseInt(match[2], 10) - 1;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockABC.length) {
              const itemsToHover = ItemsArrayBlockABC[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (typeOfTest.match(/All correct scenario for PARCMP SSP2/i)) {
          if (itemDetails.includes("Introduction")) {
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/PARCMP/i)
          ) {
            await this.activateTabletControlButton.click();
            await this.parcmpdonebtn.click();
          } else if (itemDetails.match(/^(Story [3-8]), Item ([1-6])\b/)) {
            const match = itemDetails.match(/^(Story ([3-8])), Item ([1-6])\b/);
            const storyIndex = parseInt(match[2], 10) - 3;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockBCD.length) {
              const itemsToHover = ItemsArrayBlockBCD[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (typeOfTest.match(/All correct scenario for PARCMP SSP3/i)) {
          if (itemDetails.includes("Introduction")) {
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/PARCMP/i)
          ) {
            await this.activateTabletControlButton.click();
            await this.parcmpdonebtn.click();
          } else if (
            itemDetails.match(/^(Story ([5-9]|1[0])), Item ([1-6])\b/)
          ) {
            const match = itemDetails.match(
              /^(Story ([5-9]|1[0])), Item ([1-6])\b/
            );
            const storyIndex = parseInt(match[2], 10) - 5;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockCDE.length) {
              const itemsToHover = ItemsArrayBlockCDE[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (typeOfTest.match(/All correct scenario for PARCMP SSP4/i)) {
          if (itemDetails.includes("Introduction")) {
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/PARCMP/i)
          ) {
            await this.activateTabletControlButton.click();
            await this.parcmpdonebtn.click();
          } else if (
            itemDetails.match(/^(Story ([7-9]|1[0])), Item ([1-6])\b/)
          ) {
            const match = itemDetails.match(
              /^(Story ([7-9]|1[0])), Item ([1-6])\b/
            );
            const storyIndex = parseInt(match[2], 10) - 7;
            const itemIndex = parseInt(match[3], 10) - 1;
            await correctlocator.click();
            if (storyIndex < ItemsArrayBlockDE.length) {
              const itemsToHover = ItemsArrayBlockDE[storyIndex];
              if (itemIndex < itemsToHover.length) {
                const num = itemsToHover[itemIndex];
                await this.leftNavItems.nth(num).hover();
                await this.assertWithScreenShots();
              } else {
                console.error(
                  `Item index ${itemIndex} out of bounds for Story ${
                    storyIndex + 1
                  }`
                );
              }
            } else {
              console.error(`Story index ${storyIndex} out of bounds`);
            }
          }
        } else if (
          typeOfTest.match(/Flagged,expanded and collapsed for PARCMP SSP4/i)
        ) {
          if (itemDetails.match(/Introduction 1/i)) {
            await this.assertWithScreenShots();
          } else if (
            itemDetails.endsWith("Presentation") &&
            typeOfTest.match(/PARCMP/i)
          ) {
            await this.activateTabletControlButton.click();
            await this.parcmpdonebtn.click();
          } else if (itemDetails === "Story 7, Item 1") {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 7, Item 2") {
            await iDontKnow.click();
            await this.flagIcon.click();
          } else if (itemDetails === "Story 7, Item 3") {
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(2).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(3).hover();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSEGMNTTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        const testNames: string[] = ["SEGMNT.W5PA"];
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 17, 18, 19, 20, 21, 22,
          23, 24, 25, 26, 27, 28, 29,
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 5 },
          "Introduction 3": { navIndex: 10 },
          "Introduction 4": { navIndex: 11 },
          "Introduction 5": { navIndex: 16 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 3 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 4 },
          "Sample Item C, Trial 1": { locator: iDontKnow, navIndex: 6 },
          "Sample Item C, Trial 2": { locator: correctlocator, navIndex: 7 },
          "Sample Item D, Trial 1": { locator: iDontKnow, navIndex: 8 },
          "Sample Item D, Trial 2": { locator: correctlocator, navIndex: 9 },
          "Sample Item E, Trial 1": { locator: iDontKnow, navIndex: 12 },
          "Sample Item E, Trial 2": { locator: correctlocator, navIndex: 13 },
          "Sample Item F, Trial 1": { locator: iDontKnow, navIndex: 14 },
          "Sample Item F, Trial 2": { locator: correctlocator, navIndex: 15 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];
        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (
              [
                "Introduction 1",
                "Introduction 2",
                "Introduction 3",
                "Introduction 4",
                "Introduction 5",
              ].includes(itemDetails)
            ) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-9]|1[0-9]|2[0-6])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/SSP Item check For SSP2/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 6")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed For SSP3/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Sample")) {
            await correctlocator.click();
          } else if (itemDetails.startsWith("Item 14")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 15")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(17).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(18).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForSENREPTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        const ItemsArray: number[] = [
          3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34
        ];
        const ItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 3 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 1 },
          "Sample Item A, Trial 2": { locator: correctlocator, navIndex: 2 },
          "Sample Item B, Trial 1": { locator: iDontKnow, navIndex: 4 },
          "Sample Item B, Trial 2": { locator: correctlocator, navIndex: 5 },
        };
        const SampleAndIntroductionAction = ItemActions[itemDetails];

        if (typeOfTest.match(/All correct For SSP1/i)) {
          if (SampleAndIntroductionAction) {
            if (["Introduction 1", "Introduction 2"].includes(itemDetails)) {
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            } else {
              await SampleAndIntroductionAction.locator.click();
              await this.leftNavItems
                .nth(SampleAndIntroductionAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-9]|[12]?[0-9]|3[0-7])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            const indexToHover = itemNumber - 1;
            const nthindex = ItemsArray[indexToHover];
            await correctlocator.click();
            await this.page.waitForTimeout(1000);
            await this.leftNavItems.nth(nthindex).hover();
            await this.assertWithScreenShots();
          }
        } else if (typeOfTest.match(/bbyc for SENREP SSP2/i)) {
          if (itemDetails.match(/Sample/i)) {
            await correctlocator.click();
          } else if (itemDetails.match(/Introduction 2/i)) {
          } else if (itemDetails.match(/^Item (9|1[0-2])\b/)) {
            await correctlocator.click();
          } else if (itemDetails.match(/^Item (1[3-6])\b/)) {
            if (itemDetails === "Item 16") {
              await iDontKnow.click();
              await this.assertWithScreenShots();
              await this.EndOfItems.scrollIntoViewIfNeeded();
              await this.assertWithScreenShots();
            } else {
              await iDontKnow.click();
            }
          }
        } else if (typeOfTest.match(/SSP item check for SSP3/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Item 12")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for SSP4/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Item 15")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (typeOfTest.match(/SSP item check for for SSP5/i)) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Item 18")) {
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            return;
          }
        } else if (
          typeOfTest.match(
            /left Nav When Items are Flagged,Expanded and collapsed for SSP6/i
          )
        ) {
          if (itemDetails.startsWith("Introduction")) {
          } else if (itemDetails.startsWith("Item 24")) {
            await correctlocator.click();
            await this.flagIcon.click();
          } else if (itemDetails.startsWith("Item 25")) {
            await iDontKnow.click();
            await this.flagIcon.click();
            await this.closeNotesIcon.click();
            await this.assertWithScreenShots();
            await this.plainNextButtonOrEndButton.click();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(21).hover();
            await this.assertWithScreenShots();
            await this.leftNavItems.nth(22).hover();
            await this.assertWithScreenShots();
            await this.EndOfItems.scrollIntoViewIfNeeded();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            await this.leftNavExpandIcon.click();
            await this.assertWithScreenShots();
            return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }


    async completeTheLeftNavValidationForSWRTACTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;

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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const correctlocator: Locator = await this.correctLocator();
        const incorrectlocator: Locator = await this.inCorrectLocator();
        const iDontKnow: Locator = this.IDK;
        
        const itemPlayButton: Locator = this.page.locator("//button[@class='small-blue-button']");
        const SampleItemlocatorWrapper: Locator = this.page.locator(
          "//button[text()='Correct']"
        );
        const elements = await SampleItemlocatorWrapper.count();

        const BlockAItemsArray: number[] = [5, 6, 7, 8, 9];
        const BlockAItemActions = {
          "Introduction 1": { navIndex: 0 },
          "Introduction 2": { navIndex: 1 },
          "Introduction 3": { navIndex: 4 },
          "Sample Item A, Trial 1": { locator: iDontKnow, navIndex: 2 },
          "Sample Item A, Trial 2": { locator: SampleItemlocatorWrapper, navIndex: 3 }
        };

        const BlockBItemsArray: number[] = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const BlockBCItemActions = {
          "Introduction 1": { navIndex: 4 },
          "Introduction 4": { navIndex: 5 },
          "Introduction 5": { navIndex: 6 }
        };

        const BlockCItemsArray: number[] = [7, 8, 9, 10, 11];

        const BlockASampleAndIntroAction = BlockAItemActions[itemDetails];
        const BlockBCSampleAndIntroAction = BlockBCItemActions[itemDetails];
        
        if (typeOfTest.match(/Left Nav for Block A/i)) {
          if (BlockASampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 2", "Introduction 3"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(BlockASampleAndIntroAction.navIndex)
                .hover();
            } else if(["Sample Item A, Trial 1"].includes(itemDetails)) {
              await BlockASampleAndIntroAction.locator.click();
              await this.leftNavItems
                .nth(BlockASampleAndIntroAction.navIndex)
                .hover();
            }else if(["Sample Item A, Trial 2"].includes(itemDetails)){
              for (let i = 0; i < elements; i++) {
                const item = SampleItemlocatorWrapper.nth(i);
                await item.click();
              }
              await this.leftNavItems
                .nth(BlockASampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          } else if (itemDetails.match(/^Item ([1-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if(itemNumber === 5){
              const indexToHover = itemNumber - 1;
              const nthindex = BlockAItemsArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await itemPlayButton.click();
              await this.plainNextButtonOrEndButton.waitFor({state: "visible"});
              return;
            }else{
              const indexToHover = itemNumber - 1;
              const nthindex = BlockAItemsArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await itemPlayButton.click();
              await this.plainNextButtonOrEndButton.waitFor({state: "visible"});
            }
            
          }
        } else if (typeOfTest.match(/Left Nav for Block B/i)) {
          if (BlockBCSampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 4", "Introduction 5"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(BlockBCSampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item ([6-9]|1[0-5])\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if(itemNumber === 15){
              const indexToHover = itemNumber - 6;
              const nthindex = BlockBItemsArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await itemPlayButton.click();
              await this.plainNextButtonOrEndButton.waitFor({state: "visible"});
              return;
            }else{
              const indexToHover = itemNumber - 6;
              const nthindex = BlockBItemsArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await itemPlayButton.click();
              await this.plainNextButtonOrEndButton.waitFor({state: "visible"});
            }
            
          }
        } else if (typeOfTest.match(/Left Nav for Block C/i)) {
          if (BlockBCSampleAndIntroAction) {
            if (
              ["Introduction 1", "Introduction 4", "Introduction 5"].includes(
                itemDetails
              )
            ) {
              await this.leftNavItems
                .nth(BlockBCSampleAndIntroAction.navIndex)
                .hover();
            }
            await this.assertWithScreenShots();
          }else if (itemDetails.match(/^Item (1[6-9]|20)\b/)) {
            const itemNumber = parseInt(itemDetails.match(/\d+/)![0], 10);
            if(itemNumber === 20){
              const indexToHover = itemNumber - 16;
              const nthindex = BlockCItemsArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await itemPlayButton.click();
              await this.plainNextButtonOrEndButton.waitFor({state: "visible"});
              return;
            }else{
              const indexToHover = itemNumber - 16;
              const nthindex = BlockCItemsArray[indexToHover];
              await this.leftNavItems.nth(nthindex).hover();
              await this.assertWithScreenShots();
              await itemPlayButton.click();
              await this.plainNextButtonOrEndButton.waitFor({state: "visible"});
            }
            
          }
        }else {
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

      console.log(`The Scores Trail = `, this.scoreTrail);

      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForRPDLETTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const Done: Locator = this.doneButton;
        const locatorWrapper: Locator = this.page.locator(
          "//div[@class='option-wrapper']//child::*"
        );
        const elements = await locatorWrapper.count();

        const itemActions = {
          "Sample Item A, Trial 1": { locator: Done, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: Done, navIndex: 1 },
          "Sample Item B, Trial 1": { locator: Done, navIndex: 2 },
          "Sample Item B, Trial 2": { locator: Done, navIndex: 3 },
          "Introduction 1": { navIndex: 4 },
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        const hoverAndScreenshot = async (index: number) => {
          await this.leftNavItems.nth(index).hover();
          await this.assertWithScreenShots();
        };

        const clickTrialElements = async (
          locatorWrapper: Locator,
          count: number
        ) => {
          for (let i = 0; i < Math.min(6, count); i++) {
            await locatorWrapper.nth(i).click();
          }
        };

        if (typeOfTest.match(/All correct scenario for RPDLET for SSP 1/i)) {
          if (SampleAndIntroAction) {
            const { locator, navIndex } = SampleAndIntroAction;

            if (["Introduction 1"].includes(itemDetails)) {
              await hoverAndScreenshot(navIndex);
            } else if (itemDetails.match(/Sample Item (A|B), Trial 1/i)) {
              await hoverAndScreenshot(navIndex);
              await clickTrialElements(locatorWrapper, elements);
              await locator.click();
              await hoverAndScreenshot(navIndex);
            } else {
              await locator.click();
              await hoverAndScreenshot(navIndex);
            }
          } else if (itemDetails.match(/^Item Set [1-8]\b/)) {
            if (itemDetails === "Item Set 8") {
              if (
                (await this.plainNextButtonOrEndButton.textContent()) ===
                "End Test"
              ) {
                await this.plainNextButtonOrEndButton.click();
                await this.EndTestCloseIcon.click();
                for (let i = 5; i <= 12; i++) {
                  await this.leftNavItems.nth(i).hover();
                  await expect
                    .soft(this.page)
                    .toHaveScreenshot({
                      mask: [
                        this.webRtcIndicator,
                        this.plainNextButtonOrEndButton,
                      ],
                    });
                }
                return;
              }
            } else {
            }
          }
        } else if (
          typeOfTest.match(/All Incorrect scenario for RPDLET for SSP 1/i)
        ) {
          if (["Introduction 1"].includes(itemDetails)) {
          } else if (itemDetails.match(/Sample/i)) {
            await this.doneButton.click();
          } else if (itemDetails.match(/^Item Set [1-8]\b/)) {
            if (itemDetails === "Item Set 8") {
              if (
                (await this.plainNextButtonOrEndButton.textContent()) ===
                "End Test"
              ) {
                await clickTrialElements(locatorWrapper, elements);
                await this.plainNextButtonOrEndButton.click();
                await this.EndTestCloseIcon.click();
                for (let i = 5; i <= 12; i++) {
                  await this.leftNavItems.nth(i).hover();
                  await expect
                    .soft(this.page)
                    .toHaveScreenshot({
                      mask: [
                        this.webRtcIndicator,
                        this.plainNextButtonOrEndButton,
                      ],
                    });
                }
                return;
              }
            } else {
              await clickTrialElements(locatorWrapper, elements);
            }
          }
        } else if (typeOfTest.match(/Item Check for RPDLET for SSP 2/i)) {
          await this.assertWithScreenShots();
          return;
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }

    async completeTheLeftNavValidationForRPDPICTest(
      typeOfTest: string
    ): Promise<Map<string, string>> {
      let correctCount: number = 0;
      let inCorrectCount: number = 0;
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
        await this.page.waitForTimeout(1000);
        const itemDetails: string = (await this.itemDetails.textContent())!;
        console.log(itemDetails);
        const Done: Locator = this.doneButton;
        const locatorWrapper: Locator = this.page.locator(
          "//div[@class='option-wrapper']//child::*"
        );
        const elements = await locatorWrapper.count();

        const itemActions = {
          "Sample Item A, Trial 1": { locator: Done, navIndex: 0 },
          "Sample Item A, Trial 2": { locator: Done, navIndex: 1 },
          "Introduction 1": { navIndex: 2 }
        };

        const SampleAndIntroAction = itemActions[itemDetails];

        const hoverAndScreenshot = async (index: number) => {
          await this.leftNavItems.nth(index).hover();
          await this.assertWithScreenShots();
        };

        const clickTrialElements = async (
          locatorWrapper: Locator,
          count: number
        ) => {
          for (let i = 0; i < Math.min(5, count); i++) {
            await locatorWrapper.nth(i).click();
          }
        };

        if (typeOfTest.match(/All correct scenario for RPDPIC/i)) {
          if (SampleAndIntroAction) {
            const { locator, navIndex } = SampleAndIntroAction;

            if (["Introduction 1"].includes(itemDetails)) {
              await hoverAndScreenshot(navIndex);
            } else if (itemDetails.match(/Sample Item A, Trial 1/i)) {
              await hoverAndScreenshot(navIndex);
              await clickTrialElements(locatorWrapper, elements);
              await locator.click();
              await hoverAndScreenshot(navIndex);
            } else {
              await locator.click();
              await hoverAndScreenshot(navIndex);
            }
          } else if (itemDetails.match(/^Item Set [1-8]\b/)) {
            if (itemDetails === "Item Set 8") {
              if (
                (await this.plainNextButtonOrEndButton.textContent()) ===
                "End Test"
              ) {
                await this.plainNextButtonOrEndButton.click();
                await this.EndTestCloseIcon.click();
                for (let i = 3; i <= 10; i++) {
                  await this.leftNavItems.nth(i).hover();
                  await expect
                    .soft(this.page)
                    .toHaveScreenshot({
                      mask: [
                        this.webRtcIndicator,
                        this.plainNextButtonOrEndButton,
                      ],
                    });
                }
                return;
              }
            } else {
            }
          }
        } else if (
          typeOfTest.match(/All Incorrect scenario for RPDPIC/i)
        ) {
          if (["Introduction 1"].includes(itemDetails)) {
          } else if (itemDetails.match(/Sample/i)) {
            await this.doneButton.click();
          } else if (itemDetails.match(/^Item Set [1-8]\b/)) {
            if (itemDetails === "Item Set 8") {
              if (
                (await this.plainNextButtonOrEndButton.textContent()) ===
                "End Test"
              ) {
                await clickTrialElements(locatorWrapper, elements);
                await this.plainNextButtonOrEndButton.click();
                await this.EndTestCloseIcon.click();
                for (let i = 3; i <= 10; i++) {
                  await this.leftNavItems.nth(i).hover();
                  await expect
                    .soft(this.page)
                    .toHaveScreenshot({
                      mask: [
                        this.webRtcIndicator,
                        this.plainNextButtonOrEndButton,
                      ],
                    });
                }
                return;
              }
            } else {
              await clickTrialElements(locatorWrapper, elements);
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
      console.log(`The Scores Trail = `, this.scoreTrail);
      return this.scoreTrail;
    }
}
