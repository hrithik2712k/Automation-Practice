// signup.js

import { locators } from "../pageObjects/locators";

export function signup(email, name) {
  cy.visit("https://automationexercise.com/");
  cy.xpath(locators.loginLink).click();
  cy.xpath(locators.signupNameInput).type(name);
  cy.xpath(locators.signupEmailInput).type(email);
  cy.xpath(locators.signupButton).click();
  cy.get(locators.genderRadioButton).check();
  cy.get(locators.passwordInput).type("hrithik@123");
  cy.get(locators.dayDropdown).select("27");
  cy.get(locators.monthDropdown).select("January");
  cy.get(locators.yearDropdown).select("2000");
  cy.get(locators.firstNameInput).type(name);
  cy.get(locators.lastNameInput).type("Bansal");
  cy.get(locators.addressInput).type("16/17, Bengaluru");
  cy.get(locators.countryDropdown).select("India");
  cy.get(locators.stateInput).type("Karnataka");
  cy.get(locators.cityInput).type("Bengaluru");
  cy.get(locators.zipcodeInput).type("560068");
  cy.get(locators.mobileNumberInput).type("9871430627");
  cy.xpath(locators.createAccountButton).click();
  cy.xpath(locators.accountCreatedText)
    .should("be.visible")
    .and("contain", "Account Created!");
  cy.xpath(locators.continueButton).click();

  // Verify the dynamic text after signup
  cy.contains(`Logged in as ${name}`).should("be.visible");

  // Set environment variable indicating the account was created
  Cypress.env("accountCreated", true);
}
