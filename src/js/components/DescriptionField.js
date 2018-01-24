import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import '../../styles/fields.css'

const DescriptionField = ({ value, onChange }) => {
  return (
    <div className='description-field'>
      <form>
      <FormGroup>
        <ControlLabel>Description</ControlLabel>
        <FormControl
          type="text"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </form>
    </div>
  )   
}

export default DescriptionField