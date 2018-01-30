import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const AddLocalVarButton = ({onClick}) => (
  <div className='add-local-var-button'>
    <IconButton 
      color='primary'
      onClick={onClick}
    >
    <FontAwesomeIcon icon="plus"/>
    </IconButton>
  </div>
)

export default AddLocalVarButton