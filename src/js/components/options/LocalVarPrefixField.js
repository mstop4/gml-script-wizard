import React from 'react'
import { connect } from 'react-redux'
import { prefixChange } from '../../actions/options'
import TextField from 'material-ui/TextField'
import propTypes from 'prop-types'

const mapStateToProps = (state) => ({
  localVarPrefix: state.options.localVarPrefix
})

const mapDispatchToProps = (dispatch) => ({
  onPrefixChange: (event) => dispatch(prefixChange(event.target.id, event.target.value))
})

const LocalVarPrefixField = (props) => {
  let { localVarPrefix, onPrefixChange } = props

  const handleTextFieldClick = (event) => {
    event.stopPropagation()
  }

  return (
    <TextField
      id="localVarPrefix"
      label="Local Variable Prefix"
      placeholder="none"
      margin="normal"
      value={localVarPrefix}
      onClick={handleTextFieldClick}
      onChange={onPrefixChange}
    />
  )
}

LocalVarPrefixField.propTypes = {
  localVarPrefix: propTypes.string,
  onPrefixChange: propTypes.func
}

export default connect( mapStateToProps, mapDispatchToProps )(LocalVarPrefixField)