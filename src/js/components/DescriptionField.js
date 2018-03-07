import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

import { descriptionChange } from '../actions/id'

const mapStateToProps = (state) => ({
  value: state.description
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(descriptionChange(event.target.value)),
})

const DescriptionField = ({ value, onChange }) => {
  return (
    <TextField
      id="description"
      label="Description"
      margin="normal"
      fullWidth
      multiline
      value={value}
      onChange={onChange}
    />
  )   
}

DescriptionField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionField)