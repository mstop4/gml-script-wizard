import React from 'react'
import { Button } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import '../../../styles/fields.css'

const AddLocalVarButton = ({onClick}) => (
    <div className='add-local-var-button'>
      <Button 
        color='primary'
        onClick={onClick}
      >
      <FontAwesomeIcon icon="plus"/>
      </Button>
    </div>
  )

export default AddLocalVarButton