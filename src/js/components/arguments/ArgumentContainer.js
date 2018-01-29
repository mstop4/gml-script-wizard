import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge';

const ArgumentContainer = ({ items, argumentWarning, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    /* this might do something bad */
    <Container className='argument-container'> 
      <Row>
        <Col md="9">
          <h2 className='inline-heading'>Arguments </h2>
          {argumentWarning &&
            <WarningBadge/>}
          </Col>
        <Col md="3">
            <AddArgumentButton
              onClick={onClick}
            />
        </Col>
      </Row>
      <Row>
        <Col md="12">
            <ArgumentSortable 
              items={items}
              onChange={onChange}
              onSortEnd={onSortEnd}
              onRemove={onRemove}
            />
        </Col>  
      </Row>
    </Container>
  )
}

export default ArgumentContainer