const {BasePage} = require("../base/BasePage.spec");
exports.LoginPage = class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.signUpBtn =
            '//header/div[1]/div[1]/div[1]/div[2]/div[1]/ul[1]/li[4]/a[1]';
        this.signUpName = '[data-qa="signup-name"]';
        this.signUpMail = '[data-qa="signup-email"]';
        this.signUpSubmitBTN = '[data-qa="signup-button"]';
    }
    async verifySignUpBTN() {
        await this.page.pause()
        await this.page.click(this.signUpBtn);
    }
    async verifySignUpJourney(username,password){
        await this.page.click(this.signUpName);
        await this.page.fill(this.signUpName,username);
        await this.page.click(this.signUpMail);
        await this.page.fill(this.signUpMail,password);
        await this.page.click(this.signUpSubmitBTN);
    }
}