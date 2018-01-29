import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap'
import '../../styles/fields.css'

const ScriptNameField = ({ value, onChange }) => {
  return (
    <Form className='return-field'>
      <FormGroup>
        <Label>Script Name</Label>
        <Input
          type="text"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Form>
  )    
}

export default ScriptNameField