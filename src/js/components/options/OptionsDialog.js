import React from 'react'
import propTypes from 'prop-types'
import Dialog from 'material-ui/Dialog/Dialog'
import Transition from '../Transition'
import AppBar from 'material-ui/AppBar/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const OptionsDialog = (props) => {
  let { isOpen, onClose, onChange } = props

  return (
    <Dialog 
      open={isOpen}
      onClose={onClose}
      transition={Transition}
      keepMounted
      fullScreen
    >
      <AppBar>
        <Toolbar>
          <IconButton 
            onClick={onClose}
          >
            <Icon>close</Icon>
          </IconButton>
          <Typography variant="headline" align="left">
            Options
          </Typography>
        </Toolbar>
      </AppBar>
    </Dialog>
  )
}

OptionsDialog.propTypes = {
  isOpen: propTypes.bool,
  onClose: propTypes.func,
  onChange: propTypes.func
}

export default OptionsDialog