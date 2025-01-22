import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  testMatch: ["**/*.spec.ts", "!UnitTest/*.test.ts"],
  retries: process.env.CI === "true" ? parseInt(process.env.NUM_RETRIES) : 0,
  workers: 1,
  // globalTimeout: 60 * 60 * 1000,
  timeout: 10 * 60 * 1000,
  reporter: process.env.CI === "true"
  ? [
      ["blob"], 
      ["html", { 
        outputFolder: 'playwright-report',  // Fixed folder name for CI
        open: "never" 
      }]
    ]
  : [
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
    trace: process.env.CI === "true" ? "retain-on-first-failure" : "on",
    headless: true,
    launchOptions: {
      logger: {
        isEnabled: (name, severity) => false,
        log: (name, severity, message, args) => console.log(`[${name}][${severity}] ${message}`, ...args),
      },
      slowMo:process.env.CI === "true" ? parseInt(process.env.SLOW_MODE_DELAY_IN_MS) : 0,
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
    {
      name: "ci-chromium-setup",
      testMatch: /.*\.setup\.ts/,
      fullyParallel: false,
      use: {
          ...devices["Desktop Chrome"],
          headless: true,
      },
    },
    {
      name: "ci-chromium",
      testMatch: "**/*.spec.ts",
      dependencies: ["ci-chromium-setup"],
      use: {
          ...devices["Desktop Chrome"],
          headless: true,
      },
    },
    {
      name: "ci-firefox-setup",
      testMatch: /.*\.setup\.ts/,
      fullyParallel: false,
      use: {
          ...devices["Desktop Firefox"],
          headless: true,
      },
    },
    {
      name: "ci-firefox",
      testMatch: "**/*.spec.ts",
      dependencies: ["ci-firefox-setup"],
      use: {
          ...devices["Desktop Firefox"],
          headless: true,
      },
    },
    {
      name: "ci-webkit-setup",
      testMatch: /.*\.setup\.ts/,
      fullyParallel: false,
      use: {
          ...devices["Desktop Safari"],
          headless: true,
      },
    },
    {
      name: "ci-webkit",
      testMatch: "**/*.spec.ts",
      dependencies: ["ci-webkit-setup"],
      use: {
          ...devices["Desktop Safari"],
          headless: true,
      },
    },
  ],
});
