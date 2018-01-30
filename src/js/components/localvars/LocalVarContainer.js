import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'

const LocalVarContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <Container className='local-var-container'>
      <Row noGutters>
        <Col lg="9">
            <h2>Local Variables</h2>
        </Col>
        <Col lg="3">
            <AddLocalVarButton
              onClick={onClick}
            />
        </Col>
      </Row>
      <Row noGutters>
        <Col lg="12">
            <LocalVarSortable 
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

export default LocalVarContainer