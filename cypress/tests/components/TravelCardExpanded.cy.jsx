import React from 'react'
import TravelCardExpanded from '../TravelCardExpanded'

describe('<TravelCardExpanded />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TravelCardExpanded />)
  })
})