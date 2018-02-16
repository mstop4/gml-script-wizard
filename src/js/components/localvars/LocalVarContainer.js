import React from 'react'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'

import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'

const LocalVarContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className="container-root">
      <div className="container-header">
        <div className="container-title">
          <Typography variant="headline">Local Variables</Typography>
        </div>
        <div className="container-add">
            <AddLocalVarButton
              onClick={onClick}
            />
        </div>
      </div>
      <div className="container-list">
        <Scrollbars autoHeight autoHeightMin={`calc(80vh - 5em)`} autoHeightMax={`calc(80vh - 5em)`}>
          <LocalVarSortable 
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

export default LocalVarContainer