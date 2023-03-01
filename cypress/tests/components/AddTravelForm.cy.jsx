import React from 'react'
import AddTravelForm from '../../../client/src/components/AddTravelForm'
import '../../support/commands'

describe('<Feed />', () => {
  //Tries to mount the feed
  it('renders without crashing', () => {
    mount(<AddTravelForm />)
  })
})

describe('AddTravelForm', () => {
  //Get contact with the server
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  //Get all the info we need for the test
  beforeEach(() => {
    cy.get('input').eq(0).type('New Title')
    cy.get('input').eq(1).type('New Country')
    cy.get('input').eq(2).type('New Start Destination')
    cy.get('input').eq(3).type('New End Destination')
    cy.get('input').eq(4).type(1000)
    cy.get('input').eq(5).type('New Travel Type')
    cy.get('input').eq(6).type('New Description')
  });

  //Fill out and submit the form
  it("should fill out and submit a travel item", () => {
    // Fill out the form inputs
    cy.get('input').eq(0).type('New Title')
    cy.get('input').eq(1).type('New Country')
    cy.get('input').eq(2).type('New Start Destination')
    cy.get('input').eq(3).type('New End Destination')
    cy.get('input').eq(4).type(1000)
    cy.get('input').eq(5).type('New Travel Type')
    cy.get('input').eq(6).type('New Description')
    // Submit the form
    cy.get('button').click()
  })

  //Get the input before next check
  before(() => {
    cy.get("form").within(() => {
      cy.get('input').first().type("Add new travel");
    });  
  })
  
  // Verify that the new travel item was added
  it("should successfully get a new travel item", () => {
    cy.contains('New Title')
    cy.contains('New Country')
    cy.contains('New Start Destination')
    cy.contains('New End Destination')
    cy.contains('1000')
    cy.contains('New Travel Type')
    cy.contains('New Description')
    
  })
})