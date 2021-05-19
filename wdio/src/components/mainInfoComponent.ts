import {Component} from "./component";
import {MainPage} from "../pageObjects/mainPage";

export class MainInfoComponent extends Component {

    constructor(selector: string = 'div[class^="docItemContainer"]') {
        super(selector);
    }

    private readonly header = 'h1[class*="docTitle"]';
    private readonly dataTheme = 'html[data-theme]';

    get headerText(): string {
        return this.childElement(this.header).getText().trim();
    }

    get contributeHeader(): string {
        return this.childElement(this.header).getText()
    }

    get dataThemeText(): string {
            const form = $("html")
            const attr = form.getAttribute("data-theme")
            return (attr);
    }

    get checkDataTheme(): string {
        const form = $("html")
        let attr = form.getAttribute("data-theme")
        if (attr=="light") {
            return(attr);
        } else {
            MainPage.header.clickOnDarkTheme();
            return (attr);
        }
    }


}