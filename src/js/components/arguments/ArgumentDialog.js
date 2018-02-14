import React from 'react'
import Dialog, {DialogTitle, DialogContent} from 'material-ui/Dialog'
import Grid from 'material-ui/Grid'
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
          <Grid container alignItems="center">
            <Grid item xs={11} md={10}>
              <TextField
              id="type"
              label="Type"
              value={props.argInfo.type}
              onChange={props.onChange}
              fullWidth
              />
            </Grid>
            <Grid item xs={1} md={2}>
            <IconButton 
              color="primary"
              size="small"
              onClick={props.onRemove}
            >
              <Icon>delete_forever</Icon>
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              value={props.argInfo.description}
              onChange={props.onChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default ArgumentDialog