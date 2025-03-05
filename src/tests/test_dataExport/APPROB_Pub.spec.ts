import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/test_dataExport/APPROB_Pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";
import { ExamineeData } from "../../utils/types";

interface TestRunTimeData {
  [key: string]: {
    RT: number;
    Delivered_Order: number;
    Response: string;
    Score: number;
  };
}

let pRetry;

let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe.configure({ mode: "default" });
let score: TestRunTimeData;

test.describe(" APPROB.W5PA Test Data Export Automation ", () => {
  testData.forEach((data) => {
    test(
      `@Test_De For ${data.typeOfTest} login as AH Conduct test as Examiner and generate reports`,
      { tag: ["@APPROB", "@TestDe", "@Smoke"] },
      async (
        {
          wj5ah,
          wj5AhDashPage,
          wj5examiner,
          wj5ExaminerDashPage,
          wj5examinerTestPage,
          wj5examinerTest_dataExportPage,
          wj5examinerUtils,
          browser,
        },
        testInfo,
      ) => {
        pRetry = (await import("p-retry")).default;
        await setFilePathes(data.lookUpModel);
        test.setTimeout(8 * 60 * 1000);

        const examineeData = await pRetry(
          async (): Promise<ExamineeData> => {
            await wj5examiner.gotoUrl(getSiteUrl() + "home");
            const result =
              await wj5ExaminerDashPage.addNewExamineeAndUpdateTheTemplate(
                getSiteUrl(),
                data.examineeAge,
                data.location,
                data.testStemForm,
              );
            await wj5ExaminerDashPage.createTestAssignmentFromExamineeManagement(
              data.blockName,
              result.examinee_ID,
              data.examineeGrade,
            );

            return result;
          },
          {
            retries: 2,
            onFailedAttempt: (error) => {
              console.warn(
                `Attempt ${error.attemptNumber} for adding and assigning test to an examinee has failed. ${error.retriesLeft} retries left.`,
                error.message,
              );
            },
            minTimeout: 5000,
            maxTimeout: 15000,
          },
        );

        const { examinee_ID, dateOfBirth } = examineeData;

        const ipad7 = devices["iPad (gen 7) landscape"];
        // await wj5examiner.gotoUrl(getSiteUrl() + "home");
        // await wj5ExaminerDashPage.clickOnTheRecentExamineeOnceFullyLoaded(
        //   examinee_ID,
        // );
        // await wj5ExaminerDashPage.waitUntilCinfirmButtonisvisableAndClickOnIt();
        // await wj5ExaminerDashPage.ClickonlaunchTestIcon();
        const sessionid = await wj5ExaminerDashPage.getSessionID();
        const examineeContext = await browser.newContext({ ...ipad7 });
        const $examineePage = await examineeContext.newPage();
        const wj5examineepage = new wj5ExamineePage($examineePage, sessionid);
        await $examineePage.goto(getExamineeURL());
        await wj5examineepage.joinSessionusingSessionID();
        await wj5examineepage.clickOnAcceptBUtton();
        await wj5examinerTestPage.pickTheTestNeeded(data.testName);
        await wj5examinerTestPage.clickOnLetsBeginButtonAndStartTest(
          data.testName,
          data.SSP,
        );

        score =
          await wj5examinerTest_dataExportPage.completeTheTakenTestForTestDataExportforAPPROBPubTest(
            data.typeOfTest,
          );
        if (
          data.typeOfTest.match(
            /SampleItems (correct|incorrect)|Answer (correct|incorrect) But No Basel|Attain Basel but not ceiling/i,
          )
        ) {
          await wj5examinerTestPage.breakTheLogicOut();
          await $examineePage.close();
        } else {
          await wj5examinerTestPage.endSessionRSB();
          await wj5examineepage.swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton();
          await $examineePage.close();
          await wj5examinerTestPage.completeTSObservationsandClickNext();
        }
        await wj5ah.gotoUrl(getSiteUrl() + "home");
        await wj5AhDashPage.welcomeTextToBeVisable();
        if (
          data.typeOfTest.match(
            /SampleItems (correct|incorrect)|Answer (correct|incorrect) But No Basel|Attain Basel but not ceiling/i,
          )
        ) {
          await wj5AhDashPage.forceSubmitExamineeTest(examinee_ID);
        }

        await pRetry(
          async () => {
            await wj5ah.gotoUrl(getSiteUrl() + "home");
            await wj5AhDashPage.welcomeTextToBeVisable();

            await wj5AhDashPage.uploadExportTemplete(data.lookUpModel);
            await wj5AhDashPage.clickOnTheResportToDownload(testInfo);
            await wj5AhDashPage.extractTheDownloadedZipFile();
            const requiredFileName =
              await wj5AhDashPage.printAllThedatafromTheFileRequired(
                data.testStemForm,
                "testDataExports",
              );

            console.log(`requiredFileName`, requiredFileName);

            txtFileContent =
              await wj5examinerUtils.readAllTxtContentFromTestDataExport(
                requiredFileName,
              );
            console.log(`returnValues = `, txtFileContent);
            await wj5examinerTest_dataExportPage.validateTheDownloadedReportWithRunTimeData(
              requiredFileName,
              txtFileContent,
              examinee_ID,
              dateOfBirth,
              score,
              data.testStemForm,
              data.testSchemaFileName,
            );
          },
          {
            retries: 2,
            onFailedAttempt: (error) => {
              console.warn(
                `Attempt ${error.attemptNumber} for fetching the report failed. ${error.retriesLeft} retries left.`,
                error.message,
              );
            },
            minTimeout: 5000,
            maxTimeout: 15000,
          },
        );
      },
    );
  });
});
