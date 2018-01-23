import React, { Component } from 'react'
import '../../styles/fields.css'

class ReturnField extends Component {

  constructor() {
    super()
  }

  render() {
    let placeholderText = 'return value'

    return (

      <div className='return-field col-md-6'>
        <h2>Returns</h2>
        <input type='text' placeholder={placeholderText}></input>
      </div>
    )    
  }
}

export default ReturnField