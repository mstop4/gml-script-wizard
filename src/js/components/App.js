import React, { Component } from 'react'
import { arrayMove } from 'react-sortable-hoc'
import Grid from 'material-ui/Grid'

import TitleBar from './TitleBar'
import OutputBox from './OutputBox'
import DescriptionField from './DescriptionField'
import ArgumentContainer from './arguments/ArgumentContainer'
import LocalVarContainer from './localvars/LocalVarContainer'
import ScriptNameField from './ScriptNameField'

import { MuiThemeProvider } from 'material-ui/styles'
import ColourTheme from '../helpers/ColourTheme'
import generateScript from '../helpers/ScriptGen'

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
    }

    this.handleArgumentChange = this.handleArgumentChange.bind(this)
    this.handleArgumentSort = this.handleArgumentSort.bind(this)
    this.handleAddArgument = this.handleAddArgument.bind(this)
    this.handleRemoveArgument = this.handleRemoveArgument.bind(this)

    this.handleLocalVarChange = this.handleLocalVarChange.bind(this)
    this.handleLocalVarSort = this.handleLocalVarSort.bind(this)
    this.handleAddLocalVar = this.handleAddLocalVar.bind(this)
    this.handleRemoveLocalVar = this.handleRemoveLocalVar.bind(this)

    this.handleScriptNameChange = this.handleScriptNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.updateOutput = this.updateOutput.bind(this)
  }

  componentDidMount() {
    // init output based on intial state
    this.updateOutput(this.state)
  }

  // TODO: Reduce duplicate code in handle functions

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

  handleAddArgument() {
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

  handleAddLocalVar() {
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

  handleScriptNameChange(event) {
    let newState = this.state
    newState.scriptName = event.target.value
    this.updateOutput(newState)
  }

  updateOutput(newState) {
    let newOutput = generateScript(newState)
    this.setState(newOutput)
  }

  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={ColourTheme}>
          <TitleBar/>
          <div>
            <Grid container alignItems='stretch'>
              <Grid item xs={12} sm={12} md={6}>
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
              <Grid item xs={12} sm={6} md={3}>
                <ArgumentContainer 
                  items={this.state.args}
                  onClick={this.handleAddArgument}
                  onRemove={this.handleRemoveArgument}
                  onChange={this.handleArgumentChange}
                  onSortEnd={this.handleArgumentSort}/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <LocalVarContainer 
                  items={this.state.localVars}
                  onClick={this.handleAddLocalVar}
                  onRemove={this.handleRemoveLocalVar}
                  onChange={this.handleLocalVarChange}
                  onSortEnd={this.handleLocalVarSort}/>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    )
  } 
}

export default App