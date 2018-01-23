import React, { Component } from 'react'

class ArgumentBox extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className='argument-box col-md-4'>
        <h2>Argument {this.props.id}</h2>
        <textarea></textarea>
      </div>
    )    
  }
}

export default ArgumentBox