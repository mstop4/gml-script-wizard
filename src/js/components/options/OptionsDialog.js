import React from 'react'
import Dialog from 'material-ui/Dialog/Dialog'
import Transition from '../Transition'
import AppBar from 'material-ui/AppBar/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Switch from 'material-ui/Switch'
import Divider from 'material-ui/Divider/Divider'
import { FormGroup, FormControlLabel, FormLabel } from 'material-ui/Form'

import propTypes from 'prop-types'
import { EVENT_LEGACY_SWITCH, EVENT_ITEM_CHANGE } from '../../helpers/EventTypes'

import '../../../styles/options.css'


const OptionsDialog = (props) => {
  let { isOpen, options, onClose, onEvent } = props

  const handleLegacySwitch = () => {
    onEvent(EVENT_LEGACY_SWITCH, {} )
  }

  const handlePrefixChange = (event) => {
    onEvent(EVENT_ITEM_CHANGE, { id: event.target.id, newArg: event.target.value } )
  }

  const handleTextFieldClick = (event) => {
    event.stopPropagation()
  }

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
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="options-root">
        <FormGroup>
          <FormLabel component="legend">Documentation Style</FormLabel>
          <FormControlLabel
            control={
              <Switch
                checked={!options.legacyMode}
                onChange={handleLegacySwitch}
              />
            }
            label={options.legacyMode ? 'GM:S 1.4' : 'GMS 2'}
          />
        </FormGroup>
        <Divider/>
        <TextField
          id="localVarPrefix"
          label="Local Variable Prefix"
          placeholder="none"
          value={options.localVarPrefix}
          onClick={handleTextFieldClick}
          onChange={handlePrefixChange}
        />
      </div>
    </Dialog>
  )
}

OptionsDialog.propTypes = {
  isOpen: propTypes.bool,
  options: propTypes.object,
  onClose: propTypes.func,
  onEvent: propTypes.func
}

export default OptionsDialog