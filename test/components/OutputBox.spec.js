import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import OutputBox from '../../src/js/components/OutputBox.js'

const wrapper = shallow(<OutputBox />)

describe('OutputBox Component', () => {

  it('has a title', () => {
    expect(wrapper.find('h2').text()).to.equal('Script')
  })

  it('renders a well', () => {
    expect(wrapper.find('Well')).to.have.length(1);
  })
})