import { browser, by, element, ExpectedConditions, protractor } from "protractor";
import * as log from "fancy-log";

import { Constants } from "../utils/constants";

export class BingPom {

    async Open() {
        browser.waitForAngularEnabled(false);

        const logo = element(by.id("b_logo"));

        log("Opening Bing");
        await browser.get(Constants.BingURL);

        log("Looking for the Bing logo");
        await browser.wait(ExpectedConditions.visibilityOf(logo), 5000);

        log("Found the Bing logo");
        log("Bing page visible");
    }

    async Search(){

        const btnSearch = element(by.id("sb_form_q"));

        log("Enter search query");
        btnSearch?.sendKeys("Hello World");

        log("Press Enter");
        btnSearch?.sendKeys(protractor.Key.ENTER);
    }

}
