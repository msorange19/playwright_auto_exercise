import { test as base } from '@playwright/test';
const { LoginPage } = require('../pages/Login/LoginPage.spec.js');

export const test = base.extend({
    LogInInitObj : async ({ page}, use) =>{
        const LogInInitObj = new LoginPage(page);
        await use(LogInInitObj);
    }
})