import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../home";

let selector = new HomePage
let email = `${(Math.random()) * 20}sonalinimbalkar@gmail.com`

let userData = undefined
before(function () {
    cy.fixture('practiceAuto').then(function (user) {
        userData = user
    })
})

Given('Open Practice Automation - Sign up page', () => {
    selector.VisitUrl(selector.selector.prcAuto)
    selector.clickOnBtn(selector.selector.login_signup)
    selector.ValidateText(selector.selector.SignUpTxt, "New User Signup!")
    selector.signupUser(userData.Shweta.name, email)
})
When('Fill the infomarton for create new User', () => {
    selector.createNewUser(userData.Shweta)

})
Then('Validates the User created message', () => {
    selector.validation()
    selector.clickOnBtn(selector.selector.login_signup)
    selector.clickOnBtn(selector.selector.logOutBtn)
    //selector.login(email,userData.Shweta)
    cy.login(email,userData.Shweta)
})