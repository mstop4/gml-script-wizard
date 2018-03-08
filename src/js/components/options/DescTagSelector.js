import React from 'react'
import { connect } from 'react-redux'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { FormControl } from 'material-ui/Form'

import { descTagChange } from '../../actions/options'
import propTypes from 'prop-types'


const mapStateToProps = (state) => ({
  descTag: state.options.descriptionTag
})

const mapDispatchToProps = (dispatch) => ({
  onTagChange: (event) => dispatch(descTagChange(event.target.value)),
})

const DescTagSelector = (props) => {
  let { descTag, onTagChange } = props

  return (
    <FormControl>
      <InputLabel htmlFor="descTagSelect">Description Tag</InputLabel>
      <Select
        autoWidth
        value={descTag}
        onChange={onTagChange}
        input={<Input name="descTagSelect" id="descTagSelect" />}
      >
        <MenuItem value="@description">@description</MenuItem>
        <MenuItem value="@desc">@desc</MenuItem>
      </Select> 
    </FormControl>
  )
}

DescTagSelector.propTypes = {
  descTag: propTypes.string,
  onTagChange: propTypes.func
}

export default connect( mapStateToProps, mapDispatchToProps )(DescTagSelector)