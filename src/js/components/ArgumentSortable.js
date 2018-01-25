import React from 'react'
import ArgumentField from './ArgumentField'
import { SortableContainer } from 'react-sortable-hoc'

const ArgumentList = SortableContainer( ({ items, onChange, onRemove }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <ArgumentField 
          key={index}
          index={index}
          pressDelay={200} 
          id={index}
          value={value}
          onChange={onChange}
          onRemove={onRemove}/>
      ))}
    </ul>
  )
})

const ArgumentSortable = ({ items, onSortEnd, onChange, onRemove }) => {
  return (
    <ArgumentList 
      index={0}
      items={items}
      onSortEnd={onSortEnd}
      onChange={onChange}
      onRemove={onRemove}
      useDragHandle={true}
    />
  )
}

export default ArgumentSortable