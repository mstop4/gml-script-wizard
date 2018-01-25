import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

const AddArgumentButton = ({onClick}) => (
    <div className='add-argument-button'>
      <Button 
        bsStyle='primary'
        onClick={onClick}
      >
        <Glyphicon glyph='plus'/>
      </Button>
    </div>
  )

export default AddArgumentButton