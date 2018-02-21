import React, { Component } from 'react'
import HelpDialog from './HelpDialog';
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

class HelpButton extends Component {
  constructor() {
    super()

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
        <HelpDialog
          isOpen={this.state.dialogOpen}
          onClose={this.handleDialogClose}
        />
        <IconButton onClick={this.handleDialogOpen}>
          <Icon>help_outline</Icon>
        </IconButton>
      </div>
    )
  }
}

export default HelpButton