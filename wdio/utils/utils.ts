export abstract class Utils {

    public static getTabUrl(url:string): string {
        browser.waitUntil(function () {
                browser.switchWindow(url)
                const state = browser.execute(function () {
                    return document.readyState;
                });
                // console.log("state:" + state)
                return state === 'complete';
            },
            {
                timeout: 60000, //60secs
                timeoutMsg: 'Oops! Check your internet connection'
            });
        return browser.getUrl()
    }
}