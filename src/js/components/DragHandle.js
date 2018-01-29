import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { SortableHandle } from 'react-sortable-hoc'

const DragHandle = SortableHandle(() => <FontAwesomeIcon icon='bars'/>)

export default DragHandle