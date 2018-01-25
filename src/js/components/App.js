import React, { Component } from 'react'
import { Navbar, Grid, Row, Col, Well } from 'react-bootstrap'
import { arrayMove } from 'react-sortable-hoc'

import OutputBox from './OutputBox'
import ReturnField from './ReturnField'
import DescriptionField from './DescriptionField'
import ArgumentContainer from './arguments/ArgumentContainer'
import LocalVarContainer from './localvars/LocalVarContainer'
import ScriptNameField from './ScriptNameField';

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
    for (let i = 0; i < argumentNames.length; i++) {
      if (argumentNames[i] !== '') {
        newOutput += `/// @param ${argumentNames[i]}\n`
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
      returnValue: returnValue
    })
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>GML Script Template Generator</Navbar.Brand>
        </Navbar>
        <Grid>
          <Row>
            <Col md={6} className='output-box-column'>
              <Row>
                <ScriptNameField 
                  value={this.state.scriptName}
                  onChange={this.handleScriptNameChange}
                />
                <DescriptionField 
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
                {/* <ReturnField 
                  value={this.state.returnValue}
                  onChange={this.handleReturnChange}
                /> */}
              </Row>
              <Row>
                <OutputBox value={this.state.outputValue}/>
              </Row>
            </Col>
            <Col md={3} className='argument-column'>
              <ArgumentContainer 
                items={this.state.argumentNames}
                onClick={this.handleAddArgument}
                onRemove={this.handleRemoveArgument}
                onChange={this.handleArgumentChange}
                onSortEnd={this.handleArgumentSort}/>
            </Col>
            <Col md={3} className='local-var-column'>
              <LocalVarContainer 
                items={this.state.localVarNames}
                onClick={this.handleAddLocalVar}
                onRemove={this.handleRemoveLocalVar}
                onChange={this.handleLocalVarChange}
                onSortEnd={this.handleLocalVarSort}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  } 
}

export default App