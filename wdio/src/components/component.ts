import {code as dragAndDrop} from 'html-dnd';

export enum AttributeType {
    title = 'title',
    text = 'text',
    tooltip_template = 'tooltip-template',
    label = 'label'
}

export abstract class Component {
    public readonly defaultWaitTime = 10000;
    public readonly defaultWaitInTime = 20000;

    constructor(public selector: string) {
        this.selector = selector;
    }

    get element(): WebdriverIO.Element {
        $(this.selector).waitForExist({timeout: this.defaultWaitTime});
        $(this.selector).waitForDisplayed({timeout: this.defaultWaitInTime});
        return $(this.selector);
    }

    childElement(selector: string): WebdriverIO.Element {
        this.element.$(selector).waitForExist({timeout: this.defaultWaitTime});
        this.element.$(selector).waitForDisplayed({timeout: this.defaultWaitInTime});
        return this.element.$(selector);
    }

    childElements(selector) {
        return this.element.$$(selector);
    }

    findElementAndClick(selector: string, type: AttributeType, value: string) {
        try {
            switch (type) {
                case AttributeType.text: {
                    this.childElements(selector).find(x => x.getText().trim() === value).click();
                    break;
                }
                case AttributeType.title: {
                    this.childElements(selector).find(x => x.getAttribute('title') === value).click();
                    break;
                }
                case AttributeType.label: {
                    this.childElements(selector).find(x => x.getAttribute('label') === value).click();
                    break;
                }
            }
        } catch (e) {
            {
                if (e instanceof TypeError) {
                    throw new Error(`Not possible to click on: "${value}" in element: ${selector}`);
                } else {
                    console.log('Error:', e);
                }
            }
        }
    }

    childElementsTexts(selector) {
        return this.childElements(selector).map(elem => elem.getText().trim());
    }

    mapElements(selector, fn) {
        return this.element.$$(selector).map((element, index) => fn(element, index));
    }

    dragAndDropComponent(from: string, to: string): void {
        driver.executeScript(dragAndDrop, [from, to]);
    }
}

export abstract class Element {
    constructor(protected element: any, protected index?: number) {
    }
}