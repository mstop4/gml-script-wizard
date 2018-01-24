import React, { Component } from 'react'
import { Well } from 'react-bootstrap'

class OutputBox extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='output-box'>
        <h2>Script</h2>
        <Well bsSize='sm' className='generated-script'>
          {this.props.value}
        </Well>
      </div>
    )
  }
} 

export default OutputBox