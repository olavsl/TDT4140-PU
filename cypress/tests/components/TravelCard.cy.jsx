import React from 'react'
import { TravelCard } from '../TravelCard'
import '../../support/commands'

describe('<TravelCard />', () => {
  it('renders', () => {
    cy.mount(<TravelCard />)
  })
})