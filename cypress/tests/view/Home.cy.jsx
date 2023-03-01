import React from 'react'
import Home from '../Home'
import '../../support/commands'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
  })
})