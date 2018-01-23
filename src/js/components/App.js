import React, { Component } from 'react'
import OutputBox from './OutputBox'
import ArgumentField from './ArgumentField'
import ReturnField from './ReturnField'

class App extends Component {

  constructor() {
    super()

    this.state = {
      argumentPrefix: '_',
      outputValue: '',
      arguments: ['', '', '', '',
                  '', '', '', '',
                  '', '', '', '',
                  '', '', '', ''],
      returnValue: ''
    }

    this.handleArgumentChange = this.handleArgumentChange.bind(this)
    this.handleReturnChange = this.handleReturnChange.bind(this)
    this.updateOutput = this.updateOutput.bind(this)
  }

  handleArgumentChange(newArg, id) {
    // Make a copy of old state and change relevant values
    let newState = this.state
    newState.arguments[id] = newArg
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

    // Arguments (@param)
    for (let i = 0; i < 16; i++) {
      if (this.state.arguments[i] !== '') {
        newOutput += '/// @param ' + this.state.arguments[i] + '\n'
      }
    }

    // Return (@returns)
    if (this.state.returnValue !== '') {
      newOutput += '///\n'
      newOutput += '/// @returns ' + this.state.returnValue + '\n'
    }

    newOutput += '\n'

    // Create script body

    // Arguments
    for (let i = 0; i < 16; i++) {
      if (this.state.arguments[i] !== '') {
        newOutput += 'var ' + this.state.argumentPrefix + this.state.arguments[i] + '= argument[' + i + '];\n'
      }
    }

    newOutput += '\n/*\n* Your code goes here...\n*/\n'

    // Return
    if (this.state.returnValue !== '') {
      newOutput += 'return ' + this.state.returnValue + ';'
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
      <div class='container'>
        <div className='row'>
          <h1>GML Script Template Generator</h1>
        </div>

        <div className='row'>
          <div className='output-box-container col-md-8'>
            <OutputBox value={this.state.outputValue}/>
          </div>
          <div className='field-container col-md-4'>
            <div className='row'>
              <div className='col-md-6'>
                {argBoxes}
              </div>
              <div className='col-md-6'>
                <ReturnField 
                  value={this.state.returnValue}
                  onChange={this.handleReturnChange}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default App