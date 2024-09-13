import { login } from "../../support/login";
import { signup } from "../../support/signup";
import { locators } from "../../pageObjects/locators";

describe("Cypress Testing", () => {
  // Define email, name, and password for your account
  const email = "hrithik9871@gmail.com"; // Replace with your actual email
  const password = "hrithik@123"; // Replace with your desired password
  const name = "Hrithik"; // Replace with the name you want to appear in the navbar

  // Perform login or signup before each test
  before(() => {
    // Try to log in first
    login(email, password, name);

    // Check if login was successful by checking if the environment variable was set
    cy.then(() => {
      if (!Cypress.env("accountCreated")) {
        // Account not created yet, perform signup
        signup(email, name);
      }
    });
  });

  it("Add products to cart and place order", () => {
    // Assume user is now logged in; proceed with the rest of the test
    for (let i = 0; i < 6; i++) {
      cy.xpath(locators.addToCartButton)
        .eq(i)
        .scrollIntoView()
        .click({ force: true });

      cy.xpath(locators.continueShoppingButton).should("be.visible");

      if (i < 5) {
        cy.xpath(locators.continueShoppingButton).click();
      } else {
        cy.xpath(locators.viewCartLink).click();
      }
    }

    cy.xpath(locators.proceedToCheckoutButton).click();
    cy.xpath(locators.placeOrderButton).click();
    cy.xpath(locators.nameOnCardInput).type(name);
    cy.xpath(locators.cardNumberInput).type("424242424242");
    cy.xpath(locators.cvcInput).type("373");
    cy.xpath(locators.expiryMonthInput).type("02");
    cy.xpath(locators.expiryYearInput).type("2027");
    cy.xpath(locators.payAndConfirmButton).click();

    cy.xpath(locators.orderPlacedText).should("be.visible");
    cy.log("Test flow complete");
  });
});
