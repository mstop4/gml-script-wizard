import React from 'react'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

const DescriptionField = ({ value, onChange }) => {
  return (
    <TextField
      id="description"
      label="Description"
      margin="normal"
      fullWidth
      multiline
      value={value}
      onChange={onChange}
    />
  )   
}

DescriptionField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default DescriptionField