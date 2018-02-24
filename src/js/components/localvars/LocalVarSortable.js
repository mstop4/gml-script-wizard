import React, { Component } from 'react'
import LocalVarField from './LocalVarField'
import { SortableContainer } from 'react-sortable-hoc'
import PropTypes from 'prop-types'

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

LocalVarSortable.propTypes = {
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  items: PropTypes.array,
  onSortEnd: PropTypes.func
}

export default LocalVarSortable