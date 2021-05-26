import {AttributeType, Component} from "./component";

export class BottomMenu extends Component {

    constructor(selector: string = 'footer[class*="footer footer--dark"]') {
        super(selector);
    }

    private readonly listOfItems = 'li[class="footer__item"] a';

    get listOfText(): string[] {
         return this.childElementsTexts(this.listOfItems);
    }
}