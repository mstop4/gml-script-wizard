import React from 'react'
import { connect } from 'react-redux'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { FormControl } from 'material-ui/Form'

import { funcTagChange } from '../../actions/options'
import propTypes from 'prop-types'

const style = {
  width: '10em'
}

const mapStateToProps = (state) => ({
  funcTag: state.options.functionTag
})

const mapDispatchToProps = (dispatch) => ({
  onTagChange: (event) => dispatch(funcTagChange(event.target.value)),
})

const FuncTagSelector = (props) => {
  let { funcTag, onTagChange } = props

  return (
    <FormControl>
      <InputLabel htmlFor="funcTagSelect">Function Tag</InputLabel>
      <Select
        autoWidth
        value={funcTag}
        onChange={onTagChange}
        input={<Input name="funcTagSelect" id="funcTagSelect" />}
        style={style}
      >
        <MenuItem value="@function">@function</MenuItem>
        <MenuItem value="@func">@func</MenuItem>
      </Select> 
    </FormControl>
  )
}

FuncTagSelector.propTypes = {
  funcTag: propTypes.string,
  onTagChange: propTypes.func
}

export default connect( mapStateToProps, mapDispatchToProps )(FuncTagSelector)