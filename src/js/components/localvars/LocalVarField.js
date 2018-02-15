import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Card from 'material-ui/Card'

import DragHandle from '../DragHandle'

const LocalVarField = SortableElement( ({ index, id, name, onChange, onOpen }) => {

  const onClick = (event) => {
    event.stopPropagation()
  }

  const onFieldChange = (event) => {
    let newArg = event.target.value
    let key = event.target.id
    onChange(newArg, id, key)
  }

  const onDialogOpen = () => {
    onOpen(id);
  }

  return (
    <Card>
      <Grid container alignItems="center">
        <Grid item xs={1} md={2}>
          <DragHandle/>
        </Grid>
        <Grid item xs={10} md={8}>
          <TextField
            id="name"
            placeholder={"unused"}
            value={name}
            onClick={onClick}
            onChange={onFieldChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={1} md={2}>
          <IconButton onClick={onDialogOpen}>
            <Icon>mode_edit</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  )
})

export default LocalVarField