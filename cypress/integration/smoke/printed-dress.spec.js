import homePage from '../../page-objects/home'

describe('Smoke Test - Scenario: buy two products', function(){

    
    beforeEach(function () {
     cy.fixture('user-with-printed-dress').as('user')
    })

    it('Given I am on a shopping site', function(){
     homePage.open();
     homePage.navigationTabs.should('be.visible')
    })

    it('When I order 2 items', function(){
     homePage.addProductToCart(this.user.product)
     homePage.assertTextElement(homePage.shoppingCartTotalDropDown, this.user.productQuantity)
     homePage.clickOnVisibleElement(homePage.proceedToCheckOutSummaryButton)
     homePage.clickOnVisibleElement(homePage.proceedToCheckOutButton)
     homePage.typeInEmail(Cypress.env('email'))
     homePage.typeInPassword(Cypress.env('pw'))
     homePage.clickOnVisibleElement(homePage.submitButton)
     homePage.clickOnVisibleElement(homePage.proceedToCheckOutButton)
     homePage.clickOnVisibleElement(homePage.termCheckBox)
     homePage.clickOnVisibleElement(homePage.proceedToCheckOutButton)
     homePage.clickOnVisibleElement(homePage.payByBankWireButton)
     homePage.clickOnVisibleElement(homePage.proceedToCheckOutButton)
    })

    it('Then the order details should be displayed on the confirmation page ', function(){
     homePage.completionMessage.should('have.text', this.user.completionMessage)
     homePage.price.should('have.text', this.user.price)
     homePage.otherDetails.should('have.text', this.user.otherDetails)
     homePage.bankName.should('have.text', this.user.bankName)
    })

    it('And I should be able to log out successfully', function(){
     homePage.clickOnVisibleElement(homePage.logoutButton)
     homePage.loginButton.should('be.visible')
    })

})