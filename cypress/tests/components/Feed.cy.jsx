import React from 'react'
import Feed from '../../../client/src/components/Feed'
import '../../support/commands'

describe('<Feed />', () => {
  //Tries to mount the component
  it('renders', () => {
    cy.mount(<Feed />)
  })
})

describe('Feed component', () => {

  //Visits the server to get contact.
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); 
  });
  //Get the data we are going to test
  beforeEach(() => {
    cy.get('[data-testid="travel-card"]')
  });

  //Check if we got all the expected data
  it('renders travel cards', () => {
    cy.get('[data-testid="travel-card"]').should('have.length', 8);
  });
  //Tries to click the button to add travel route
  it('opens AddTravelForm when clicking add travel button', () => {
    cy.get('[data-testid="add-travel-button"]').click();
  })
})