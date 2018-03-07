import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'

import { scriptNameChange } from '../actions/id'

const mapStateToProps = (state) => ({
  value: state.scriptName
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(scriptNameChange(event.target.value)),
})

const ScriptNameField = ({ value, onChange }) => {
  return (
    <TextField
      id="scriptName"
      label="Script Name"
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
    />
  )    
}

ScriptNameField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ScriptNameField)