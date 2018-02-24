import React from 'react'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'
import PropTypes from 'prop-types'

import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import { EVENT_ITEM_ADD, EVENT_ITEM_REMOVE, EVENT_ITEM_SORT, EVENT_ITEM_CHANGE } from '../../helpers/EventTypes'

import '../../../styles/list-container.css'

const ArgumentContainer = (props) => {
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
    onEvent (EVENT_ITEM_CHANGE, { newArg, id, key } )
  }

  return (
    <div className="container-root">
      <div className="container-header">
        <div className="container-title">
          <Typography variant="headline">Arguments</Typography>
        </div>
        <div className="container-add">
          <AddArgumentButton
            onClick={onAdd}
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

ArgumentContainer.propTypes = {
  items: PropTypes.array,
  onEvent: PropTypes.func,
}

export default ArgumentContainer