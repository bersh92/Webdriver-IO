import {MainPage} from "../src/pageObjects/mainPage";
import 'should';

const bottomMenuLists = ['Getting Started', 'API Reference', 'Contribute', 'Help', 'Stack Overflow', 'Support Chat', 'Slack', 'Twitter', 'Tidelift Subscription', 'Donate to WebdriverIO', 'Swag Store', 'Blog', 'GitHub'];

const listOfDocsParentVisibleElements = ['Introduction', 'Core Concepts', 'Configuration', 'Getting Started', 'Guides', 'Testrunner', 'Migrate', 'Integration', 'Reporter', 'Services'];
const listOfAPIParentVisibleElements = ['Introduction', 'Expect', 'Protocols', 'browser', 'element', 'mock'];
const listOfCommunityParentVisibleElements = ['Need Help?', 'Office Hours', 'Team', 'Resources', 'Materials', 'Donate'];

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
        MainPage.mainInfoComponent.headerText.should.be.equal('url');
    })

    it('Check the list of Docs elements texts in the Side Menu [Only for parents]', () => {
        MainPage.header.clickOnDocs();
        MainPage.sideMenu.sideMenuElementsTexts.sort().should.be.eql(listOfDocsParentVisibleElements.sort());
    })

    it('Check the list of APIs elements texts in the Side Menu [Only for parents]', () => {
        MainPage.header.clickOnApi();
        MainPage.sideMenu.sideMenuElementsTexts.sort().should.be.eql(listOfAPIParentVisibleElements.sort());
    })

    it("Check the list of Community elements texts in the Side Menu [Only for parents]", () => {
        MainPage.header.clickOnCommunity();
        MainPage.sideMenu.sideMenuCommunityItems.sort().should.be.eql(listOfCommunityParentVisibleElements.sort());
    })

    it('Check that it is possible to activate the dark theme', () => {
        MainPage.header.selectTheme("dark");
        MainPage.header.themeText.should.be.equal('dark');
        MainPage.header.selectTheme("light");
        MainPage.header.themeText.should.be.equal('light');
    })

    it('Check elements in the bottom of the page', function () {
        MainPage.bottomMenu.listOfBottomMenu.should.be.eql(bottomMenuLists);
    })

    it('Click on "Getting Started" on the bottom menu and check that opened "Getting Started" page', function () {
        MainPage.bottomMenu.clickOnGettingStartedButton();
        MainPage.mainInfoComponent.contributeHeader.should.be.equal('Getting Started');
    });

    it('Click on "API Reference" on the bottom menu and check that opened "Introduction" page', function () {
        MainPage.bottomMenu.clickOnApiReferenceButton();
        MainPage.mainInfoComponent.contributeHeader.should.be.equal('Introduction');
    });

    it('Click on "Contribute" on the bottom menu and check that opened "Contribute" page', function () {
        MainPage.bottomMenu.clickOnContributeButton();
        MainPage.mainInfoComponent.contributeHeader.should.be.equal('Contribute');
    });

    it('Click on "Help" on the bottom menu and check that opened "Help" page', function () {
        MainPage.bottomMenu.clickOnHelpButton();
        MainPage.mainInfoComponent.contributeHeader.should.be.equal('Need Help?');
    });
});