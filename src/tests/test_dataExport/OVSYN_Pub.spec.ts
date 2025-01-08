import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/test_dataExport/OVSYN_Pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

interface TestRunTimeData {
  [key: string]: {
    RT: number;
    Delivered_Order: number;
    Response: string;
    Score: number;
  };
}
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe.configure({ mode: "default" });
let score: TestRunTimeData;
let pRetry;

interface ExamineeData {
  examinee_ID: string;
  dateOfBirth: string;
}

test.describe("OVSYN.W5PA Test Data Export Automation ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      pRetry = (await import("p-retry")).default;
      await setFilePathes(data.lookUpModel);
    });
    test(
      `For ${data.typeOfTest} Conduct test and validate report`,
      { tag: ["@OVSYN", "@testDe", "@smoke", "@testDe_OVSYN"] },
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
        test.setTimeout(8 * 60 * 1000);

        const url = getSiteUrl() + "home";
        const examineeData = await pRetry(
          async (): Promise<ExamineeData> => {
            await wj5examiner.gotoUrl(url);
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
            retries: 2, // Number of retries
            onFailedAttempt: (error) => {
              console.warn(
                `Attempt ${error.attemptNumber} for adding and assigning test to an examinee has failed. ${error.retriesLeft} retries left.`,
                error.message,
              );
            },
            minTimeout: 2000,
            maxTimeout: 5000,
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
          await wj5examinerTest_dataExportPage.completeTheTakenTestForTestDataExport(
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
    );
  });
});
