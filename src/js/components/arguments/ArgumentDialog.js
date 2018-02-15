import React from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'

const ArgumentDialog = (props) => {

  return (
    <Dialog 
      open={props.isOpen}
      onClose={props.onClose}
    >
      <DialogTitle>{props.argInfo.name} Details</DialogTitle>
        <DialogContent>
          <TextField
            id="type"
            label="Type"
            value={props.argInfo.type}
            onChange={props.onChange}
            fullWidth
          />
          <TextField
            id="description"
            label="Description"
            value={props.argInfo.description}
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