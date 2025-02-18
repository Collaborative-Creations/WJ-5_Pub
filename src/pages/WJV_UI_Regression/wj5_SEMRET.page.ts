import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5SemretPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly itemDetails: Locator;
  private readonly startTimer: Locator;
  private readonly addButton: Locator;
  private readonly NextAndendTestBtn: Locator;
  private readonly NextAndendTestBtn2: Locator;

  

  constructor(page: Page) {
    this.page = page;
    this.itemMap = new Map();
    this.scoreMap = new Map();

   
    this.plainNextButtonOrEndButton = this.page.locator(
      "button.plain-button.next-item-button, button.plain-button.nav-button"
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.startTimer = this.page.locator("[class='plain-button blue-button']");
    this.addButton = this.page.locator("[class='plain-button blue-text-button correct-left']");
    this.NextAndendTestBtn = this.page.locator(
        "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[1]",
      );
      this.NextAndendTestBtn2 = this.page.locator(
        "(//button[@class='plain-button next-item-button' or @class ='plain-button nav-button'])[2]",
      );
    
  }


  async completeTheTakenTestForSEMRET(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      

      if (typeOfTest.match(/125 correct scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          await this.startTimer.click();
          const numberOfClicks = 125; 
          for (let i = 1; i <= numberOfClicks; i++) {
            await this.addButton.click();
          }
        }
      }else if (typeOfTest.match(/All incorrect scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          await this.startTimer.click();
        }
      }else {
        throw new Error(
          `The ${typeOfTest} didnt match with any of the conditions provided`
        );
      }
      await this.NextAndendTestBtn2.waitFor({ state: "visible" });

      await this.NextAndendTestBtn2.click();
      if (
        (await this.NextAndendTestBtn.textContent()) === "End Test"
      ) {
        break;
      }
    }
    console.log(this.scoreMap);
    return this.scoreMap;
  }

} 
