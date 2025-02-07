import { readFileSync, writeFileSync, existsSync } from 'fs';
import { getUserAuthFilePath } from './UserAuthentication';
import { getSiteUrl } from '../testData';
import { User } from '../user/User';

const TOKEN_REFRESH_INTERVAL_MS = parseInt(process.env.TOKEN_REFRESH_INTERVAL_MS) || 30 * 1000; // Default 30s
let userAuthFilePaths: string[] = [];
let isRunning = false; // Prevent multiple loops per shard

/** Register users and persist them */
export function registerUserForTokenRefresh(userAuthFilePath: string) {
  if (!userAuthFilePaths.find((path) => path === userAuthFilePath)) {
    userAuthFilePaths.push(userAuthFilePath);
    console.log(`[TokenRefresh] Registered ${userAuthFilePath} for token refresh.`);
  }
}

/** Start the token refresh loop per shard */
export function startTokenRefreshLoop() {
  if (isRunning) {
    console.log(`[TokenRefresh] Token refresh loop already running for this shard.`);
    return;
  }
  isRunning = true;

  console.log(`[TokenRefresh] Starting token refresh loop. Interval: ${TOKEN_REFRESH_INTERVAL_MS / 1000}s.`);

  (async function loop() {
    while (true) {
      if (userAuthFilePaths.length === 0) {
        console.log(`[TokenRefresh] No users registered yet. Waiting...`);
      }

      for (const user of userAuthFilePaths) {
        await refreshUserToken(user);
      }

      await new Promise((resolve) => setTimeout(resolve, TOKEN_REFRESH_INTERVAL_MS));
    }
  })();
}

/** Refresh the user's token and update the auth file */
async function refreshUserToken(userAuthFilePath: string) {
  if (!existsSync(userAuthFilePath)) {
    console.warn(`[TokenRefresh] Auth file missing for ${userAuthFilePath}, skipping refresh.`);
    return;
  }

  try {
    const storageStateContent = readFileSync(userAuthFilePath, 'utf-8');
    const storageState = JSON.parse(storageStateContent);
    const authCookie = storageState.cookies.find((cookie) => cookie.name === 'AuthZ');

    if (!authCookie) {
      console.warn(`[TokenRefresh] No AuthZ cookie for ${userAuthFilePath}, skipping refresh.`);
      return;
    }

    console.log(`[TokenRefresh] Refreshing token for ${userAuthFilePath}...`);
    
    const siteUrl = getSiteUrl();
    const apiConfig = await getApiConfig(siteUrl);
    
    const refreshedToken = await refreshToken(
      siteUrl,
      apiConfig.identityApi,
      authCookie.value
    );

    // Update the cookie value in the storage file
    authCookie.value = refreshedToken.token;
    authCookie.expires = Math.floor(Date.now() / 1000) + 3600; // 1-hour expiry

    writeFileSync(userAuthFilePath, JSON.stringify(storageState, null, 2));
    console.log(`[TokenRefresh] Token updated in auth file for ${userAuthFilePath}. Refreshing again in ${TOKEN_REFRESH_INTERVAL_MS / 1000} seconds.`);
  } catch (error) {
    console.error(`[TokenRefresh] Failed to refresh token for ${userAuthFilePath}:`, error);
  }
}

/** Fetch API config (unchanged from your existing code) */
async function getApiConfig(siteUrl: string) {
  const url = `${siteUrl}api/config/getConfig`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`[TokenRefresh] Failed to fetch API config:`, error);
  }
}

/** Call the refresh token API (unchanged from your existing code) */
async function refreshToken(siteUrl: string, api: string, currentToken: string) {
  const url = `${siteUrl}${api.startsWith('/') ? api.slice(1) : api}/api/UserService/RefreshToken`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${currentToken}` },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`[TokenRefresh] Refresh token failed:`, error);
  }
}
