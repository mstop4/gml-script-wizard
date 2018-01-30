import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const AddArgumentButton = ({onClick}) => (
    <div className='add-argument-button'>
      <IconButton 
        color='primary'
        onClick={onClick}
      >
      <FontAwesomeIcon icon="plus" />
      </IconButton>
    </div>
  )

export default AddArgumentButton