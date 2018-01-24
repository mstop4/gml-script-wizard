import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ReturnField from '../../src/js/components/ReturnField.js'

describe('ReturnField Component', () => {

  it('has the correct title', () => {
    let wrapper = shallow(<ReturnField/>)
    expect(wrapper.find('h2').text()).to.equal('Returns')
  })

  it('renders an empty input field', () => {
    let wrapper = shallow(<ReturnField/>)
    expect(wrapper.find('FormControl')).to.have.length(1)
  })
})