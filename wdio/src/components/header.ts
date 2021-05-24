import {Component} from "./component";

export class Header extends Component {

    constructor(selector: string = '.navbar.navbar--fixed-top') {
        super(selector);
    }

    private readonly docsLink = 'a=Docs';
    private readonly versionNumber = 'div[class*="items--right"] a[href="/versions"]';
    private readonly contributeButton = 'a=Contribute';
    private readonly searchField = '[class="DocSearch-Button-Container"]';
    private readonly apiLink = 'a=API';
    private readonly communityLink = 'a=Community';

    clickOnDocs(): void {
        this.childElement(this.docsLink).click()
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

    clickOnApi(): void {
        this.childElement(this.apiLink).click();
    }

    clickOnCommunity(): void {
        this.childElement(this.communityLink).click();
    }
}