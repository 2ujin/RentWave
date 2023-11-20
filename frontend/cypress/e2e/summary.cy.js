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

describe("rentwave e2e test", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://localhost:3001/");

    cy.get(".page").should("have.length", 1);
    cy.get(".all-property").should("have.length", 1);

    cy.get(".property-name").first().click();

    // Assert that the URL has changed to the summary page
    cy.url().should("include", "/summary/");
  });

  it("can add month", () => {
    cy.contains(".btn", "+ Add Month").click();

    cy.get('input[name="StartPeriod"]').type("2023-11-13");
    cy.get('input[name="EndPeriod"]').type("2023-11-23");
    cy.get('input[name="Rental"]').type(3000);
    cy.get('input[name="LoanInterest"]').type(1000);
    cy.get('input[name="CapitalRepayment"]').type(1000);
    cy.get("form").submit();
  });

  it("can add allowable expense", () => {
    cy.contains(".btn", "+ Add Allowable Expense").click();

    cy.get('input[name="description"]').type("test description");
    cy.get('input[name="amount"]').type(3000);
    cy.get('input[name="dateIncurred"]').type("2023-11-11");
    cy.get("form").submit();
  });

  it("can add disallowable expense", () => {
    cy.contains(".btn", "+ Add Disallowable Expense").click();

    cy.get('input[name="description"]').type("test description");
    cy.get('input[name="amount"]').type(3000);
    cy.get('input[name="dateIncurred"]').type("2023-11-11");
    cy.get("form").submit();
  });
});
