import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5OrlsmpPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly incorrectOptionButton: Locator;
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
    this.incorrectOptionButton = this.page.locator(
      ".select-group.incorrect button , .select-group.other-input button:nth-child(1) , .select-group.answer-buttons button"
    );
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.nextText = this.page.locator("//div[@class ='next-text']");
  }


  async completeTheTakenTestForORLSMP(
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
      } else if (itemDetails.match(/Trial 1/i)) {
        await iDontKnow.click();
      } else if (itemDetails.match(/Trial 2/i)) {
        await correctlocator.click();
      } else if (typeOfTest.match(/Block A EndTest Flow when RS is 3/i)) {
        const itemNumber = parseInt(itemDetails.split("Item ")[1]);
            if(itemNumber >= 1 && itemNumber <= 3){
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
      }else if (typeOfTest.match(/Block A Forward Flow when all correct/i)) {
        const itemNumber = parseInt(itemDetails.split("Item ")[1]);
            if(itemNumber >= 1 && itemNumber <= 3){
                await correctlocator.click();
            } else if(itemNumber === 4) {
                await correctlocator.click();
                await expect.soft(this.nextText).toHaveText("Introduction 3");
                return;
            }
      } else if (typeOfTest.match(/Block B EndTest Flow when RS is 3/i)) {
        const blockAItems = /^(Block A), Item ([1-4])\b/;
        const blockBItems = /^(Block B), Item ([1-5])\b/;

        if (itemDetails.match(blockAItems)) {
            await correctlocator.click();
        }else if (itemDetails.match(blockBItems)) {
            const itemNum = parseInt(itemDetails.match(blockBItems)[2]);
             if (itemNum >= 1 && itemNum <= 3) {
               await correctlocator.click();
             } else {
              await iDontKnow.click();
             }
          }
      }else if (typeOfTest.match(/Block B Forward Flow when RS is 4/i)) {
        const blockAItems = /^(Block A), Item ([1-4])\b/;
        const blockBItems = /^(Block B), Item ([1-5])\b/;

        if (itemDetails.match(blockAItems)) {
            await correctlocator.click();
        }else if (itemDetails.match(blockBItems)) {
            const itemNum = parseInt(itemDetails.match(blockBItems)[2]);
            if(itemNum === 1){
                await iDontKnow.click();
            } else if(itemNum >= 2 && itemNum <= 5 ) {
                if(itemNum === 5){
                    await correctlocator.click();
                    await expect.soft(this.nextText).toHaveText("Introduction 4");
                    return;
                }else{
                    await correctlocator.click();
                }
            }

        }      
      }else if (typeOfTest.match(/Block AB all correct with all incorrect in Block C/i)) {
          if(itemDetails.match(/Block (A|B)/i)){
            await correctlocator.click();
          }else if(itemDetails.match(/Block C/i)){
            await iDontKnow.click();
          }
      }else if (typeOfTest.match(/Block ABC all correct/i)) {
        if(itemDetails.match(/Block (A|B|C)/i)){
          await correctlocator.click();
        }
      }else if (typeOfTest.match(/Block B to A routing scenario when RS is 3 with all (correct|Incorrect) in Block A/i)) {
        const blockBItems = /^(Block B), Item ([1-5])\b/;
        const blockAItems = /^(Block A), Item ([1-4])\b/;

        const isCorrectScenario = typeOfTest.match(/Block B to A routing scenario when RS is 3 with all correct in Block A/i);

        if (itemDetails.match(blockBItems)) {
          const itemNum = parseInt(itemDetails.match(blockBItems)[2]);
           if (itemNum >= 1 && itemNum <= 3) {
             await correctlocator.click();
           } else {
            await iDontKnow.click();
           }
        } else if (itemDetails.match(blockAItems)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
      }else if (typeOfTest.match(/Block B Forward Flow when RS is 4(ssp2)/i)) {
        const blockBItems = /^(Block B), Item ([1-5])\b/;
         if (itemDetails.match(blockBItems)) {
            const itemNum = parseInt(itemDetails.match(blockBItems)[2]);
            if(itemNum === 1){
                await iDontKnow.click();
            } else if(itemNum >= 2 && itemNum <= 5 ) {
                if(itemNum === 5){
                    await correctlocator.click();
                    await expect.soft(this.nextText).toHaveText("Introduction 4");
                    return;
                }else{
                    await correctlocator.click();
                }
            }
        }      
      }else if (typeOfTest.match(/Block BC all correct/i)) {
        if(itemDetails.match(/Block (B|C)/i)){
          await correctlocator.click();
        }
      }else if (typeOfTest.match(/Block C all (correct|Incorrect)/i)) {
        const blockCItems = /^(Block C), Item ([1-9]|1[0-2])\b/;
        const isCorrectScenario = typeOfTest.match(/Block C all correct/i);

        if (itemDetails.match(blockCItems)) {
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
