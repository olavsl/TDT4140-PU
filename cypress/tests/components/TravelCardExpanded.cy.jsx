import React from 'react'
import TravelCardExpanded from '../TravelCardExpanded'
import '../../support/commands'

describe('<TravelCardExpanded />', () => {
  it('renders', () => {
    cy.mount(<TravelCardExpanded />)
  })
})