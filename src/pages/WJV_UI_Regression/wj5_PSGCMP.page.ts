import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5PsgcmpPage {
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


  async completeTheTakenTestForPSGCMP(
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
      } else if (typeOfTest.match(/Block A EndTest Flow when RS is 3/i)) {
        const itemNumber = parseInt(itemDetails.split(" ")[1]);
            if(itemNumber >= 1 && itemNumber <= 3){
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
      } else if (
        typeOfTest.match(/Block A forward flow scenario when RS is 4/i)
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
          parseInt(itemDetails.split(" ")[1]) <= 7
        ) {
          await iDontKnow.click();
          if (parseInt(itemDetails.split(" ")[1]) === 7) {
            await expect.soft(this.nextText).toHaveText("Sample Item A, Trial 1");
            return;
          }
        }
      } else if (
        typeOfTest.match(
          /Block A forward flow scenario with all items correct/i
        )
      ) {
        if (
          itemDetails.startsWith("Item") &&
          parseInt(itemDetails.split(" ")[1]) >= 1 &&
          parseInt(itemDetails.split(" ")[1]) <= 7
        ) {
          await correctlocator.click();
          if (parseInt(itemDetails.split(" ")[1]) === 7) {
            await expect.soft(this.nextText).toHaveText("Sample Item A, Trial 1");
            return;
          }
        }
      } else if (typeOfTest.match(/Block AB All Correct Scenario|Age 7 All Correct Scenario|Ages 8 to 9 All Correct Scenario|Ages 10 to 11 All Correct Scenario|Age 12 to Average Adult All Correct Scenario|Above Average Adult All Correct Scenario/i)) {
        if (itemDetails.startsWith("Item")) {
          await correctlocator.click();
        }
      }else if (typeOfTest.match(/Age 7 Basal & Ceiling scenario|Ages 8 to 9 Basal & Ceiling scenario|Ages 10 to 11 Basal & Ceiling scenario|Age 12 to Average Adult Basal & Ceiling scenario|Above Average Adult Basal & Ceiling scenario/i)) {
        if (
            itemDetails === "Item 8" ||
            itemDetails === "Item 12" ||
            itemDetails === "Item 15" ||
            itemDetails === "Item 18" ||
            itemDetails === "Item 24" 
        ) {
            for (let i = 1; i <= 6; i++) {
              await correctlocator.click();
              await this.plainNextButtonOrEndButton.click();
            }

            for (let i = 1; i <= 5; i++) {
              if(i === 5){
                await iDontKnow.click();
              }else{
              await iDontKnow.click();
              await this.plainNextButtonOrEndButton.click();
              }
            }

        }
      }else if(typeOfTest.match(/Age 7 Review Flow Scenario|Ages 8 to 9 Review Flow Scenario|Ages 10 to 11 Review Flow Scenario|Age 12 to Average Adult Review Flow Scenario|Above Average Adult Review Flow Scenario/i)){
        if (
            itemDetails === "Item 8" ||
            itemDetails === "Item 12" ||
            itemDetails === "Item 15" ||
            itemDetails === "Item 18" ||
            itemDetails === "Item 24" 
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

            for (let i = 1; i <= 5; i++) {
                if(i === 5){
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
                  if(typeOfTest === "Age 7 Review Flow Scenario"){
                     await Continue.click();
                     await EndTestClose.click();
                     await expect.soft(this.nextText).toHaveText("Item 1");
                     return;
                  }else if(typeOfTest === "Ages 8 to 9 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 8");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=4; i++){
                      if(i === 4){
                        await iDontKnow.click(); //Item 11
                        await expect.soft(this.nextText).toHaveText("Item 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 8 to 10  
                        await this.plainNextButtonOrEndButton.click();           
                      }
                    }
                  }else if(typeOfTest === "Ages 10 to 11 Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 10");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=7; i++){
                      if(i === 7){
                        await iDontKnow.click(); //Item 14
                        await expect.soft(this.nextText).toHaveText("Item 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 8 to 13  
                        await this.plainNextButtonOrEndButton.click();           
                      }
                    }
                  }else if(typeOfTest === "Age 12 to Average Adult Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 13");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=10; i++){
                      if(i === 10){
                        await iDontKnow.click(); //Item 17
                        await expect.soft(this.nextText).toHaveText("Item 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 8 to 16     
                        await this.plainNextButtonOrEndButton.click();        
                      }
                    }
                  }else if(typeOfTest === "Above Average Adult Review Flow Scenario"){
                    await expect.soft(ScoreCheckItemText).toContainText("Item 19");
                    await LaunchTestAndResolve.click();
                    for(let i = 1; i<=16; i++){
                      if(i === 16){
                        await iDontKnow.click(); //Item 23
                        await expect.soft(this.nextText).toHaveText("Item 1");
                        return;                
                      }else{
                        await iDontKnow.click(); //Item 8 to 22   
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
            SSP3: { correct: Array.from({ length: 7 }, (_, i) => i + 1), dontKnow: [12, 8, ...Array.from({ length: 3 }, (_, i) => 9 + i)] },
            SSP4: { correct: Array.from({ length: 7 }, (_, i) => i + 1), dontKnow: [15, 10, 8, ...Array.from({ length: 3 }, (_, i) => (i === 1 ? 11 : i === 2 ? 12 : 9 + i))] },
            SSP5: { correct: Array.from({ length: 7 }, (_, i) => i + 1), dontKnow: [18, 13, 8, ...Array.from({ length: 4 }, (_, i) => 9 + i)] },
            SSP6: { correct: Array.from({ length: 7 }, (_, i) => i + 1), dontKnow: [24, 19, 14, 9, 8, ...Array.from({ length: 3 }, (_, i) => 10 + i)] },
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
