import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import '../../styles/fields.css'

const ReturnField = ({ value, onChange }) => {
  return (
    <div className='return-field'>
      <form>
      <FormGroup>
        <ControlLabel>Returns</ControlLabel>
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

export default ReturnField