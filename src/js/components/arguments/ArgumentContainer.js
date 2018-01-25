import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge';

const ArgumentContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className='argument-container'>
      <Row>
        <Col md={9}>
            <h2>Arguments</h2><WarningBadge/>
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