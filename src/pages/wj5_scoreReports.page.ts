import { test, expect, Page, Locator,TestInfo } from "../base/basePageFixtures";
import * as officeParser from "officeparser";
import fs from 'fs';
import * as tsDiff from 'diff';
import path from 'path';

let directoryOfBaseLines = path.join(__dirname,"../../dataFiles/ScoreReports_Baselines");
let directoryOfDownloads = path.join(__dirname,"../../downloads");
let wordReportPath = "downloads/ScoreReport.docx";
let directoryOfExtractedReports = path.join(__dirname,"../../downloads/extractedReports");
let directoryOfPassReport = path.join(__dirname,"../../downloads/Passed");
let directoryOfFailReport = path.join(__dirname,"../../downloads/Failed");

export default class WJ5_ScoreReportPage {

  private requiredFilePath: any;
  private requiredFile: any;

  private readonly page: Page;
  private readonly completeButton: Locator;
  private readonly searchTestAssignment: Locator;
  private readonly searchTestAssignmentIcon: Locator;
  private readonly generateReportIcon: Locator;
  private readonly createReportHeader: Locator;
  private readonly nextButton: Locator;
  private readonly generateReportButton: Locator;
  private readonly createTemplateButton: Locator;
  private readonly additionalOptionsHeader: Locator;
  private readonly htmlReportSubHeader: Locator;
  private readonly downloadButton: Locator;
  private readonly downloadReportOutputHeaer: Locator;
  private readonly loadingIcon: Locator;
  private readonly docTypeAndFormat: Locator;
  private readonly docTypeAndFormatOptions: Locator;
  private readonly advancedOptions: Locator;
  private readonly advancedOptionsHeader: Locator;
  private readonly confidenceLevelOptions: Locator;
  private readonly significanceLevelOptions: Locator;
  private readonly confidenceLevelDropdown: Locator;
  private readonly significanceLevelDropdown: Locator;
  private readonly saveButton: Locator;
  private readonly successMsg: Locator;
  private readonly closeButton: Locator;
  private readonly includeDropdown: Locator;
  private readonly createNewReportButton: Locator;
  private readonly selectExamineeButton: Locator;
  private readonly searchExaminee: Locator;
  private readonly selectExamineeFromDropdown: Locator;
  private readonly selectTestSetNameButton: Locator;
  private readonly searchTestSetName: Locator;
  private readonly selectTestSetNameFromDropdown: Locator;
  private readonly selectScoreTemplateButton: Locator;
  private readonly searchScoreTemplate: Locator;
  private readonly selectScoreTemplateFromDropdown: Locator;
  private readonly selectNormativeBasisButton: Locator;
  private readonly selectNormativeBasisFromDropdown: Locator;


