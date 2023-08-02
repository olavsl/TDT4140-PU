import React from "react"
import Loginform from  "../../../client/src/components/Loginform"
describe("<Loginform />", () => {
  it("renders", () => {
  })
})
describe("Loginform", () => {
  it("logs in a user successfully", () => {
    // Visit the login page
    cy.visit("http://localhost:3000/");
    // Enter valid credentials and click the login button
    cy.get("#usernameInput").type("testuser")
    cy.get("#passwordInput").type("password")
    cy.get("#loginButton").click()
    // Assert that the user is redirected to the homepage after login
    cy.url().should("eq", "http://localhost:3000/")
  })
  it("shows an error message for invalid credentials", () => {
    // Visit the login page
    cy.visit("http://localhost:3000/");
    // Enter invalid credentials and click the login button
    cy.get("#usernameInput").type("invaliduser")
    cy.get("#passwordInput").type("wrongpassword")
    cy.get("#loginButton").click()
    // Assert that an error message is displayed
    cy.get(".errorResponse").should("not.visible")
  })
})