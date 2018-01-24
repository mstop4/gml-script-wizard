import React from 'react'
import '../../styles/fields.css'

const ScriptNameField = ({ value, onChange }) => {
  return (
    <div className='return-field'>
      <h2>Script Name</h2>
      <input type='text'
             value={value}
             onChange={onChange}></input>
    </div>
  )    
}

export default ScriptNameField