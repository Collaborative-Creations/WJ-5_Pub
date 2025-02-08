import { test as setup } from "../base/basePageFixtures";
import { getUserData } from "../utils/userData"; // ✅ Import from userData.ts

const ahFile = "src/.auth/ah.json";
const examinerFile = "src/.auth/examiner.json";

import { test } from "@playwright/test"; // ✅ Fix setup.describe.configure issue
test.describe.configure({ mode: "serial" });

setup("Ah login", async ({ context, page, wj5loginPage }) => {
  await ahLogin(context, page, wj5loginPage);
});

setup("Examiner login", async ({ context, page, wj5loginPage }) => {
  await examineeLogin(context, page, wj5loginPage);
});

async function ahLogin(context, page, wj5loginPage) {
  const userData = getUserData();
  const ahData = userData.accountHolder[0];
  await wj5loginPage.loginToRiversideScore(ahData.userName, ahData.passWord);
  await page.context().storageState({ path: ahFile });
  await context.close();
}

async function examineeLogin(context, page, wj5loginPage) {
  const userData = getUserData();
  const examinerData = userData.examiner[0];
  await wj5loginPage.loginToRiversideScore(
    examinerData.userName,
    examinerData.passWord
  );
  await page.context().storageState({ path: examinerFile });
  await context.close();
}
