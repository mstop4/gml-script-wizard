import React from 'react'
import { Button } from 'react-bootstrap'

const AddArgumentButton = ({onClick}) => (
    <div className='add-argument-button'>
      <Button 
        bsStyle='primary'
        onClick={onClick}
      >
        +
      </Button>
    </div>
  )

export default AddArgumentButton