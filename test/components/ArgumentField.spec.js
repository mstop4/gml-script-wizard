import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ArgumentField from '../../src/js/components/ArgumentField.js'

// TODO: rewrite tests so that they are compatible with react-sortable-hoc

describe('ArgumentField Component', () => {

  it('has an id', () => {
    let wrapper = mount(<ArgumentField index={4} id={4} key={4}/>)
    expect(wrapper.props().id).to.equal(4);
  })

  it('has the correct title', () => {
    let wrapper = mount(<ArgumentField index={6} id={6} key={6}/>)
    let props = wrapper.props()
    let title = 'Argument' + props.id
    expect(wrapper.find('h2').text()).to.equal(title)
  })

  it('renders an empty input field', () => {
    let wrapper = shallow(<ArgumentField index={0} id={0} key={0}/>)
    expect(wrapper.find('input')).to.have.length(1)
  })
})