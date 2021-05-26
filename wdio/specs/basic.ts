import {MainPage} from "../src/pageObjects/mainPage";
import 'should';

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

    it('Check that it is possible to activate the dark theme', () => {
        MainPage.header.selectTheme("dark");
        MainPage.header.themeText.should.be.equal('dark');
        MainPage.header.selectTheme("light");
        MainPage.header.themeText.should.be.equal('light');
    })

    it('Check elements in the bottom of the page', function () {
        MainPage.bottomMenu.listOfBottomMenu.should.be.eql(['Getting Started',
            'API Reference',
            'Contribute',
            'Help',
            'Stack Overflow',
            'Support Chat',
            'Slack',
            'Twitter',
            'Tidelift Subscription',
            'Donate to WebdriverIO',
            'Swag Store',
            'Blog',
            'GitHub']);
    })
});