import React, { Component } from 'react'

class OutputBox extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='output-box col-md-6'>
        <h2>Output</h2>
        <textarea readOnly 
                  placeholder='Output'
                  value={this.props.value}>
        </textarea>
      </div>
    )
  }
} 

export default OutputBox