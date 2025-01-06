import { Locator, Page, expect } from "@playwright/test";
import { getSiteUrl } from "../utils/testData";

export default class Wj5LoginPage {
  private readonly page;

  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly signinButton: Locator;
  private readonly wj5Tyle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    this.signinButton = this.page.getByRole("button", { name: "Sign In" });
    this.wj5Tyle = this.page.locator('[class*="wjv-logo"]');
  }

  async loginToRiversideScore(username: string | any, password: string | any) {
    console.log(`Trying to login as ${username} ...\n`);
    await this.gotoUrl(getSiteUrl());
    await this.userName.fill(username, { timeout: 60000 });
    await this.password.fill(password, { timeout: 60000 });
    await this.signinButton.click();
    await this.page.waitForLoadState();
    await this.wj5Tyle.click({ delay: 200, clickCount: 2, timeout: 60000 });

    // await this.page.waitForTimeout(2000);

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
      await this.page
        .locator("text= My Test Assignments")
        .waitFor({ state: "visible", timeout: 60000 });
    } catch (error) {
      console.warn(`Login page either blank or not in dashboard ${error}`);
      await this.loginToRiversideScore(username, password);
    }
  }
}
