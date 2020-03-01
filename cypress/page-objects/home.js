
const {
  get,
  visit,
  contains
} = cy;


class HomePage {

  get navigationTabs(){
  return   get('#home-page-tabs')
  }

  get addQuantityButton(){
    return get('.icon-plus') //toDo: update to unique locator
  }

  get addToCartButton(){
    return get('[id=add_to_cart]')
  }

  get shoppingCartTotalDropDown(){
    return get('[title="View my shopping cart"] > .ajax_cart_quantity')
  }

  get proceedToCheckOutSummaryButton(){
    return contains('Proceed to checkout')
  }
  
  get proceedToCheckOutButton(){
    return get('.cart_navigation > .button > span')
  }

  get email(){
    return get('#email')
  }

  get password(){
    return get('#passwd')
  } 

  get submitButton(){
    return get('#SubmitLogin > span')
  }

  get termCheckBox(){
   return get('[id=uniform-cgv]')
  }

  get payByBankWireButton(){
    return get('[title="Pay by bank wire"]')
  }

  get completionMessage() {
    return get('.cheque-indent > .dark')
  }

  get price(){
    return get('.price > strong')
  }

  get otherDetails(){
    return get('.box > :nth-child(7)')
  }

  get bankName(){
    return get('.box > :nth-child(9)')
  }

  get logoutButton(){
    return get('.logout')
  }

  get loginButton(){
   return get('.login')
  }

  open() {
    visit("http://automationpractice.com/index.php")
  }

  addProductToCart(text){
    contains(text).click()
    this.addQuantityButton.click()
    this.addToCartButton.should('be.visible').click()
  }

  //Todo: the following functions can be moved to a separate util file
  
  assertTextElement(el, expectedText){ 
    el.should('have.text', expectedText)
  }

  clickOnVisibleElement(el){
    el.should('be.visible')
    el.click()
  }

  //Todo: below password and email can be moved to process.env
  typeInPassword(text){
    this.password.type(text)
  }

  typeInEmail(text){
    this.email.type(text)
  }
}

  
  export default new HomePage();