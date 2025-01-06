import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/test_dataExport/LWIDNT_Pub.scenarios";
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

test.describe("LWIDNT.W5PA Test Data Export Automation ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });
    test(
      `For ${data.typeOfTest} Conduct test and validate report`,
      { tag: ["@LWIDNT", "@testDe", "@reg"] },
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
        testInfo
      ) => {
        test.setTimeout(8 * 60 * 1000);

        await wj5examiner.gotoUrl(getSiteUrl() + "home");
        const { examinee_ID, dateOfBirth } =
          await wj5ExaminerDashPage.addNewExamineeAndUpdateTheTemplate(
            getSiteUrl(),
            data.examineeAge,
            data.location,
            data.testStemForm
          );
        await wj5ExaminerDashPage.createTestAssignmentFromExamineeManagement(
          data.blockName,
          examinee_ID,
          data.examineeGrade
        );

        const ipad7 = devices["iPad (gen 7) landscape"];
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
          data.SSP
        );

        score =
          await wj5examinerTest_dataExportPage.completeTheTakenTestForTestDataExportForLWIDNTTest(
            data.typeOfTest,
            wj5examineepage
          );
        if (
          data.typeOfTest.match(
            /SampleItems (correct|incorrect)|Answer (correct|incorrect) But No Basel|Attain Basel but not ceiling/i
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
            /SampleItems (correct|incorrect)|Answer (correct|incorrect) But No Basel|Attain Basel but not ceiling/i
          )
        ) {
          await wj5AhDashPage.forceSubmitExamineeTest(examinee_ID);
        }

        // await wj5AhDashPage.setTheDownloadAndFilePaths(); // Need to develop s/t when we pass aparam in scenario it should set the file names at global level

        await wj5AhDashPage.uploadExportTemplete(data.lookUpModel);
        await wj5AhDashPage.clickOnTheResportToDownload(testInfo);
        await wj5AhDashPage.extractTheDownloadedZipFile();
        const requiredFileName =
          await wj5AhDashPage.printAllThedatafromTheFileRequired(
            data.testStemForm,
            "testDataExports"
          );

        console.log(`requiredFileName`, requiredFileName);

        txtFileContent =
          await wj5examinerUtils.readAllTxtContentFromTestDataExport(
            requiredFileName
          );
        console.log(`returnValues = `, txtFileContent);
        await wj5examinerTest_dataExportPage.validateTheDownloadedReportWithRunTimeData(
          requiredFileName,
          txtFileContent,
          examinee_ID,
          dateOfBirth,
          score,
          data.testStemForm,
          data.testSchemaFileName
        );
      }
    );
  });
});
