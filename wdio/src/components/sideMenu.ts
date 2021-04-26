import {AttributeType, Component} from "./component";

export class SideMenu extends Component {

    constructor(selector: string = '.menu.menu--responsive.thin-scrollbar.menu_1yIk') {
        super(selector);
    }

    private readonly listElements = '.menu__link.menu__link--sublist';
    private readonly listOfSubmenuItems = 'li[class="menu__list-item"] a'

    openSection(sectionName: string): void {
        this.findElementAndClick(this.listElements, AttributeType.text, sectionName)
    }

    clickOnSectionItem(sectionItem: string): void {
        this.findElementAndClick(this.listOfSubmenuItems, AttributeType.text, sectionItem)
    }
}