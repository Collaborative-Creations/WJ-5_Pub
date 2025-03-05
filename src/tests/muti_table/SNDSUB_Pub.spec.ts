import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/multi_table/SNDSUB_Pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

test.describe.configure({ mode: "default" });

let score: Map<string, string>;
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe(" SNDSUB.W5PA WlookUp Scoring Export Automation ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });
    test(
      `@wLookUpE2e @Regression For ${data.typeOfTest} login as AH Conduct test as Examiner and generate reports`,
      { tag: ["@SNDSUB", "@MultiTable", "@Regression"] },
      async (
        {
          wj5ah,
          wj5AhDashPage,
          wj5examiner,
          wj5ExaminerDashPage,
          wj5examinerTestPage,
          wj5examinerTest_multiTablePage,
          wj5examinerUtils,
          browser,
        },
        testInfo,
      ) => {
        test.setTimeout(8 * 60 * 1000);

        await wj5examiner.gotoUrl(getSiteUrl() + "home");
        const { examinee_ID, dateOfBirth } =
          await wj5ExaminerDashPage.addNewExamineeAndUpdateTheTemplate(
            getSiteUrl(),
            data.examineeAge,
            data.location,
            data.testStemForm,
          );
        await wj5ExaminerDashPage.createTestAssignmentFromExamineeManagement(
          data.blockName,
          examinee_ID,
          data.examineeGrade,
        );

        const ipad7 = devices["iPad (gen 7) landscape"];
        const sessionid = await wj5ExaminerDashPage.getSessionID();
        const examineeContext = await browser.newContext({ ...ipad7 });
        const $examineePage = await examineeContext.newPage();
        const wj5examineepage = new wj5ExamineePage($examineePage, sessionid);
        await $examineePage.goto(getExamineeURL());
        await wj5examineepage.joinSessionusingSessionID();
        await wj5examineepage.clickOnAcceptBUtton();
        await wj5examinerTest_multiTablePage.pickTheTestNeeded(data.testName);
        await wj5examinerTest_multiTablePage.clickOnLetsBeginButtonAndStartTest(
          data.testName,
          data.SSP,
        );

        score =
          await wj5examinerTest_multiTablePage.completeTheTakenTestForWlookUpScoresForSNDSUBTest(
            data.typeOfTest,
            data.BbyC,
          );
        if (
          data.typeOfTest.match(/Sample A Correct and Force Submit Scenario|Sample C Incorrect and Force Submit Scenario/i)
        ) {
          await wj5examinerTestPage.breakTheLogicOutAndForceSubmitTheTestFromMainNavigation();
          await wj5examinerTestPage.completeTSObservationsandClickNext();
          await $examineePage.close();
        } else {
          await wj5examinerTestPage.endSessionRSB();
          await wj5examineepage.swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton();
          await $examineePage.close();
          await wj5examinerTestPage.completeTSObservationsandClickNext();
        }
        await wj5ah.gotoUrl(getSiteUrl() + "home");
        await wj5AhDashPage.welcomeTextToBeVisable();

        await wj5AhDashPage.uploadExportTemplete(data.lookUpModel);
        await wj5AhDashPage.clickOnTheResportToDownload(testInfo);
        await wj5AhDashPage.extractTheDownloadedZipFile();
        const requiredFileName =
          await wj5AhDashPage.printAllThedatafromTheFileRequired(
            "Score_DataExport_AutoFilter_Template_WLookup",
          );

        console.log(`requiredFileName`, requiredFileName);

        await wj5AhDashPage.validateTheDownloadedReportWithRunTimeDataForSingleAndMulti(
          score,
          data.testName,
          data.SumOfItemScores,
          data.BasalCredit,
          data.WlookUp,
          data.Wscore,
          data.semW,
          data.WlkpAdminItems,
          data.ScoreString,
          data.testStemForm,
          data.lookUpModel,
          data.totalItems,
          data.scoreFlag,
          data.typeOfTest,
          data.negation!,
        );
      },
    );
  });
});