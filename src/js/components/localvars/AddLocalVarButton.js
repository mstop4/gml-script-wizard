import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

import { localVarAdd } from '../../actions/localVars'
import PropTypes from 'prop-types'

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(localVarAdd())
})

const AddLocalVarButton = ({ onClick }) => (
  <div className='add-local-var-button'>
    <IconButton 
      color="primary"
      size="small"
      onClick={onClick}
    >
      <Icon>add_circle</Icon>
    </IconButton>
  </div>
)

AddLocalVarButton.propTypes = {
  onClick: PropTypes.func
}

export default connect(null, mapDispatchToProps)(AddLocalVarButton)