import React from 'react'
import '../../styles/fields.css'
import { SortableElement } from 'react-sortable-hoc'

const ArgumentField = SortableElement( ({ index, id, value, onChange }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  return (
    <div className='argument-field'>
      <h2>Argument{id}</h2>
      <input type='text'
            value={value}
            onChange={onFieldChange}>
      </input>
    </div>
  )
})

export default ArgumentField