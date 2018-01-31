import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel'

import DragHandle from '../DragHandle'

const ArgumentField = SortableElement( ({ index, id, name, type, description, onChange, onRemove }) => {

  const onClick = (event) => {
    event.stopPropagation()
  }

  const onFieldChange = (event) => {
    let newArg = event.target.value
    let key = event.target.id
    onChange(newArg, id, key)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <DragHandle/>
          </Grid>
          <Grid item xs={9}>
            <Typography type="title">
            <TextField
              id="name"
              placeholder={"Argument " + id}
              value={name}
              onClick={onClick}
              onChange={onFieldChange}
              fullWidth
            />
            </Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <TextField
              id="type"
              label="Type"
              value={type}
              onChange={onFieldChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton 
              color="primary"
              size="small"
              onClick={onFieldRemove}
            >
              <Icon>delete_forever</Icon>
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={onFieldChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})

export default ArgumentField