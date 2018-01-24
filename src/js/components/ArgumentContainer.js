import React from 'react'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'

const ArgumentContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className='argument-container'>
      <h2>Arguments</h2>
      <AddArgumentButton
        onClick={onClick}
      />
      <ArgumentSortable 
        items={items}
        onChange={onChange}
        onSortEnd={onSortEnd}
        onRemove={onRemove}
      />
    </div>
  )
}

export default ArgumentContainer