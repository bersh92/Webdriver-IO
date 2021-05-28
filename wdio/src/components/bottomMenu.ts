import {AttributeType, Component} from "./component";

export class BottomMenu extends Component {

    constructor(selector: string = 'footer[class*="footer footer--dark"]') {
        super(selector);
    }

    private readonly listOfItems = 'li[class="footer__item"] a';
    private readonly gettingStartedButton = '//a[text()="Getting Started"]';
    private readonly apiReferenceButton = '//a[text()="API Reference"]';
    private readonly contributeButton = '//a[text()="Contribute"]';
    private readonly helpButton = '//a[text()="Help"]';

    get listOfBottomMenu(): string[] {
         return this.childElementsTexts(this.listOfItems);
    }

    clickOnGettingStartedButton(): void {
        this.childElement(this.gettingStartedButton).click()
    }

    clickOnApiReferenceButton(): void {
        this.childElement(this.apiReferenceButton).click()
    }

    clickOnContributeButton(): void {
        this.childElement(this.contributeButton).click()
    }

    clickOnHelpButton(): void {
        this.childElement(this.helpButton).click()
    }
}