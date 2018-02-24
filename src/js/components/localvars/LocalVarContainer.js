import React from 'react'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'
import PropTypes from 'prop-types'

import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'
import { EVENT_ITEM_ADD, EVENT_ITEM_REMOVE, EVENT_ITEM_SORT, EVENT_ITEM_CHANGE } from '../../helpers/EventTypes'

const LocalVarContainer = (props) => {
  let { items, onEvent } = props

  const onAdd = () => {
    onEvent(EVENT_ITEM_ADD)
  }

  const onRemove = (id) => {
    onEvent(EVENT_ITEM_REMOVE, { id } )
  }

  const onSortEnd = (event) => {
    onEvent(EVENT_ITEM_SORT, { oldIndex: event.oldIndex, newIndex: event.newIndex })
  }

  const onChange = (newArg, id, key) => {
    onEvent(EVENT_ITEM_CHANGE, { newArg, id, key } )
  }

  return (
    <div className="container-root">
      <div className="container-header">
        <div className="container-title">
          <Typography variant="headline">Local Variables</Typography>
        </div>
        <div className="container-add">
            <AddLocalVarButton
              onClick={onAdd}
            />
        </div>
      </div>
      <div className="container-list">
        <Scrollbars>
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

LocalVarContainer.propTypes = {
  items: PropTypes.array,
  onEvent: PropTypes.func
}

export default LocalVarContainer