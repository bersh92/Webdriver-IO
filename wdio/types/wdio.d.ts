declare module WebdriverIO {
    interface Element {
        jsClick: () => void;
        customDrugAndDrop: (from, to) => void;
    }
}