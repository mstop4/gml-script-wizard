import React from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Transition from '../Transition'

const ArgumentDialog = (props) => {

    // Check if argInfo exists before displaying its info in the dialog
    let displayInfo = props.argInfo ? props.argInfo : {name: '', description: ''}

  return (
    <Dialog 
      open={props.isOpen}
      onClose={props.onClose}
      transition={Transition}
      keepMounted
      fullWidth
    >
      <DialogTitle>{displayInfo.name} Details</DialogTitle>
      <DialogContent>
        <TextField
        id="description"
        label="description"
        value={displayInfo.description}
        onChange={props.onChange}
        fullWidth
        />
      </DialogContent>
      <DialogActions>
        <IconButton 
          color="primary"
          size="small"
          onClick={props.onRemove}
        >
          <Icon>delete_forever</Icon>
        </IconButton>
        <IconButton 
          color="primary"
          size="small"
          onClick={props.onClose}
        >
          <Icon>done</Icon>
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}

export default ArgumentDialog