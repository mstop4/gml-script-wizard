import React from 'react'
import Button from 'material-ui/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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