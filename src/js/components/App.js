import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import OutputBox from './OutputBox'
import ArgumentField from './ArgumentField'
import ReturnField from './ReturnField'
import DescriptionField from './DescriptionField'
import SortableList from './SortableList'

class App extends Component {

  constructor() {
    super()

    this.state = {
      localVarPrefix: '_',
      description: '',
      outputValue: '',
      arguments: ['', '', '', '',
                  '', '', '', '',
                  '', '', '', '',
                  '', '', '', ''],
      returnValue: ''
    }

    this.handleArgumentChange = this.handleArgumentChange.bind(this)
    this.handleReturnChange = this.handleReturnChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.updateOutput = this.updateOutput.bind(this)
  }

  handleArgumentChange(newArg, id) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.arguments[id] = newArg
    this.updateOutput(newState)
  }

  handleDescriptionChange(event) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.description = event.target.value
    this.updateOutput(newState)
  }

  handleReturnChange(event) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.returnValue = event.target.value
    this.updateOutput(newState)
  }

  updateOutput(newState) {
    let newOutput = ''

    // Create script JSDoc header

    // Description (@description)
    if (newState.description !== '')
      newOutput += '/// @description ' + newState.description + '\n'

    // Arguments (@param)
    for (let i = 0; i < 16; i++) {
      if (newState.arguments[i] !== '') {
        newOutput += '/// @param ' + newState.arguments[i] + '\n'
      }
    }

    // Return (@returns)
    if (newState.returnValue !== '') {
      newOutput += '/// @returns ' + newState.returnValue + '\n'
    }

    newOutput += '\n'

    // Create script body

    // Arguments
    for (let i = 0; i < 16; i++) {
      if (newState.arguments[i] !== '') {
        newOutput += 'var ' + newState.localVarPrefix + newState.arguments[i] + ' = argument[' + i + '];\n'
      }
    }

    // Other local variables
    if (newState.returnValue !== '') {
      newOutput += '\nvar ' + newState.localVarPrefix + newState.returnValue + ';\n'
    }

    newOutput += '\n/*\n* Your code goes here...\n*/\n'

    // Return
    if (newState.returnValue !== '') {
      newOutput += '\nreturn ' + newState.localVarPrefix + newState.returnValue + ';'
    }

    newState.outputValue = newOutput
    this.setState(newState)
  }

  render() {
    let argBoxes = [];
    for (var i = 0; i < 16; i++) {
        argBoxes.push(<ArgumentField 
                        key={i} 
                        id={i}
                        value={this.state.arguments[i]}
                        onChange={this.handleArgumentChange}/>);
    }

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
                {argBoxes}
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    )
  } 
}

export default App