import { Locator, Page } from "@playwright/test";
import { getSiteUrl } from "../utils/testData";

export default class Wj5LoginPage {
  private readonly page: Page;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly signinButton: Locator;
  private readonly wj5Tyle: Locator;
  private readonly createTestAssignment: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    this.signinButton = this.page.getByRole("button", { name: "Sign In" });
    this.wj5Tyle = this.page.locator("//button[@class='product-display wjv-logo']");
    this.createTestAssignment = this.page.locator("//button[text()='Create New Test Assignment']");
  }

  async loginToRiversideScore(username: string | any, password: string | any) {
    console.log(`Trying to login as ${username} ...\n`);
    await this.gotoUrl(getSiteUrl());
    await this.userName.fill(username, { timeout: 60000 });
    await this.password.fill(password, { timeout: 60000 });
    await this.signinButton.click();
    await this.page.waitForLoadState();
    await this.wj5Tyle.waitFor({ state: "visible"});
    await this.wj5Tyle.click({ delay: 200, clickCount: 2, timeout: 60000 });
    await this.createTestAssignment.waitFor({ state: "visible"});
    console.log(`Login successful ... \n`);
  }

  async gotoUrl(url: string | any) {
    try {
      await this.page.bringToFront();
      await this.page.goto(await url, { waitUntil: "load" });
    } catch (error) {
      console.warn("Error while navigating to url.  ", error);
    }
  }

  async reloginIfneeded(username: string | any, password: string | any) {
    try {
      await this.page.waitForLoadState();

      if(!await this.page.locator("text= My Test Assignments").isVisible() 
      && !await this.page.locator("class='examinee'").isVisible()) {
        console.log("Relogging to Riverside Score ...");
        await this.loginToRiversideScore(username, password);
        return;
      }
    } catch (error) {
      console.warn(`Login page either blank or not in dashboard ${error}`);
      await this.loginToRiversideScore(username, password);
    }
  }
}