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
  
    for (let attempt = 0; attempt < this.maxRetries; attempt++) {
      console.log(`Attempt ${attempt + 1} to join the session.`);
  
      try {
        await expect(this.joinSessionButton).toBeEnabled({ timeout: 5000 });
        await this.joinSessionButton.click({ timeout: 5000 });
        console.log("Clicked Join Session button.");
        return;
      } catch (e) {
        console.log(`Retry ${attempt + 1} failed: ${e}`);
      }
    }
  }

  async clickOnAcceptBUtton() {
    await expect(this.acceptButton).toBeVisible({ timeout: 10000 });
  
    let attempt = 0;
  
    while (attempt < this.maxRetries) {
      try {
        console.log(`Attempt ${attempt + 1}: Checking accept button readiness.`);
        
        // Precondition check: Ensure the button is enabled before clicking
        const isEnabled = await this.acceptButton.isEnabled();
        if (!isEnabled) {
          console.warn("Accept button is not enabled. Waiting...");
          await this.page.waitForTimeout(1000); // Short delay to retry
          attempt++;
          continue;
        }
  
        console.log("Accept button is enabled. Clicking now.");
        await this.acceptButton.click();

        // Check if the sloth icon is visible after clicking
        if (await this.slothIcon.isVisible({ timeout: 5000 })) {
          console.log("Sloth icon detected. Accept process completed.");
          return; // Exit the loop if the sloth icon is visible
        }
  
        // Re-check if the accept button is still visible
        if (!(await this.acceptButton.isVisible({ timeout: 5000 }))) {
          console.log("Accept button is no longer visible. Exiting.");
          return; // Exit if the button has disappeared
        }
      } catch (error) {
        console.warn(`Attempt ${attempt + 1} failed: ${error.message}`);
      }
  
      attempt++;
    }
  
    // Final fallback: If the accept button is still visible, throw an error
    if (await this.acceptButton.isVisible()) {
      throw new Error("Accept button did not disappear after all retry attempts.");
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
