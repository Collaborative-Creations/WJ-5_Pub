import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5StyrecPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
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
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.nextText = this.page.locator("//div[@class ='next-text']");
  }


  async completeTheTakenTestForSTYREC(
    typeOfTest: string
  ): Promise<Map<string, string>> {
    const itemNumber: number = Number(
      await this.page.locator(".items-container div span").last().textContent()
    );
    while (await this.plainNextButtonOrEndButton.isVisible()) {
      const itemDetails: string = (await this.itemDetails.textContent())!;
      console.log(itemDetails);
      const iDontKnow: Locator = this.IDK;
      const locatorWrapper: Locator = this.page.locator("//button[@class='select-option']");
      const elements = await locatorWrapper.count();

      if (itemDetails.startsWith("Introduction")) {
      }else if (typeOfTest.match(/Story 1&2 EndTest Flow when RS is 4/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 1: 4 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            } else if (itemNumber === 2) {
                await iDontKnow.click();
            }
        }
    }else if (typeOfTest.match(/Story 1&2 forward Flow to Story 3 when RS is 10/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 1: 4, 2: 6 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
    
                if (itemNumber === 2) {
                    await expect.soft(this.nextText).toHaveText("Story 3");
                    return;
                }
            }
        }
    }else if (typeOfTest.match(/Story 1 to 4 End Test Flow when RS is 17/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 1: 4, 2: 6, 3: 7 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            } else if (itemNumber === 4) {
                await iDontKnow.click();
            }
        }
    }else if (typeOfTest.match(/Story 1 to 4 forward Flow to Story 5 when RS is 24/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 1: 4, 2: 6, 3: 7, 4: 7 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
    
                if (itemNumber === 4) {
                    await expect.soft(this.nextText).toHaveText("Story 5");
                    return;
                }
            }
        }
    }else if (typeOfTest.match(/Story 1 to 6 End Test Flow with all correct/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 1: 4, 2: 6, 3: 7, 4: 7, 5: 8, 6: 8 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }
        }
    }else if (typeOfTest.match(/Story 3 and 4 to 1 and 2 End Test Flow with RS 4 in stories 3&4/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 3: 4, 1: 4, 2: 6 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }else if(itemNumber === 4){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 1");
             }
        }
    }else if (typeOfTest.match(/Story 3 to 6 EndTest Scenario with RS 7 in stories 3&4 and RS 23 in 3to6/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 3: 7, 5: 8, 6: 8 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }else if(itemNumber === 4){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 5");
             }
        }
    }else if (typeOfTest.match(/Story 3 to 8 End Test Flow with all correct/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 3: 7, 4: 7, 5: 8, 6: 8, 7: 14, 8: 17};
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }
        }
    }else if (typeOfTest.match(/Story 5 and 6 to 3 and 4 End Test Flow with RS 7 in stories 5&6 and RS 21 in 3to6/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 5: 7, 3: 7, 4: 7 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }                 
            }else if(itemNumber === 6){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 3");
             }      
        }
    }else if (typeOfTest.match(/Story 5 and 6 to 3 and 4 and to 1 and 2 End Test Flow with RS 1 in stories 5&6 and RS 1 in 3to6/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]); 
            const clickLimits = { 5: 1, 1: 4, 2: 6 };
            const actions = {
                6: async () => {
                    await iDontKnow.click();
                    await expect.soft(this.nextText).toHaveText("Story 3");
                },
                3: async () => {
                    await iDontKnow.click();
                },
                4: async () => {
                    await iDontKnow.click();
                    await expect.soft(this.nextText).toHaveText("Story 1");
                }
            };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }else if (actions[itemNumber]) {
                await actions[itemNumber]();
            }
        }
    }else if (typeOfTest.match(/Story 5 and 6 to 7 and 8 End Test Flow with RS 8 in stories 5&6 and RS 39 in 5to8/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 5: 8, 7: 14, 8: 17 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }                    
            }else if(itemNumber === 6){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 7");
             }   
        }
    }else if (typeOfTest.match(/Story 5 to 10 End Test Flow with all correct/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 5: 8, 6: 8, 7: 14, 8: 17, 9: 18, 10: 19};
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }
        }
    }else if (typeOfTest.match(/Story 7 and 8 to 5 and 6 End Test Flow with RS 13 in stories 7&8 and RS 29 in 5to8/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 7: 13, 5: 8, 6: 8 };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }              
            }else if(itemNumber === 8){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 5");
             }         
        }
    }else if (typeOfTest.match(/Story 7 and 8 to 5 and 6 and to 3 and 4 End Test Flow with RS 1 in stories 7&8 and RS 1 in 5to8/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]); 
            const clickLimits = { 7: 1, 3: 7, 4: 7 };
            const actions = {
                8: async () => {
                    await iDontKnow.click();
                    await expect.soft(this.nextText).toHaveText("Story 5");
                },
                5: async () => {
                    await iDontKnow.click();
                },
                6: async () => {
                    await iDontKnow.click();
                    await expect.soft(this.nextText).toHaveText("Story 3");
                }
            };
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
            }else if (actions[itemNumber]) {
                await actions[itemNumber]();
            }
        }
    }else if (typeOfTest.match(/Story 7 to 10 End Test Flow with all correct/i)) {
        if (itemDetails.startsWith("Story ")) {
            const itemNumber = parseInt(itemDetails.split(" ")[1]);
            const clickLimits = { 7: 14, 8: 17, 9: 18, 10: 19};
    
            if (itemNumber in clickLimits) {
                const limit = Math.min(clickLimits[itemNumber], elements);
                for (let i = 0; i < limit; i++) {
                    await locatorWrapper.nth(i).click();
                }
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
    console.log(this.scoreMap);
    return this.scoreMap;
  }

} 
