import React from 'react'
import Badge from 'material-ui/Badge'

const WarningBadge = ({ argumentWarning }) => {
  return (
    <h2>
    { argumentWarning && (
      <Badge color="secondary" badgeContent="!">Arguments  </Badge>
    )}
    { !argumentWarning && (
      "Arguments"
    )}
    </h2>
  )
}

export default WarningBadge