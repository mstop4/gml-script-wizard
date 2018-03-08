import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControlLabel, FormLabel } from 'material-ui/Form'
import Switch from 'material-ui/Switch'

import { legacyToggle } from '../../actions/options'
import propTypes from 'prop-types'

const mapStateToProps = (state) => ({
  legacyMode: state.options.legacyMode
})

const mapDispatchToProps = (dispatch) => ({
  onLegacyChange: () => dispatch(legacyToggle()),
})

const LegacyToggle = (props) => {
  let { legacyMode, onLegacyChange } = props

  return (
    <FormGroup>
      <FormLabel component="legend">Documentation Style</FormLabel>
      <FormControlLabel
        control={
          <Switch
            checked={legacyMode}
            onChange={onLegacyChange}
          />
        }
        label={legacyMode ? 'GameMaker: Studio 1.4' : 'GameMaker Studio 2'}
      />
    </FormGroup>
  )
}

LegacyToggle.propTypes = {
  legacyMode: propTypes.bool,
  onLegacyChange: propTypes.func
}

export default connect( mapStateToProps, mapDispatchToProps )(LegacyToggle)