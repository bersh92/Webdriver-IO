import {AttributeType, Component} from "./component";

export class SideMenu extends Component {

    constructor(selector: string = 'div[class*="menu menu"]') {
        super(selector);
    }

    private readonly listElements = '.menu__link.menu__link--sublist';
    private readonly listOfSubmenuItems = 'li[class="menu__list-item"] a';
    private readonly apiSubmenuItems = 'a[class*="menu__link "],[href="/docs/api/expect-webdriverio"]:not([class="pagination-nav__link"])';

    openSection(sectionName: string): void {
        this.findElementAndClick(this.listElements, AttributeType.text, sectionName)
    }

    clickOnSectionItem(sectionItem: string): void {
        this.findElementAndClick(this.listOfSubmenuItems, AttributeType.text, sectionItem)
    }

    get sideMenuElementsTexts(): string[] {
        return this.childElementsTexts(this.apiSubmenuItems);
    }

    get sideMenuCommunityItems(): string[] {
        return this.childElementsTexts(this.listOfSubmenuItems);
    }
}