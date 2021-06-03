import {MainPage} from "../src/pageObjects/mainPage";
import 'should';
import {beforeEach} from "mocha";

describe('click on buttons from bottom menu', () => {

    beforeEach(function () {
        browser.reloadSession()
        browser.url('https://webdriver.io');
    });

    it('Click on "Stack Overflow" on the bottom menu and check that opened this "https://stackoverflow.com/questions/tagged/webdriver-io" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Stack Overflow');
        browser.switchWindow('Stack Overflow');
        browser.getUrl().should.be.containEql('https://stackoverflow.com');
        browser.closeWindow();
    });

    it('Click on "Support Chat" on the bottom menu and check that opened this "https://gitter.im/webdriverio/webdriverio" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Support Chat');
        browser.switchWindow('https://gitter.im/');
        browser.getUrl().should.be.containEql('https://gitter.im/webdriverio');
        browser.closeWindow();
    });

    it('Click on "Slack" on the bottom menu and check that opened this "https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/shared-invite/email" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Slack');
        browser.switchWindow('https://seleniumhq.slack.com/');
        browser.getUrl().should.be.containEql('https://seleniumhq.slack.com/');
        browser.closeWindow();
    });

    it('Click on "Twitter"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Twitter');
        browser.switchWindow('https://twitter.com/');
        browser.getUrl().should.be.containEql('https://twitter.com/');
        browser.closeWindow();
    });

    it('Click on "Tidelift Subscription" on the bottom menu and check that opened this "https://webdriver.io/docs/enterprise/" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Tidelift Subscription');
        browser.switchWindow('https://webdriver.io/docs/enterprise/');
        browser.getUrl().should.be.containEql('https://webdriver.io/');
        browser.closeWindow();
    });

    it('Click on "Donate to WebdriverIO" on the bottom menu and check that opened this "https://opencollective.com" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Donate to WebdriverIO');
        browser.switchWindow('https://opencollective.com');
        browser.getUrl().should.be.containEql('https://opencollective.com');
        browser.closeWindow();
    });

    it('Click on "Blog" on the bottom menu and check that opened "Blog" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Blog');
        browser.getUrl().should.be.containEql('https://webdriver.io/blog');
    });

    it('Click on "GitHub" on the bottom menu and check that opened this "https://github.com/" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('GitHub');
        browser.switchWindow('https://github.com/');
        browser.getUrl().should.be.containEql('https://github.com/');
    });

    it('Click on "Swag Store" on the bottom menu and check that opened this "https://webdriverio.threadless.com/" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Swag Store');
        browser.switchWindow('https://webdriverio.threadless.com/');
        browser.getUrl().should.be.containEql('https://webdriverio.threadless.com');
    });
})