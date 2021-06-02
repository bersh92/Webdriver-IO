import {Component} from "./component";

export class MainInfoComponent extends Component {

    constructor(selector: string = 'div[class^="docItemContainer"]') {
        super(selector);
    }

    private readonly header = 'h1[class*="docTitle"]';

    get headerText(): string {
        return this.childElement(this.header).getText().trim();
    }
}