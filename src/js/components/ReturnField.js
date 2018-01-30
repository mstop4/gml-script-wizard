import React from 'react'
import TextField from 'material-ui/TextField'

const ReturnField = ({ value, onChange }) => {
  return (
    <TextField
      id="returnType"
      label="Return Type"
      margin="normal"
      value={value}
      onChange={onChange}
    />
  )    
}

export default ReturnField