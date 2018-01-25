import React from 'react'
import LocalVarField from './LocalVarField'
import { SortableContainer } from 'react-sortable-hoc'

const LocalVarList = SortableContainer( ({ items, onChange, onRemove }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <LocalVarField 
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

const LocalVarSortable = ({ items, onSortEnd, onChange, onRemove }) => {
  return (
    <LocalVarList 
      index={0}
      items={items}
      onSortEnd={onSortEnd}
      onChange={onChange}
      onRemove={onRemove}
      useDragHandle={true}
    />
  )
}

export default LocalVarSortable