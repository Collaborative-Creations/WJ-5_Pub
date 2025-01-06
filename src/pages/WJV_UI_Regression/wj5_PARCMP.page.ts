import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5ParcmpPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  
  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
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
    this.itemDetails = this.page.locator(".introduction b.semibold, b").first();
    this.IDK = this.page.locator("//button[text()='I Donʼt Know']");
    this.nextText = this.page.locator("//div[@class ='next-text']");
  }

  async completeTheTakenTestForPARCMP(
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
      }else if (itemDetails.endsWith("Presentation")) {
        await this.page
          .locator("//button[@class='plain-button examinee-cursor-button']")
          .click();
        await this.page.locator("//button[text()='Done']").click();
      } else if (typeOfTest.match(/Block A EndTest Flow when RS is 3/i)) {
         const Story1Items = /^(Story 1), Item ([1-3])\b/;
         const Story2Items = /^(Story 2), Item ([1-3])\b/;
         
         if(itemDetails.match(Story1Items)){
           await correctlocator.click();
         }else if(itemDetails.match(Story2Items)){
           await iDontKnow.click();
         }
      }else if (typeOfTest.match(/Block A to B routing scenario when RS is 4 in Block A and Block AB EndTest check when RS is 15/i)) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-3])\b/; //Block A

        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B
        
        if(itemDetails.match(Story1Items)){
          await correctlocator.click();
        }else if(itemDetails.match(Story2Items)){
            const itemNum = parseInt(itemDetails.match(Story2Items)[2]);
            if (itemNum >= 1 && itemNum <= 2) {
              await iDontKnow.click();
            } else if(itemNum === 3) {
             await correctlocator.click();
             await expect.soft(this.nextText).toHaveText("Story 3, Presentation");
            }
        }else if(itemDetails.match(Story3Items) || itemDetails.match(Story4Items)){
            await correctlocator.click();
        }
     } else if (typeOfTest.match(/Block A to B to C routing scenario when RS is 5 in Block A and Block ABC EndTest check when RS is 16 with all (correct|Incorrect) in Block C/i)) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-3])\b/; //Block A

        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const isCorrectScenario = typeOfTest.match(/Block A to B to C routing scenario when RS is 5 in Block A and Block ABC EndTest check when RS is 16 with all correct in Block C/i);
        
        if(itemDetails.match(Story1Items)){
          await correctlocator.click();
        }else if(itemDetails.match(Story2Items)){
            const itemNum = parseInt(itemDetails.match(Story2Items)[2]);
            if (itemNum >= 1 && itemNum <= 2) {
              await correctlocator.click();
            } else if(itemNum === 3) {
             await iDontKnow.click();
             await expect.soft(this.nextText).toHaveText("Story 3, Presentation");
            }
        }else if(itemDetails.match(Story3Items)){
            await correctlocator.click();
        }else if(itemDetails.match(Story4Items)){
            const itemNum = parseInt(itemDetails.match(Story4Items)[2]);
            if (itemNum >= 1 && itemNum <= 5) {
                await correctlocator.click();
              } else if(itemNum === 6) {
               await correctlocator.click();
               await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
              }
        } else if (itemDetails.match(Story5Items) || itemDetails.match(Story6Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block B to A routing scenario when RS is 6 in Block B and Block AB EndTest check with all (correct|Incorrect) in Block A/i)) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-3])\b/; //Block A

        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const isCorrectScenario = typeOfTest.match(/Block B to A routing scenario when RS is 6 in Block B and Block AB EndTest check with all correct in Block A/i);
        
        if(itemDetails.match(Story3Items)){
          await correctlocator.click();
        }else if(itemDetails.match(Story4Items)){
            const itemNum = parseInt(itemDetails.match(Story4Items)[2]);
            if (itemNum === 1) {
              await correctlocator.click();
            } else if(itemNum >=2 && itemNum <=6) {
                if(itemNum === 6){
                    await iDontKnow.click();
                    await expect.soft(this.nextText).toHaveText("Story 1, Presentation");
                }else{
                    await iDontKnow.click();
                }
            }
        }else if (itemDetails.match(Story1Items) || itemDetails.match(Story2Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block B to C routing scenario when RS is 7 in Block B and Block BC EndTest check when RS is 17/i)) {
        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C
        
        if(itemDetails.match(Story3Items)){
            await correctlocator.click();
          }else if(itemDetails.match(Story4Items)){
              const itemNum = parseInt(itemDetails.match(Story4Items)[2]);
              if (itemNum >=1 && itemNum <=2) {
                await correctlocator.click();
              } else if(itemNum >=3 && itemNum <=6) {
                  if(itemNum === 6){
                      await iDontKnow.click();
                      await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
                  }else{
                      await iDontKnow.click();
                  }
              }
          }else if(itemDetails.match(Story5Items) || itemDetails.match(Story6Items)){
            await correctlocator.click();
        }
     }else if (typeOfTest.match(/Block B to C to D routing scenario when RS is 10 in Block B and Block BCD EndTest check when RS is 20 with all (correct|Incorrect) in Block D/i)) {
        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const Story7Items = /^(Story 7), Item ([1-5])\b/;
        const Story8Items = /^(Story 8), Item ([1-5])\b/; //Block D

        const isCorrectScenario = typeOfTest.match(/Block B to C to D routing scenario when RS is 10 in Block B and Block BCD EndTest check when RS is 20 with all correct in Block D/i);
        
        if(itemDetails.match(Story3Items)){
          await correctlocator.click();
        }else if(itemDetails.match(Story4Items)){
            const itemNum = parseInt(itemDetails.match(Story4Items)[2]);
            if (itemNum >= 1 && itemNum <= 5) {
              await correctlocator.click();
            } else if(itemNum === 6) {
             await iDontKnow.click();
             await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
            }
        }else if (itemDetails.match(Story5Items) || itemDetails.match(Story6Items)) {
            if (itemDetails.match(Story5Items)) {
                await correctlocator.click();
            } else if(itemDetails.match(Story6Items)) {
                const itemNum = parseInt(itemDetails.match(Story6Items)[2]);
                if(itemNum === 5){
                    await correctlocator.click();
                    await expect.soft(this.nextText).toHaveText("Story 7, Presentation");
                }else{
                    await correctlocator.click();
                }
            }
        }else if (itemDetails.match(Story7Items) || itemDetails.match(Story8Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block C to B routing scenario when RS is 4 in Block C and Block BC EndTest check with all (correct|Incorrect) in Block B/i)) {
        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const isCorrectScenario = typeOfTest.match(/Block C to B routing scenario when RS is 4 in Block C and Block BC EndTest check with all correct in Block B/i);
        
        if(itemDetails.match(Story5Items)){
            const itemNum = parseInt(itemDetails.match(Story5Items)[2]);
            if(itemNum >=1 && itemNum <=4){
                await correctlocator.click();
            }else{
                await iDontKnow.click();
            }
        }else if(itemDetails.match(Story6Items)){
            const itemNum = parseInt(itemDetails.match(Story6Items)[2]);
            if(itemNum === 5){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 3, Presentation");
            }else{
                await iDontKnow.click();
            }
        }else if (itemDetails.match(Story3Items) || itemDetails.match(Story4Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block C to B routing scenario when RS is 0 in Block C and routing check to Block A when RS is 1 in Block B and Block ABC EndTest check with all (correct|Incorrect) in Block A/i)) {
        const Story1Items = /^(Story 1), Item ([1-3])\b/;
        const Story2Items = /^(Story 2), Item ([1-3])\b/; //Block A

        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const isCorrectScenario = typeOfTest.match(/Block C to B routing scenario when RS is 0 in Block C and routing check to Block A when RS is 1 in Block B and Block ABC EndTest check with all correct in Block A/i);
        
        if(itemDetails.match(Story5Items)){
            await iDontKnow.click();
        }else if(itemDetails.match(Story6Items)){
            const itemNum = parseInt(itemDetails.match(Story6Items)[2]);
            if(itemNum === 5){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 3, Presentation");
            }else{
                await iDontKnow.click();
            }
        }else if (itemDetails.match(Story3Items)) {
            const itemNum = parseInt(itemDetails.match(Story3Items)[2]);
            if(itemNum === 1){
                await correctlocator.click();
            }else{
                await iDontKnow.click();
            }
        }else if(itemDetails.match(Story4Items)){
            const itemNum = parseInt(itemDetails.match(Story4Items)[2]);
            if(itemNum === 6){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 1, Presentation");
            }else{
                await iDontKnow.click();
            }
        }else if (itemDetails.match(Story1Items) || itemDetails.match(Story2Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block C to D routing scenario when RS is 5 in Block C and Block CD EndTest check when RS is 15/i)) {
        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const Story7Items = /^(Story 7), Item ([1-5])\b/;
        const Story8Items = /^(Story 8), Item ([1-5])\b/; //Block D
        
        if(itemDetails.match(Story5Items)){
            await correctlocator.click();
          }else if(itemDetails.match(Story6Items)){
              const itemNum = parseInt(itemDetails.match(Story6Items)[2]);
            if(itemNum === 5){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 7, Presentation");
            }else{
                await iDontKnow.click();
            }
              
          }else if(itemDetails.match(Story7Items) || itemDetails.match(Story8Items)){
            await correctlocator.click();
        }
     }else if (typeOfTest.match(/Block C to D to E routing scenario when RS is 9 in Block C and Block CDE EndTest check when RS is 19 with all (correct|Incorrect) in Block E/i)) {
        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const Story7Items = /^(Story 7), Item ([1-5])\b/;
        const Story8Items = /^(Story 8), Item ([1-5])\b/; //Block D

        const Story9Items = /^(Story 9), Item ([1-5])\b/;
        const Story10Items = /^(Story 10), Item ([1-6])\b/; //Block E

        const isCorrectScenario = typeOfTest.match(/Block C to D to E routing scenario when RS is 9 in Block C and Block CDE EndTest check when RS is 19 with all correct in Block E/i);
        
        if(itemDetails.match(Story5Items)){
          await correctlocator.click();
        }else if(itemDetails.match(Story6Items)){
            const itemNum = parseInt(itemDetails.match(Story6Items)[2]);
            if (itemNum >= 1 && itemNum <= 4) {
              await correctlocator.click();
            } else if(itemNum === 5) {
             await iDontKnow.click();
             await expect.soft(this.nextText).toHaveText("Story 7, Presentation");
            }
        }else if (itemDetails.match(Story7Items) || itemDetails.match(Story8Items)) {
            if (itemDetails.match(Story7Items)) {
                await correctlocator.click();
            } else if(itemDetails.match(Story8Items)) {
                const itemNum = parseInt(itemDetails.match(Story8Items)[2]);
                if(itemNum === 5){
                    await correctlocator.click();
                    await expect.soft(this.nextText).toHaveText("Story 9, Presentation");
                }else{
                    await correctlocator.click();
                }
            }
        }else if (itemDetails.match(Story9Items) || itemDetails.match(Story10Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block D to C routing scenario when RS is 4 in Block D and Block CD EndTest check with all (correct|Incorrect) in Block C/i)) {
        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const Story7Items = /^(Story 7), Item ([1-5])\b/;
        const Story8Items = /^(Story 8), Item ([1-5])\b/; //Block D

        const isCorrectScenario = typeOfTest.match(/Block D to C routing scenario when RS is 4 in Block D and Block CD EndTest check with all correct in Block C/i);
        
        if(itemDetails.match(Story7Items)){
            const itemNum = parseInt(itemDetails.match(Story7Items)[2]);
            if(itemNum >=1 && itemNum <=4){
                await correctlocator.click();
            }else{
                await iDontKnow.click();
            }
        }else if(itemDetails.match(Story8Items)){
            const itemNum = parseInt(itemDetails.match(Story8Items)[2]);
            if(itemNum === 5){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
            }else{
                await iDontKnow.click();
            }
        }else if (itemDetails.match(Story5Items) || itemDetails.match(Story6Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block D to C routing scenario when RS is 0 in Block D and routing check to Block B when RS is 1 in Block C and Block BCD EndTest check with all (correct|Incorrect) in Block B/i)) {
        const Story3Items = /^(Story 3), Item ([1-5])\b/;
        const Story4Items = /^(Story 4), Item ([1-6])\b/; //Block B

        const Story5Items = /^(Story 5), Item ([1-5])\b/;
        const Story6Items = /^(Story 6), Item ([1-5])\b/; //Block C

        const Story7Items = /^(Story 7), Item ([1-5])\b/;
        const Story8Items = /^(Story 8), Item ([1-5])\b/; //Block D

        const isCorrectScenario = typeOfTest.match(/Block D to C routing scenario when RS is 0 in Block D and routing check to Block B when RS is 1 in Block C and Block BCD EndTest check with all correct in Block B/i);
        
        if(itemDetails.match(Story7Items)){
            await iDontKnow.click();
        }else if(itemDetails.match(Story8Items)){
            const itemNum = parseInt(itemDetails.match(Story8Items)[2]);
            if(itemNum === 5){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 5, Presentation");
            }else{
                await iDontKnow.click();
            }
        }else if (itemDetails.match(Story5Items)) {
            const itemNum = parseInt(itemDetails.match(Story5Items)[2]);
            if(itemNum === 1){
                await correctlocator.click();
            }else{
                await iDontKnow.click();
            }
        }else if(itemDetails.match(Story6Items)){
            const itemNum = parseInt(itemDetails.match(Story6Items)[2]);
            if(itemNum === 5){
                await iDontKnow.click();
                await expect.soft(this.nextText).toHaveText("Story 3, Presentation");
            }else{
                await iDontKnow.click();
            }
        }else if (itemDetails.match(Story3Items) || itemDetails.match(Story4Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
            }
        }
     }else if (typeOfTest.match(/Block D to E routing scenario when RS is 5 in Block D and Block DE EndTest check with all (correct|Incorrect) in Block E/i)) {
        const Story7Items = /^(Story 7), Item ([1-5])\b/;
        const Story8Items = /^(Story 8), Item ([1-5])\b/; //Block D

        const Story9Items = /^(Story 9), Item ([1-5])\b/;
        const Story10Items = /^(Story 10), Item ([1-6])\b/; //Block E

        const isCorrectScenario = typeOfTest.match(/Block D to E routing scenario when RS is 5 in Block D and Block DE EndTest check with all correct in Block E/i);
        
        if(itemDetails.match(Story7Items)){
          await correctlocator.click();
        }else if(itemDetails.match(Story8Items)){
            const itemNum = parseInt(itemDetails.match(Story8Items)[2]);
            if (itemNum >= 1 && itemNum <= 4) {
              await iDontKnow.click();
            } else if(itemNum === 5) {
             await iDontKnow.click();
             await expect.soft(this.nextText).toHaveText("Story 9, Presentation");
            }
        }else if (itemDetails.match(Story9Items) || itemDetails.match(Story10Items)) {
            if (isCorrectScenario) {
                await correctlocator.click();
            } else {
                await iDontKnow.click();
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
