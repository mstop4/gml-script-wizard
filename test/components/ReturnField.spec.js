import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ReturnField from '../../src/js/components/ReturnField.js'

describe('ReturnField Component', () => {

  it('renders an input field', () => {
    let wrapper = shallow(<ReturnField/>)
    expect(wrapper.find('FormControl')).to.have.length(1)
  })
})