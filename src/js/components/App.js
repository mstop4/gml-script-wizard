import React, { Component } from 'react'
import Grid from 'material-ui/Grid'

import TitleBar from './TitleBar'
import OutputBox from './OutputBox'
import DescriptionField from './DescriptionField'
import ArgumentContainer from './arguments/ArgumentContainer'
import LocalVarContainer from './localvars/LocalVarContainer'
import ScriptNameField from './ScriptNameField'

import { MuiThemeProvider } from 'material-ui/styles'
import ColourTheme from '../helpers/ColourTheme'

import '../../styles/main.css'

class App extends Component {

  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={ColourTheme}>
          <TitleBar/>
          <div>
            <Grid container alignItems='stretch'>
              <Grid item xs={12} sm={12} md={6}>
                <ScriptNameField/>
                <DescriptionField/>
                <OutputBox/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <ArgumentContainer/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <LocalVarContainer 
                  items={this.state.localVars}
                  onEvent={this.handleLocalVarEvent}/>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    )
  } 
}

export default App