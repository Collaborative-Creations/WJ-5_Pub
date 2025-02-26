# Derived Scores - Playwright TS Automation

## Overview
This document outlines the automation approach for the **Derived Scores** process using **Playwright TypeScript**. To illustrate, we take **GFGC** as an example.

Derived exports in automation involve the calculation and validation of various test scores, subtest scores, and cluster scores based on predefined scenarios. The automation process ensures the correctness of results by verifying multiple parameters for different normbases.


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
Derived scores automation is explained using the "GFGC" cluster. To complete this cluster, tests must be executed for 3 tests and 2 subtests:
- **Tests:** VRBANL, ANLSYN, MATRCZ
- **Subtests:** OVANT, OVSYN

### Execution Process
1. The automation script starts the test based on the assigned scenario.
2. While answering the items, the script records the item name and whether the answer is correct or incorrect to calculate wScores.
3. The test is completed according to the scenario. The scenarios include:
   - **All Correct**
   - **All Incorrect**
   - **Basal and Ceiling Logic Answering**
4. Some tests do not support basal and ceiling logic, limiting the applicable scenarios to only "All Correct" and "All Incorrect."
5. For certain tests like pattern matching, only the "All Correct" scenario is executed.
6. After answering all test items as per the scenario, a template is uploaded based on the **Examinee ID** and the **Norm Basis** (e.g., AGE).
7. Once the report is downloaded, assertions are performed for each test, subtest and cluster.

### Validation Parameters
The validations are divided into **subtest**, **test**, and **cluster/composite** levels. 

### Norm Basis Execution
For each test, assertions are executed twice:
1. **NormBasis = AGE**
2. **NormBasis = K12**

#### **Subtest Validation Parameters:**
```sh
1. Examinee ID
2. Task Stem
3. TaskStemForm
4. EDOT
5. LDOT
6. DOB
7. CAMOS
8. GradePlacement
9. W_Abil
10. SEMW
11. NormBasis
12. CHRON
13. AgeYM
```

#### **Test Validation Parameters:**
```sh
1. Examinee ID
2. Task Stem
3. TaskStemForm
4. EDOT
5. LDOT
6. DOB
7. CAMOS
8. GradePlacement
9. W_Abil
10. SEMW
11. W68_Low
12. W68_High
13. W90_Low
14. W90_High
15. W95_Low
16. W95_High
17. NormBasis
18. CHRON
19. AgeYM
20. REFW
21. SDLo
22. SDUp
23. AE_Equiv
24. GE_Equiv
25. AE_Low
26. AE_High
27. GE_Low
28. GE_High
29. WDIFF
30. RPI_Num
31. WDIFF_Proficiency
32. WDIFF_Functionality
33. WDIFF_Development
34. WDIFF_Fluency
35. WDIFF_Implication
36. CALP_Level
37. SDUsed
38. Z_Score
39. StdScore_Computed
40. StdScore_Display
41. SS_PR_Classification
42. SEMSS
43. SS68_Low
44. SS68_High
45. SS90_Low
46. SS90_High
47. SS95_Low
48. SS95_High
49. PR
50. PR68_Low
51. PR68_High
52. PR90_Low
53. PR90_High
54. PR95_Low
55. PR95_High
56. T_Score_Computed
57. T_Score_Display
58. SEMT
59. T_Score68_Low
60. T_Score68_High
61. T_Score90_Low
62. T_Score90_High
63. T_Score95_Low
64. T_Score95_High
```

