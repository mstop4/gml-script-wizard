import React from 'react'
import { Button } from 'reactstrap'

const AddArgumentButton = ({onClick}) => (
    <div className='add-argument-button'>
      <Button 
        color='primary'
        onClick={onClick}
      >
        Plus
      </Button>
    </div>
  )

export default AddArgumentButton