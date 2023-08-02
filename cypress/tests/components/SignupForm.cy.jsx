import React from 'react'
import SignupForm from '../SignupForm'
import '../../support/commands'

describe('<SignupForm />', () => {
  //Tries to mount the signupform
  it('renders', () => {
    cy.mount(<SignupForm />)
  })
})

describe('Signupform', () => {
  //Get contact with the server
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //Fill out and submit the form
  it("should fill out and submit sign up", () => {
    // Fill out the form inputs
    cy.get('input').eq(0).type('Username')
    cy.get('input').eq(1).type('Password')
    // Submit the form
    cy.get('signupButton').click()
  })

  //Get the input before next check
  before(() => {
    cy.get("form").within(() => {
      cy.get('input').first().type("Sign up");
    });  
  })
  
  // Verify that the new user was added
  it("should successfully sign up", () => {
    cy.contains('Username')
    cy.contains('Password')    
  })
})