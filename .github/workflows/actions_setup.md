# Playwright Sharded Tests with Historical Reports

This GitHub Actions workflow enables running Playwright tests in a sharded configuration with comprehensive reporting capabilities, including historical test reports hosted on GitHub Pages.

## Overview

This workflow provides:
- Configurable test sharding for parallel execution
- Comprehensive test reporting with system metrics
- Historical report retention via GitHub Pages
- Pre-run and post-run notes for test context
- Robust error handling and retry mechanisms

## Setup Instructions

### 1. Repository Configuration

#### GitHub Pages Setup
1. Enable GitHub Pages for your repository:
   - Go to repository **Settings** → **Pages**
   - Set the source to **GitHub Actions**

#### Personal Access Token
1. Create a GitHub Personal Access Token (PAT) with `repo` permissions:
   - Go to your GitHub profile **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens**
   - Create a new token with repository access to your organization repo
   - Enable at minimum these permissions:
     - Contents: Read and write
     - Pages: Read and write

2. Add the PAT as a repository secret:
   - Go to repository **Settings** → **Secrets and variables** → **Actions**
   - Create a new secret named `GH_PAT` with your token value

### 2. Workflow Configuration

The workflow file should be placed in the `.github/workflows` directory of your repository.

#### Required Files
- `.github/workflows/wj-5_sharding_options.yml` (the workflow file)

#### Branch Configuration
This workflow uses the `gh-pages` branch to store historical reports. The branch will be created automatically on first workflow run.

### 3. Environment Variables

The workflow uses the following environment variables:
- `TEST_ENV`: Testing environment (e.g., stage, prod)
- `NUM_RETRIES`: Number of test retries
- `SLOW_MODE_DELAY_IN_MS`: Delay for slow mode tests
- `CI`: Indicator for CI environment
- `PLAYWRIGHT_WORKERS`: Number of Playwright workers
- `NODE_VERSION`: Node.js version

## Usage

### Running the Workflow

The workflow can be triggered manually with the following parameters:

| Parameter       | Description                               | Default Value                            |
|-----------------|-------------------------------------------|------------------------------------------|
| `environment`   | Test environment                          | `stage`                                  |
| `test_pattern`  | Test pattern to filter tests              | `(?=.*@RDGBAS)(?=.*@derivedScores)`     |
| `shard_count`   | Number of shards                          | `5`                                      |
| `browser`       | Browser to run tests on                   | `chrome`                                 |
| `num_retries`   | Number of test retries                    | `2`                                      |
| `pre_run_notes` | Notes before running the tests            | (Optional)                               |

To run the workflow:
1. Go to the **Actions** tab in your repository
2. Select the **Playwright Sharded Tests with Historical Reports** workflow
3. Click **Run workflow**
4. Fill in the parameters as needed
5. Click **Run workflow** to start the execution

### Viewing Reports

After workflow completion:
1. The merged report will be available as an artifact on the workflow run page
2. The historical report will be deployed to GitHub Pages at `https://<org-name>.github.io/<repo-name>/`

## Workflow Details

### Jobs Overview

The workflow consists of four main jobs:

1. **Prepare**
   - Sets up the test matrix for sharding
   - Saves pre-run notes if provided

2. **Test**
   - Runs in parallel based on the sharding configuration
   - Collects system information for each shard
   - Executes Playwright tests with configured parameters
   - Uploads test reports and results as artifacts

3. **Merge-Reports**
   - Downloads all shard reports
   - Creates a consolidated HTML report with test results
   - Includes system information and test status
   - Provides UI for adding post-run notes

4. **Deploy-Report**
   - Deploys the merged report to GitHub Pages
   - Organizes reports by run number
   - Creates/updates an index page for historical reports
   - Implements search and sort functionality for report history

### Features

#### Sharding Configuration
Tests are distributed across multiple shards for parallel execution, with configurable shard count (1, 2, 4, 6, 8, 10, or 15).

#### Test Reporting
Each shard generates a detailed Playwright report, which includes:
- Test execution results
- Screenshots for failed tests
- Execution traces
- System information metrics

#### Historical Reporting
The workflow maintains a history of test runs on GitHub Pages, allowing:
- Browsing past test executions
- Searching and filtering reports
- Comparing results over time

#### Notes System
- **Pre-run notes**: Document test context before execution
- **Post-run notes**: Record observations after test completion

## Troubleshooting

### Common Issues

#### Permission Errors
If you encounter permission errors during the GitHub Pages deployment:
- Verify that the `GH_PAT` secret has correct permissions
- Ensure the repository has GitHub Pages enabled with GitHub Actions as source

#### Missing Reports
If reports are not being deployed correctly:
- Check if the workflow completed successfully
- Verify that the `gh-pages` branch exists and is accessible
- Examine the "Deploy-Report" job logs for specific errors

#### Shard Failures
If individual shards are failing:
- Review the test logs for specific errors
- Check system resources in the shard's system information
- Consider increasing retries or reducing concurrent shards

## Maintenance

### Updating the Workflow

When updating the workflow:
1. Test changes in a development branch first
2. Verify that historical reports are preserved
3. Check that the GitHub Pages index updates correctly

### Cleaning Up Old Reports

The historical reports are stored in the `gh-pages` branch. To clean up old reports:
1. Clone the `gh-pages` branch
2. Delete the directories for old runs in the `reports/` folder
3. Update the `index.html` file if necessary
4. Commit and push changes

## Contributing

When contributing to this workflow:
- Maintain the structure of the historical reports
- Test all changes thoroughly before merging
- Document any configuration changes in this README