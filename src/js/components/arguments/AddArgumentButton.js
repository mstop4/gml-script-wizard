import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

import { argumentAdd } from '../../actions/arguments'
import PropTypes from 'prop-types' 

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(argumentAdd())
})

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

export default connect(null, mapDispatchToProps)(AddArgumentButton)