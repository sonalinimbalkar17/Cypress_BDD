class HomePage {

    selector = {
        // Rahul Shetty

        EcommUrl: "https://rahulshettyacademy.com/seleniumPractise/#/",
        searchProductBox: '[class="search-keyword"]',
        searchBtn: '[class="search-button"]',
        productLst: 'h4[class="product-name"]',
        addToCartBtn: '[class="product-action"] button',
        cart: '[alt="Cart"]',
        proceedToChkBtn: '[class="action-block"] >  button',
        countryLst: 'select',
        checkBox: '.chkAgree',
        proceedBtn: 'button',

        // Practice Automation
        prcAuto: 'https://automationexercise.com/',
        login_signup: 'a[href="/login"]',
        logOutBtn:'a[href="/logout"]',
        SignUpTxt: ".signup-form> h2",
        signupName: 'input[data-qa="signup-name"]',
        signupEmail: 'input[data-qa="signup-email"]',
        signupBtn: 'button[data-qa="signup-button"]',
        mrsBtn: '[for="id_gender2"]',
        password: 'input[type="password"]',
        days: '#days',
        months: '#months',
        years: '#years',
        newsletter: '#newsletter',
        optin: '#optin',
        firstname: '#first_name',
        lastname: '#last_name',
        company: '#company',
        address: '#address1',
        country: '#country',
        state: '#state',
        city: '#city',
        zipcode: '#zipcode',
        mobileNo: '#mobile_number',
        createBtn: '[data-qa="create-account"]',
        createAcMsg: '.title b'






    }
    VisitUrl(url) {
        cy.visit(url)
    }
    searchProduct(value) {
        cy.get(this.selector.searchProductBox).type(value)
        cy.get(this.selector.searchBtn).click()
    }
    selectProduct() {
        cy.get(this.selector.searchBtn).each((el, index) => {
            cy.log(el.text())
            let vegitable = el.text().replace(' - 1 Kg', ' ').trim()
            if (vegitable == 'ca') {
                cy.get(this.selector.addToCartBtn).eq(i).click({ force: true })
            }
        })
    }
    placeOrder() {
        cy.get(this.selector.cart).click()
        cy.get(this.selector.proceedToChkBtn).first().click()
        cy.contains('Place Order').click()
        cy.get(this.selector.countryLst).select('India')
        cy.get(this.selector.checkBox).click()
        cy.get(this.selector.proceedBtn).click()
    }

    clickOnBtn(btn) {
        cy.get(btn).click()
    }

    ValidateText(element, value) {
        cy.get(element).should('have.text', value)
    }

    signupUser(name,email) {
        cy.get(this.selector.signupName).type(name)
        cy.get(this.selector.signupEmail).type(email)
        cy.get(this.selector.signupBtn).click()
        cy.contains('Enter Account Information').should('be.visible')
    }

    createNewUser(testData) {
        cy.get(this.selector.mrsBtn).click()
        cy.get(this.selector.password).type(testData.password)
        cy.get(this.selector.days).select(testData.days)
        cy.get(this.selector.months).select(testData.months)
        cy.get(this.selector.years).select(testData.years)
        cy.get(this.selector.newsletter).check()
        cy.get(this.selector.optin).click()
        cy.get(this.selector.firstname).type(testData.firstname)
        cy.get(this.selector.lastname).type(testData.lastname)
        cy.get(this.selector.company).type(testData.company)
        cy.get(this.selector.address).type(testData.address)
        cy.get(this.selector.country).select(testData.country)
        cy.get(this.selector.state).type(testData.state)
        cy.get(this.selector.city).type(testData.city)
        cy.get(this.selector.zipcode).type(testData.zipcode)
        cy.get(this.selector.mobileNo).type(testData.mobileNo)
        cy.get(this.selector.createBtn).click()
    }

    validation() {
        cy.get(this.selector.createAcMsg).should('have.text', 'Account Created!')
        cy.get('.title').next('p').should('have.text', 'Congratulations! Your new account has been successfully created!')
    }

    login(email,userData){
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(userData.password)
        cy.get('[data-qa="login-button"]').click()
        cy.get('h1> span').first().should('have.text', 'Automation')
    }
}
export default HomePage