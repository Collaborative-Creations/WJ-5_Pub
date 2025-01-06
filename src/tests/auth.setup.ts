import { test as setup } from "../base/basePageFixtures";
import { getWj5UserData } from "../utils/testData";

const ahFile = "src/.auth/ah.json";
const examinerFile = "src/.auth/examiner.json";
const ahData = getWj5UserData().accountHolder[0];
const examinerData = getWj5UserData().examiner[0];

setup.describe.configure({ mode: "serial" });

setup("Ah login", async ({ context, page, wj5loginPage }) => {
  await ahLogin(context, page, wj5loginPage);
});

setup("Examiner login", async ({ context, page, wj5loginPage }) => {
  await examineeLogin(context, page, wj5loginPage);
});

async function ahLogin(context, page, wj5loginPage) {
  await wj5loginPage.loginToRiversideScore(ahData.userName, ahData.passWord);
  await page.context().storageState({ path: ahFile });
  await context.close();
}

async function examineeLogin(context, page, wj5loginPage) {
  await wj5loginPage.loginToRiversideScore(
    examinerData.userName,
    examinerData.passWord,
  );
  await page.context().storageState({ path: examinerFile });
  await context.close();
}
