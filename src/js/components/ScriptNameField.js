import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap'
import '../../styles/fields.css'

const ScriptNameField = ({ value, onChange }) => {
  return (
    <div className='single-element-field'>
      <Label>Script Name</Label>
      <Input
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )    
}

export default ScriptNameField