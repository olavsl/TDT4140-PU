import React from 'react'
import { TravelCard } from '../TravelCard'

describe('<TravelCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TravelCard />)
  })
})