import {AttributeType, Component} from "./component";

export class BottomMenu extends Component {

    constructor(selector: string = 'footer[class*="footer footer--dark"]') {
        super(selector);
    }

    private readonly listOfSubmenuItems = 'li[class="footer__item"] a';

    get listOfBottomMenu(): string[] {
        return this.childElementsTexts(this.listOfSubmenuItems);
    }

    clickOnSectionItem(sectionItem: string): void {
        this.findElementAndClick(this.listOfSubmenuItems, AttributeType.text, sectionItem);
    }
}