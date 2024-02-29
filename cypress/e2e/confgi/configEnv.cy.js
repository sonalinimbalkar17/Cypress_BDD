describe("Environment COnfuguration", () => {

    it("Testing with different config file:1st and 2nd ways", () => {
        cy.visit("")
        cy.log("Printing the username: "
            + Cypress.env('username'))
    })
})

it.only('Testing with json env file:3rd way', () => {
    cy.visit(Cypress.env('stage_url'))
    cy.visit(Cypress.env('prod_url'))
})







// First Way
// npx cypress open --config-file stag.config.js
// npx cypress open --config-file prod.config.js

// Second Way
// package.json
// npm run cypress-stage-test
// npm run cypress-prod-test

// Third Way
// create env file
// npx cypress open