import React, { Component } from 'react'

class OutputBox extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='output-box'>
        <h2>Script</h2>
        <textarea readOnly 
                  placeholder='Output'
                  value={this.props.value}>
        </textarea>
      </div>
    )
  }
} 

export default OutputBox