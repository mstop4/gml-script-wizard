import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Row, Col, ControlLabel, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap'
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
      <Row>
        <Col md={12}>
          <FormGroup>
            <ControlLabel>Argument{id}</ControlLabel>
            <FormControl
              type="text"
              value={value}
              onChange={onFieldChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col mdOffset={9} md={3}>
          <FormGroup>
            <Button bsStyle='danger' onClick={onFieldRemove}>
              <Glyphicon glyph="minus"/>
            </Button>
          </FormGroup>
        </Col>
      </Row>
    </div>
  )
})

export default ArgumentField