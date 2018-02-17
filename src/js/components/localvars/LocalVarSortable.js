import React, { Component } from 'react'
import LocalVarField from './LocalVarField'
import { SortableContainer } from 'react-sortable-hoc'

const LocalVarList = SortableContainer( (props) => {
  let { items, onChange, onOpen, onRemove } = props

  return (
    <div className='argument-list'>
      <ul>
        {items.map((localVar, index) => (
          <LocalVarField 
            key={index}
            index={index}
            id={index}
            name={localVar.name}
            onChange={onChange}
            onRemove={onRemove}
            onOpen={onOpen}/>
        ))}
      </ul>
    </div>
  )
})

class LocalVarSortable extends Component  {

  constructor(props) {
    super(props)

    this.state = {
      dialogOpen: false,
      index: 0
    }

    this.onFieldChange = this.onFieldChange.bind(this)
    this.onFieldRemove = this.onFieldRemove.bind(this)
  }

  onFieldChange(event) {
    let newArg = event.target.value
    let key = event.target.id
    this.props.onChange(newArg, this.state.index, key)
  }

  onFieldRemove() {
    this.props.onRemove(this.state.index)
  }

  render() {

    return (
      <div>
        <LocalVarList 
          index={0}
          items={this.props.items}
          transitionDuration={300}
          onSortEnd={this.props.onSortEnd}
          onChange={this.props.onChange}
          onRemove={this.props.onRemove}
          useDragHandle={true}
        />
      </div>
    )
  }
}

export default LocalVarSortable