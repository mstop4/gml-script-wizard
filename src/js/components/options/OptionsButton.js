import React, { Component } from 'react'
import OptionsDialog from './OptionsDialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'

class OptionsButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dialogOpen: false
    }

    this.handleDialogOpen = this.handleDialogOpen.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)
  }

  handleDialogOpen() {
    this.setState({ dialogOpen: true })
  }

  handleDialogClose() {
    this.setState({ dialogOpen: false })
  }

  render() {
    return (
      <div>
        <OptionsDialog
          isOpen={this.state.dialogOpen}
          options={this.props.options}
          onClose={this.handleDialogClose}
          onEvent={this.props.onEvent}
        />
        <IconButton onClick={this.handleDialogOpen}>
          <Icon>build</Icon>
        </IconButton>
      </div>
    )
  }
}

OptionsButton.propTypes = {
  options: PropTypes.object,
  onEvent: PropTypes.func
}

export default OptionsButton