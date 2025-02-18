import { test as base, Page, Locator, firefox } from "@playwright/test";
import Wj5LoginPage from "../pages/wj5_login.page";
import Wj5DashboardPage from "../pages/wj5_dashBoard.page";
import Utils from "../utils/utils";
import wj5Test_stPage from "../pages/wj5_test.st_page";
import wj5TestPage from "../pages/wj5_test.page";
import wj5ExamineePage from "../pages/wj5_examinee.page";
import wj5Test_derivedScoresPage from "../pages/wj5_test.derivedScores.page";
import wj5TestDataExportPage from "../pages/wj5_test.TestDataExport.page";
import wj5TestBasalAndCeilingPage from "../pages/wj5_test.basalAndCeiling.page";
import wj5MultiPage from "../pages/wj5_test.multi_page";
import wj5TestContentValidationPage from "../pages/wj5_test.contentValidation.page";
import wj5ReroutingPage from "../pages/wj5_rerouting.page";
import wj5SnddelPage from "../pages/WJV_UI_Regression/wj5_SNDDEL.page";
import wj5AdminPage from "../pages/wj5_admin_portal.page";
import wj5WrtsmpPage from "../pages/WJV_UI_Regression/wj5_WRTSMP.page";
import wj5OrlrdgPage from "../pages/WJV_UI_Regression/wj5_ORLRDG.page";
import wj5TestLeftNavValidationPage from "../pages/wj5_test.leftNavigation.page";
import wj5LetterPatternMatchingPage from "../pages/WJV_UI_Regression/wj5_LetterPatternMatching.page";
import wj5SwrtacPage from "../pages/WJV_UI_Regression/wj5_SWRTAC.page";
import wj5PhnretPage from "../pages/WJV_UI_Regression/wj5_PHNRET.page";
import wj5BlockRotationPage from "../pages/WJV_UI_Regression/wj5_BLKROT.page";
import wj5SentenceWritingFluencyPage from "../pages/WJV_UI_Regression/wj5_SWRTFL.Page";
import wj5MathFactsFluencyPage from "../pages/WJV_UI_Regression/wj5_MTHFLU.Page";
import wj5SoundBlendingPage from "../pages/WJV_UI_Regression/wj5_SNDBLN.page";
import wj5SpellingOfSoundsPage from "../pages/WJV_UI_Regression/wj5_SPLSND.page";
import wj5RapidPhonemeNamingPage from "../pages/WJV_UI_Regression/wj5_RPDPHO.page";
import wj5MemoryForWordsPage from "../pages/WJV_UI_Regression/wj5_MEMWRD.page";
import wj5AcademicVocabularyPage from "../pages/WJV_UI_Regression/wj5_ACDVOC.page";
import wj5SndsubPage from "../pages/WJV_UI_Regression/wj5_SNDSUB.page";
import wj5NumrevPage from  "../pages/WJV_UI_Regression/wj5_NUMREV.page";
import wj5OrlsmpPage from "../pages/WJV_UI_Regression/wj5_ORLSMP.page";
import wj5ParcmpPage from "../pages/WJV_UI_Regression/wj5_PARCMP.page";
import wj5DecilePage from"../pages/wj5_test.decile_page";
import wj5RpdletPage from "../pages/WJV_UI_Regression/wj5_RPDLET.page";
import wj5SenrepPage from "../pages/WJV_UI_Regression/wj5_SENREP.page";
import wj5SegmntPage from "../pages/WJV_UI_Regression/wj5_SEGMNT.page";
import wj5RpdpicPage from "../pages/WJV_UI_Regression/wj5_RPDPIC.page";
import wj5AnalysisSynthesisPage from "../pages/WJV_UI_Regression/wj5_ANLSYN.page";
import wj5CalculationPage from "../pages/WJV_UI_Regression/wj5_CALC.page";
import wj5SoundReversalPage from "../pages/WJV_UI_Regression/wj5_SNDREV.page";
import wj5NumberPatternMatchingPage from "../pages/WJV_UI_Regression/wj5_NUMPAT.page";
import wj5SentenceReadingFluencyPage from "../pages/WJV_UI_Regression/wj5_SRDGFL.page";
import wj5OralVocabularyPage from "../pages/WJV_UI_Regression/wj5_OVSYN.page";
import wj5OralVocabularyAntonymPage from "../pages/WJV_UI_Regression/wj5_OVANT.page";
import wj5GeneralInfoPage from "../pages/WJV_UI_Regression/wj5_GIWHAT.page";
import wj5GeneralInfoWHERPage from "../pages/WJV_UI_Regression/wj5_GIWHER.page";
import wj5NonwordRepetitionPage from "../pages/WJV_UI_Regression/wj5_NWDREP.page";
import wj5VrbanlPage from "../pages/WJV_UI_Regression/wj5_VRBANL.page";
import wj5StycmpPage from "../pages/WJV_UI_Regression/wj5_STYCMP.page";
import wj5WrdgflPage from "../pages/WJV_UI_Regression/wj5_WRDGFL.page";
import wj5MatrczPage from "../pages/WJV_UI_Regression/wj5_MATRCZ.page";
import WJ5_ScoreReportPage from "../pages/wj5_scoreReports.page";
import wj5LwidntPage from "../pages/WJV_UI_Regression/wj5_LWIDNT.page";
import wj5SparelPage from "../pages/WJV_UI_Regression/wj5_SPAREL.page";
import wj5VrbatnPage from "../pages/WJV_UI_Regression/wj5_VRBATN.page";
import wj5WrdatkPage from "../pages/WJV_UI_Regression/wj5_WRDATK.page";
import wj5PsgcmpPage from "../pages/WJV_UI_Regression/wj5_PSGCMP.page";
import wj5StyrecPage from "../pages/WJV_UI_Regression/wj5_STYREC.page";
import wj5SemretPage from "../pages/WJV_UI_Regression/wj5_SEMRET.page";

