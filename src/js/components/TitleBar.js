import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

const TitleBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="headline" align="left">
          <Icon>description</Icon> GML Script Wizard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TitleBar