import React from 'react'
import Icon from 'material-ui/Icon'
import { SortableHandle } from 'react-sortable-hoc'

const DragHandle = SortableHandle(() => <Icon className="drag-handle">drag_handle</Icon>)

export default DragHandle