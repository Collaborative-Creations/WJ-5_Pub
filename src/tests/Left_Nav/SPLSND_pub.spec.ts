import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/Left_Nav/SPLSND_pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

test.describe.configure({ mode: "default" });

let score: Map<string, string>;
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe(" LeftNav Automation ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });
    test(
      `@Regression For ${data.typeOfTest} login as AH Conduct test as Examiner and End the test`,
      { tag: ["@reg", "@SPLSND", "@leftnav"] },
      async (
        {
          wj5ah,
          wj5AhDashPage,
          wj5examiner,
          wj5ExaminerDashPage,
          wj5examinerTestPage,
          wj5examinerTest_leftnavPage,
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
        await wj5examinerTestPage.pickTheTestNeeded(data.testName);
        await wj5examinerTestPage.clickOnLetsBeginButtonAndStartTest(
          data.testName,
          data.SSP,
        );

        score =
        await wj5examinerTest_leftnavPage.completeTheLeftNavValidationForSPLSNDTest(
            data.typeOfTest,
          );
          if (
            data.typeOfTest.match(
              /left Nav for All items for SSP1|left Nav when items are flagged,expanded & collapsed for SSP2/i,
            )
          ) {
            await wj5examinerTestPage.endSessionRSB();
            await wj5examineepage.swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton();
            await $examineePage.close();
            await wj5examinerTestPage.completeTSObservationsandClickNext();
          }else{
            await wj5examinerTestPage.breakTheLogicOut();
            await $examineePage.close();
            await wj5ah.gotoUrl(getSiteUrl() + "home");
            await wj5AhDashPage.welcomeTextToBeVisable();
            await wj5AhDashPage.forceSubmitExamineeTest(examinee_ID);
          }
      },
    );
  });
});