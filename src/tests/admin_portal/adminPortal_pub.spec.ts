import { devices, test } from "../../base/basePageFixtures";
import { testData } from "../../scenarios/Admin/Admin.scenarios";
import { setFilePathes } from "../../utils/global";
import { getWj5UserData } from "../../utils/testData";

const adminData = getWj5UserData().admin[0];

test.describe.configure({ mode: "default" });

let score: Map<string, string>;
let txtFileContent: { [key: string]: { [key: string]: string } };

test.describe(" ADMIN UI Regression ", () => {
  testData.forEach((data) => {
    test.beforeAll(async () => {
      await setFilePathes(data.lookUpModel);
    });
    test(
      `@Regression For ${data.typeOfTest} login as Admin and verify the Add Org functionality`,
      { tag: ["@ADMIN", "@UIRegression"] },
      async (
        {
          wj5admin_PortalPage,
          //wj5examinerTest_adminPage,
          browser,
        },
        testInfo,
      ) => {
        test.setTimeout(1 * 60 * 1000);
        await wj5admin_PortalPage.loginToAdminSite(
          adminData.userName,
          adminData.passWord,
        );
        await wj5admin_PortalPage.adminPagewj5SelectionInProducts(
          data.typeOfTest,
        );
      },
    );
  });
});
