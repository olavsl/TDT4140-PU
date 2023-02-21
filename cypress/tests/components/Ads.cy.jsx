import React from 'react'
import Ads from './Ads'

describe('<Ads />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Ads />)
  })
})