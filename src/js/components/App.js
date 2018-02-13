import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import Reboot from 'material-ui/Reboot'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import OutputBox from './OutputBox'
import ReturnField from './ReturnField'
import DescriptionField from './DescriptionField'
import ArgumentContainer from './arguments/ArgumentContainer'
import LocalVarContainer from './localvars/LocalVarContainer'
import ScriptNameField from './ScriptNameField'

import { MuiThemeProvider } from 'material-ui/styles'
import ColourTheme from '../ColourTheme'

import '../../styles/main.css'

class App extends Component {

  constructor() {
    super()

    this.state = {
      localVarPrefix: '_',
      scriptName: 'untitled_script',
      description: '',
      outputValue: '',
      args: [],
      localVarNames: [],
      returnValue: ''
    }

    this.handleArgumentChange = this.handleArgumentChange.bind(this)
    this.handleArgumentSort = this.handleArgumentSort.bind(this)
    this.handleAddArgument = this.handleAddArgument.bind(this)
    this.handleRemoveArgument = this.handleRemoveArgument.bind(this)

    this.handleLocalVarChange = this.handleLocalVarChange.bind(this)
    this.handleLocalVarSort = this.handleLocalVarSort.bind(this)
    this.handleAddLocalVar = this.handleAddLocalVar.bind(this)
    this.handleRemoveLocalVar = this.handleRemoveLocalVar.bind(this)

    this.handleReturnChange = this.handleReturnChange.bind(this)
    this.handleScriptNameChange = this.handleScriptNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.updateOutput = this.updateOutput.bind(this)
  }

  componentDidMount() {
    // init output based on intial state
    this.updateOutput(this.state)
    console.dir(ColourTheme);
  }

  // TODO: Reduce duplicate code in handle* functions

  handleArgumentChange(newArg, id, key) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.args[id][key] = newArg
    this.updateOutput(newState)
  }

  handleArgumentSort(event) {
    let newState = this.state
    newState.args = arrayMove(newState.args, event.oldIndex, event.newIndex)
    this.updateOutput(newState)
  }

  handleAddArgument(event) {
    if (this.state.args.length < 16) {
      let newState = this.state
      newState.args.push({name: '', type: '', description: ''})
      this.updateOutput(newState)
    }
  }

  handleRemoveArgument(id) {
    if (this.state.args.length > 0) {
      let newState = this.state
      newState.args.splice(id, 1)
      this.updateOutput(newState)
    }
  }

  handleLocalVarChange(newArg, id, key) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.localVarNames[id] = newArg
    this.updateOutput(newState)
  }

  handleLocalVarSort(event) {
    let newState = this.state
    newState.localVarNames = arrayMove(newState.localVarNames, event.oldIndex, event.newIndex)
    this.updateOutput(newState)
  }

  handleAddLocalVar(event) {
    if (this.state.localVarNames.length < 16) {
      let newState = this.state
      newState.localVarNames.push('')
      this.updateOutput(newState)
    }
  }

  handleRemoveLocalVar(id) {
    if (this.state.localVarNames.length > 0) {
      let newState = this.state
      newState.localVarNames.splice(id, 1)
      this.updateOutput(newState)
    }
  }

  handleDescriptionChange(event) {
    let newState = this.state
    newState.description = event.target.value
    this.updateOutput(newState)
  }

  handleReturnChange(event) {
    let newState = this.state
    newState.returnValue = event.target.value
    this.updateOutput(newState)
  }

  handleScriptNameChange(event) {
    let newState = this.state
    newState.scriptName = event.target.value
    this.updateOutput(newState)
  }

  updateOutput ({ scriptName, description, args, localVarNames, returnValue, localVarPrefix }) {
    let newOutput = ''
    
    let headFunction =      '/// @function    '
    let headArgumentTypes = []
    let headArgumentNames = []
    let headArgumentDescs = []
    let headDescription =   `/// @description ${description}`

    let declArguments = []
    let declLocals = []

    let hasParams = false

    // Create script JSDoc header

    // Script name
    if (scriptName !== '') {
      headFunction += `${scriptName}(`

      // add parameters
      hasParams = false

      for (let i = 0; i < args.length; i++) {
        if (args[i].name !== '') {
          headFunction += `${args[i].name}, `
          hasParams = true
        }
      }

      // Remove final comma and space if script has parameters
      if (hasParams) {
        headFunction = headFunction.slice(0,headFunction.length-2)
      }

      headFunction += ')'
    }

    // Arguments
    let currentArgIndex = 0;

    for (let i = 0; i < args.length; i++) {

      // Build JSDoc line
      if (args[i].name !== '') {
  
        if (args[i].type !== '') {
          headArgumentTypes.push(` \{${args[i].type}\}`)
        } else {
          headArgumentTypes.push('')
        }

        if (args[i].name !== '') {
          headArgumentNames.push(` ${args[i].name}`)
        } else {
          headArgumentNames.push('')
        }


        if (args[i].description !== '') {
          headArgumentDescs.push(` ${args[i].description}`)
        } else {
          headArgumentDescs.push('')
        }

        // Build declaration line
        declArguments.push(`\nvar ${localVarPrefix}${args[i].name} = argument[${currentArgIndex}];`)
        currentArgIndex++
      }
    }

    // Additional local variables
    for (let i = 0; i < localVarNames.length; i++) {
      if (localVarNames[i] !== '') {
          declLocals.push(`var ${localVarPrefix}${localVarNames[i]};`)
      }
    }

    // Build Script

    // @function
    newOutput += `${headFunction}\n///\n`
    
    // @param
    for (let i = 0; i < headArgumentNames.length; i++) {
      newOutput += `/// @param       ${headArgumentTypes[i]} ${headArgumentNames[i]} ${headArgumentDescs[i]}\n`
    }

    newOutput += '///\n'

    // @description
    newOutput += `${headDescription}\n\n`

    this.setState({
      scriptName: scriptName,
      description: description,
      outputValue: newOutput,
      args: args,
      localVarNames: localVarNames,
      returnValue: returnValue,
    })
  }

  render() {
    return (
      <div className="app">
        {/* <Reboot/>*/}
        <MuiThemeProvider theme={ColourTheme}>
          <AppBar>
            <Toolbar>
              <Typography type="headline" align="left">
                GML Script Template Generator
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container>
            <Grid item xs={12} md={6}>
                <ScriptNameField 
                  value={this.state.scriptName}
                  onChange={this.handleScriptNameChange}
                />
                <DescriptionField 
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
                <OutputBox value={this.state.outputValue}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <ArgumentContainer 
                items={this.state.args}
                onClick={this.handleAddArgument}
                onRemove={this.handleRemoveArgument}
                onChange={this.handleArgumentChange}
                onSortEnd={this.handleArgumentSort}/>
            </Grid>
            <Grid item xs={12} md={3}>
              <LocalVarContainer 
                items={this.state.localVarNames}
                onClick={this.handleAddLocalVar}
                onRemove={this.handleRemoveLocalVar}
                onChange={this.handleLocalVarChange}
                onSortEnd={this.handleLocalVarSort}/>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    )
  } 
}

export default App