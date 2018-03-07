import React from 'react'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'
//import PropTypes from 'prop-types'

import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'

const LocalVarContainer = () => {
  return (
    <div className="container-root">
      <div className="container-header">
        <div className="container-title">
          <Typography variant="headline">Local Variables</Typography>
        </div>
        <div className="container-add">
            <AddLocalVarButton/>
        </div>
      </div>
      <div className="container-list">
        <Scrollbars>
          <LocalVarSortable/>
        </Scrollbars>
      </div>
    </div>
  )
}

//LocalVarContainer.propTypes = {}

export default LocalVarContainer