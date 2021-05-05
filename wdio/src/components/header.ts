import {Component} from "./component";

export class Header extends Component {

    constructor(selector: string = '.navbar.navbar--fixed-top') {
        super(selector);
    }

    private readonly docsLink = 'a=Docs';
    private readonly versionNumber = 'div[class*="items--right"] a[href="/versions"]';
    private readonly contributeButton = 'a=Contribute';

    clickOnDocs(): void {
        this.childElement(this.docsLink).click()
    }

    get version(): string {
        return this.childElement(this.versionNumber).getText()
    }

    clickOnContribute(): void {
        this.childElement(this.contributeButton).click()
    }

}