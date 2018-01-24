import React from 'react'
import ArgumentSortable from './ArgumentSortable'

const ArgumentContainer = ({ items, onChange, onSortEnd }) => {

  return (
    <div className='argument-container'>
      <ArgumentSortable 
        items={items}
        onChange={onChange}
        onSortEnd={onSortEnd}
      />
    </div>
  )
}

export default ArgumentContainer