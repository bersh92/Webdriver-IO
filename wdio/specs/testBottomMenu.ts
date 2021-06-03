import {MainPage} from "../src/pageObjects/mainPage";
import 'should';
import {Utils} from "../utils/utils";

describe('click on buttons from bottom menu', () => {

    beforeEach(function () {
        browser.url('');
    });

    // it('Click on "Stack Overflow" on the bottom menu and check that opened this "https://stackoverflow.com/questions/tagged/webdriver-io" page', function () {
    //     MainPage.bottomMenu.clickOnSectionItem('Stack Overflow');
    //     browser.switchWindow('Stack Overflow');
    //     browser.getUrl().should.be.containEql('https://stackoverflow.com');
    //     browser.closeWindow();
    // });
    //
    // it('Click on "Support Chat" on the bottom menu and check that opened this "https://gitter.im/webdriverio/webdriverio" page', function () {
    //     MainPage.bottomMenu.clickOnSectionItem('Support Chat');
    //     browser.switchWindow('https://gitter.im/');
    //     browser.getUrl().should.be.containEql('https://gitter.im/webdriverio');
    //     browser.closeWindow();
    // });
    //
    // it('Click on "Slack" on the bottom menu and check that opened this "https://seleniumhq.slack.com/join/shared_invite/zt-f7jwg1n7-RVw4v4sMA7Zjufira_~EVw#/shared-invite/email" page', function () {
    //     MainPage.bottomMenu.clickOnSectionItem('Slack');
    //     browser.switchWindow('https://seleniumhq.slack.com/');
    //     browser.getUrl().should.be.containEql('https://seleniumhq.slack.com/');
    //     browser.closeWindow();
    // });
    //
    // it('Click on "Twitter"', function () {
    //     MainPage.bottomMenu.clickOnSectionItem('Twitter');
    //     browser.switchWindow('https://twitter.com/');
    //     browser.getUrl().should.be.containEql('https://twitter.com/');
    //     browser.closeWindow();
    // });
    //
    // it('Click on "Tidelift Subscription" on the bottom menu and check that opened this "https://webdriver.io/docs/enterprise/" page', function () {
    //     MainPage.bottomMenu.clickOnSectionItem('Tidelift Subscription');
    //     browser.switchWindow('https://webdriver.io/docs/enterprise/');
    //     browser.getUrl().should.be.containEql('https://webdriver.io/');
    //     browser.closeWindow();
    // });

    it('Click on "Donate to WebdriverIO" on the bottom menu and check that opened this "https://opencollective.com" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Donate to WebdriverIO');
        Utils.getTabUrl('https://opencollective.com').should.containEql('opencollective.com')
    });

    it('Click on "Blog" on the bottom menu and check that opened "Blog" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Blog');
        Utils.getTabUrl('https://webdriver.io/blog').should.containEql('webdriver.io/blog')
    });

    it('Click on "GitHub" on the bottom menu and check that opened this "https://github.com/" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('GitHub');
        Utils.getTabUrl('https://github.com').should.containEql('github')
    });

    it('Click on "Swag Store" on the bottom menu and check that opened this "https://webdriverio.threadless.com/" page', function () {
        MainPage.bottomMenu.clickOnSectionItem('Swag Store');
        Utils.getTabUrl('https://webdriverio.threadless.com/').should.containEql('threadless.com')
    });

})