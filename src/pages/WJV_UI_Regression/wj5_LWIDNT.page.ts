import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5LwidntPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly IDK: Locator;
  private readonly itemDetails: Locator;
  private readonly nextText: Locator;
  private readonly flagItem: Locator;
  private readonly reviewBtn: Locator;
  private readonly reviewFlaggedItemsBtn: Locator;
  private readonly notesCloseBtn: Locator;
  private readonly doneBtn: Locator;
  private readonly reviewContinueBtn: Locator;
  private readonly closeBtn: Locator;
  private readonly scoreCheckItemTxt: Locator;
  private readonly launchtstandrslv: Locator;

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
    this.flagItem = this.page.locator("(//button[@class='plain-button no-border flag-button']/child::*)[1]");
    this.reviewBtn = this.page.locator("//b[text()='Review']");
    this.reviewFlaggedItemsBtn = this.page.locator("//button[text()='Review Flagged Items']");
    this.notesCloseBtn = this.page.locator("//button[@class='plain-button close-btn']");
    this.doneBtn = this.page.locator("//button[text()='Done']");
    this.reviewContinueBtn = this.page.locator("//b[text()='Continue']");
    this.closeBtn = this.page.locator("//button[@class='close-btn']");
    this.scoreCheckItemTxt = this.page.locator("//div[@class= 'select-group other score-check']/button");
    this.launchtstandrslv = this.page.locator("//button[text()='Launch Test and Resolve']");
  }


  async completeTheTakenTestForLWIDNT(
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
      const flag: Locator = this.flagItem;
      const review: Locator = this.reviewBtn;
      const ReviewFlaggedItems: Locator = this.reviewFlaggedItemsBtn;
      const closeNotes: Locator = this.notesCloseBtn;
      const Done: Locator = this.doneBtn;
      const Continue: Locator = this.reviewContinueBtn;
      const EndTestClose: Locator = this.closeBtn;
      const ScoreCheckItemText: Locator = this.scoreCheckItemTxt;
      const LaunchTestAndResolve: Locator = this.launchtstandrslv;

      if (itemDetails.startsWith("Introduction")) {
      }else if (typeOfTest.match(/Block A EndTest Flow when RS is 0/i)) {
        const itemNumber = parseInt(itemDetails.split(" ")[1]);
            if(itemNumber >= 1 && itemNumber <= 4){
                await iDontKnow.click();
            } 
      } else if (
        typeOfTest.match(/Block A forward flow scenario when RS is 1/i)
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 4
        ) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]);
      
          if (itemNumber === 1) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
      
          if (itemNumber === 4) {
            await expect.soft(this.nextText).toHaveText("Introduction 2");
            return;
          }
        }
      }else if (
        typeOfTest.match(/Block AB EndTest flow scenario when RS is 9/i)
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 15
        ) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]);
      
          if (itemNumber <= 9) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }
      
        }
      } else if (
        typeOfTest.match(/Block AB to C Forward flow scenario when RS is 10/i)
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 15
        ) {
          const itemNumber = parseInt(itemDetails.split(" ")[1]);
      
          if (itemNumber <= 10) {
            await correctlocator.click();
          } else {
            await iDontKnow.click();
          }

          if (itemNumber === 15) {
            await expect.soft(this.nextText).toHaveText("Introduction 4");
            return;
          }
      
        }
      } else if (typeOfTest.match(/All Correct SSP (1|2|3|4|5|6)/i)) { 
        await correctlocator.click();
      }else if (typeOfTest.match(/Age 6 Basal & Ceiling scenario|Age 7 Basal & Ceiling scenario|Age 8 Basal & Ceiling scenario|Ages 9 to 11 Basal & Ceiling scenario|Age 12 to Adult Basal & Ceiling scenario/i)) {
        if (
            itemDetails === "Item 16" ||
            itemDetails === "Item 30" ||
            itemDetails === "Item 40" ||
            itemDetails === "Item 50" ||
            itemDetails === "Item 60" 
        ) {
            for (let i = 1; i <= 6; i++) {
              await correctlocator.click();
              await this.plainNextButtonOrEndButton.click();
            }

            for (let i = 1; i <= 6; i++) {
              if(i === 6){
                await iDontKnow.click();
              }else{
              await iDontKnow.click();
              await this.plainNextButtonOrEndButton.click();
              }
            }

        }
      }else if(typeOfTest.match(/Age 6 Review Flow Scenario|Age 7 Review Flow Scenario|Age 8 Review Flow Scenario|Ages 9 to 11 Review Flow Scenario|Age 12 to Adult Review Flow Scenario/i)){
        if (
            itemDetails === "Item 16" ||
            itemDetails === "Item 30" ||
            itemDetails === "Item 40" ||
            itemDetails === "Item 50" ||
            itemDetails === "Item 60" 
        ) {
            for (let i = 1; i <= 6; i++) {
              if(i === 5 || i === 6){
                await correctlocator.click();
                await this.plainNextButtonOrEndButton.click();
              }else{
                await correctlocator.click();
                await flag.click();
                await this.plainNextButtonOrEndButton.click();
              } 
            }

            for (let i = 1; i <= 6; i++) {
                if(i === 6){
                  await iDontKnow.click();
                  await this.plainNextButtonOrEndButton.click();
                  await review.click();
                  for(let i = 1; i<=4; i++){
                    await ReviewFlaggedItems.click();              
                    await closeNotes.click();               
                    await correctlocator.click();               
                    await iDontKnow.click();              
                    await Done.click();                
                  }
                  if(typeOfTest === "Age 6 Review Flow Scenario"){
                     await Continue.click();
                     await EndTestClose.click();
                     await expect.soft(this.nextText).toHaveText("Introduction 1");
                     return;
                  }else if(typeOfTest === "Age 7 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 24");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=14; i++){
                      if(i === 14){
                        await iDontKnow.click(); //Item 29
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 16 to 28  
                        await this.plainNextButtonOrEndButton.click();           
                      }
                    }
                  }else if(typeOfTest === "Age 8 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 34");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=24; i++){
                      if(i === 24){
                        await iDontKnow.click(); //Item 39
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 16 to 38  
                        await this.plainNextButtonOrEndButton.click();           
                      }
                    }
                  }else if(typeOfTest === "Ages 9 to 11 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 44");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=34; i++){
                      if(i === 34){
                        await iDontKnow.click(); //Item 49
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 16 to 48     
                        await this.plainNextButtonOrEndButton.click();        
                      }
                    }
                  }else if(typeOfTest === "Age 12 to Adult Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 54");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=44; i++){
                      if(i === 44){
                        await iDontKnow.click(); //Item 59
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 16 to 58   
                        await this.plainNextButtonOrEndButton.click();          
                      }
                    }
                  }
                }else{
                  await iDontKnow.click();
                  await this.plainNextButtonOrEndButton.click();          
                }
                
            }

        }
      }else if (/Reverse Logic for (SSP3|SSP4|SSP5|SSP6)/i.test(typeOfTest)) {
        const testType = typeOfTest.match(/SSP3|SSP4|SSP5|SSP6/i)?.[0];
        const itemNumber = parseInt(itemDetails.match(/^Item (\d+)\b/)?.[1], 10);
      
        if (testType && itemNumber) {
          const conditions = {
            SSP3: { correct: Array.from({ length: 15 }, (_, i) => i + 1), dontKnow: [30, 24, 18, 16, ...Array.from({ length: 4 }, (_, i) => (i === 1 ? 19 : i === 2 ? 20 : i === 3 ? 21 : 17 + i))] },
            SSP4: { correct: Array.from({ length: 15 }, (_, i) => i + 1), dontKnow: [40, 34, 28, 22, 16, ...Array.from({ length: 5 }, (_, i) => 17 + i)] },
            SSP5: { correct: Array.from({ length: 15 }, (_, i) => i + 1), dontKnow: [50, 44, 38, 32, 26, 20, 16, ...Array.from({ length: 4 }, (_, i) => (i === 3 ? 21 : 17 + i))] },
            SSP6: { correct: Array.from({ length: 15 }, (_, i) => i + 1), dontKnow: [60, 54, 48, 42, 36, 30, 24, 18, 16, ...Array.from({ length: 4 }, (_, i) => (i === 1 ? 19 : i === 2 ? 20 : i === 3 ? 21 : 17 + i))] },
          };
      
          const { correct, dontKnow } = conditions[testType];
          if (correct.includes(itemNumber)) {
            await correctlocator.click();
          } else if (dontKnow.includes(itemNumber)) {
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
