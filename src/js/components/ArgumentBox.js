import React, { Component } from 'react'
import '../../styles/ArgumentBox.css'

class ArgumentBox extends Component {

  constructor() {
    super()
  }

  render() {
    let placeholderText = 'argument[' + this.props.id + ']'

    return (

      <div className='argument-box col-md-6'>
        <h2>Argument{this.props.id}</h2>
        <input type='text' placeholder={placeholderText}></input>
      </div>
    )    
  }
}

export default ArgumentBox