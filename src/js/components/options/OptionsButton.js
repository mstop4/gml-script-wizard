import React, { Component } from 'react'
import OptionsDialog from './OptionsDialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

class OptionsButton extends Component {
  constructor() {
    super()

    this.state = {
      dialogOpen: false
    }

    this.handleDialogOpen = this.handleDialogOpen.bind(this)
    this.handleDialogClose = this.handleDialogClose.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleDialogOpen() {
    this.setState({ dialogOpen: true })
  }

  handleDialogClose() {
    this.setState({ dialogOpen: false })
  }

  onChange() {

  }

  render() {
    return (
      <div>
        <OptionsDialog
          isOpen={this.state.dialogOpen}
          onClose={this.handleDialogClose}
          onChange={this.onChange}
        />
        <IconButton onClick={this.handleDialogOpen}>
          <Icon>build</Icon>
        </IconButton>
      </div>
    )
  }
}

export default OptionsButton