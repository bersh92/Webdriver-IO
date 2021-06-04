import {MainPage} from "../src/pageObjects/mainPage";
import 'should';
import {Utils} from "../utils/utils";

describe('click on buttons from bottom menu', () => {

    beforeEach(function () {
        browser.url('');
    });

    it('Click on "Stack Overflow"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Stack Overflow');
        Utils.getTabUrl('https://stackoverflow.com/questions/tagged/webdriver-io').should.containEql('stackoverflow')
    });

    it('Click on "Support Chat"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Support Chat');
        Utils.getTabUrl('https://gitter.im/').should.containEql('gitter.im')
    });

    it('Click on "Slack"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Slack');
        Utils.getTabUrl('https://seleniumhq.slack.com/').should.containEql('seleniumhq')
    })

    it('Click on "Twitter"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Twitter');
        Utils.getTabUrl('https://twitter.com/').should.containEql('twitter.com')
    });

    it('Click on "Tidelift Subscription"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Tidelift Subscription');
        Utils.getTabUrl('https://webdriver.io/docs/enterprise/').should.containEql('webdriver.io')
    });

    it('Click on "Donate to WebdriverIO"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Donate to WebdriverIO');
        Utils.getTabUrl('https://opencollective.com').should.containEql('opencollective.com')
    });

    it('Click on "Blog"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Blog');
        Utils.getTabUrl('https://webdriver.io/blog').should.containEql('webdriver.io/blog')
    });

    it('Click on "GitHub"', function () {
        MainPage.bottomMenu.clickOnSectionItem('GitHub');
        Utils.getTabUrl('https://github.com').should.containEql('github')
    });

    it('Click on "Swag Store"', function () {
        MainPage.bottomMenu.clickOnSectionItem('Swag Store');
        Utils.getTabUrl('https://webdriverio.threadless.com/').should.containEql('threadless.com')
    })
})