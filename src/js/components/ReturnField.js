import React from 'react'
import '../../styles/fields.css'

const ReturnField = ({ value, onChange }) => {
  return (
    <div className='return-field'>
      <h2>Returns</h2>
      <input type='text'
             value={value}
             onChange={onChange}></input>
    </div>
  )    
}

export default ReturnField