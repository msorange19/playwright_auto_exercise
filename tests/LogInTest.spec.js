const {test} = require('../fixtures/init')
const {describe, beforeEach} = require("node:test")
const {expect} = require("@playwright/test")
const testJsonData = JSON.parse(JSON.stringify(require('../utils/config.json')))


describe('@SignUp Testing', ()=>{
    test.beforeEach(async({LogInInitObj}) =>{
        await LogInInitObj.BaseUrl('https://automationexercise.com/')
    })
    test('@verify signup btn',async({LogInInitObj})=>{
        await LogInInitObj.verifySignUpBTN();
    })

})

