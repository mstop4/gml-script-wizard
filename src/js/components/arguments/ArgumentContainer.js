import React from 'react'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'
//simport PropTypes from 'prop-types'

import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'

import '../../../styles/list-container.css'

const ArgumentContainer = () => {
  return (
    <div className="container-root">
      <div className="container-header">
        <div className="container-title">
          <Typography variant="headline">Arguments</Typography>
        </div>
        <div className="container-add">
          <AddArgumentButton/>
        </div>
      </div>
      <div className="container-list">
        <Scrollbars>
          <ArgumentSortable/> 
        </Scrollbars>
      </div>
    </div>
  )
}

//ArgumentContainer.propTypes = {}

export default ArgumentContainer