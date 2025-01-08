import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  testMatch: ["**/*.spec.ts", "!UnitTest/*.test.ts"],
  retries: 0,
  workers: 1,
  // globalTimeout: 60 * 60 * 1000,
  timeout: 10 * 60 * 1000,
  maxFailures: 0,
  reporter: [
    [
      "html",
      {
        outputFolder: `playwright-report/Execution_Folder-${new Date().toDateString()}_${new Date()
          .toTimeString()
          .replace(/:/g, "")}`,

        open: "always",
      },
    ],
  ],

  use: {
    actionTimeout: 60 * 1000,
    navigationTimeout: 60 * 1000,
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure",
    video: "on-first-retry",
    trace: "on",
    headless: true,
    launchOptions: {
      logger: {
        isEnabled: (name, severity) => false,
        log: (name, severity, message, args) =>
          console.log(`[${name}][${severity}] ${message}`, ...args),
      },
      // slowMo:500,
    },
  },
  expect: {
    timeout: 60 * 1000,
  },

  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },

    {
      name: "firefox",
      fullyParallel: false,
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "chromium",
      fullyParallel: false,
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "chrome",
      fullyParallel: false,
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },

    {
      name: "NoSschrome",
      fullyParallel: false,
      // dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },

    {
      name: "adminPortal_chrome",
      fullyParallel: false,
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },

    {
      name: "webKit",
      fullyParallel: false,
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
