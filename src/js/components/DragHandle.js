import React from 'react'
import { SortableHandle } from 'react-sortable-hoc'
import { Glyphicon } from 'react-bootstrap'

const DragHandle = SortableHandle(() => <span><Glyphicon glyph='sort'/></span>)

export default DragHandle