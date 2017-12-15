import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import RandomStudentButton from './RandomStudentButton'

chai.use(chaiEnzyme())

describe('<RandomStudentButton />', () => {
  const button = shallow(<RandomStudentButton />)

  it('is wrapped in a paragraph with class "random"', () => {
    expect(button).to.have.tagName('p')
    expect(button).to.have.className('primary')
  })
})
