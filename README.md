# Publications Playwright Testing Suite

## Dependencies

_Prior to running tests, the following must be installed:_

1. `npm`
2. `npx`
3. `node`

## Initial Install

_Complete the following steps before running the Playwright suite:_

1. Run `npm install` to install all necessary packages listed in the `package.json` file.
2. Go to `src > utils > testData.ts` and add your credentials. **Do not push credential changes**; only changes regarding URLs and other global configurations can be pushed.

## Opening Playwright Test Runner

1. **Sample PowerShell command to run a spec:**

   - To run an OVSYN single table spec:

     ```powershell
     npx cross-env test='qa' npx playwright test src/tests/single_table/OVSYN_Pub.spec.ts --project=chrome
     ```

   - To run an OVSYN single table spec in debug mode:

     ```powershell
     npx cross-env test='qa' npx playwright test src/tests/single_table/OVSYN_Pub.spec.ts --project=chrome --debug
     ```

   - To run any test with '@derivedScores' tags (--grep):

     ```powershell
     npx cross-env test='qa' npx playwright test --grep "@derivedScores" --project=chrome
     ```

2. **Alternatively, you can run tests from `package.json > scripts`:**
   - For detailed instructions, refer to the Playwright documentation.

## Running Admin Portal Scripts

1. **Sample PowerShell command to run a spec:**

   - To run an Admin spec:

     ```powershell
     npx cross-env test='qa' npx playwright test src/tests/admin_portal/admin<####>_Pub.spec.ts --project=adminPortal_chrome
     ```

   - **Note:** This approach avoids session storage for admin scripts compared to AH and examiner session storages. This way, Admin portal scripts are confined to their own session storage.

_When running the Playwright suite, ensure you are in the home directory of the repository (i.e., the same directory as the `package.json` file for the Playwright node project)._

## Reporting

_Playwright includes a built-in HTML reporter feature._
The HTML report will be stored in the `playwright-report` folder.
