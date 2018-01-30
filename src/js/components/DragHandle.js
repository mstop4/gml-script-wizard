import React from 'react'
import Icon from 'material-ui/Icon'
import { SortableHandle } from 'react-sortable-hoc'

const DragHandle = SortableHandle(() => <Icon>drag_handle</Icon>)

export default DragHandle