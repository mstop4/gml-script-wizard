import React from 'react'
import { connect } from 'react-redux'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { FormControl } from 'material-ui/Form'

import { argTagChange } from '../../actions/options'
import propTypes from 'prop-types'


const mapStateToProps = (state) => ({
  argTag: state.options.argumentTag
})

const mapDispatchToProps = (dispatch) => ({
  onTagChange: (event) => dispatch(argTagChange(event.target.value)),
})

const ArgTagSelector = (props) => {
  let { argTag, onTagChange } = props

  return (
    <FormControl>
      <InputLabel htmlFor="argTagSelect">Argument Tag</InputLabel>
      <Select
        autoWidth
        value={argTag}
        onChange={onTagChange}
        input={<Input name="argTagSelect" id="argTagSelect" />}
      >
        <MenuItem value="@argument">@argument</MenuItem>
        <MenuItem value="@arg">@arg</MenuItem>
        <MenuItem value="@param">@param</MenuItem>
      </Select> 
    </FormControl>
  )
}

ArgTagSelector.propTypes = {
  argTag: propTypes.string,
  onTagChange: propTypes.func
}

export default connect( mapStateToProps, mapDispatchToProps )(ArgTagSelector)