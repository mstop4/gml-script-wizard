import React from 'react'
import TextField from 'material-ui/TextField'

const DescriptionField = ({ value, onChange }) => {
  return (
    <TextField
      id="description"
      label="Description"
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
    />
  )   
}

export default DescriptionField