  constructor(page: Page) {

    this.page = page;

    this.completeButton = this.page.locator("//button[text()='Complete']");
    this.searchTestAssignment = this.page.locator("//input[@placeholder='Search Test Assignments']");
    this.searchTestAssignmentIcon = this.page.locator("//button[@class='search-icon icon']");
    this.generateReportIcon = this.page.getByRole('button', { name: 'Generate Report' });
    this.createReportHeader = this.page.getByRole('heading', { name: 'Create a Report' });
    this.nextButton = this.page.getByRole('button', { name: 'Next' });
    this.generateReportButton = this.page.getByRole('button', { name: 'Generate Report' });
    this.createTemplateButton = this.page.getByRole('button', { name: 'Create Template' });
    this.additionalOptionsHeader = this.page.getByRole('heading', { name: 'Additional Options' });
    this.htmlReportSubHeader = this.page.locator("//div[contains(text(),'Score Report')]");
    this.downloadButton = this.page.locator("//button[text()='Download']");
    this.downloadReportOutputHeaer = this.page.locator("//h1[text()='Download Report Output']");
    this.loadingIcon = page.locator("//div[@class='loading-inner']").first();
    this.docTypeAndFormat = page.locator("//button[@class='select-box']");
    this.docTypeAndFormatOptions = page.locator("//div[@class='item-text single-select']");
    this.advancedOptions = this.page.locator("//button[@class='hollow-button no-margin ReportWizard_mcs_smallButton']");
    this.advancedOptionsHeader = this.page.getByRole('heading', { name: 'Advanced Options' });
    this.confidenceLevelDropdown = this.page.locator("(//button[@class='select-box'])[3]");
    this.significanceLevelDropdown = this.page.locator("(//button[@class='select-box'])[4]");
    this.confidenceLevelOptions = this.page.locator("//div[@class='ReportAdvancedOptionsModal_mcs_confBand']//div[@class='item-text single-select']");
    this.significanceLevelOptions = this.page.locator("//div[@class='ReportAdvancedOptionsModal_mcs_signifBand']//div[@class='item-text single-select']");
    this.saveButton = this.page.getByRole('button', { name: 'save' });
    this.successMsg = this.page.locator("//h1[text()='Success!']");
    this.closeButton = this.page.getByRole('button', { name: 'Close' });
    this.includeDropdown = this.page.locator("//button[@class='select-box']");
    this.additionalOptionsHeader = this.page.getByRole('heading', { name: 'Additional Options' });
    this.generateReportButton = this.page.getByRole('button', { name: 'Generate Report' });
    this.createNewReportButton = this.page.locator("//button[text()='Create New Report']");
    this.selectExamineeButton = this.page.locator(".placeholder").getByText("Select Examinee");
    this.searchExaminee = this.page.locator("(//input[@placeholder='Search...'])[1]");
    this.selectExamineeFromDropdown = this.page.locator(".item-text.single-select");
    this.selectTestSetNameButton = this.page.locator(".placeholder").getByText("Select Test Set");
    this.searchTestSetName = this.page.locator("(//input[@placeholder='Search...'])[2]");
    this.selectTestSetNameFromDropdown = this.page.locator(".item-text.single-select");
    this.selectScoreTemplateButton = this.page.locator("(//button[@class='select-box'])[1]");
    this.searchScoreTemplate = this.page.locator('[placeholder="Search..."]');
    this.selectScoreTemplateFromDropdown = this.page.locator(".item-text.single-select");
    this.selectNormativeBasisButton = this.page.locator("(//button[@class='select-box'])[2]");
    this.selectNormativeBasisFromDropdown = this.page.locator(".item-text.single-select");
  }

  async selectTestAssignmentForReport(testSetName: string, scoreTemp?: string, NormBasis?: string, confLevel?: string, signifLevel?: string, format?: string) {

    await this.page.bringToFront();
    await this.loadingIcon.waitFor({ state: "hidden" });
      try {
        await this.completeButton.click();
      } catch (error) {
        console.log(`The apis response issue ${error}`);
      } finally {
      await this.completeButton.click();
    }
    await this.searchTestAssignment.fill(testSetName);
    await this.searchTestAssignmentIcon.click();
    await this.generateReportIcon.first().click();
    await this.createReportHeader.waitFor({ state: "visible" });
    await this.nextButton.isEnabled();
    await this.nextButton.click();
    await this.createTemplateButton.waitFor({ state: "visible" });
    await this.nextButton.isEnabled();
    await this.nextButton.click();
    await this.additionalOptionsHeader.waitFor({ state: "visible" });
    await this.generateReportButton.click();
  }
  async downloadWordReport(testinfo: TestInfo, format?:string) {

    const page1Promise = this.page.waitForEvent("popup");
    const page1 = await page1Promise;
    await page1.getByRole("button", { name: "Download" }).nth(0).waitFor({ state: "visible" });
    await page1.getByRole("button", { name: "Download" }).nth(0).click();
    await page1.getByRole("button", { name: "Cancel" }).waitFor({ state: "visible" });
    await page1.getByText("Choose Document TypeMicrosoft").click();
    await page1.locator("//div[text()='Microsoft Word']").nth(1).click();
    await page1.getByText("FORMATChoose FormatList Tests").click();
    await page1.locator(`//div[@class='item-text single-select' and text()= '${format}']`).click();
    await page1.getByRole('button', { name: 'Download' }).nth(0).click();
    const downloadPromise = page1.waitForEvent("download", {
      timeout: 60000,
    });
    const download = await downloadPromise;
    await download.saveAs(wordReportPath);
  }

