import {MainPage} from "../src/pageObjects/mainPage";
import 'should';

let listOfDocsChildVisibleElements = ['Introduction', 'What is Webdriver.IO?', 'Getting Started', 'Boilerplate Projects', 'Setup Types', 'Sync vs. Async Mode', 'Automation Protocols', 'Multiremote', 'Auto-waiting', 'Options', 'Babel Setup', 'TypeScript Setup', 'Proxy Setup', 'Driver Binaries', 'Selectors', 'Timeouts', 'The Browser Object', 'Mocks and Spies', 'Custom Commands', 'Page Object Pattern', 'Debugging', 'REPL interface', 'WDIO CLI Options', 'Testrunner Configuration', 'Frameworks', 'Assertion', 'Organizing Test Suite', 'Retry Flaky Tests', 'Watch Test Files', 'Custom Reporter', 'Custom Services', 'From v5 to v6', 'From v6 to v7', 'From Protractor', 'Using Cloud Services', 'Autocompletion', 'Docker', 'Github Actions', 'Jenkins', 'Bamboo', 'Allure Reporter', 'Concise Reporter', 'Dot Reporter', 'Junit Reporter', 'Spec Reporter', 'Sumologic Reporter', 'Report Portal Reporter', 'Video Reporter', 'HTML Reporter', 'JSON Reporter', 'Mochawesome Reporter', 'Timeline Reporter', 'CucumberJS JSON Reporter', 'Markdown Reporter', 'Delta Reporter Reporter', 'Appium Service', 'Applitools Service', 'Browserstack Service', 'Crossbrowsertesting Service', 'Devtools Service', 'Firefox Profile Service', 'Sauce Service', 'Selenium Standalone Service', 'Shared Store Service', 'Static Server Service', 'Testingbot Service', 'Webdriver Mock Service', 'ChromeDriver Service', 'Intercept Service', 'Zafira Listener Service', 'Report Portal Service', 'Docker Service', 'UI5 Service', 'WireMock Service', 'Slack Service', 'Intercept Service', 'LambdaTest Service', 'Visual Regression Testing Service', 'Ng-apimock Service', 'Novus Visual Regression Service', 'Re-run Service', 'winappdriver Service', 'ywinappdriver Service', 'PerformanceTotal Service', 'AWS Device Farm Service', 'OCR service for Appium Native Apps Service', 'Library of useful expected conditions Service', 'Auto-detect missing imports w/eslint Service', 'Microsoft Teams Service'];
let listOfApiChildVisibleElements = ['Introduction', 'Expect', 'WebDriver Protocol', 'Appium', 'Mobile JSON Wire Protocol', 'Chromium', 'Sauce Labs', 'Selenium Standalone', 'JSON Wire Protocol', '$$', '$', 'addCommand', 'call', 'custom$$', 'custom$', 'debug', 'deleteCookies', 'execute', 'executeAsync', 'getCookies', 'getPuppeteer', 'getWindowSize', 'keys', 'mock', 'newWindow', 'overwriteCommand', 'pause', 'react$$', 'react$', 'reloadSession', 'savePDF', 'saveRecordingScreen', 'saveScreenshot', 'setCookies', 'setTimeout', 'setWindowSize', 'switchWindow', 'throttle', 'touchAction', 'uploadFile', 'url', 'waitUntil', '$$', '$', 'addValue', 'clearValue', 'click', 'custom$$', 'custom$', 'doubleClick', 'dragAndDrop', 'getAttribute', 'getCSSProperty', 'getComputedLabel', 'getComputedRole', 'getHTML', 'getLocation', 'getProperty', 'getSize', 'getTagName', 'getText', 'getValue', 'isClickable', 'isDisplayed', 'isDisplayedInViewport', 'isEnabled', 'isEqual', 'isExisting', 'isFocused', 'isSelected', 'moveTo', 'nextElement', 'parentElement', 'previousElement', 'react$$', 'react$', 'saveScreenshot', 'scrollIntoView', 'selectByAttribute', 'selectByIndex', 'selectByVisibleText', 'setValue', 'shadow$$', 'shadow$', 'touchAction', 'waitForClickable', 'waitForDisplayed', 'waitForEnabled', 'waitForExist', 'waitUntil', 'abort', 'abortOnce', 'clear', 'respond', 'respondOnce', 'restore'];

describe('click on buttons from header', () => {

    before(function () {
        browser.url('https://webdriver.io');
    });

    it('Click on Docs and check Header Text', () => {
        MainPage.header.clickOnDocs();
        MainPage.mainInfoComponent.headerText.should.be.equal('Getting Started')
    })

    it('Open Getting Started instructions from side menu and check the version', () => {
        MainPage.sideMenu.openSection('Introduction')
        MainPage.sideMenu.clickOnSectionItem('Getting Started')
        MainPage.mainInfoComponent.headerText.should.be.equal('Getting Started')
        MainPage.header.version.should.be.equal('v7')
    })

    it('Click on Contribute and check the header', () => {
        MainPage.header.clickOnContribute();
        MainPage.mainInfoComponent.contributeHeader.should.be.equal('Contribute');
    })

    it('Check that it is possible to find "Click" documentation', () => {
        MainPage.header.clickOnSearch();
        MainPage.searchPopUpComponent.findAndOpenTheSearchResult('click');
        MainPage.mainInfoComponent.headerText.should.be.equal('click')
    })

    it('Check that it is possible to find "Add Value" documentation', () => {
        MainPage.header.clickOnSearch();
        MainPage.searchPopUpComponent.findAndOpenTheSearchResult('addValue');
        MainPage.mainInfoComponent.headerText.should.be.equal('addValue')
    })

    it('Check that it is possible to find "url" documentation', () => {
        MainPage.header.clickOnSearch();
        MainPage.searchPopUpComponent.findAndOpenTheSearchResult('url');
        MainPage.mainInfoComponent.headerText.should.be.equal('url')
    })

    it('Check the list of Docs elements texts in the Side Menu [Child Elements]', () => {
        MainPage.header.clickOnDocs();
        MainPage.sideMenu.sideMenuElementsTexts.sort().should.be.eql(listOfDocsChildVisibleElements.sort());
    });

    it('Check the list of API elements texts in the Side Menu [Child Elements]', () => {
        MainPage.header.clickOnApi();
        MainPage.sideMenu.sideMenuElementsTexts.sort().should.be.eql(listOfApiChildVisibleElements.sort());
    });
});