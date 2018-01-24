import React from 'react'
import '../../styles/fields.css'

const DescriptionField = ({ value, onChange }) => {
  return (
    <div className='description-field'>
      <h2>Description</h2>
      <input type='text'
             value={value}
             onChange={onChange}></input>
    </div>
  )   
}

export default DescriptionField