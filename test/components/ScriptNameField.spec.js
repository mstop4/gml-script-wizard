import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ScriptNameField from '../../src/js/components/ScriptNameField.js'

describe('ScriptNameField Component', () => {

  it('has the correct title', () => {
    let wrapper = shallow(<ScriptNameField/>)
    expect(wrapper.find('ControlLabel').text()).to.equal('Script Name')
  })

  it('renders an empty input field', () => {
    let wrapper = shallow(<ScriptNameField/>)
    expect(wrapper.find('FormControl')).to.have.length(1)
  })
})