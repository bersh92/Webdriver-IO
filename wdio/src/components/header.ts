import {Component} from "./component";

export class Header extends Component {

    constructor(selector: string = '.navbar.navbar--fixed-top') {
        super(selector);
    }

    private readonly docsLink = 'a=Docs';
    private readonly versionNumber = 'div[class*="items--right"] a[href="/versions"]';
    private readonly contributeButton = 'a=Contribute';
    private readonly searchField = '[class="DocSearch-Button-Container"]';
    private readonly darkTheme = 'div[class*="react-toggle-thumb"]';
    private readonly dataTheme = 'html[data-theme]';

    clickOnDocs(): void {
        this.childElement(this.docsLink).click()
    }

    clickOnDarkTheme(): void {
        this.childElement(this.darkTheme).click()
    }


    get version(): string {
        return this.childElement(this.versionNumber).getText()
    }

    clickOnContribute(): void {
        this.childElement(this.contributeButton).click()
    }

    clickOnSearch(): void {
        this.childElement(this.searchField).click()
    }

    get themeText(): string {
        $(this.dataTheme).getAttribute("data-theme");
        return $(this.dataTheme).getAttribute("data-theme");
    }

    selectTheme(theme: string): void {
        if (this.themeText != theme) {
            this.clickOnDarkTheme()
        }
    }
}