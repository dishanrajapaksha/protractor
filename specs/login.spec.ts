import { LoginPage } from "../pages/login.pom";

describe('Login', () => {

    const loginPage = new LoginPage();

    it('must be able to login with valid credentials',async ()=>{
        await loginPage.Open();
        await loginPage.Login();
    });
});
