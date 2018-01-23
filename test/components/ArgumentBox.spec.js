import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ArgumentBox from '../../src/js/components/ArgumentBox.js'

const wrapper = shallow(<ArgumentBox />)

describe('ArgumentBox Component', () => {

  it('has a title', () => {
    expect(wrapper.find('h2').text()).equal('Argument')
  })

  it('renders an empty text box', () => {
    expect(wrapper.find('textarea').text()).equal('')
  })
})