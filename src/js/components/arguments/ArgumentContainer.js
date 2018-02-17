import React from 'react'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'

import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'

import '../../../styles/list-container.css'

const ArgumentContainer = (props) => {
  let { items, onClick, onChange, onRemove, onSortEnd } = props

  return (
    <div className="container-root">
      <div className="container-header">
        <div className="container-title">
          <Typography variant="headline">Arguments</Typography>
        </div>
        <div className="container-add">
          <AddArgumentButton
            onClick={onClick}
          />
        </div>
      </div>
      <div className="container-list">
        <Scrollbars>
          <ArgumentSortable 
            items={items}
            onChange={onChange}
            onSortEnd={onSortEnd}
            onRemove={onRemove}
          /> 
        </Scrollbars>
      </div>
    </div>
  )
}

export default ArgumentContainer