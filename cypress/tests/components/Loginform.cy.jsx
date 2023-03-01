import React from 'react'
import Loginform from '../Loginform'
import '../../support/commands'

describe('<Loginform />', () => {
  //Tries to mount the loginform
  it('renders', () => {
    cy.mount(<Loginform />)
  })
})

describe('Loginform', () => {
  //Get contact with the server
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  //Get all the info we need for the test
  beforeEach(() => {
    cy.get('input').eq(0).type('Username')
    cy.get('input').eq(1).type('Password')
  });

  //Fill out and submit the form
  it("should fill out and submit log in", () => {
    // Fill out the form inputs
    cy.get('input').eq(0).type('Username')
    cy.get('input').eq(1).type('Password')
    // Submit the form
    cy.get('loginButton').click()
  })

  //Get the input before next check
  before(() => {
    cy.get("form").within(() => {
      cy.get('input').first().type("Log in");
    });  
  })
  
  // Verify that the it was logged in
  it("should successfully log in", () => {
    cy.contains('Username')
    cy.contains('Password')    
  })
})