  async readDocsAndCreateHtmlComparison(baseLine: string, currentReport: string, allReport?: string, failedReport?: string, passedReport?: string): string {

    try {
      console.log("required file = ", await this.requiredFile);
      const requiredBaseFilePath: string = path.join(directoryOfBaseLines,baseLine);
      const requiredFilePath: string = path.join(directoryOfExtractedReports, currentReport);

      let hasDifferences = false;

        const diff = tsDiff.diffWordsWithSpace(
          fs.readFileSync(requiredBaseFilePath, 'utf8')
          , fs.readFileSync(requiredFilePath, 'utf8'));

      let html = '<div style="display: flex; margin-top: 20px;">';

      html += '<div style="width: 48%; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;">';
      html += '<strong>BaseLine</strong><br><pre style="white-space: pre-wrap;">';

      diff.forEach(part => {

        if (part.added || part.removed){
          hasDifferences = true;
        }
        if (part.added) {
          // html += `<span style="color: green;">${part.value}</span>`;
          html += "";
        } else if (part.removed) {
          html += `<span style="color: red;">${part.value}</span>`;
        } else {
          html += part.value;
        }
      });

      html += '</pre>';
      html += '</div>';

      html += '<div style="width: 48%; padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;">';
      html += '<strong>Current Report</strong><br><pre style="white-space: pre-wrap;">';

      diff.forEach(part => {
        if (part.added) {
          html += `<span style="color: red;">${part.value}</span>`;
        } else if (part.removed) {
          // html += `<span style="color: red;">${part.value}</span>`;
          html += "";
        } else {
          html += part.value;
        }
      });

      html += '</pre>';
      html += '</div>';
      html += '</div>';

      const allReportPath: string = path.join(directoryOfDownloads,allReport);

      fs.writeFileSync(allReportPath, tsDiff.convertChangesToXML(diff));

      var changes = fs.readFileSync(allReportPath, 'utf8');

      if (changes.includes("<del>") || changes.includes("<ins>")) {

        const failedReportPath: string = path.join(directoryOfFailReport,failedReport);
        fs.writeFileSync(failedReportPath, html);
        console.log("failed");
        console.log(`Comparison saved as ${failedReport}`);
      } else {

        const PassedReportPath: string = path.join(directoryOfPassReport,passedReport);
        fs.writeFileSync(PassedReportPath, html);
        console.log("passed");
        console.log(`Comparison saved as ${passedReport}`);
      }
    } catch (error) {
      console.error("Error comparing documents:", error);
    }
  }

