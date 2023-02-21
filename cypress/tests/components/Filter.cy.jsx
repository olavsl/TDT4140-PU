import React from 'react'
import Filter from '../Filter'

describe('<Filter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Filter />)
  })
})