import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import HelpButton from './help/HelpButton'
import OptionsButton from './options/OptionsButton'
import PropTypes from 'prop-types'

import '../../styles/appbar.css'

const TitleBar = (props) => {
  let { options, onEvent } = props


  return (
    <div className="appbar-root">
      <AppBar>
        <Toolbar>
          <div className="appbar-branding">
            <Typography variant="headline" align="left">
              <Icon>description</Icon> GML Script Wizard
            </Typography>
          </div>
          <div className="appbar-buttons">
            <OptionsButton
              options={options}
              onEvent={onEvent}
            />
          </div>
          <div className="appbar-buttons">
            <HelpButton/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

TitleBar.propTypes = {
  options: PropTypes.object,
  onEvent: PropTypes.func
}

export default TitleBar