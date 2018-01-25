import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ScriptNameField from '../../src/js/components/ScriptNameField.js'

describe('ScriptNameField Component', () => {

  it('renders an input field', () => {
    let wrapper = shallow(<ScriptNameField/>)
    expect(wrapper.find('FormControl')).to.have.length(1)
  })
})