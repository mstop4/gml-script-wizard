import React, { Component } from 'react'
import '../../styles/fields.css'

class ArgumentField extends Component {

  constructor(props) {
    super(props)

    this.onFieldChange = this.onFieldChange.bind(this)
  }

  onFieldChange(event) {
    let newArg = event.target.value
    this.props.onChange(newArg, this.props.id)
  }

  render() {
    let placeholderText = 'argument[' + this.props.id + ']'

    return (
      <div className='argument-field'>
        <h2>Argument{this.props.id}</h2>
        <input type='text'
               value={this.props.value}
               onChange={this.onFieldChange}></input>
      </div>
    )    
  }
}

export default ArgumentField