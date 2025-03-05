import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/content_validation/VRBATN_pub.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";

test.describe.configure({ mode: "default" });
let score: Map<string, string>;
let reviewFlagStatus: boolean;
let txtFileContent: { [key: string]: { [key: string]: string } };
let wScores: number;
let Wabil: number;
let Semw: number;

type ScoreObject = {
  wScores: number;
  Wabil: number;
  Semw: number;
};
type ScoresRecord = Record<string, ScoreObject>;
const scores: ScoresRecord = {};

test.describe(" Automating the content tests", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });

    test(
      `For ${data.testName} do content validation`,
      { tag: ["@Regression", "@VRBATN", "@content"] },
      async ({
        wj5ah,
        wj5AhDashPage,
        wj5examiner,
        wj5ExaminerDashPage,
        wj5examnrTest_derivedScoresPage,
        wj5examinerTest_contentPage,
        browser,
      }) => {
        test.setTimeout(10 * 60 * 1000);

        const url = getSiteUrl() + "home";
        await wj5examiner.gotoUrl(url);
        const { examinee_ID, dateOfBirth } =
          await wj5ExaminerDashPage.addNewExamineeAndUpdateTheTemplate(
            getSiteUrl(),
            data.examineeAge,
            undefined,
            undefined,
            data.normBasis,
          );

        await wj5ExaminerDashPage.createTestAssignmentFromExamineeManagement(
          data.blockName,
          examinee_ID,
          data.examineeGrade,
        );

        const ipad7 = devices["iPad (gen 7) landscape"];
        const sessionid = await wj5ExaminerDashPage.getSessionID();
        const examineeContext = await browser.newContext({ ...ipad7 });
        const examineePage = await examineeContext.newPage();
        const wj5examineepage = new wj5ExamineePage(examineePage, sessionid);
        await examineePage.goto(getExamineeURL());
        await wj5examineepage.joinSessionusingSessionID();
        await wj5examineepage.clickOnAcceptBUtton();

        for (let i = 0; i < data.testName.length; i++) {
          await wj5examnrTest_derivedScoresPage.pickTheTestNeeded(
            data.testName[i],
            data.SSP[i],
            wj5examineepage,
          );
          await wj5examnrTest_derivedScoresPage.clickOnLetsBeginButtonAndStartTest(
            data.testName[i],
            data.SSP[i],
            i,
          );

          score =
            await wj5examinerTest_contentPage.completeTheContentValidationForTakenTests(
              data.typeOfTest,
              data.testStemForm[i],
              data.BbyC![i],
              data.scoreFlag,
              examineePage,
            );

          if (i != data.testName.length - 1) {
            await wj5examnrTest_derivedScoresPage.jumpToNextTest(
              data.testName[i + 1],
            );
          } else {
            if (
              data.typeOfTest[i].match(
                /SampleItems (correct|incorrect)|Answer (correct|incorrect) But No Basel|Attain Basel but not ceiling/i,
              )
            ) {
              await wj5examnrTest_derivedScoresPage.breakTheLogicOut();
              await examineePage.close();
            } else {
              await wj5examnrTest_derivedScoresPage.endSessionRSB();
              await wj5examineepage.swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton();
              await examineePage.close();
              await wj5examnrTest_derivedScoresPage.completeTSObservationsandClickNext();
            }
            await wj5ah.gotoUrl(url);
            await wj5AhDashPage.welcomeTextToBeVisable();
            if (
              data.typeOfTest[i].match(
                /SampleItems (correct|incorrect)|Answer (correct|incorrect) But No Basel|Attain Basel but not ceiling/i,
              )
            ) {
              await wj5AhDashPage.forceSubmitExamineeTest(examinee_ID);
            }
          }
        }
      },
    );
  });
});
