import React from 'react'
import TextField from 'material-ui/TextField'

const DescriptionField = ({ value, onChange }) => {
  return (
    <div className='single-element-field'>
      <TextField
        id="description"
        label="Description"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  )   
}

export default DescriptionField