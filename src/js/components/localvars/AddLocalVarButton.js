import React from 'react'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const AddLocalVarButton = ({onClick}) => (
  <div className='add-local-var-button'>
    <IconButton 
      color="secondary"
      size="small"
      onClick={onClick}
    >
      <Icon>add_circle</Icon>
    </IconButton>
  </div>
)

export default AddLocalVarButton