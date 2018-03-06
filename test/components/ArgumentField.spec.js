import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import ArgumentField from '../../src/js/components/ArgumentField'

// TODO: rewrite tests so that they are compatible with react-sortable-hoc

describe('ArgumentField Component', () => {

  it('has an id', () => {
    let wrapper = mount(<ArgumentField index={4} id={4} key={4}/>)
    expect(wrapper.props().id).to.equal(4);
  })

  it('renders an input field', () => {
    let wrapper = shallow(<ArgumentField/>)
    expect(wrapper.find('FormControl')).to.have.length(1)
  })
})