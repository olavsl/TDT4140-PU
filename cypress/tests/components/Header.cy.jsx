import React from 'react'
import Header from '../Header'
import '../../support/commands'

describe('<Header />', () => {
  //Tries to mount the header
  it('renders', () => {
    cy.mount(<Header />)
  })
})

describe('Header component', () => {

  //Visits the server to get contact.
  beforeEach(() => {
    cy.visit("http://localhost:3000/"); 
  });

  //Get to profile 
  it('get to profile', () => {
    cy.get('profileButton').click()
  });

  //Get back to main page
  it('get back to main page', () => {
    cy.get('heading').click()
  });
})