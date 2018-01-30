import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import Reboot from 'material-ui/Reboot'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'

fontawesome.library.add(faPlus, faMinus, faBars)

import OutputBox from './OutputBox'
import ReturnField from './ReturnField'
import DescriptionField from './DescriptionField'
import ArgumentContainer from './arguments/ArgumentContainer'
import LocalVarContainer from './localvars/LocalVarContainer'
import ScriptNameField from './ScriptNameField';
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
      argumentNames: [],
      localVarNames: [],
      returnValue: '',
      argumentWarning: false
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

  handleArgumentChange(newArg, id) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.argumentNames[id] = newArg
    this.updateOutput(newState)
  }

  handleArgumentSort(event) {
    let newState = this.state
    newState.argumentNames = arrayMove(newState.argumentNames, event.oldIndex, event.newIndex)
    this.updateOutput(newState)
  }

  handleAddArgument(event) {
    if (this.state.argumentNames.length < 16) {
      let newState = this.state
      newState.argumentNames.push('')
      this.updateOutput(newState)
    }
  }

  handleRemoveArgument(id) {
    if (this.state.argumentNames.length > 0) {
      let newState = this.state
      newState.argumentNames.splice(id, 1)
      this.updateOutput(newState)
    }
  }

  handleLocalVarChange(newArg, id) {
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

  updateOutput ({ scriptName, description, argumentNames, localVarNames, returnValue, localVarPrefix }) {
    let newOutput = ''
    let newArgumentWarning = false

    // Create script JSDoc header

    // Script Name (@function)
    if (scriptName !== '') {
      newOutput += `/// @function ${scriptName}(`

      // add parameters
      let hasParams = false

      for (let i = 0; i < argumentNames.length; i++) {
        if (argumentNames[i] !== '') {
          newOutput += `${argumentNames[i]}, `
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

    for (let i = 0; i < argumentNames.length; i++) {
      if (argumentNames[i] !== '') {
        newOutput += `/// @param ${argumentNames[i]}\n`
        if (argumentSkipped) {
          newArgumentWarning = true
          argumentSkipped = false
        }
      } else {
        argumentSkipped = true
      }
    }

    // Return (@returns)
    if (returnValue !== '') {
      newOutput += `/// @returns {${returnValue}}\n`
    }

    newOutput += '\n'

    // Create script body

    // Arguments
    for (let i = 0; i < argumentNames.length; i++) {

      if (argumentNames[i] !== '') {
        newOutput += `var ${localVarPrefix}${argumentNames[i]} = argument[${i}];\n`
      }
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
       newOutput += `\nreturn /* return value */;`
    }

    this.setState({
      scriptName: scriptName,
      description: description,
      outputValue: newOutput,
      argumentNames: argumentNames,
      returnValue: returnValue,
      argumentWarning: newArgumentWarning
    })
  }

  render() {
    return (
      <div className="app">
        {/* <Reboot/> */}
        <MuiThemeProvider theme={ColourTheme}>
          <AppBar color="default">
            <Typography type="display1" align="center" gutterBottom>
              GML Script Template Generator (alpha)
            </Typography>
          </AppBar>
          <Grid container>
            <Grid item xs={6}>
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
            <Grid item xs={3}>
              <ArgumentContainer 
                items={this.state.argumentNames}
                argumentWarning={this.state.argumentWarning}
                onClick={this.handleAddArgument}
                onRemove={this.handleRemoveArgument}
                onChange={this.handleArgumentChange}
                onSortEnd={this.handleArgumentSort}/>
            </Grid>
            <Grid item xs={3}>
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