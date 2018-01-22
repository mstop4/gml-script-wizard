import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import OutputBox from '../../src/js/components/OutputBox.js'

const wrapper = shallow(<OutputBox />)

describe('OutputBox Component', () => {

  it('has a title', () => {
    expect(wrapper.find('h2').text()).equal('Output')
  })

  it('renders text box', () => {
    expect(wrapper.find('textarea').text()).equal('I\'m text')
  })
})