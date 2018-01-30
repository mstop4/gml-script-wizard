import React from 'react'
import ArgumentField from './ArgumentField'
import { SortableContainer } from 'react-sortable-hoc'

const ArgumentList = SortableContainer( ({ items, onChange, onRemove }) => {
  return (
    <div className='argument-list'>
      <ul>
        {items.map((arg, index) => (
          <ArgumentField 
            key={index}
            index={index}
            id={index}
            name={arg.name}
            type={arg.type}
            description={arg.description}
            onChange={onChange}
            onRemove={onRemove}/>
        ))}
      </ul>
    </div>
  )
})

const ArgumentSortable = ({ items, onSortEnd, onChange, onRemove, height }) => {
  return (
    <ArgumentList 
      index={0}
      items={items}
      transitionDuration={0}
      onSortEnd={onSortEnd}
      onChange={onChange}
      onRemove={onRemove}
      useDragHandle={true}
    />
  )
}

export default ArgumentSortable