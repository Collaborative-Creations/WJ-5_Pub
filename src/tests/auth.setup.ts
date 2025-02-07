import { Page, test as setup } from "../base/basePageFixtures";
import { getWj5UserData } from "../utils/testData";
import { loginAndStoreSession } from "../utils/auth/UserAuthentication";
import { startTokenRefreshLoop } from "../utils/auth/TokenRefreshManager";
import { getWj5CIUserData } from "../utils/ciTestData";

const { accountHolder, examiner } = getWj5UserData();
const ahFile = "src/.auth/ah.json";
const examinerFile = "src/.auth/examiner.json";


setup.describe.configure({ mode: "serial" });

setup("Ah login", async ({ context, page, wj5loginPage }) => {
  await ahLogin(context, page, wj5loginPage);
});

setup("Examiner login", async ({ context, page, wj5loginPage }) => {
  await examineeLogin(context, page, wj5loginPage);
});

// setup("Account Holder login", async ({ page, wj5loginPage }) => {
//   await loginAndStoreSession(wj5loginPage, page, accountHolder);
//   // setFastModes(page);
// });

// setup("Examiner login", async ({ page, wj5loginPage }) => {
//   await loginAndStoreSession(wj5loginPage, page, examiner);
//   // setFastModes(page);
// });

function getUserData() {
  if (process.env.CI === "true" && process.env.SHARD_NUMBER) {
    return getWj5CIUserData(parseInt(process.env.SHARD_NUMBER));
  }
  return getWj5UserData();
}

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

// setup.beforeAll(() => {
//   startTokenRefreshLoop();
// });

// async function setFastModes(page: Page) {
//   await page.waitForLoadState('domcontentloaded');
//   if(process.env.FAST_VIDEO === 'true') { 
//     await page.evaluate(() => {
//       localStorage.setItem('FAST_VIDEO', 'true');
//       console.log('FAST_VIDEO set to true');
//     });
//   }
//   if(process.env.FASTEST_TIME === 'true') {   
//     await page.evaluate(() => {
//       localStorage.setItem('FASTEST_TIME', 'true');
//       console.log('FASTEST_TIME set to true');
//     });
//   }
}