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
            pressDelay={200}
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
      onSortEnd={onSortEnd}
      onChange={onChange}
      onRemove={onRemove}
      useDragHandle={true}
      helperClass='argument-list'
    />
  )
}

export default ArgumentSortable