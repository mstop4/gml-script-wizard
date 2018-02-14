import React from 'react'
import Icon from 'material-ui/Icon'
import { SortableHandle } from 'react-sortable-hoc'

const DragHandle = SortableHandle(() => <Icon className="drag-handle">reorder</Icon>)

export default DragHandle