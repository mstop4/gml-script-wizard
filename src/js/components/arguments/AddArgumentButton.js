import React from 'react'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types' 

const AddArgumentButton = ({ onClick }) => (
  <div className='add-argument-button'>
    <IconButton 
      color="primary"
      size="small"
      onClick={onClick}
    >
    <Icon>add_circle</Icon>
    </IconButton>
  </div>
)

AddArgumentButton.propTypes = {
  onClick: PropTypes.func
}

export default AddArgumentButton