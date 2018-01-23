import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import HelloWorld from '../../src/js/components/HelloWorld.js'

const wrapper = shallow(<HelloWorld />)

describe('HelloWorld Component', () => {

  it('renders h1', () => {
    expect(wrapper.find('h1').text()).to.equal('Hello World!')
  })

  it('renders p', () => {
    expect(wrapper.find('p').text()).to.equal('Welcome to my world')
  })
})