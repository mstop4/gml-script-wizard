import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

import DragHandle from '../DragHandle'

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
        <Grid item xs={1} md={2}>
          <DragHandle/>
        </Grid>
        <Grid item xs={10} md={8}>
          <TextField
            placeholder="unused"
            value={value}
            onChange={onFieldChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={1} md={2}>
          <IconButton color="primary" size="small" onClick={onFieldRemove}>
            <Icon>delete_forever</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
})

export default LocalVarField