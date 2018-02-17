import React, { Component } from 'react'
import ArgumentField from './ArgumentField'
import ArgumentDialog from './ArgumentDialog'
import { SortableContainer } from 'react-sortable-hoc'

const ArgumentList = SortableContainer( (props) => {
  let { items, onChange, onOpen, onRemove } = props

  return (
    <div className='argument-list'>
      <ul>
        {items.map((arg, index) => (
          <ArgumentField 
            key={index}
            index={index}
            id={index}
            name={arg.name}
            onChange={onChange}
            onOpen={onOpen}
            onRemove={onRemove}/>
        ))}
      </ul>
    </div>
  )
})

class ArgumentSortable extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dialogOpen: false,
      index: 0
    }

    this.handleDialogOpen = this.handleDialogOpen.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onFieldRemove = this.onFieldRemove.bind(this)
  }

  handleDialogOpen(id) {
    this.setState({ dialogOpen: true, index: id })
  }

  handleDialogClose() {
    this.setState({ dialogOpen: false })
  }

  onFieldChange(event) {
    let newArg = event.target.value
    let key = event.target.id
    this.props.onChange(newArg, this.state.index, key)
  }

  onFieldRemove() {
    this.props.onRemove(this.state.index)
    this.handleDialogClose()
  }

  render() {

    let dialogArg

    if (this.props.items.length > 0) {
      dialogArg = this.props.items[this.state.index]
    } else {
      dialogArg = {name: '', type: '', description: ''}
    }

    return (
      <div>
        <ArgumentDialog 
          isOpen={this.state.dialogOpen}
          argInfo={dialogArg}
          onClose={this.handleDialogClose}
          onChange={this.onFieldChange}
          onRemove={this.onFieldRemove}
        />
        <ArgumentList 
          index={0}
          items={this.props.items}
          transitionDuration={300}
          onSortEnd={this.props.onSortEnd}
          onChange={this.props.onChange}
          onOpen={this.handleDialogOpen}
          useDragHandle={true}
        />
      </div>
    )
  }
}

export default ArgumentSortable