import React from 'react'
import Button from 'material-ui/Button'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const AddArgumentButton = ({onClick}) => (
    <div className='add-argument-button'>
      <Button 
        color='primary'
        onClick={onClick}
      >
      <FontAwesomeIcon icon="plus" />
      </Button>
    </div>
  )

export default AddArgumentButton