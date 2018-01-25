import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

const AddLocalVarButton = ({onClick}) => (
    <div className='add-local-var-button'>
      <Button 
        bsStyle='primary'
        onClick={onClick}
      >
        <Glyphicon glyph='plus'/>
      </Button>
    </div>
  )

export default AddLocalVarButton