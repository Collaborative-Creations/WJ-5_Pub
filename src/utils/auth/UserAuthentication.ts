import { User } from '../user/User';
import Wj5LoginPage from '../../pages/wj5_login.page';
import { Page } from '@playwright/test';
import { UserAccountType } from '../user/UserAccountType';
import { registerUserForTokenRefresh } from './TokenRefreshManager'; // NEW

export async function loginAndStoreSession(
  wj5loginPage: Wj5LoginPage,
  page: Page,
  user: User
) {
  console.log(`Logging in and storing session for user: ${user.userName}`);
  await wj5loginPage.loginToRiversideScore(user.userName, user.passWord);

  try {
    const storageFilePath = getUserAuthFilePath(user.accountType);
    await page.context().storageState({ path: storageFilePath });
    console.log(`Session stored in: ${storageFilePath}`);

    // Register user for automatic token refresh
    registerUserForTokenRefresh(storageFilePath);
  } catch (error) {
    console.error(`Error storing session: ${error.message}`);
  }
}

export function getUserAuthFilePath(accountType: UserAccountType): string {
  const shardIndex = process.env.SHARD_INDEX || '0';
  return `src/.auth/${accountType}-${shardIndex}.json`;
}