// import { getUserAuthFilePath } from "../utils/auth/UserAuthentication";
// import { registerUserForTokenRefresh, startTokenRefreshLoop } from "../utils/auth/TokenRefreshManager";


type Fixtures = {
  wj5loginPage: Wj5LoginPage;

  wj5ah: Wj5LoginPage;
  wj5examiner: Wj5LoginPage;
  wj5examinee: wj5ExamineePage;

  wj5AhDashPage: Wj5DashboardPage;
  wj5ExaminerDashPage: Wj5DashboardPage;
  wj5ahUtils: Utils;
  wj5examinerUtils: Utils;
  wj5examinerTest_stPage: wj5Test_stPage;
  wj5examinerTestPage: wj5TestPage;
  wj5examnrTest_derivedScoresPage: wj5Test_derivedScoresPage;
  wj5examinerTest_dataExportPage: wj5TestDataExportPage;
  wj5examinerTest_basalAndCeilingPage: wj5TestBasalAndCeilingPage;
  wj5examinerTest_multiTablePage: wj5MultiPage;
  wj5examinerTest_contentPage: wj5TestContentValidationPage;
  wj5examinerTest_reroutingPage: wj5ReroutingPage;
  wj5examinerTest_snddelPage: wj5SnddelPage;
  wj5admin_PortalPage: wj5AdminPage;
  wj5examinerTest_wrtsmpPage: wj5WrtsmpPage;
  wj5examinerTest_orlrdgPage: wj5OrlrdgPage;
  wj5examinerTest_leftnavPage: wj5TestLeftNavValidationPage;
  wj5examinerTest_LETPATPage: wj5LetterPatternMatchingPage;
  wj5examinerTest_swrtacPage: wj5SwrtacPage;
  wj5examinerTest_phnretPage: wj5PhnretPage;
  wj5examinerTest_BLKROTPage: wj5BlockRotationPage;
  wj5examinerTest_SWRTFLPage: wj5SentenceWritingFluencyPage;
  wj5examinerTest_MTHFLUPage: wj5MathFactsFluencyPage;
  wj5examinerTest_SNDBLNPage: wj5SoundBlendingPage;
  wj5examinerTest_SPLSNDPage: wj5SpellingOfSoundsPage;
  wj5examinerTest_RPDPHOPage: wj5RapidPhonemeNamingPage;
  wj5examinerTest_MEMWRDPage: wj5MemoryForWordsPage;
  wj5examinerTest_ACDVOCPage: wj5AcademicVocabularyPage;
  wj5examinerTest_sndsubPage: wj5SndsubPage;
  wj5examinerTest_numrevPage: wj5NumrevPage;
  wj5examinerTest_orlsmpPage: wj5OrlsmpPage;
  wj5examinerTest_parcmpPage: wj5ParcmpPage;
  wj5examinerTest_decileTablePage: wj5DecilePage;
  wj5examinerTest_rpdletPage: wj5RpdletPage;
  wj5examinerTest_senrepPage: wj5SenrepPage;
  wj5examinerTest_segmntPage: wj5SegmntPage;
  wj5examinerTest_rpdpicPage: wj5RpdpicPage;
  wj5examinerTest_ANLSYNPage: wj5AnalysisSynthesisPage;
  wj5examinerTest_CALCPage: wj5CalculationPage;
  wj5examinerTest_SNDREVPage: wj5SoundReversalPage;
  wj5examinerTest_NUMPATPage: wj5NumberPatternMatchingPage;
  wj5examinerTest_SRDGFLPage: wj5SentenceReadingFluencyPage;
 wj5examinerTest_OVSYNPage: wj5OralVocabularyPage;
  wj5examinerTest_OVANTPage: wj5OralVocabularyAntonymPage;
  wj5examinerTest_GIWHATPage: wj5GeneralInfoPage;
  wj5examinerTest_GIWHERPage: wj5GeneralInfoWHERPage;
  wj5examinerTest_NWDREPPage: wj5NonwordRepetitionPage;
  wj5examinerTest_vrbanlPage: wj5VrbanlPage;
  wj5examinerTest_stycmpPage: wj5StycmpPage;
  wj5examinerTest_wrdgflPage: wj5WrdgflPage;
  wj5examinerTest_matrczPage: wj5MatrczPage;
  wj5Test_ScoreReportsPage: WJ5_ScoreReportPage;
  wj5examinerTest_lwidntPage: wj5LwidntPage;
  wj5examinerTest_sparelPage: wj5SparelPage;
  wj5examinerTest_vrbatnPage: wj5VrbatnPage;
  wj5examinerTest_wrdatkPage: wj5WrdatkPage;
  wj5examinerTest_psgcmpPage: wj5PsgcmpPage;
  wj5examinerTest_styrecPage: wj5StyrecPage;
  wj5examinerTest_semretPage: wj5SemretPage;
};

