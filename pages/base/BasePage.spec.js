exports.BasePage = class BasePage {
    constructor(page) {
        this.page = page;
    }

    async BaseUrl(url) {
        await this.page.goto(url);
    }
}

