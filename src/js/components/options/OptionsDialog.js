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

import { connect } from 'react-redux'
import { legacyToggle, prefixChange } from '../../actions/options'

import propTypes from 'prop-types'

import '../../../styles/options.css'

const mapStateToProps = (state) => ({
  options: {
    localVarPrefix: state.options.localVarPrefix,
    legacyMode: state.options.legacyMode
  }
})

const mapDispatchToProps = (dispatch) => ({
  onLegacyChange: () => dispatch(legacyToggle()),
  onPrefixChange: (event) => dispatch(prefixChange(event.target.id, event.target.value))
})

const OptionsDialog = (props) => {
  let { isOpen, options, onClose, onLegacyChange, onPrefixChange } = props

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
                checked={options.legacyMode}
                onChange={onLegacyChange}
              />
            }
            label={options.legacyMode ? 'GameMaker: Studio 1.4' : 'GameMaker Studio 2'}
          />
        </FormGroup>
        <Divider/>
        <TextField
          id="localVarPrefix"
          label="Local Variable Prefix"
          placeholder="none"
          margin="normal"
          value={options.localVarPrefix}
          onClick={handleTextFieldClick}
          onChange={onPrefixChange}
        />
      </div>
    </Dialog>
  )
}

OptionsDialog.propTypes = {
  isOpen: propTypes.bool,
  options: propTypes.object,
  onClose: propTypes.func,
  onLegacyChange: propTypes.func,
  onPrefixChange: propTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(OptionsDialog)