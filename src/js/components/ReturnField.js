import React, { Component } from 'react'
import '../../styles/fields.css'

class ReturnField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let placeholderText = 'return value'

    return (

      <div className='return-field col-md-6'>
        <h2>Returns</h2>
        <input type='text'
               placeholder={placeholderText}
               value={this.props.value}
               onChange={this.props.onChange}></input>
      </div>
    )    
  }
}

export default ReturnField