import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/ScoreReports/ACH_ORLEXP.scenarios";
import { getSiteUrl, getWj5UserData } from "../../utils/testData";

const ahData =  getWj5UserData().accountHolder[7];

test.describe.configure({ mode: "default" });

test.describe("Oral Expression cluster Score Report", () => {
    testData.forEach((data) => {
        test(`Generate a Score Report for ${data.examineeName}`,
            { tag: ["@ORLEXP", "@regression", "@ScoreReport"] },
            async ({wj5ah,context,wj5Test_ScoreReportsPage},
                testInfo,
            ) => {
                test.setTimeout(20 * 60 * 1000);

                await wj5ah.gotoUrl(getSiteUrl() + "home");

                await wj5Test_ScoreReportsPage.selectTestAssignmentForReport(data.examineeName);

                if(data.reportType == "Word Score Report"){

                    await wj5Test_ScoreReportsPage.downloadWordReport(testInfo,data.format);

                    await wj5Test_ScoreReportsPage.extractDataFromWord('ScoreReport.docx',
                      `${data.reportName} ScoreReport.txt`,data.baseLine,
                      `${data.baseLineName} ScoreReport.txt`);

                } else {

                    await wj5Test_ScoreReportsPage.webPageToFile('ScoreReport.txt',
                      `${data.reportName} ScoreReport.txt`,data.baseLine,
                      `${data.baseLineName} ScoreReport.txt`);
                }

                await wj5Test_ScoreReportsPage.readDocsAndCreateHtmlComparison(`${data.baseLineName} ScoreReport.txt`,
                  `${data.reportName} ScoreReport.txt`,`${data.reportName} CompareReport.txt`,
                  `${data.reportName} failed.html`,`${data.reportName} Passed.html`);
           });
        });
   });



