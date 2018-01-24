import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap'
import '../../styles/fields.css'

const ArgumentField = SortableElement( ({ index, id, value, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <div className='argument-field'>
      <form>
        <FormGroup>
          <ControlLabel>Argument{id}</ControlLabel>
          <FormControl
            type="text"
            value={value}
            onChange={onFieldChange}
          />
          <Button bsStyle='danger' onClick={onFieldRemove}>-</Button>
        </FormGroup>
      </form>
    </div>
  )
})

export default ArgumentField