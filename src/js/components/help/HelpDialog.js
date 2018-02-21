import React from 'react'
import Dialog, {DialogTitle, DialogContent, DialogActions} from 'material-ui/Dialog'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import Transition from '../Transition'
import Typography from 'material-ui/Typography/Typography'
import Divider from 'material-ui/Divider'

import '../../../styles/help.css'

const ArgumentDialog = (props) => {
  let { isOpen, onClose } = props 

  return (
    <Dialog 
      open={isOpen}
      onClose={onClose}
      transition={Transition}
      keepMounted
      fullWidth
    >
      <DialogTitle>Help</DialogTitle>
        <DialogContent>
          <Typography variant="title" gutterBottom paragraph>About</Typography> 
          <Typography variant="body2" paragraph>
            GML Script Wizard is a tool that automatically generates a boilerplate header you can 
            use as your script's starting point. 
          </Typography>

          <Typography variant="title" gutterBottom paragraph>Usage</Typography> 
          <Typography variant="subheading" gutterBottom>Adding Items</Typography>
          <Typography variant="body2" paragraph>
            Click on the respective <Icon style={{ fontSize: 18}} >add_circle</Icon> at the top of each list to add a new item, then 
            click on the text field to give the item a name.
          </Typography>

          <Typography variant="subheading" gutterBottom>Adding Details (Arguments only)</Typography>
          <Typography variant="body2" paragraph>
            Click on <Icon style={{ fontSize: 18}} >mode_edit</Icon> to open up the argument details dialog. Here you can specify a type and
            add a description for your argument. NOTE: These will only be visible in GMS2 if you
            have turned this feature in the settings.
          </Typography>

          <Typography variant="subheading" gutterBottom>Removing Items</Typography>
          <Typography variant="body2" paragraph>
            For arguments, click on the <Icon style={{ fontSize: 18}} >mode_edit</Icon> to open up the argument details dialog, then click on <Icon style={{ fontSize: 18}} >delete_forever</Icon> to remove.\n
            For local variables, click on <Icon style={{ fontSize: 18}} >delete_forever</Icon> to remove.
          </Typography>

          <Typography variant="subheading" gutterBottom>Reordering Items</Typography>
          <Typography variant="body2" paragraph>
            Click and drag from an item's <Icon style={{ fontSize: 18}} >reorder</Icon> to move and reorder it. Release to put it in its new position.
          </Typography>

          <Typography variant="subheading" gutterBottom>Copying the Script</Typography>
          <Typography variant="body2" paragraph>
            Click on <Icon style={{ fontSize: 18}} >content_copy</Icon> to copy the generated script to the clipboard. The script can then be pasted into
            the script editor in GMS2.
          </Typography>

          <Divider/>

          <Typography variant="subheading" paragraph>
            Created by:&nbsp;
            <a href="https://github.com/mstop4" className="help-link" target="_blank" rel="noopener noreferrer">M.S.T.O.P.</a>&nbsp;
            (<a href="https://twitter.com/QuadolorGames" className="help-link" target="_blank" rel="noopener noreferrer">@QuadolorGames</a>)
          </Typography>

        </DialogContent>
      <DialogActions>
        <IconButton 
          color="primary"
          size="small"
          onClick={onClose}
        >
          <Icon>done</Icon>
        </IconButton>
      </DialogActions>
    </Dialog>
  )
}

export default ArgumentDialog