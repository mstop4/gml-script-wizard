import React, { Component } from 'react'
import ArgumentField from './ArgumentField'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'

const SortableItem = SortableElement( ({ value }) =>
  <li>{value}</li>
)

const SortableList = SortableContainer( ({ items, onChange }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={value}/>
      ))}
    </ul>
  )
})

class SortableComponent extends Component {

  constructor(props) {
    super(props)

    this.onSortEnd = this.onSortEnd.bind(this)
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      items: arrayMove(this.props.items, oldIndex, newIndex)
    })
  }

  render() {
    return <SortableList items={this.props.items} onSortEnd={this.onSortEnd} />
  }
}

export default SortableComponent