import {MainPage} from "../src/pageObjects/mainPage";

describe('click on buttons from header', () => {

    before(function () {
        browser.url('https://webdriver.io');
    });

    it('click on Docs', () => {
        MainPage.header.clickOnDocs();
        browser.pause(5000)
    })

});