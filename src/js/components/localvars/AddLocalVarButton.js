import React from 'react'
import { Button } from 'reactstrap'
import '../../../styles/fields.css'

const AddLocalVarButton = ({onClick}) => (
    <div className='add-local-var-button'>
      <Button 
        color='primary'
        onClick={onClick}
      >
        Plus
      </Button>
    </div>
  )

export default AddLocalVarButton