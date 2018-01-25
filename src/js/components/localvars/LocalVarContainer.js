import React from 'react'
import { Row, Col } from 'react-bootstrap'
import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'

const LocalVarContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className='local-var-container'>
      <Row>
        <Col md={9}>
            <h2>Local Variables</h2>
        </Col>
        <Col md={3}>
            <AddLocalVarButton
              onClick={onClick}
            />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
            <LocalVarSortable 
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

export default LocalVarContainer