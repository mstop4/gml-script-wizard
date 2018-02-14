import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import Snackbar from 'material-ui/Snackbar'

class CopyScriptButton extends Component {

  constructor() {
    super()

    this.state = {
      snackbarOpen: false
    }

    this.copyScript = this.copyScript.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  copyScript() {
    // Copies script text to a temporary textarea so that it can be
    // copied to the clipboard
    let scriptText = document.getElementById('generated-script').innerHTML
    let tempBox = document.createElement('textarea')

    document.body.appendChild(tempBox)
    tempBox.setAttribute("id", "tempBox")
    scriptText = scriptText.replace(/&nbsp;/g, ' ')
    document.getElementById("tempBox").value = scriptText
    tempBox.select()
    document.execCommand('Copy')
    document.body.removeChild(tempBox)
    this.setState({ snackbarOpen: true })
  }

  handleClose() {
    this.setState({ snackbarOpen: false })
  }

  render() {
    return (
      <div className='copy-output-button'>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={3000}
          onClose={this.handleClose}
          message="Script copied to clipboard"
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={this.handleClose}
            >
              <Icon>close</Icon>
            </IconButton>
          ]}
        />

        <IconButton 
          color="primary"
          size="small"
          onClick={this.copyScript}
        >
        <Icon>content_copy</Icon>
        </IconButton>
      </div>
    )
  }
}

export default CopyScriptButton