import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/content_validation/TestAdminOverview.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

test.describe.configure({ mode: "default" });
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe(" Test Administration Overviews", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });

    test(
      `For Standard tests do content validation`,
      { tag: ["@reg", "@TESTADMINOVERVIEW", "@content"] },
      async ({
        wj5examiner,
        wj5ExaminerDashPage,
        wj5examinerTest_contentPage,
        browser,
      }) => {
        test.setTimeout(8 * 60 * 1000);

        const url = getSiteUrl() + "home";
        await wj5examiner.gotoUrl(url);
        const { examinee_ID, dateOfBirth } =
          await wj5ExaminerDashPage.addNewExamineeAndUpdateTheTemplate(
            getSiteUrl(),
            undefined,
            undefined
          );

        await wj5ExaminerDashPage.createTestAssignmentFromExamineeManagement(
          data.blockName,
          examinee_ID,
          data.examineeGrade
        );

        const ipad7 = devices["iPad (gen 7) landscape"];
        const sessionid = await wj5ExaminerDashPage.getSessionID();
        const examineeContext = await browser.newContext({ ...ipad7 });
        const examineePage = await examineeContext.newPage();
        const wj5examineepage = new wj5ExamineePage(examineePage, sessionid);
        await examineePage.goto(getExamineeURL());
        await wj5examineepage.joinSessionusingSessionID();
        await wj5examineepage.clickOnAcceptBUtton();

        await wj5examinerTest_contentPage.pickTheTestNeeded(
          data.testName[0],
          wj5examineepage,
        );
        for (let i = 0; i < data.testName.length; i++) {
          await wj5examinerTest_contentPage.checkTestAdminOverview(
            data.testName[i],
            i,
            examineePage,
          );

          // if (i != data.testName.length - 1) {
          //   await examineePage.close();
          // }
        }
        await examineePage.close();
      }
    );
  });
});
