import {AttributeType, Component} from "./component";

export class BottomMenu extends Component {

    constructor(selector: string = 'footer[class*="footer footer--dark"]') {
        super(selector);
    }

    private readonly listOfItems = 'div[class="row footer__links"]';
    private readonly listOfSubmenuItems = 'li[class="footer__item"] a';

    get listOfBottomMenu(): string[] {
        return this.childElementsTexts(this.listOfSubmenuItems);
    }

    openSection(sectionName: string): void {
        this.findElementAndClick(this.listOfItems, AttributeType.text, sectionName)
    }

    clickOnSectionItem(sectionItem: string): void {
        this.findElementAndClick(this.listOfSubmenuItems, AttributeType.text, sectionItem)
    }
}