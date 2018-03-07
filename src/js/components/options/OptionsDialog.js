import React from 'react'
import { connect } from 'react-redux'
import Transition from '../Transition'
import LegacyToggle from './LegacyToggle'
import LocalVarPrefixField from './LocalVarPrefixField'
import Dialog from 'material-ui/Dialog/Dialog'
import AppBar from 'material-ui/AppBar/AppBar'
import Toolbar from 'material-ui/Toolbar/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import Divider from 'material-ui/Divider/Divider'

import { prefixChange } from '../../actions/options'
import propTypes from 'prop-types'

import '../../../styles/options.css'

const mapStateToProps = (state) => ({
  options: {
    localVarPrefix: state.options.localVarPrefix
  }
})

const mapDispatchToProps = (dispatch) => ({
  onPrefixChange: (event) => dispatch(prefixChange(event.target.id, event.target.value))
})

const OptionsDialog = (props) => {
  let { isOpen, onClose } = props

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
        <LegacyToggle/>
        <Divider/>
        <LocalVarPrefixField/>
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