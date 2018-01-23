import React, { Component } from 'react'
import OutputBox from './OutputBox'
import ArgumentField from './ArgumentField'
import ReturnField from './ReturnField'

class App extends Component {

  constructor() {
    super()

    this.state = {
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
    let newArgs = this.state.arguments
    newArgs[id] = newArg
    this.setState({arguments: newArgs})
    this.updateOutput()
    console.log("arg changed")
  }

  handleReturnChange(event) {
    this.setState({returnValue: event.target.value})
    this.updateOutput()
    console.log("return changed")
  }

  updateOutput() {
    let newOutput = ''

    // Add arguments (@param)
    for (let i = 0; i < 16; i++) {
      if (this.state.arguments[i] !== '') {
        newOutput += '/// @param ' + this.state.arguments[i] + '\n'
      }
    }

    newOutput += '///\n'

    // Add return (@returns)
    newOutput += '/// @returns ' + this.state.returnValue
    this.setState({ outputValue: newOutput })
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
      <div className='app'>
        <div className='row'>
          <h1>GML Script Template Generator</h1>
        </div>
        <div className='row'>
          <OutputBox value={this.state.outputValue}/>
          <div className='arguments'>
              {argBoxes}
          </div>
          <ReturnField 
            value={this.state.returnValue}
            onChange={this.handleReturnChange}/>
        </div>
      </div>
    )
  } 
}

export default App