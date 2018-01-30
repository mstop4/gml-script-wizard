import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import DragHandle from '../DragHandle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import '../../../styles/fields.css'

const LocalVarField = SortableElement( ({ index, id, value, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <Container className='local-var-field'>
      <Row noGutters>
        <Col lg="4">
          <DragHandle/>
        </Col>
        <Col lg="4">
          <div className='text-center'>
            <Label>Name</Label>
          </div>
        </Col>
        <Col lg="4">
          <div className='text-right'>
            <Button color='danger' size='sm' onClick={onFieldRemove}>
              <FontAwesomeIcon icon='minus' size='sm'/>
            </Button>
          </div>
        </Col>
      </Row>
      <Row noGutters>
        <Col lg="12">
          <Input
            type='text'
            bsSize='small'
            value={value}
            onChange={onFieldChange}
          />
        </Col>
      </Row>
    </Container>
  )
})

export default LocalVarField