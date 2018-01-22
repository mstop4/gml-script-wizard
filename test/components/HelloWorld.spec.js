import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import HelloWorld from '../../src/js/components/HelloWorld.js'

const wrapper = shallow(<HelloWorld />)

describe('HelloWorld Component', () => {

  it('renders h1', () => {
    expect(wrapper.find('h1').text()).equal('Hello World!')
  })

  it('renders p', () => {
    expect(wrapper.find('p').text()).equal('Welcome to my world')
  })
})