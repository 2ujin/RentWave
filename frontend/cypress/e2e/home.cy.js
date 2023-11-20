/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001/");
  });

  it("displays all items", () => {
    cy.get(".page").should("have.length", 1);
    cy.get(".all-property").should("have.length", 1);
  });

  it("can add new property", () => {
    const newItem = "Codeworks";

    cy.contains(".btn", "+ Add new property").click();

    cy.get('input[name="propertyName"]').type(newItem);
    cy.get("form").submit();

    cy.contains(".property-name", newItem).should("exist");
  });

  it("can check click summary page", () => {
    cy.get(".property-name").first().click();

    // Assert that the URL has changed to the summary page
    cy.url().should("include", "/summary/");
  });
});