let wj5ahNewPage: Page;
let wj5examinerNewPage: Page;

export * from "@playwright/test";

export const test = base.extend<Fixtures>({
  wj5loginPage: async ({ page }, use) => {
    await use(new Wj5LoginPage(page));
  },

  wj5ah: async ({ browser }, use) => {
      try {
        const context = await browser.newContext({
          storageState: "src/.auth/ah.json",
        });
        wj5ahNewPage = await context.newPage();
        const wj5ah = new Wj5LoginPage(wj5ahNewPage);
        await use(wj5ah);
        await context.close();
      } catch (error) {
        console.error(`Error creating new wj5ah page: ${error}`);
      }
  },

  wj5examiner: async ({ browser }, use) => {
      try {
        const context = await browser.newContext({
          storageState: "src/.auth/examiner.json",
        });
        await context.grantPermissions(["microphone"]);
        wj5examinerNewPage = await context.newPage();
    
        const wj5examiner = new Wj5LoginPage(wj5examinerNewPage);
    
        await use(wj5examiner);
        await context.close();
      } catch (error) {
        console.error(`Error creating new wj5examiner page: ${error}`);
      }
  },

  wj5AhDashPage: async ({ context }, use) => {
    await use(new Wj5DashboardPage(wj5ahNewPage));
  },

  wj5ExaminerDashPage: async ({ context }, use) => {
    await use(new Wj5DashboardPage(wj5examinerNewPage));
  },

  wj5examinerUtils: async ({ context }, use) => {
    await use(new Utils(wj5examinerNewPage));
  },

  wj5examinerTest_stPage: async ({ context }, use) => {
    await use(new wj5Test_stPage(wj5examinerNewPage));
  },

  wj5examinerTestPage: async ({ context }, use) => {
    await use(new wj5TestPage(wj5examinerNewPage));
  },

  wj5examnrTest_derivedScoresPage: async ({ context }, use) => {
    await use(new wj5Test_derivedScoresPage(wj5examinerNewPage));
  },

  wj5examinerTest_dataExportPage: async ({ context }, use) => {
    await use(new wj5TestDataExportPage(wj5examinerNewPage));
  },

  wj5examinerTest_basalAndCeilingPage: async ({ context }, use) => {
    await use(new wj5TestBasalAndCeilingPage(wj5examinerNewPage));
  },

  wj5examinerTest_multiTablePage: async ({ context }, use) => {
    await use(new wj5MultiPage(wj5examinerNewPage));
  },

  wj5examinerTest_contentPage: async ({ context }, use) => {
    await use(new wj5TestContentValidationPage(wj5examinerNewPage));
  },

  wj5examinerTest_reroutingPage: async ({ context }, use) => {
    await use(new wj5ReroutingPage(wj5examinerNewPage));
  },

  wj5examinerTest_snddelPage: async ({ context }, use) => {
    await use(new wj5SnddelPage(wj5examinerNewPage));
  },

  wj5admin_PortalPage: async ({ page, context }, use) => {
    await use(new wj5AdminPage(page));
  },

  wj5examinerTest_wrtsmpPage: async ({ context }, use) => {
    await use(new wj5WrtsmpPage(wj5examinerNewPage));
  },

  wj5examinerTest_orlrdgPage: async ({ context }, use) => {
    await use(new wj5OrlrdgPage(wj5examinerNewPage));
  },

  wj5examinerTest_leftnavPage: async ({ context }, use) => {
    await use(new wj5TestLeftNavValidationPage(wj5examinerNewPage));
  },

  wj5examinerTest_LETPATPage: async ({ context }, use) => {
    await use(new wj5LetterPatternMatchingPage(wj5examinerNewPage));
  },
  wj5examinerTest_swrtacPage: async ({ context }, use) => {
    await use(new wj5SwrtacPage(wj5examinerNewPage));
  },

  wj5examinerTest_phnretPage: async ({ context }, use) => {
    await use(new wj5PhnretPage(wj5examinerNewPage));
  },
  wj5examinerTest_BLKROTPage: async ({ context }, use) => {
    await use(new wj5BlockRotationPage(wj5examinerNewPage));
  },

  wj5examinerTest_SWRTFLPage: async ({ context }, use) => {
    await use(new wj5SentenceWritingFluencyPage(wj5examinerNewPage));
  },

  wj5examinerTest_MTHFLUPage: async ({ context }, use) => {
    await use(new wj5MathFactsFluencyPage(wj5examinerNewPage));
  },

  wj5examinerTest_SNDBLNPage: async ({ context }, use) => {
    await use(new wj5SoundBlendingPage(wj5examinerNewPage));
  },

  wj5examinerTest_SPLSNDPage: async ({ context }, use) => {
    await use(new wj5SpellingOfSoundsPage(wj5examinerNewPage));
  },

  wj5examinerTest_RPDPHOPage: async ({ context }, use) => {
    await use(new wj5RapidPhonemeNamingPage(wj5examinerNewPage));
  },

  wj5examinerTest_MEMWRDPage: async ({ context }, use) => {
    await use(new wj5MemoryForWordsPage(wj5examinerNewPage));
  },

  wj5examinerTest_ACDVOCPage: async ({ context }, use) => {
    await use(new wj5AcademicVocabularyPage(wj5examinerNewPage));
  },

  wj5examinerTest_sndsubPage: async ({ context }, use) => {
    await use(new wj5SndsubPage(wj5examinerNewPage));
  },
  
  wj5examinerTest_numrevPage: async ({ context }, use) => {
    await use(new wj5NumrevPage(wj5examinerNewPage));
  },

  wj5examinerTest_orlsmpPage: async ({ context }, use) => {
    await use(new wj5OrlsmpPage(wj5examinerNewPage));
  },

  wj5examinerTest_parcmpPage: async ({ context }, use) => {
    await use(new wj5ParcmpPage(wj5examinerNewPage));
  },

  wj5examinerTest_decileTablePage: async ({ context }, use) => {
    await use(new wj5DecilePage(wj5examinerNewPage));
  },

wj5examinerTest_rpdletPage: async ({ context }, use) => {
    await use(new wj5RpdletPage(wj5examinerNewPage));
  },

  wj5examinerTest_senrepPage: async ({ context }, use) => {
    await use(new wj5SenrepPage(wj5examinerNewPage));
  },

  wj5examinerTest_segmntPage: async ({ context }, use) => {
    await use(new wj5SegmntPage(wj5examinerNewPage));
  },

  wj5examinerTest_rpdpicPage: async ({ context }, use) => {
    await use(new wj5RpdpicPage(wj5examinerNewPage));
  },

  wj5examinerTest_ANLSYNPage: async ({ context }, use) => {
    await use(new wj5AnalysisSynthesisPage(wj5examinerNewPage));
  },

  wj5examinerTest_CALCPage: async ({ context }, use) => {
    await use(new wj5CalculationPage(wj5examinerNewPage));
  },

  wj5examinerTest_SNDREVPage: async ({ context }, use) => {
    await use(new wj5SoundReversalPage(wj5examinerNewPage));
  },

  wj5examinerTest_NUMPATPage: async ({ context }, use) => {
    await use(new wj5NumberPatternMatchingPage(wj5examinerNewPage));
  },

  wj5examinerTest_SRDGFLPage: async ({ context }, use) => {
    await use(new wj5SentenceReadingFluencyPage(wj5examinerNewPage));
  },
  
 wj5examinerTest_OVSYNPage: async ({ context }, use) => {
    await use(new wj5OralVocabularyPage(wj5examinerNewPage));
  },

  wj5examinerTest_OVANTPage: async ({ context }, use) => {
    await use(new wj5OralVocabularyAntonymPage(wj5examinerNewPage));
  },

  wj5examinerTest_GIWHATPage: async ({ context }, use) => {
    await use(new wj5GeneralInfoPage(wj5examinerNewPage));
  },

  wj5examinerTest_GIWHERPage: async ({ context }, use) => {
    await use(new wj5GeneralInfoWHERPage(wj5examinerNewPage));
  },

  wj5examinerTest_NWDREPPage: async ({ context }, use) => {
    await use(new wj5NonwordRepetitionPage(wj5examinerNewPage));
  },

  wj5examinerTest_vrbanlPage: async ({ context }, use) => {
    await use(new wj5VrbanlPage(wj5examinerNewPage));
  },

wj5examinerTest_stycmpPage: async ({ context }, use) => {
    await use(new wj5StycmpPage(wj5examinerNewPage));
  },

wj5examinerTest_wrdgflPage: async ({ context }, use) => {
    await use(new wj5WrdgflPage(wj5examinerNewPage));
  },

wj5examinerTest_matrczPage: async ({ context }, use) => {
    await use(new wj5MatrczPage(wj5examinerNewPage));
  },

  wj5Test_ScoreReportsPage: async ({ context }, use) => {
    await use(new WJ5_ScoreReportPage(wj5ahNewPage));
  },

  wj5examinerTest_sparelPage: async ({ context }, use) => {
    await use(new wj5SparelPage(wj5examinerNewPage));
  },

  wj5examinerTest_vrbatnPage: async ({ context }, use) => {
    await use(new wj5VrbatnPage(wj5examinerNewPage));
  },

 wj5examinerTest_lwidntPage: async ({ context }, use) => {
    await use(new wj5LwidntPage(wj5examinerNewPage));
  },
  
wj5examinerTest_wrdatkPage: async ({ context }, use) => {
    await use(new wj5WrdatkPage(wj5examinerNewPage));
  },

 wj5examinerTest_psgcmpPage: async ({ context }, use) => {
    await use(new wj5PsgcmpPage(wj5examinerNewPage));
  },

 wj5examinerTest_styrecPage: async ({ context }, use) => {
    await use(new wj5StyrecPage(wj5examinerNewPage));
  },

 wj5examinerTest_semretPage: async ({ context }, use) => {
    await use(new wj5SemretPage(wj5examinerNewPage));
  },  
});