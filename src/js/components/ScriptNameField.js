import React from 'react'
import TextField from 'material-ui/TextField'

const ScriptNameField = ({ value, onChange }) => {
  return (
    <TextField
      id="scriptName"
      label="Script Name"
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
    />
  )    
}

export default ScriptNameField