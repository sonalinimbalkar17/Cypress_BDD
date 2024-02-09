import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps"

Given('Open E-Commerce Site', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})
Then('Search product which is start from ca', () => {
    cy.get('[class="search-keyword"]').type('ca')
    cy.get('[class="search-button"]').click()
})
And('Add to Cart Cashews', () => {
    cy.get('h4[class="product-name"]').each((el, index, arr) => {
        //cy.log(el.text())
        if (el.text().replace('-1 kg', '').trim() == 'Cashews') {
            // cy.get(':nth-child(4) > .product-action > button').click()
            cy.get('[class="product-action"] button').eq(index).click({ force: true })
        }
    })

})
When('Place order and select country', () => {
    cy.get('[alt="Cart"]').click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains('Place Order').click()
    cy.get('Select').select('India')
    cy.get('[type="checkbox"]').click()
    cy.get('button').click()
})
Then('Validate the Thank you message', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})