// login.js

import { locators } from "../pageObjects/locators";

const baseUrl = Cypress.config("baseUrl");

export function login(email, password, name) {
  cy.visit(baseUrl);
  cy.xpath(locators.loginLink).click();
  cy.xpath(locators.loginEmailInput).type(email);
  cy.xpath(locators.loginPasswordInput).type(password);
  cy.xpath(locators.loginButton).click();

  // Check if logged in by verifying the dynamic text in the navbar
  cy.contains(`Logged in as ${name}`).then(($element) => {
    if ($element.is(":visible")) {
      // Login was successful
      Cypress.env("accountCreated", true);
    } else {
      // Login failed or the text was not found
      Cypress.env("accountCreated", false);
    }
  });
}
