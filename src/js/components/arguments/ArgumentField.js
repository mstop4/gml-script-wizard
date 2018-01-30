import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'

import DragHandle from '../DragHandle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const ArgumentField = SortableElement( ({ index, id, name, type, description, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    let key = event.target.id
    onChange(newArg, id, key)
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
          <Typography type="title">Argument {id}</Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton color="secondary" size="small" onClick={onFieldRemove}>
            <FontAwesomeIcon icon="minus" size="sm"/>
          </IconButton>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            value={name}
            onChange={onFieldChange}
            fullWidth
          />
          <TextField
            id="type"
            label="Type"
            value={type}
            onChange={onFieldChange}
            fullWidth
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={onFieldChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Card>
  )
})

export default ArgumentField