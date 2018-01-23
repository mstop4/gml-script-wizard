import React, { Component } from 'react'
import '../../styles/fields.css'

class ArgumentField extends Component {

  constructor() {
    super()
  }

  render() {
    let placeholderText = 'argument[' + this.props.id + ']'

    return (

      <div className='argument-field col-md-6'>
        <h2>Argument{this.props.id}</h2>
        <input type='text' placeholder={placeholderText}></input>
      </div>
    )    
  }
}

export default ArgumentField