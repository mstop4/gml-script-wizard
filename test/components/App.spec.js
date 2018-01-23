import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import App from '../../src/js/components/App'

describe('App Component', () => {
  it('has a title', () => {
    let wrapper = shallow(<App/>)
    expect(wrapper.find('h1').text()).equal('GML Script Template Generator')
  })
})