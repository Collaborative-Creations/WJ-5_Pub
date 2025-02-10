import { test, expect, Page, Locator } from "../../base/basePageFixtures";
import wj5ExamineePage from "../wj5_examinee.page";

export default class wj5MatrczPage {
  private readonly page;
  readonly itemMap: Map<string, Map<string, string | number>>;
  private readonly scoreMap: Map<string, string>;

  private readonly plainNextButtonOrEndButton: Locator;
  private readonly corectOptionButton: Locator;
  private readonly IDK: Locator;
  private readonly itemDetails: Locator;
  private readonly nextText: Locator;
  private readonly videoPlayButton: Locator;



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
    this.videoPlayButton = this.page.locator("//button[@class='large-play']");
  }

  async completeTheTakenTestForMATRCZ(
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
        await this.videoPlayButton.click();
        await this.plainNextButtonOrEndButton.waitFor({ state: "visible" }); 
      }else if(itemDetails.match(/Trial 1/i)){
        await iDontKnow.click();
      }else if(itemDetails.match(/Trial 2/i)){
        await correctlocator.click();
      }else if(typeOfTest.match(/Block A EndTest Scenario when RS is 5/i)){
        const BlockAItems = /^(Block A), Item ([1-5])\b/;

        if(itemDetails.match(BlockAItems)){
           await correctlocator.click();
        }else{
           await iDontKnow.click();
        }

      } else if(typeOfTest.match(/Block A to Block C Forward Flow when RS is 7 in Block A and all (Correct|Incorrect) in Block C/i)){
        const BlockAItems = /^(Block A), Item ([1-7])\b/;
        const BlockCItems = /^(Block C), Item (1[7-9]|2[0-4])\b/;
        
        const isCorrect = typeOfTest.match(/Block A to Block C Forward Flow when RS is 7 in Block A and all Correct in Block C/i)

        if(itemDetails.match(BlockAItems)){
           await correctlocator.click();
        }else if(itemDetails.match(BlockCItems)){
           if(isCorrect){
             await correctlocator.click();
           }else{
             await iDontKnow.click();
           }
        }else{
           await iDontKnow.click();
        }
      }else if(typeOfTest.match(/Block A to Block D Forward Flow when RS is 8 in Block A and all (Correct|Incorrect) in Block D/i)){
        const BlockAItems = /^(Block A), Item ([1-8])\b/;
        const BlockDItems = /^(Block D), Item (2[5-9]|3[0-2])\b/;
        
        const isCorrect = typeOfTest.match(/Block A to Block D Forward Flow when RS is 8 in Block A and all Correct in Block D/i)

        if(itemDetails.match(BlockAItems)){
           await correctlocator.click();
        }else if(itemDetails.match(BlockDItems)){
           if(isCorrect){
             await correctlocator.click();
           }else{
             await iDontKnow.click();
           }
        }
      }else if(typeOfTest.match(/Block B to Block A routing Scenario when RS is 1 in Block B and all (Correct|Incorrect) in Block A/i)){
        const BlockAItems = /^(Block A), Item ([1-8])\b/;
        const BlockBItems = /^(Block B), Item (9|1[0-6])\b/;
        
        const isCorrect = typeOfTest.match(/Block B to Block A routing Scenario when RS is 1 in Block B and all Correct in Block A/i)

        if(itemDetails.match(BlockBItems)){
            if(itemDetails === 'Block B, Item 9'){
              await correctlocator.click(); 
            }else{
              await iDontKnow.click();
              if(itemDetails === 'Block B, Item 16'){
                await expect.soft(this.nextText).toHaveText('Block A, Item 1');
              }
            }
        }else if(itemDetails.match(BlockAItems)){
           if(isCorrect){
             await correctlocator.click();
           }else{
             await iDontKnow.click();
           }
        }
      }else if(typeOfTest.match(/Block B to Block C Forward Flow when RS is 4 in Block B and all (Correct|Incorrect) in Block C/i)){
        const BlockBItems = /^(Block B), Item (9|1[0-2])\b/;
        const BlockCItems = /^(Block C), Item (1[7-9]|2[0-4])\b/;
        
        const isCorrect = typeOfTest.match(/Block B to Block C Forward Flow when RS is 4 in Block B and all Correct in Block C/i)

        if(itemDetails.match(BlockBItems)){
           await correctlocator.click(); 
        }else if(itemDetails.match(BlockCItems)){
           if(isCorrect){
             await correctlocator.click();
           }else{
             await iDontKnow.click();
           }
        }else{
            await iDontKnow.click();
        }
      }else if(typeOfTest.match(/Block B to Block D Forward Flow when RS is 8 in Block B and all (Correct|Incorrect) in Block D/i)){
        const BlockBItems = /^(Block B), Item (9|1[0-6])\b/;
        const BlockDItems = /^(Block D), Item (2[5-9]|3[0-2])\b/;
        
        const isCorrect = typeOfTest.match(/Block B to Block D Forward Flow when RS is 8 in Block B and all Correct in Block D/i)

        if(itemDetails.match(BlockBItems)){
           await correctlocator.click(); 
        }else if(itemDetails.match(BlockDItems)){
           if(isCorrect){
             await correctlocator.click();
           }else{
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
