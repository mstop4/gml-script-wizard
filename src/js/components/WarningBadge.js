import React from 'react'
import { Badge } from 'react-bootstrap'

const WarningBadge = ({ argumentWarning }) => {
  return (
    <Badge hidden={argumentWarning}>!</Badge>
  )
}

export default WarningBadge