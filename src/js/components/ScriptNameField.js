import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

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

ScriptNameField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default ScriptNameField