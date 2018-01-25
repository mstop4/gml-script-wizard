import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Row, Col, ControlLabel, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap'
import DragHandle from './DragHandle'
import '../../styles/fields.css'

const LocalVarField = SortableElement( ({ index, id, value, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <div className='local-var-field'>
      <Row>
        <Col md={9}>
          <DragHandle/>
        </Col>
        <Col md={3}>
          <Button bsStyle='danger' onClick={onFieldRemove}>
            <Glyphicon glyph='remove'/>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={value}
            onChange={onFieldChange}
          />
        </Col>
      </Row>
    </div>
  )
})

export default LocalVarField