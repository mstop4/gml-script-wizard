import React, { Component } from 'react'
import '../../styles/fields.css'

class ReturnField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='return-field'>
        <h2>Returns</h2>
        <input type='text'
               value={this.props.value}
               onChange={this.props.onChange}></input>
      </div>
    )    
  }
}

export default ReturnField