import React, { Component } from 'react'

class OutputBox extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='output-box'>
        <h2>Script</h2>
        <div className='generated-script'>
          {this.props.value}
        </div>
      </div>
    )
  }
} 

export default OutputBox