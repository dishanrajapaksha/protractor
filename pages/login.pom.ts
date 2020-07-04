import { browser, by, element, ExpectedConditions } from "protractor";
import { Constants } from "../utils/constants";

export class LoginPage {

    async Open() {
        browser.waitForAngularEnabled(false);

        console.log("Opening Login Page");
        await browser.get(Constants.WebURL);
        const btnLogin = element(by.className("login-button"));
        await browser.wait(ExpectedConditions.visibilityOf(btnLogin), 5000);
        console.log("Login Page Visible");
    }

    async Login() {
        const btnLogin = element(by.className("login-button"));
        const txtUserName = element(by.css("input[type='text']:nth-child(2)"));
        const txtPassword = element(by.css("input[type='password']"));
        const txtCCI = element(by.id("exampleInputEmail3"));

        txtUserName.sendKeys(Constants.AdminUser);
        txtPassword.sendKeys(Constants.AdminPassword);
        txtCCI.sendKeys(Constants.CCI);

        btnLogin.click();
    }

}
