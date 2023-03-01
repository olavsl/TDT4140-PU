import React from 'react'
import { TravelCard } from '../TravelCard'
import '../../support/commands'

describe('<TravelCard />', () => {
  it('renders', () => {
    cy.mount(<TravelCard />)
  })
})

describe('TravelCard', () => {
  //Get contact with the server
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  //Get the info we need to test
  beforeEach(() => {
    cy.get('travelTitle')
    cy.get('travelShortDesc')
    cy.get('travelStartEnd')
    cy.get('travelDistance')
    cy.get('travelAuthor')
    cy.get('travelType')
    cy.get('travelCountry')
    cy.get('travelPrice')
  })

  //Check if it contains the right info
  it("should successfully get a travel item", () => {
    cy.contains('travelTitle')
    cy.contains('travelShortDesc')
    cy.contains('travelStartEnd')
    cy.contains('travelDistance')
    cy.contains('travelAuthor')
    cy.contains('travelType')
    cy.contains('travelCountry')
    cy.contains('travelPrice')
  })
})