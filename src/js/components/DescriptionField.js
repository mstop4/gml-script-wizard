import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap'
import '../../styles/fields.css'

const DescriptionField = ({ value, onChange }) => {
  return (
    <div className='single-element-field'>
      <Label for="description">Description</Label>
      <Input
        id="description"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )   
}

export default DescriptionField