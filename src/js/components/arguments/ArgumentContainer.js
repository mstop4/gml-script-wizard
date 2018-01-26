import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge';

const ArgumentContainer = ({ items, argumentWarning, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className='argument-container'>
      <Row>
        <Col md={9}>
            <h2 className='inline-heading'>Arguments </h2><WarningBadge argumentWarning={false}/>
        </Col>
        <Col md={3}>
            <AddArgumentButton
              onClick={onClick}
            />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
            <ArgumentSortable 
              items={items}
              onChange={onChange}
              onSortEnd={onSortEnd}
              onRemove={onRemove}
            />
        </Col>  
      </Row>
    </div>
  )
}

export default ArgumentContainer