import React from 'react'
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import '../../styles/fields.css'

const ScriptNameField = ({ value, onChange }) => {
  return (
    <div className='return-field'>
      <form>
      <FormGroup>
        <ControlLabel>Script Name</ControlLabel>
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

export default ScriptNameField