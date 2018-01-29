import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap'
import '../../styles/fields.css'

const ReturnField = ({ value, onChange }) => {
  return (
    <Form className='return-field'>
      <FormGroup>
        <Label>Return Type</Label>
        <Input
          type="text"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Form>
  )    
}

export default ReturnField