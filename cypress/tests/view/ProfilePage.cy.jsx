import React from 'react'
import ProfilePage from '../ProfilePage'
import '../../support/commands'

describe('<ProfilePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ProfilePage />)
  })
})