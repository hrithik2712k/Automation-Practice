// locators.js
export const locators = {
  loginLink: "//a[contains(@href, '/login')]",
  signupNameInput: "//input[@name='name']",
  signupEmailInput: "//input[@data-qa='signup-email']",
  signupButton: "//button[text()='Signup']",
  genderRadioButton: "#id_gender1",
  passwordInput: "#password",
  dayDropdown: "#days",
  monthDropdown: "#months",
  yearDropdown: "#years",
  firstNameInput: "#first_name",
  lastNameInput: "#last_name",
  addressInput: "#address1",
  countryDropdown: "#country",
  stateInput: "#state",
  cityInput: "#city",
  zipcodeInput: "#zipcode",
  mobileNumberInput: "#mobile_number",
  createAccountButton: "//button[text()='Create Account']",
  accountCreatedText: '//h2[@data-qa="account-created"]',
  continueButton: "//a[@data-qa='continue-button']",
  addToCartButton: "//a[contains(text(), 'Add to cart')]",
  continueShoppingButton: "//button[contains(text(), 'Continue Shopping')]",
  viewCartLink: "(//a[@href = '/view_cart'])[2]",
  proceedToCheckoutButton: "//a[contains(text(), 'Proceed To Checkout')]",
  placeOrderButton: "//a[contains(text(), 'Place Order')]",
  nameOnCardInput: "//input[@data-qa='name-on-card']",
  cardNumberInput: "//input[@data-qa='card-number']",
  cvcInput: "//input[@data-qa='cvc']",
  expiryMonthInput: "//input[@data-qa='expiry-month']",
  expiryYearInput: "//input[@data-qa='expiry-year']",
  payAndConfirmButton: "//button[contains(text(), 'Pay and Confirm Order')]",
  orderPlacedText: "//h2[@data-qa='order-placed']",
  loginEmailInput: "//input[@data-qa='login-email']",
  loginPasswordInput: "//input[@name='password']",
  loginButton: "//button[contains(text(), 'Login')]",
};
