import { test, expect, Page, Locator } from "../base/basePageFixtures";
import { getAdminUrl, getWj5UserData } from "../utils/testData";

export default class wj5AdminPOrtalPage {
  private readonly page;

  private readonly sessionIdInputBox: Locator;
  private readonly joinSessionButton: Locator;
  private readonly organization: Locator;
  private readonly selectCountry: Locator;
  private readonly selectProduct: Locator;
  private readonly selectWJV: Locator;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly adminLoginBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.sessionIdInputBox = this.page.locator("//input[@type='text']");
    this.joinSessionButton = this.page.locator(
      "//button[text()='Join Session']",
    );
    this.organization = this.page.locator("(//a[text()='Organizations'])[1]");

    this.selectCountry = this.page.locator("#CountryCode");

    this.selectProduct = this.page.locator("//input[@id='HmhproductName']");

    //this.selectWJV = this.page.locator("(//li[@class='k-item k-last']//input)[10]");
    this.selectWJV = this.page.locator("//input[@name='WJ V'][1]");
    this.userName = this.page.getByPlaceholder("Username");
    this.password = this.page.getByPlaceholder("Password");
    this.adminLoginBtn = this.page.locator("//input[@class='login-btn']");
  }

  async loginToAdminSite(username: string | any, password: string | any) {
    console.log(`Trying to login as ${username} ...\n`);
    await this.page.goto(getAdminUrl());
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.adminLoginBtn.click();
    await this.page.waitForLoadState();
    await this.page.waitForTimeout(3000);

    console.log(`Login successful ... \n`);
  }

  async adminPagewj5SelectionInProducts(typeOfTest: string) {
    if (
      typeOfTest.match(
        /Clinical Admin WJ V will appear in the Products of Admin Login and Organization Page/i,
      )
    ) {
      await this.page.waitForTimeout(2000);
      await this.organization.click();
      await this.page.waitForLoadState();
      await this.selectCountry.selectOption({ label: "United States" });
      await this.selectProduct.waitFor({ state: "visible" });
      await this.selectProduct.click();
      await this.selectWJV.click();
    }
  }
}
