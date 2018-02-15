import React, { Component } from 'react'
import LocalVarField from './LocalVarField'
import LocalVarDialog from './LocalVarDialog'
import { SortableContainer } from 'react-sortable-hoc'

const LocalVarList = SortableContainer( ({ items, onChange, onOpen, onRemove }) => {
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

    let dialogVar

    if (this.props.items.length > 0) {
      dialogVar = this.props.items[this.state.index]
    } else {
      dialogVar = {name: '', description: ''}
    }

    return (
      <div>
        <LocalVarDialog 
        isOpen={this.state.dialogOpen}
        argInfo={dialogVar}
        onClose={this.handleDialogClose}
        onChange={this.onFieldChange}
        onRemove={this.onFieldRemove}
        />
        <LocalVarList 
          index={0}
          items={this.props.items}
          transitionDuration={300}
          onSortEnd={this.props.onSortEnd}
          onChange={this.props.onChange}
          onRemove={this.props.onRemove}
          onOpen={this.handleDialogOpen}
          useDragHandle={true}
        />
      </div>
    )
  }
}

export default LocalVarSortable