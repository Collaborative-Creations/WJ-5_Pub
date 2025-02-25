# Test Data Export - Playwright TS Automation

## Overview
This document outlines the automation approach for the **Test Data Export** process using **Playwright TypeScript**. To illustrate, we take **OVSYN** as an example.

## Workflow

### 1. Authentication & Session Management
- **Admin (AH) Login:**
  - The admin logs in, and the session details are stored in a **JSON file**.
  - This saves login time for subsequent logins.
- **Examiner Login:**
  - The examiner also logs in, with the session stored similarly.
  - Since the session is preserved, re-login is not required.

### 2. Examiner Actions
- **Navigates to Dashboard:**
  - Since the session is stored, the examiner directly accesses the dashboard without logging in again.
- **Creates a New Examinee:**
  - The examinee's name is randomly generated using a JavaScript library.
  - The **Examinee ID** follows a unique pattern: 
    - One character + 4 numbers + One character + 4 numbers (e.g., **A1234B5678**).
  - **Age Calculation:**
    - The examinee's age is set to **4 years** (Current Date - 4 years).
    - The age is dynamically calculated based on the **scenarios file**.

### 3. Test Assignment
- **Creating a Test Assignment:**
  - The test assignment includes a **test set/test block**.
  - Example: **Form A** (which includes all tests available in WJ5 Publications).
- **Education Level:**
  - Default set to **Kindergarten** (modifiable via the scenarios file).
- **Assignment Type:**
  - Default is **Age-based**.
- **Launching the Test Assignment:**
  - A new **incognito Chrome instance** is launched for the examinee.
  - The instance is configured to **iPad 7 (horizontal mode)** dimensions.

### 4. Test Execution & Data Collection
- **Automation answers test items**:
  - The script answers all questions **correctly**.
  - This ensures **RS (Response Score) = 1**.
- **Capturing Data:**
  - Item name
  - Response time (RT)
  - Other runtime data
- **Submitting the Test:**
  - A new **template** is created using the **Examinee ID**.
  - A ZIP file is generated, extracted, and validated against runtime data captured by the automation.

## Assertions for Test Data Export
The following values are asserted with the Downloaded report to ensure test data accuracy through Automation:

```yaml
Examinee_ID:
TestStemForm:
Item_CMSID_Examiner:
Item_CMSID_Examinee:
Item_Heading:
Master_ID:
RT:
Delivered_Order:
Response:
Score:
```

## Current Test Data Export Scenarios
- **All Correct**: 
  - The test script executes only the "All Correct" scenario, where all answers are correct.

## Conclusion
This Playwright TS automation ensures that the **Test Data Export** process is verified end-to-end, capturing runtime data, validating responses, and ensuring the accuracy of exported test results.
