import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { arrayMove } from 'react-sortable-hoc'

import OutputBox from './OutputBox'
import ArgumentField from './ArgumentField'
import ReturnField from './ReturnField'
import DescriptionField from './DescriptionField'
import SortableComponent from './SortableComponent'
import ScriptNameField from './ScriptNameField';

class App extends Component {

  constructor() {
    super()

    this.state = {
      localVarPrefix: '_',
      scriptName: 'untitled_script',
      description: '',
      outputValue: '',
      argumentNames: ['', '', '', '',
                      '', '', '', '',
                      '', '', '', '',
                      '', '', '', ''],
      returnValue: ''
    }

    this.handleArgumentChange = this.handleArgumentChange.bind(this)
    this.handleArgumentSort = this.handleArgumentSort.bind(this)
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

  updateOutput ({ scriptName, description, argumentNames, returnValue, localVarPrefix }) {
    let newOutput = ''

    // Create script JSDoc header

    // Script Name (@function)
    if (scriptName !== '') {
      newOutput += `/// @function ${scriptName}(`

      // add parameters
      let hasParams = false

      for (let i = 0; i < 16; i++) {
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
    for (let i = 0; i < 16; i++) {
      if (argumentNames[i] !== '') {
        newOutput += `/// @param ${argumentNames[i]}\n`
      }
    }

    // Return (@returns)
    if (returnValue !== '') {
      newOutput += `/// @returns ${returnValue}\n`
    }

    newOutput += '\n'

    // Create script body

    // Arguments
    for (let i = 0; i < 16; i++) {
      if (argumentNames[i] !== '') {
        newOutput += `var ${localVarPrefix}${argumentNames[i]} = argument[${i}];\n`
      }
    }

    // Other local variables
    if (returnValue !== '') {
      newOutput += `\nvar ${localVarPrefix}${returnValue};\n`
    }

    newOutput += '\n/*\n* Your code goes here...\n*/\n'

    // Return
    if (returnValue !== '') {
      newOutput += `\nreturn ${localVarPrefix}${returnValue};`
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
      <Grid>
        <Row>
          <h1>GML Script Template Generator</h1>
        </Row>

        <Row>
          <Col md={8} className='output-box-container'>
            <OutputBox value={this.state.outputValue}/>
          </Col>
          <Col md={4} className='field-container'>
            <Row>
              <Col md={6}>
                <ScriptNameField 
                  value={this.state.scriptName}
                  onChange={this.handleScriptNameChange}
                />
                <DescriptionField 
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                />
                <ReturnField 
                  value={this.state.returnValue}
                  onChange={this.handleReturnChange}
                />
              </Col>
              <Col md={6}>
                <SortableComponent 
                  items={this.state.argumentNames}
                  onChange={this.handleArgumentChange}
                  onSortEnd={this.handleArgumentSort}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  } 
}

export default App