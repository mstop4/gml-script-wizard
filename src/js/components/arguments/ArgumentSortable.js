import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArgumentField from './ArgumentField'
import ArgumentDialog from './ArgumentDialog'
import { SortableContainer } from 'react-sortable-hoc'

import { argumentChange, argumentSort, argumentRemove } from '../../actions/arguments'
import PropTypes from 'prop-types'

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

const mapStateToProps = (state) => ({
  items: state.args
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (id, key, value) => dispatch(argumentChange(id, key, value)),
  onRemove: (id) => dispatch(argumentRemove(id)),
  onSortEnd: (event) => dispatch(argumentSort(event.oldIndex, event.newIndex))
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
    this.onFieldRemove = this.onFieldRemove.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
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
    this.props.onChange(this.state.index, key, newArg)
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

ArgumentSortable.propTypes = {
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  items: PropTypes.array,
  onSortEnd: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ArgumentSortable)