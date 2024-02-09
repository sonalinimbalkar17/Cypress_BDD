import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
let user = ''
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

When('User log-in with {string} and {string}', (username, password) => {
    user = username.split('@')[0]
    cy.log(user)
    cy.get('#username').type(username)
    cy.get('#password').type(password)
})

Then('should be visible for {string} credentials', (cred) => {
    if (cred == 'Valid') {
        cy.get('p strong').should('have.text', user)
    }
    else {
        cy.get('li strong').eq(0).should('have.text', "Error:")
    }

})