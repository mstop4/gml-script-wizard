import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

import DragHandle from '../DragHandle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const LocalVarField = SortableElement( ({ index, id, value, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <Card className="argument-item">
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <DragHandle/>
        </Grid>
        <Grid item xs={8}>
          <TextField
            value={value}
            onChange={onFieldChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton color="secondary" size="small" onClick={onFieldRemove}>
            <FontAwesomeIcon icon="minus" size="sm"/>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
})

export default LocalVarField