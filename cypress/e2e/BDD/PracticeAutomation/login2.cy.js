import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

Given('Visit Practice Automation Testing Site', () => {
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('User log-in with username and password', (dataTable) => {
    //cy.log(dataTable)
    dataTable.hashes().forEach(element => {
        cy.get('#username').type(element.username)
        cy.get('#password').type(element.password)
    })
})

And('click on sing in button', () => {
    cy.get('[name="login"]').click()
})

Then('Dashboard should be visible', () => {
    cy.get('.is-active > a').should('have.text', 'Dashboard')
})