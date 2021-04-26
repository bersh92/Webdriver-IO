import {Component} from "./component";

export class Header extends Component {

    constructor(selector: string = '.navbar.navbar--fixed-top') {
        super(selector);
    }

    private readonly docsLink = 'a=Docs';

    clickOnDocs(): void {
        this.childElement(this.docsLink).click()
    }

}