import React from 'react'
import Signup from '..components/Signup'
import '../../support/commands'

describe('<Signup />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Signup />)
  })
})