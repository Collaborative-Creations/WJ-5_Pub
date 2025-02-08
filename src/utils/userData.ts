import { getWj5UserData } from "../utils/testData";
import { getWj5CIUserData } from "../utils/ciTestData";

export function getUserData() {
  if (process.env.CI === "true" && process.env.SHARD_NUMBER) {
    return getWj5CIUserData(parseInt(process.env.SHARD_NUMBER));
  }
  return getWj5UserData();
}
