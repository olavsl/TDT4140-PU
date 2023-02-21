import React from 'react'
import AddTravelForm from './AddTravelForm'

describe('<AddTravelForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddTravelForm />)
  })
})