import { Page, Locator } from '@playwright/test';

export class Locators {
  readonly timeIsUp: Locator;

  constructor(page: Page) {
    this.timeIsUp = page.locator("//b[text()='Time is up.']");
  }
}
