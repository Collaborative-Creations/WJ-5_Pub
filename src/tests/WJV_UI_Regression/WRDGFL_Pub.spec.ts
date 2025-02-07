import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/WJV_UI_Regression/WRDGFL_Pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

test.describe.configure({ mode: "default" });

let score: Map<string, string>;
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe(" WRDGFL UI Automation ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });
    test(
      `@Regression For ${data.typeOfTest} login as AH Conduct test as Examiner and End the test`,
      { tag: ["@WRDGFLUIReg"] },
      async (
        {
          wj5ah,
          wj5AhDashPage,
          wj5examiner,
          wj5ExaminerDashPage,
          wj5examinerTestPage,
          wj5examinerTest_wrdgflPage,
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

        score = await wj5examinerTest_wrdgflPage.completeTheTakenTestForWRDGFL(
          data.typeOfTest
        );
        if (data.typeOfTest.match(/Sample Item Forward Flow when RS is 2|Practice Exercise (All Correct|2 Correct|InCorrect to All Correct in Practice Feedback)/i)) {
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
