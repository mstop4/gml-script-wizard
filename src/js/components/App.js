import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import Reboot from 'material-ui/Reboot'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'

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
      scriptName: '',
      description: '',
      outputValue: '',
      args: [],
      localVars: [],
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
    let newState = this.state
    newState.args.push({name: '', type: '', description: ''})
    this.updateOutput(newState)
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
    newState.localVars[id][key] = newArg
    this.updateOutput(newState)
  }

  handleLocalVarSort(event) {
    let newState = this.state
    newState.localVars = arrayMove(newState.localVars, event.oldIndex, event.newIndex)
    this.updateOutput(newState)
  }

  handleAddLocalVar(event) {
    let newState = this.state
    newState.localVars.push({name: '', description: ''})
    this.updateOutput(newState)
  }

  handleRemoveLocalVar(id) {
    if (this.state.localVars.length > 0) {
      let newState = this.state
      newState.localVars.splice(id, 1)
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

  updateOutput ({ scriptName, description, args, localVars, returnValue, localVarPrefix }) {
    let newOutput = ''
    
    let headFunction =      `/// @function${'\xa0'.repeat(5)}`
    let headArgumentTypes = []
    let headArgumentNames = []
    let headArgumentDescs = []
    let headDescription =   `/// @description${'\xa0'.repeat(2)}${description}`

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
    let currentArgIndex = 0

    // find the length of longest type and argument names for spacing purposes
    let typeMaxLength = -3
    let nameMaxLength = 0

    for (let i = 0; i < args.length; i++) {
      if (args[i].type && args[i].type.length > typeMaxLength) {
        typeMaxLength = args[i].type.length
      }

      if (args[i].name && args[i].name.length > nameMaxLength) {
        nameMaxLength = args[i].name.length
      }
    }

    for (let i = 0; i < args.length; i++) {

      // Build JSDoc line
      if (args[i].name !== '') {
  
        if (args[i].type !== '') {
          let spaceBufferSize = Math.max(0,typeMaxLength-args[i].type.length)
          headArgumentTypes.push(` \{${args[i].type}\}${'\xa0'.repeat(spaceBufferSize)}`)
        } else {
          headArgumentTypes.push('\xa0'.repeat(typeMaxLength+3))
        }

        if (args[i].name !== '') {
          let spaceBufferSize = Math.max(0,nameMaxLength-args[i].name.length)
          headArgumentNames.push(`${args[i].name}${'\xa0'.repeat(spaceBufferSize)}`)
        } else {
          headArgumentNames.push('\xa0'.repeat(nameMaxLength))
        }

        if (args[i].description !== '') {
          headArgumentDescs.push(` ${args[i].description}`)
        } else {
          headArgumentDescs.push('')
        }

        // Build declaration line
        declArguments.push(`var ${localVarPrefix}${args[i].name} = argument[${currentArgIndex}];\n`)
        currentArgIndex++
      }
    }

    // Additional local variables

    // find the length of longest variable name for spacing purposes
    nameMaxLength = 0

    for (let i = 0; i < localVars.length; i++) {
      if (localVars[i].name.length > nameMaxLength) {
        nameMaxLength = localVars[i].name.length
      }
    }

    for (let i = 0; i < localVars.length; i++) {
      if (localVars[i].name !== '') {
        let spaceBufferSize = Math.max(0,nameMaxLength-localVars[i].name.length)
        let localVarDecl = `var ${localVarPrefix}${localVars[i].name};`

        if (localVars[i].description !== '') {
          localVarDecl += `${'\xa0'.repeat(spaceBufferSize+1)}// ${localVars[i].description}`
        }

        localVarDecl += '\n'

        declLocals.push(localVarDecl)
      }
    }

    // Build Script
    // ------------

    // @function
    if (scriptName !== '') {
      newOutput += `${headFunction}\n`
    }

    // @description
    if (description !== '') {
      newOutput += `${headDescription}\n`
    }

    // @param
    for (let i = 0; i < headArgumentNames.length; i++) {
      newOutput += `/// @param${'\xa0'.repeat(7)}${headArgumentTypes[i]} ${headArgumentNames[i]} ${headArgumentDescs[i]}\n`
    }

    if (declArguments.length > 0) {
      newOutput += '\n'
    }

    // argument declarations
    for (let i = 0; i < declArguments.length; i++) {
      newOutput += declArguments[i]
    }

    if (declLocals.length > 0) {
      newOutput += '\n'
    }

    // local var declarations
    for (let i = 0; i < declLocals.length; i++) {
      newOutput += declLocals[i]
    }

    if (newOutput !== '') {
      newOutput += '\n'
    }

    newOutput += '/* Script body goes here */'

    this.setState({
      scriptName: scriptName,
      description: description,
      outputValue: newOutput,
      args: args,
      localVars: localVars,
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
              <Typography variant="headline" align="left">
                <Icon>description</Icon> GML Script Wizard
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
                items={this.state.localVars}
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