#### **Cluster/Composite Validation Parameters:**
```sh
1. Examinee ID
2. Task Stem
3. TaskStemForm
4. contribTaskStems
5. EDOT
6. LDOT
7. DOB
8. CAMOS
9. GradePlacement
10. Composite W_Abil
11. Composite SEMW
12. W68_Low
13. W68_High
14. W90_Low
15. W90_High
16. W95_Low
17. W95_High
18. NormBasis
19. CHRON
20. AgeYM
21. REFW
22. SDLo
23. SDUp
24. AE_Equiv
25. GE_Equiv
26. AE_Low
27. AE_High
28. GE_Low
29. GE_High
30. WDIFF
31. RPI_Num
32. WDIFF_Proficiency
33. WDIFF_Functionality
34. WDIFF_Development
35. WDIFF_Fluency
36. WDIFF_Implication
37. CALP_Level
38. SDUsed
39. Z_Score
40. StdScore_Computed
41. StdScore_Display
42. SS_PR_Classification
43. SEMSS
44. SS68_Low
45. SS68_High
46. SS90_Low
47. SS90_High
48. SS95_Low
49. SS95_High
50. PR
51. PR68_Low
52. PR68_High
53. PR90_Low
54. PR90_High
55. PR95_Low
56. PR95_High
57. T_Score_Computed
58. T_Score_Display
59. SEMT
60. T_Score68_Low
61. T_Score68_High
62. T_Score90_Low
63. T_Score90_High
64. T_Score95_Low
65. T_Score95_High
```

### Sub-Cluster Validations
For GFGC, there are two sub-clusters: **GF** and **GC**. The same validation process applies to these sub-clusters.


#### **GFGC Validation Parameters for NormBasis = K12:**
```sh
1. Examinee ID
2. Task Stem
3. TaskStemForm
4. contribTaskStems
5. EDOT
6. LDOT
7. DOB
8. CAMOS
9. GradePlacement
10. Composite W_Abil
11. Composite SEMW
12. W68_Low
13. W68_High
14. W90_Low
15. W90_High
16. W95_Low
17. W95_High
18. NormBasis
19. CHRON
20. GradeYM
21. REFW
22. SDLo
23. SDUp
24. AE_Equiv
25. GE_Equiv
26. AE_Low
27. AE_High
28. GE_Low
29. GE_High
30. WDIFF
31. RPI_Num
32. WDIFF_Proficiency
33. WDIFF_Functionality
34. WDIFF_Development
35. WDIFF_Fluency
36. WDIFF_Implication
37. CALP_Level
38. SDUsed
39. Z_Score
40. StdScore_Computed
41. StdScore_Display
42. SS_PR_Classification
43. SEMSS
44. SS68_Low
45. SS68_High
46. SS90_Low
47. SS90_High
48. SS95_Low
49. SS95_High
50. PR
51. PR68_Low
52. PR68_High
53. PR90_Low
54. PR90_High
55. PR95_Low
56. PR95_High
57. T_Score_Computed
58. T_Score_Display
59. SEMT
60. T_Score68_Low
61. T_Score68_High
62. T_Score90_Low
63. T_Score90_High
64. T_Score95_Low
65. T_Score95_High
```

### Sample Scenarios JSON File used in the Automation scripts
Below is an example of a **Scenarios JSON File** that controls the schema for **GFGC**.

```json
// -------------- Age  ---------------------------------------
{
  "typeOfTest": [
    "OVSYN - Age - All correct scenario",
    "OVANT - Age - All incorrect scenario",
    "MATRCZ - Age - All correct scenario",
    "VRBANL - Age - All correct scenario",
    "ANLSYN - Age - All incorrect scenario"
  ],
  "testName": ["Oral Vocabulary–Synonyms", "Oral Vocabulary–Antonyms", "Matrices", "Verbal Analogies", "Analysis-Synthesis"],
  "taskStem": ["OVSYN", "OVANT", "MATRCZ", "VRBANL", "ANLSYN"],
  "blockName": "Form A",
  "examineeAge": 5,
  "examineeGrade": "1.9",
  "normBasis": "Age"
}

// -------------- K12 ---------------------------------------
{
  "typeOfTest": [
    "OVSYN - K12 - All incorrect scenario",
    "OVANT - K12 - Attain Quick Basal Ceiling scenario",
    "MATRCZ - K12 - All incorrect scenario",
    "VRBANL - K12 - Attain Quick Basal Ceiling scenario",
    "ANLSYN - K12 - All correct scenario"
  ],
  "testName": ["Oral Vocabulary–Synonyms", "Oral Vocabulary–Antonyms", "Matrices", "Verbal Analogies", "Analysis-Synthesis"],
  "taskStem": ["OVSYN", "OVANT", "MATRCZ", "VRBANL", "ANLSYN"],
  "blockName": "Form A",
  "examineeAge": 5,
  "examineeGrade": "1.9",
  "normBasis": "K12"
}
```