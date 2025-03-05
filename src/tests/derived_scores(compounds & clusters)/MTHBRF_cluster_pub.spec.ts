import wj5ExamineePage from "../../pages/wj5_examinee.page";
import { devices, test } from "../../base/basePageFixtures";

import { testData } from "../../scenarios/derived_scores(compounds & clusters)/MTHBRF_Pub_cluster.scenarios";
import { getExamineeURL, getSiteUrl } from "../../utils/testData";
import { setFilePathes } from "../../utils/global";
import { ScoreObject } from "../../utils/types";

test.describe.configure({ mode: "default" });
let score: Map<string, string>;
let txtFileContent: { [key: string]: { [key: string]: string } };
let wScores: number;
let Wabil: number;
let Semw: number;

type ScoresRecord = Record<string, ScoreObject>;
const scores: ScoresRecord = {};

test.describe(" MTHBRF cluster Derived Export Automation ", () => {
  testData.forEach((data) => {
    test(
      `For ${data.typeOfTest} Complete The MTHBRF cluster & generate report`,
      { tag: ["@MTHBRF", "@Regression", "@DerivedScores"] },
      async (
        {
          wj5ah,
          wj5AhDashPage,
          browser,
          wj5examiner,
          wj5ExaminerDashPage,
          wj5examnrTest_derivedScoresPage,
          wj5examinerUtils,
        },
        testInfo,
      ) => {
        await setFilePathes(data.lookUpModel);
        test.setTimeout(8 * 60 * 1000);

        const url = getSiteUrl() + "home";
        await wj5examiner.gotoUrl(url);
        const { examinee_ID, dateOfBirth } =
          await wj5ExaminerDashPage.addNewExamineeAndUpdateTheTemplate(
            getSiteUrl(),
            data.examineeAge,
            undefined,
            undefined,
            data.normBasis,
            data.examineeGrade,
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
            await wj5examnrTest_derivedScoresPage.completeTheTakenTestForDerivedScores(
              data.typeOfTest[i],
              data.testStemForm[i],
              data.BbyC![i],
              data.scoreFlag,
            );

          [wScores, Wabil, Semw] =
            await wj5ExaminerDashPage.getWscoresWabilSemw(
              score,
              data.scoreFlag,
              data.typeOfTest[i],
              data.totalItems,
              data.negation,
              data.testStemForm[i],
            );

          scores[data.testStemForm[i]] = {
            wScores: wScores,
            Wabil: Wabil,
            Semw: Semw,
          };

          console.log(`scores IN =`, scores);

          // console.log(`i != data.testName.length - 1 : ${i} != ${data.testName.length - 1}`);

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
              await $examineePage.close();
            } else {
              await wj5examnrTest_derivedScoresPage.endSessionRSB();
              await wj5examineepage.swithToTheChildScreenAndWaitUntilToSeeTheJoinSessionButton();
              await $examineePage.close();
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

        await wj5AhDashPage.uploadExportTemplete("derived scores");
        await wj5AhDashPage.clickOnTheResportToDownload(testInfo);
        await wj5AhDashPage.extractTheDownloadedZipFile();
        await wj5AhDashPage.printAllThedatafromTheFileRequired(
          "Derived_Score",
          "derived scores",
        );
        txtFileContent = await wj5examinerUtils.readAllTxtContentToObj();
        console.log(`returnValues = `, txtFileContent);
        // console.log(`score MAp = `, score);
        const excelFileData =
          await wj5examnrTest_derivedScoresPage.getExcelFileDate(
            "WJV NormTable",
          );

        for (let i = 0; i < data.testName.length; i++) {
          await wj5examnrTest_derivedScoresPage.validateTheDownloadedDerivedScoresReportWithRunTimeData(
            txtFileContent,
            examinee_ID,
            data.taskStem[i],
            data.testStemForm[i],
            dateOfBirth,
            data.examineeGrade,
            scores,
            excelFileData,
            data.normBasis,
          );
        }

        for (let i = 0; i < data.compositesOrClustersTaskStemForm.length; i++) {
          const compositesOrClustersTaskStem: string =
            data.compositesOrClustersTaskStemForm[i].split(".")[0];

          await wj5examnrTest_derivedScoresPage.validateCompositesAndClusters(
            txtFileContent,
            examinee_ID,
            compositesOrClustersTaskStem,
            data.compositesOrClustersTaskStemForm[i],
            dateOfBirth,
            data.examineeGrade,
            scores,
            excelFileData,
            data.normBasis,
            data.testStemForm,
          );
        }
      },
    );
  });
});
