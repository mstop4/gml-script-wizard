import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ArgumentContainer from '../../src/js/components/ArgumentContainer.js'

describe('ArgumentContainer Component', () => {

  it('has an ArgumentSortable component', () => {
    let wrapper = shallow(<ArgumentContainer/>)
    expect(wrapper.find('ArgumentSortable')).to.have.length(1)
  })
})