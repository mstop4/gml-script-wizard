import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import OutputBox from '../../src/js/components/OutputBox.js'

const wrapper = shallow(<OutputBox />)

describe('OutputBox Component', () => {

  it('renders text box', () => {
    expect(wrapper.find('textarea').text()).equal('I\'m text')
  })
})