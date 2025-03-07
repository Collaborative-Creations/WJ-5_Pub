import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5OrlcmpPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly IDK: Locator;
  private readonly itemDetails: Locator;
  

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
   
  }

  async completeTheTakenTestForORLCMP(
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
      
      if(itemDetails.match(/Introduction/i)){
      }else if(itemDetails.match(/Trial 1/i)){
        await iDontKnow.click();
      }else if(itemDetails.match(/Trial 2/i)){
        await correctlocator.click();
      }else if (typeOfTest.match(/All Correct SSP (1|2|3|4|5|6)/i)) { 
          await correctlocator.click();
      }else if (/Reverse Logic for (SSP3|SSP4|SSP5|SSP6)/i.test(typeOfTest)) {
        const testType = typeOfTest.match(/SSP3|SSP4|SSP5|SSP6/i)?.[0];
        const itemNumber = parseInt(itemDetails.match(/^Item (\d+)\b/)?.[1], 10);
      
        if (testType && itemNumber) {
          const conditions = {
            SSP3: { dontKnow: [5, 1, ...Array.from({ length: 3 }, (_, i) => 2 + i)] },
            SSP4: { dontKnow: [8, 3, 1, ...Array.from({ length: 3 }, (_, i) => (i === 1 ? 4 : i === 2 ? 5 : 2 + i))] },
            SSP5: { dontKnow: [12, 7, 2, 1, ...Array.from({ length: 3 }, (_, i) => 3 + i)] },
            SSP6: { dontKnow: [18, 13, 8, 3, 1, ...Array.from({ length: 3 }, (_, i) => (i === 1 ? 4 : i === 2 ? 5 : 2 + i))] },
          };
      
          const { dontKnow } = conditions[testType];
          if (dontKnow.includes(itemNumber)) {
            await iDontKnow.click();
          }
        }
      }else if (/B&C (SSP1|SSP2|SSP3|SSP4|SSP5|SSP6)/i.test(typeOfTest)) {
        const testType = typeOfTest.match(/SSP1|SSP2|SSP3|SSP4|SSP5|SSP6/i)?.[0];
        const itemNumber = parseInt(itemDetails.match(/^Item (\d+)\b/)?.[1], 10);
        
        if (testType && itemNumber) {
            const ranges = {
              SSP1: { correctRange: [1, 2, 3, 4, 5], dontKnowRange: [6, 7, 8, 9, 10] },
              SSP2: { correctRange: [1, 2, 3, 4, 5], dontKnowRange: [6, 7, 8, 9, 10] },
              SSP3: { correctRange: [5, 6, 7, 8, 9], dontKnowRange: [10, 11, 12, 13, 14] },
              SSP4: { correctRange: [8, 9, 10, 11, 12], dontKnowRange: [13, 14, 15, 16, 17] },
              SSP5: { correctRange: [12, 13, 14, 15, 16], dontKnowRange: [17, 18, 19, 20, 21] },
              SSP6: { correctRange: [18, 19, 20, 21, 22], dontKnowRange: [23, 24, 25, 26, 27] },
            };
          
            const { correctRange, dontKnowRange } = ranges[testType];
                if (correctRange.includes(itemNumber)) {
                   await correctlocator.click();
                }else if(dontKnowRange.includes(itemNumber)){
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



