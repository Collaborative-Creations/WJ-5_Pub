import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/WJV_UI_Regression/LWIDNT_Pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

test.describe.configure({ mode: "default" });

let score: Map<string, string>;
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe(" LWIDNT UI Automation ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });
    test(
      `@Regression For ${data.typeOfTest} login as AH Conduct test as Examiner and End the test`,
      { tag: ["@LWIDNTUIReg"] },
      async (
        {
          wj5ah,
          wj5AhDashPage,
          wj5examiner,
          wj5ExaminerDashPage,
          wj5examinerTestPage,
          wj5examinerTest_lwidntPage,
          browser,
        },
        testInfo
      ) => {
        test.setTimeout(45 * 60 * 1000);

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

        score = await wj5examinerTest_lwidntPage.completeTheTakenTestForLWIDNT(
          data.typeOfTest
        );
        if (data.typeOfTest.match(/Block A forward flow scenario when RS is 1|Block AB to C Forward flow scenario when RS is 10|Age 6 Review Flow Scenario|Age 7 Review Flow Scenario|Age 8 Review Flow Scenario|Ages 9 to 11 Review Flow Scenario|Age 12 to Adult Review Flow Scenario/i)) {
          await wj5examinerTestPage.breakTheLogicOut();
          await $examineePage.close();
        } else {
          await wj5examinerTestPage.validateEndTestPopUpTextContent(
            data.AE,
            data.GE,
            data.ScoreCheckStatus,
            data.FlagStatus,
            data.OutcomeText,
            data.responseStyleBehaviours,
            data.testStemForm,
            data.typeOfTest
          );
          await wj5examinerTestPage.endSessionRSB();
          await wj5examineepage.swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton();
          await $examineePage.close();
          await wj5examinerTestPage.completeTSObservationsandClickNext();
        }
      }
    );
  });
});
