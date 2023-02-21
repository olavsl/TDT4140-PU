import React from 'react'
import Loginform from '../Loginform'

describe('<Loginform />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Loginform />)
  })
})