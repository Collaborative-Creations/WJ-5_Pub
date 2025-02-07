import { test, expect, Page, Locator } from "../base/basePageFixtures";
import { softAssertPrint } from "../utils/assertions";
import Utils from "../utils/utils";
import * as path from "path";
import { getCAMOS } from "../utils/derivedScoresEquations";
import { getWj5UserData } from "../utils/testData";
import wj5ExamineePage from "./wj5_examinee.page";

interface TestRunTimeData {
  [key: string]: {
    RT: number;
    Delivered_Order: number;
    Response: string;
    Score: number;
  };
}

export default class wj5TestDataExportPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;
  private testRunTimeData: TestRunTimeData;
  private utils: Utils;

  private readonly plainNextButtonOrEndButton: Locator;
  private readonly correctOptionButton: Locator;
  private readonly itemDetails: Locator;

  private readonly correctTickMark: Locator;
  private readonly activateTabletControlButton: Locator;
  private readonly videoPlayButton: Locator;
  private readonly replayButton: Locator;
  private readonly correctAnswer: Locator;
  private readonly coloredSquare: Locator;
  private readonly videoPlayingMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();
    this.testRunTimeData = {};
    this.utils = new Utils(this.page);

    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button",
    );
    this.correctOptionButton = this.page
      .locator(".select-group.correct button")
      .first();

    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();

    this.correctTickMark = this.page.locator(
      "//span[@class='correct-marker']/following-sibling::div",
    );
    this.activateTabletControlButton = this.page.locator(
      "//button[@class='plain-button examinee-cursor-button']",
    );
    this.videoPlayButton = this.page.locator("//button[@class='large-play']");
    this.replayButton = this.page.locator(".plain-button.replay-button");
    this.correctAnswer = this.page.locator("//span[@class='correct-marker']/preceding-sibling::div");
    this.coloredSquare=this.page.locator("//button[@class='plain-button']");
    this.videoPlayingMessage = this.page.locator(".semibold").getByText("Video is currently playing.");
  }

  async completeTheTakenTestForTestDataExport(
    typeOfTest: string,
  ): Promise<TestRunTimeData> {
    let score;
    let response;
    let delivery_order = 0;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      await this.page.waitForTimeout(1000);
      const startTimer: number = performance.now();

      const itemDetails: string = await this.itemDetails.textContent();
      console.log(itemDetails);

      if (itemDetails.startsWith("Introduction")) {
        score = 0;
        response = "";
      } else if (typeOfTest.match(/All correct scenario/i)) {
        const correctOption: string =
          await this.correctOptionButton.textContent();

        if (itemDetails.match(/^(Item|Sample)\s/)) {
          if (await this.page.locator(".audio-player").isVisible()) {
            let timeDisplay: string = await this.page
              .locator(".time-display")
              .textContent();
            await this.page.locator(".small-blue-button").click();
            const numberPart = timeDisplay.replace(/^00'|"/g, "");
            const numberValue = parseInt(numberPart);
            await this.page.waitForTimeout(numberValue * 1500);
          }
          await this.correctOptionButton.click();
          score = 1;
          response = correctOption;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      const endTimer: number = performance.now();

      const RT: number = (endTimer - startTimer) / 1000;

      this.testRunTimeData[itemDetails] = {
        RT: Number(RT.toFixed(3)),
        Delivered_Order: delivery_order,
        Response: response,
        Score: score,
      };
      delivery_order++;

      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForRequest(() => true);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.testRunTimeData);
    return this.testRunTimeData;
  }
  

  async completeTheTakenTestForTestDataExportforGIWHERPubTest(
    typeOfTest: string,
  ): Promise<TestRunTimeData> {
    let score;
    let response;
    let delivery_order = 0;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const startTimer: number = performance.now();

      const itemDetails: string = await this.itemDetails.textContent();
      console.log(itemDetails);

      if (typeOfTest.match(/All correct scenario/i)) {
        const correctOption: string =
          await this.correctOptionButton.textContent();

        if (itemDetails.match(/^(Item)\s/)) {
          // if (await this.page.locator(".audio-player").isVisible()) {
          //   let timeDisplay: string = await this.page
          //     .locator(".time-display")
          //     .textContent();
          //   await this.page.locator(".small-blue-button").click();

          //   const numberPart = timeDisplay.replace(/^00'|"/g, "");
          //   const numberValue = parseInt(numberPart);

          //   await this.page.waitForTimeout(numberValue * 1350);
          // }
          await this.correctOptionButton.click();
          score = 1;
          response = correctOption;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      const endTimer: number = performance.now();

      const RT: number = (endTimer - startTimer) / 1000;

      this.testRunTimeData[itemDetails] = {
        RT: Number(RT.toFixed(3)),
        Delivered_Order: delivery_order,
        Response: response,
        Score: score,
      };
      delivery_order++;

      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForRequest(() => true);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.testRunTimeData);
    return this.testRunTimeData;
  }

  async completeTheTakenTestForTestDataExportforAPPROBPubTest(
    typeOfTest: string,
  ): Promise<TestRunTimeData> {
    let score;
    let response;
    let delivery_order = 0;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const startTimer: number = performance.now();

      const itemDetails: string = await this.itemDetails.textContent();
      console.log(itemDetails);

      if (itemDetails.startsWith("Introduction")) {
        score = 0;
        response = "";
      } else if (typeOfTest.match(/All correct scenario/i)) {
        const correctOption: string =
          await this.correctOptionButton.textContent();

        if (itemDetails.match(/^(Item|Sample)\s/)) {
          if (await this.page.locator(".audio-player").isVisible()) {
            let timeDisplay: string = await this.page
              .locator(".time-display")
              .textContent();
            await this.page.locator(".small-blue-button").click();
            await this.page.waitForRequest(() => true);

            const numberPart = timeDisplay.replace(/^00'|"/g, "");
            const numberValue = parseInt(numberPart);

            await this.page.waitForTimeout(numberValue * 1350);
            // while(timeDisplay != timeDisplay){
            //   await this.page.waitForTimeout(1000);
            //   timeDisplay = await this.page
            //   .locator(".time-display")
            //   .textContent();
            // }

            //   await this.page.waitForFunction(
            //     (timeDisplayParam) => {
            //         // Access timeDisplayParam instead of timeDisplay
            //         const timerText = document.querySelector(".time-display")?.textContent;
            //         console.log(`timerText `, timerText);
            //         return timerText === timeDisplayParam;
            //     },
            //     { timeout: 60000 },
            //     timeDisplay // Pass timeDisplay as an argument
            // );
          }
          await this.correctOptionButton.click();
          score = 1;
          response = correctOption;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      const endTimer: number = performance.now();

      const RT: number = (endTimer - startTimer) / 1000;

      this.testRunTimeData[itemDetails] = {
        RT: Number(RT.toFixed(3)),
        Delivered_Order: delivery_order,
        Response: response,
        Score: score,
      };
      delivery_order++;

      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForRequest(() => true);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.testRunTimeData);
    return this.testRunTimeData;
  }

  async completeTheTakenTestForTestDataExportForMATRCZTest(
    typeOfTest: string,
  ): Promise<TestRunTimeData> {
    let score;
    let response;
    let delivery_order = 0;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const startTimer: number = performance.now();

      const itemDetails: string = await this.itemDetails.textContent();
      console.log(itemDetails);

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          score = 0;
          response = "";
          await this.videoPlayButton.click();
          await this.waitTillVideoIsComplete();
        } else if (itemDetails.startsWith("Sample")) {
          await this.correctTickMark.click();
          const correctOption: string =
            await this.correctTickMark.textContent();
          score = 1;
          response = `[${correctOption}]`;
        } else if (itemDetails.match(/Item/)) {
          if (itemDetails.match(/Block D/)) {
            if (itemDetails.match(/Item ([1-8])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          } else if (itemDetails.match(/Block A/)) {
            if (itemDetails.match(/Item ([1-2])/)) {
              await this.correctTickMark.click();
            } else if (itemDetails.match(/Item ([3-8])/)) {
              await this.activateTabletControlButton.click();
              await this.correctTickMark.click();
            }
          }

          const correctOption: string =
            await this.correctTickMark.textContent();
          score = 1;
          response = `[${correctOption}]`;
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`,
        );
      }

      const endTimer: number = performance.now();

      const RT: number = (endTimer - startTimer) / 1000;

      this.testRunTimeData[itemDetails] = {
        RT: Number(RT.toFixed(3)),
        Delivered_Order: delivery_order,
        Response: response,
        Score: score,
      };
      delivery_order++;

      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForRequest(() => true);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.testRunTimeData);
    return this.testRunTimeData;
  }

  async completeTheTakenTestForTestDataExportForLWIDNTTest(
    typeOfTest: string,
    wj5examineepage: wj5ExamineePage
  ): Promise<TestRunTimeData> {
    let score;
    let response;
    let delivery_order = 0;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const startTimer: number = performance.now();

      const itemDetails: string = await this.itemDetails.textContent();
      console.log(itemDetails);

      if (typeOfTest.match(/All correct scenario/i)) {
        if (itemDetails.startsWith("Introduction")) {
          score = 0;
          response = "";
        } else if (itemDetails.match(/Item/)) {
          let correctOption :string;

          if (itemDetails.match(/Item \b1\b/)) {
            correctOption = await wj5examineepage.swithToTheChildScreenAndClickCorrectOption();
            await this.bringExaminerPageToFront();
          } else if (itemDetails.match(/Item (\b[2-4]\b)|(1[4-5])/)) {
            await this.activateTabletControlButton.click();
            await this.correctAnswer.click();
            correctOption = await this.correctAnswer.textContent();
          } else if (
            itemDetails.match(/Item ([5-9])|(1[0-3])|(1[6-9])|([2-8][0-9])/)
          ) {
            await this.correctOptionButton.click();
            correctOption = await this.correctOptionButton.textContent();
          }

          score = 1;
          response = correctOption;
          
        }
      } else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }

      const endTimer: number = performance.now();

      const RT: number = (endTimer - startTimer) / 1000;

      this.testRunTimeData[itemDetails] = {
        RT: Number(RT.toFixed(3)),
        Delivered_Order: delivery_order,
        Response: response,
        Score: score,
      };
      delivery_order++;

      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForRequest(() => true);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.testRunTimeData);
    return this.testRunTimeData;
  }

  async completeTheTakenTestForTestDataExportForANLSYNTest(
    typeOfTest: string,
  ): Promise<TestRunTimeData> {
    let score;
    let response;
    let delivery_order = 0;

    const lastItemText: string = await this.page
      .locator(".items-container div span")
      .last()
      .textContent();
    const itemNumber: number = Number(lastItemText.split(" ")[1]);
    console.log(`Item Number ${itemNumber} \n`);

    this.scoreMap.set(` `, "^");
    for (let index = 1; index <= itemNumber; index++) {
      this.scoreMap.set(`Item ${index}`, "x");
    }

    console.log(`Type Of test ${typeOfTest} \n`);
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const startTimer: number = performance.now();

      const itemDetails: string = await this.itemDetails.textContent();
      console.log(itemDetails);

      if (itemDetails.startsWith("Introduction")) {
        if (!itemDetails.startsWith("Introduction 4")) {
        await this.videoPlayButton.click();
        await this.waitTillVideoIsComplete();
        }
        score = 0;
        response = "";

      } else if (itemDetails.match(/Item /)) {
          const correctOption: string = await this.correctOptionButton.textContent();
          await this.clickCorrectOption(await this.correctLocator(), itemDetails);
          score = 1;
          response = correctOption;

      } else if (itemDetails.match(/Trial 1/)) {
        if (itemDetails.match(/Yellow/)) {
          await this.clickCorrectColor(this.coloredSquare.nth(2));
          await this.clickCorrectColor(this.coloredSquare.nth(4));          
        } else if (itemDetails.match(/Black/)) {
          await this.clickCorrectColor(this.coloredSquare.nth(3));
          await this.clickCorrectColor(this.coloredSquare.nth(5));
        } else if (itemDetails.match(/Blue/)) {
          await this.clickCorrectColor(this.coloredSquare.nth(0));
          await this.clickCorrectColor(this.coloredSquare.nth(6));
        } else if (itemDetails.match(/Red/)) {
          await this.clickCorrectColor(this.coloredSquare.nth(1));
          await this.clickCorrectColor(this.coloredSquare.nth(7));
        }

        const correctOption: string = await this.correctOptionButton.textContent();
        score = 1;
        response = correctOption;

      } else {
          throw new Error(
            `The ${typeOfTest} didnt match with any of the conditions provided`,
          );
        }

      if (itemDetails.startsWith("Introduction")) {
        if (!itemDetails.startsWith("Introduction 4")) {
          await this.videoPlayingMessage.waitFor({
            state: "detached",
            timeout: 1.5 * 60 * 1000,
          });
        }  
    } 
   
      const endTimer: number = performance.now();

      const RT: number = (endTimer - startTimer) / 1000;

      this.testRunTimeData[itemDetails] = {
        RT: Number(RT.toFixed(3)),
        Delivered_Order: delivery_order,
        Response: response,
        Score: score,
      };

      delivery_order++;

      await this.plainNextButtonOrEndButton.click();
      await this.page.waitForRequest(() => true);

      if (
        (await this.plainNextButtonOrEndButton.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.testRunTimeData);
    return this.testRunTimeData;
  }

  async clickCorrectOption(correctlocator: Locator, itemDetails: string) {
    try {
      await correctlocator.click();
    } catch (error) {
      console.error(`Not able to click on the Correct Options ${error}`);
    }
  }

  async correctLocator(): Promise<Locator> {
    return this.correctOptionButton.first();
  }

  async clickCorrectColor(correctColorlocator: Locator) {
    try {
      await correctColorlocator.click();
      
    } catch (error) {
      console.error(`Not able to click on the Correct Color Option ${error}`);
    }
  }

  async bringExaminerPageToFront(): Promise<void> {
    await this.page.bringToFront();
  }

  async waitTillVideoIsComplete() {
    await this.replayButton.waitFor({
      state: "visible",
      timeout: 1.5 * 60 * 1000,
    });
  }

  async validateTheDownloadedReportWithRunTimeData(
    requiredFileName: string,
    textFileData,
    examineeID: string,
    examineeDOB: string,
    runTimeData: TestRunTimeData,
    testStemForm: string,
    testSchemaFileName: string,
  ) {
    let Examinee_ID: string[];
    let Examinee_CAMOS: string[];
    let Examiner_ID: string[];
    let TestStemForm: string[];

    const fileName = path.join(
      __dirname,
      `../../downloads/extracted/testDataExports/${requiredFileName}`,
    );
    await this.utils
      .parseCSV(fileName)
      .then((data) => {
        Examinee_ID = data["Examinee_ID"];
        Examinee_CAMOS = data["Examinee_CAMOS"];
        Examiner_ID = data["Examiner_ID"];
        TestStemForm = data["TestStemForm"];
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    softAssertPrint(
      examineeID,
      await this.utils.filterTheValues(Examinee_ID),
      "Examinee ID",
    );

    const textDataExaminee_ID: string = await this.utils.filterTheValues(Examinee_ID);
    
    if(textDataExaminee_ID == "" || textDataExaminee_ID == undefined || textDataExaminee_ID == null || textDataExaminee_ID.includes("No examinees meet the criteria specified.")){
      throw new Error("The Examinee ID assertion failed, probable cause the Report could be empty.");
    }

    const EDOT = await this.utils.getTheDOByearsBAck(0, "new Yark");
    const { camos } = getCAMOS(examineeDOB, EDOT);
    softAssertPrint(
      camos.toString(),
      await this.utils.filterTheValues(Examinee_CAMOS),
      "Examinee_CAMOS",
    );

    softAssertPrint(
      testStemForm,
      await this.utils.filterTheValues(TestStemForm),
      "TestStemForm",
    );

    const itemsData = await this.utils.readTestSchemaFile(testSchemaFileName);

    console.log(`itemsData =`, itemsData);

    await this.utils.validateAndAssert_CMSID_Examiner(textFileData, itemsData);

    await this.utils.validateAndAssert_CMSID_Examinee(
      textFileData,
      itemsData,
      testStemForm,
    );

    await this.utils.validateAndAssert_Master_ID(textFileData, itemsData);

    await this.utils.validateAndAssert_RT(textFileData, runTimeData);

    await this.utils.validateAndAssert_DeliveryOrder(textFileData, runTimeData);

    await this.utils.validateAndAssert_Response(textFileData, runTimeData);

    await this.utils.validateAndAssert_Score(textFileData, runTimeData);
  }
}
