import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5WrdatkPage {
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


  async completeTheTakenTestForWRDATK(
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
      } else if (itemDetails.match(/Trial 1/i)) {
        await iDontKnow.click();
      } else if (itemDetails.match(/Trial 2/i)) {
        await correctlocator.click();
      } else if (typeOfTest.match(/Block A EndTest Flow when RS is 2/i)) {
        const itemNumber = parseInt(itemDetails.split(" ")[1]);
            if(itemNumber >= 1 && itemNumber <= 2){
                await correctlocator.click();
            } else if(itemNumber === 3) {
                await iDontKnow.click();
            }
      } else if (
        typeOfTest.match(
          /Block B EndTest Flow with RS of 3 in Block A and 0 in Block B/i
        )
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 3
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 4 &&
          parseInt(itemDetails.split(" ")[1]) <= 10
        ) {
          await iDontKnow.click();
        }
      } else if (
        typeOfTest.match(/Block A & B forward flow scenario when RS is 4/i)
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 4
        ) {
          await correctlocator.click();
        } else if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 5 &&
          parseInt(itemDetails.split(" ")[1]) <= 10
        ) {
          await iDontKnow.click();
          if (parseInt(itemDetails.split(" ")[1]) === 10) {
            await expect.soft(this.nextText).toHaveText("Introduction 2");
            return;
          }
        }
      } else if (
        typeOfTest.match(
          /Block A & B forward flow scenario with all items correct/i
        )
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 10
        ) {
          await correctlocator.click();
          if (parseInt(itemDetails.split(" ")[1]) === 10) {
            await expect.soft(this.nextText).toHaveText("Introduction 2");
            return;
          }
        }
      } else if (typeOfTest.match(/Block ABC All Correct Scenario|Age 8 All Correct Scenario|Age 9 All Correct Scenario|Ages 10 to 11 All Correct Scenario|Ages 12 to 13 All Correct Scenario|Ages 14 to Average Adult All Correct Scenario|Above Average Adult All Correct Scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      }else if (typeOfTest.match(/Age 8 Basal & Ceiling scenario|Age 9 Basal & Ceiling scenario|Ages 10 to 11 Basal & Ceiling scenario|Ages 12 to 13 Basal & Ceiling scenario|Ages 14 to Average Adult Basal & Ceiling scenario|Above Average Adult Basal & Ceiling scenario/i)) {
        if (
            itemDetails === "Item 11" ||
            itemDetails === "Item 16" ||
            itemDetails === "Item 22" ||
            itemDetails === "Item 29" ||
            itemDetails === "Item 35" ||
            itemDetails === "Item 40"
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
      }else if(typeOfTest.match(/Age 8 Review Flow Scenario|Age 9 Review Flow Scenario|Ages 10 to 11 Review Flow Scenario|Ages 12 to 13 Review Flow Scenario|Ages 14 to Average Adult Review Flow Scenario|Above Average Adult Review Flow Scenario/i)){
        if (
            itemDetails === "Item 11" ||
            itemDetails === "Item 16" ||
            itemDetails === "Item 22" ||
            itemDetails === "Item 29" ||
            itemDetails === "Item 35" ||
            itemDetails === "Item 40"
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
                  if(typeOfTest === "Age 8 Review Flow Scenario"){
                     await Continue.click();
                     await EndTestClose.click();
                     await expect.soft(this.nextText).toHaveText("Introduction 1");
                     return;
                  }else if(typeOfTest === "Age 9 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 11");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=5; i++){
                      if(i === 5){
                        await iDontKnow.click(); //Item 15
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 11 to 14  
                        await this.plainNextButtonOrEndButton.click();           
                      }
                    }
                  }else if(typeOfTest === "Ages 10 to 11 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 16");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=11; i++){
                      if(i === 11){
                        await iDontKnow.click(); //Item 21
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 11 to 20  
                        await this.plainNextButtonOrEndButton.click();           
                      }
                    }
                  }else if(typeOfTest === "Ages 12 to 13 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 23");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=18; i++){
                      if(i === 18){
                        await iDontKnow.click(); //Item 28
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 11 to 27     
                        await this.plainNextButtonOrEndButton.click();        
                      }
                    }
                  }else if(typeOfTest === "Ages 14 to Average Adult Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 29");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=24; i++){
                      if(i === 24){
                        await iDontKnow.click(); //Item 34
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 11 to 33      
                        await this.plainNextButtonOrEndButton.click();       
                      }
                    }
                  }else if(typeOfTest === "Above Average Adult Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 34");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=29; i++){
                      if(i === 29){
                        await iDontKnow.click(); //Item 39
                        await expect.soft(this.nextText).toHaveText("Introduction 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 11 to 38   
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
      }else if (/Reverse Logic for (SSP3|SSP4|SSP5|SSP6|SSP7)/i.test(typeOfTest)) {
        const testType = typeOfTest.match(/SSP3|SSP4|SSP5|SSP6|SSP7/i)?.[0];
        const itemNumber = parseInt(itemDetails.match(/^Item (\d+)\b/)?.[1], 10);
      
        if (testType && itemNumber) {
          const conditions = {
            SSP3: { correct: Array.from({ length: 10 }, (_, i) => i + 1), dontKnow: [16, 11, ...Array.from({ length: 4 }, (_, i) => 12 + i)] },
            SSP4: { correct: Array.from({ length: 10 }, (_, i) => i + 1), dontKnow: [22, 16, 11, ...Array.from({ length: 4 }, (_, i) => 12 + i)] },
            SSP5: { correct: Array.from({ length: 10 }, (_, i) => i + 1), dontKnow: [29, 23, 17, 11, ...Array.from({ length: 5 }, (_, i) => 12 + i)] },
            SSP6: { correct: Array.from({ length: 10 }, (_, i) => i + 1), dontKnow: [35, 29, 23, 17, 11, ...Array.from({ length: 5 }, (_, i) => 12 + i)] },
            SSP7: { correct: Array.from({ length: 10 }, (_, i) => i + 1), dontKnow: [40, 34, 28, 22, 16, 11, ...Array.from({ length: 4 }, (_, i) => 12 + i)] },
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
