import React from 'react'
import TextField from 'material-ui/TextField'

const ScriptNameField = ({ value, onChange }) => {
  return (
    <Input
      id="return-field"
      label="Return Type"
      type="text"
      value={value}
      onChange={onChange}
    />
  )    
}

export default ScriptNameField