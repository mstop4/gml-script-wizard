import React, { Component } from 'react'
import ArgumentField from './ArgumentField'
import { SortableContainer } from 'react-sortable-hoc'

const ArgumentList = SortableContainer( ({ items, onChange }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <ArgumentField 
          key={index}
          index={index}
          id={index}
          value={value}
          onChange={onChange}/>
      ))}
    </ul>
  )
})

class ArgumentSortable extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <ArgumentList 
      index={0}
      items={this.props.items}
      onSortEnd={this.props.onSortEnd}
      onChange={this.props.onChange}
    />
  }
}

export default ArgumentSortable