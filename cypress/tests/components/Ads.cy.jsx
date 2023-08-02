import React from 'react'
import Ads from '../Ads'
import '../../support/component';

describe('<Ads />', () => {
  it('renders', () => {
    cy.mount(<Ads />)
  })
})

//Vet ikke helt hva som skal testes i Ads så må ta det seinere.