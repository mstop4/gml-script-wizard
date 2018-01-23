import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ArgumentBox from '../../src/js/components/ArgumentBox.js'

describe('ArgumentBox Component', () => {

  it('has an id', () => {
    let wrapper = mount(<ArgumentBox id={4} key={4}/>)
    expect(wrapper.props().id).to.equal(4);
  })

  it('has the correct title', () => {
    let wrapper = mount(<ArgumentBox id={6} key={6}/>)
    let props = wrapper.props()
    let title = 'Argument' + props.id
    expect(wrapper.find('h2').text()).to.equal(title)
  })

  it('renders an empty input field', () => {
    let wrapper = shallow(<ArgumentBox id={0} key={0}/>)
    expect(wrapper.find('input')).to.have.length(1)
  })
})