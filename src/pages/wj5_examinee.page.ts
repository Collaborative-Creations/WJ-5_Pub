import { test, expect, Page, Locator } from "../base/basePageFixtures";

export default class wj5ExamineePage {
  private readonly page: Page;
  private $sessionID: string = "";

  private readonly sessionIdInputBox: Locator;
  private readonly joinSessionButton: Locator;
  private readonly acceptButton: Locator;
  private readonly doneTickCircle: Locator;
  private readonly slothIcon: Locator;
  private readonly item1correctAnswerLWIDNTTest: Locator;

  constructor(page: Page, sessionId: string) {
    this.page = page;
    this.$sessionID = sessionId;

    this.sessionIdInputBox = this.page.locator("//input[@type='text']");
    this.joinSessionButton = this.page.locator(
      "//button[text()='Join Session']",
    );
    this.acceptButton = this.page.locator(
      "//div[@class='blue-button' and text()='Accept']",
    );
    this.doneTickCircle = this.page.locator(".fade-in");

    this.slothIcon = this.page.locator(".no-examinee-content");
    this.item1correctAnswerLWIDNTTest = this.page.locator("//div[@class='examinee-secondary' and text()='W']");
  }

  maxRetries = 10; // Maximum retries for clicking the join button

  async joinSessionusingSessionID() {
    await this.page.bringToFront();
  
    try {
      // Fill the session ID
      console.log("Filling the session ID input box...");
      await this.page.waitForLoadState("networkidle", { timeout: 60000 });
      await this.sessionIdInputBox.fill(this.$sessionID, { timeout: 60000 });
    } catch {
      console.log("Session ID input failed, reloading the page...");
      await this.page.reload({ waitUntil: "load" });
      await this.sessionIdInputBox.fill(this.$sessionID, { timeout: 60000 });
    }

    while (!(await this.acceptButton.isVisible())) {
      await this.page.waitForTimeout(3500);
      if (await this.acceptButton.isVisible()) {
        break;
      }
      try {
        await this.joinSessionButton.click({ clickCount: 2, timeout: 5000 });
      } catch (e) {
        console.log(`facing issues with the sync accept Button ${e}`);
      }
    }
  }

  async clickOnAcceptBUtton() {
    await expect(this.acceptButton).toBeVisible({ timeout: 60000 });
    while (await this.acceptButton.isVisible()) {
      await this.acceptButton.click();
      await this.page.waitForTimeout(3500);
      const noExamineeContent: boolean = await this.slothIcon.isVisible();
      if (noExamineeContent) {
        await this.page.waitForTimeout(3500);
        if (await this.acceptButton.isVisible()) {
          await this.acceptButton.click();
        }
        break;
      }
    }
  }

  async swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton() {
    await this.page.bringToFront();
    try {
      await this.joinSessionButton.waitFor({
        state: "attached",
        timeout: 1 * 15 * 1000,
      });
    } catch (error) {
      console.info(
        `Not able to see the Join Session button on Examinee Screen After Test complete , but still proceeding further and submitting the test ... ${error} `,
      );
    }
  }

  async swithToTheChildScreenAndClickCorrectOption() {
    await this.page.bringToFront();
    await this.item1correctAnswerLWIDNTTest.click();
    const correctOption: string = await this.item1correctAnswerLWIDNTTest.textContent();
    return correctOption;
  }
}
