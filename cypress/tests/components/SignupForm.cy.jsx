import React from 'react'
import SignupForm from '../SignupForm'

describe('<SignupForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SignupForm />)
  })
})