  async extractDataFromWord(report: string, extractedReport: string, baseLine: string, baseLineName: string) {

    try {
      const requiredFilePath: string = path.join(directoryOfDownloads, report);
      officeParser.parseOffice(requiredFilePath, function(result, err) {
        if (err) {
          console.error('Error parsing the office document:', err);
          return;
        }
        console.log("Parsing result:", result);
        if (result === undefined) {
          console.error("Parsed result is undefined.");
          return;
        }
        if (typeof result !== "string" && !Buffer.isBuffer(result)) {
          console.error("Parsed result is not a valid string or buffer.");
          return;
        }
        const extractedFilePath: string = path.join(directoryOfExtractedReports, extractedReport);
        fs.writeFileSync(extractedFilePath, result, "utf8");
        fs.promises.access(extractedFilePath, fs.constants.F_OK);
        if (fs.existsSync(extractedFilePath)) {
          console.log(extractedFilePath);
        if (baseLine.match("Yes")) {
          try {
            fs.renameSync(extractedFilePath, path.join(directoryOfExtractedReports, baseLineName));
            console.log(`File renamed successfully from ${extractedReport} to ${baseLineName}`);
          } catch (err) {
            console.error(`Error renaming file:`, err);
          }
        }
        }
      });
    } catch (error) {
      console.error(`Error reading ${this.requiredFilePath}: ${error}`);
    }
      await this.page.waitForTimeout(5000);
  }
async webPageToFile(report: string,extractedReport:string,baseLine:string,baseLineName:string){
    try {
      const page1Promise = this.page.waitForEvent("popup");
      const page1 = await page1Promise;
      await page1.getByRole("button", { name: "Download" }).nth(0).waitFor({ state: "visible" });
      await page1.locator("//button[@class='cardSubDetailCollapseExpandButton']").click();
      await page1.waitForTimeout(2000);
      const allTextContent = await page1.$$eval("*", (elements) => {
        return elements.map((el) => el.innerText).filter(text => text !== null);
      });
      const requiredFilePath: string = path.join(directoryOfDownloads, report);
      fs.writeFileSync(requiredFilePath, allTextContent.join("\n"));

      console.log(`All text content saved to ${report}`);
      const data = fs.readFileSync(requiredFilePath, "utf-8");

      const stopIndex = data.indexOf("Created On");
      const extractedFilePath: string = path.join(directoryOfExtractedReports, extractedReport);

      if (stopIndex !== -1) {
        fs.writeFileSync(extractedFilePath, data.substring(0, stopIndex));
        await page1.waitForTimeout(3000);
        fs.promises.access(extractedFilePath, fs.constants.F_OK);
        if (fs.existsSync(extractedFilePath)) {
          const htmlData = fs.readFileSync(extractedFilePath, "utf-8");
          console.log(htmlData);
        if(baseLine.match("Yes")) {
          try {
            fs.renameSync(extractedFilePath, path.join(directoryOfExtractedReports, baseLineName));
            console.log(`File renamed successfully from ${report} to ${baseLineName}`);
          } catch (err) {
            console.error(`Error renaming file:`, err);
          }
        }
        }
      } else {
        console.log("Stop string not found in the file");
        return "";
      }

    } catch (error) {
      console.error(`Error extracting elements data:`, error);
    }
  }
  async selectExamineeOnCreateReportPage(examineeName: string) {

    await this.selectExamineeButton.click();
    await this.searchExaminee.fill(examineeName);
    await this.selectExamineeFromDropdown.getByText(examineeName).click();
    await this.page.getByText("Selected Examinee Details").waitFor({ state: "visible" });
  }
  async selectTestSetOnCreateReportPage(testSetName: string) {

    await this.selectTestSetNameButton.waitFor({ state: "visible" });
    await this.selectTestSetNameButton.click();
    await this.searchTestSetName.fill(testSetName);
    await this.selectTestSetNameFromDropdown.getByText(testSetName).last().click();
  }
  async createNewReportFromReportCenter(examineeName: string,testSetName: string,templateName: string,norm: string){

    await this.page.getByRole('menuitem', { name: 'Reports' }).click();
    await this.page.getByRole('menuitem', { name: 'Report Center' }).click();
    expect(this.page.url()).toContain("reportcenter");
    await this.createNewReportButton.click();
    await this.createReportHeader.waitFor({ state: "visible" });
    await this.selectExamineeOnCreateReportPage(examineeName);
    await this.selectTestSetOnCreateReportPage(testSetName);
    await this.nextButton.isEnabled();
    await this.nextButton.click();
    await this.selectScoreTemplateOnCreateReportPage(templateName);
    await this.selectNormativeBasisOnCreateReportPage(norm);
  }
  async selectScoreTemplateOnCreateReportPage(templateName: string) {

    await this.selectScoreTemplateButton.click();
    await this.searchScoreTemplate.fill(templateName);
    await this.selectScoreTemplateFromDropdown.getByText(templateName).click();
  }
  async selectNormativeBasisOnCreateReportPage(norm:string) {

    await this.selectNormativeBasisButton.click();
    await this.selectNormativeBasisFromDropdown.getByText(norm).click();
  }

  async selectAdvancedOptions(confLevel?: string, signifLevel?: string) {

    await this.advancedOptions.click();
    await this.advancedOptionsHeader.waitFor({ state: "visible" });
    await this.confidenceLevelDropdown.click();
    await this.page.locator(`//div[@class='item-text single-select' and text()= '${confLevel}']`).click();
    await this.significanceLevelDropdown.click();
    await this.page.locator(`//div[contains(text(),'${signifLevel}') and @class='item-text single-select']`).click();
    await this.saveButton.isEnabled();
    await this.saveButton.click();
    await expect.soft(this.successMsg).toHaveText("Success!");
    await this.closeButton.click();
    await this.nextButton.isEnabled();
    await this.nextButton.click();
  }
  async selectAdditionalOptions(sessionLevelNotes?: string, sessionLevelObservations?: string, testLevelNotes?: string, testLevelRsbe?: string) {

    await this.additionalOptionsHeader.waitFor({ state: "visible"});
    await this.includeDropdown.nth(0).click();
      await this.page.locator(`//div[@class='item-text single-select' and text()= '${sessionLevelNotes}']`).nth(0).click();
      await this.includeDropdown.nth(1).click();
      await this.page.locator(`//div[@class='item-text single-select' and text()= '${sessionLevelObservations}']`).nth(1).click();
      await this.includeDropdown.nth(2).click();
      await this.page.locator(`//div[@class='item-text single-select' and text()= '${testLevelNotes}']`).nth(2).click();
      await this.includeDropdown.nth(3).click();
      await this.page.locator(`//div[@class='item-text single-select' and text()= '${testLevelRsbe}']`).nth(3).click();
      await this.generateReportButton.isEnabled();
      await this.generateReportButton.click();
  }

}
