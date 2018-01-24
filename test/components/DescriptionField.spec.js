import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import DescriptionField from '../../src/js/components/DescriptionField.js'

describe('DescriptionField Component', () => {

  it('has the correct title', () => {
    let wrapper = shallow(<DescriptionField/>)
    expect(wrapper.find('h2').text()).to.equal('Description')
  })

  it('renders an empty input field', () => {
    let wrapper = shallow(<DescriptionField/>)
    expect(wrapper.find('FormControl')).to.have.length(1)
  })
})