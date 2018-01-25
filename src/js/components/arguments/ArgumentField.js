import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Row, Col, ControlLabel, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap'
import DragHandle from '../DragHandle'
import '../../../styles/fields.css'

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
      <Row>
        <Col md={3}>
          <DragHandle/>
        </Col>
        <Col md={6}>
          <div className='text-center'>
            <ControlLabel>Argument {id}</ControlLabel>
          </div>
        </Col>
        <Col md={3}>
          <div className='text-right'>
            <Button bsStyle='danger' bsSize='xsmall' onClick={onFieldRemove}>
              <Glyphicon glyph='remove'/>
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormControl
            type='text'
            bsSize='small'
            value={value}
            onChange={onFieldChange}
          />
        </Col>
      </Row>
    </div>
  )
})

export default ArgumentField