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
    let hasParams = false

    // Create script JSDoc header

    // Script Name (@function)
    if (scriptName !== '') {
      newOutput += `/// @function ${scriptName}(`

      // add parameters
      hasParams = false

      for (let i = 0; i < args.length; i++) {
        if (args[i].name !== '') {
          newOutput += `${args[i].name}, `
          hasParams = true
        }
      }

      // Remove final comma and space if script has parameters
      if (hasParams) {
        newOutput = newOutput.slice(0,newOutput.length-2)
      }

      newOutput += ')\n'
    }

    // Description (@description)
    if (description !== '') {
      newOutput += `/// @description ${description}\n`
    }

    // Arguments (@param)
    let argumentSkipped = false

    for (let i = 0; i < args.length; i++) {
      let argumentExists = false

      if (args[i].name !== '') {
        newOutput += '/// @param'
        argumentExists = true
      }

      if (argumentExists) {
        if (args[i].type !== '') {
          newOutput += ` \{${args[i].type}\}`
        }

        if (args[i].name !== '') {
          newOutput += ` ${args[i].name}`
        }

        if (args[i].description !== '') {
          newOutput += ` ${args[i].description}`
        }
          newOutput += '\n'
      }
    }

    // Return (@returns)
    if (returnValue !== '') {
      newOutput += `/// @returns {${returnValue}}\n`
    }

    // Create script body

    // Arguments
    hasParams = false
    let currentArgIndex = 0

    for (let i = 0; i < args.length; i++) {
      if (args[i].name !== '') {
        newOutput += `\nvar ${localVarPrefix}${args[i].name} = argument[${currentArgIndex}];`
        hasParams = true
        currentArgIndex++
      }
    }

    if (hasParams) {
      newOutput += '\n'
    }

    // Additional local variables
    if (localVarNames.length > 0) {
      let hasLocalVars = false

      for (let i = 0; i < localVarNames.length; i++) {
        if (localVarNames[i] !== '') {
          if (!hasLocalVars) {
            newOutput += '\nvar '
            hasLocalVars = true
          }

          newOutput += `${localVarPrefix}${localVarNames[i]}, `
        }
      }

      // Remove final comma and space if script has local variables
      if (hasLocalVars) {
        newOutput = newOutput.slice(0,newOutput.length-2)
        newOutput += ';\n'
      }
    }

    newOutput += '\n/*\n* Your code goes here...\n*/\n'

    // Return
    if (returnValue !== '') {
       newOutput += `\nreturn return value ;`
    }

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