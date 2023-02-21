import React from 'react'
import Signup from './Signup'

describe('<Signup />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Signup />)
  })
})