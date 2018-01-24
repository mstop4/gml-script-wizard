import React, { Component } from 'react'
import '../../styles/fields.css'

class DescriptionField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='description-field'>
        <h2>Description</h2>
        <input type='text'
               value={this.props.value}
               onChange={this.props.onChange}></input>
      </div>
    )    
  }
}

export default DescriptionField