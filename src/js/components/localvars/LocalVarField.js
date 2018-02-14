import React from 'react'
import { SortableElement } from 'react-sortable-hoc'

import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel'

import DragHandle from '../DragHandle'

const LocalVarField = SortableElement( ({ index, id, name, description, onChange, onRemove }) => {

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
          <Grid item xs={1} md={2}>
            <DragHandle/>
          </Grid>
          <Grid item xs={11} md={9}>
            <TextField
              id="name"
              placeholder={"unused"}
              value={name}
              onClick={onClick}
              onChange={onFieldChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container alignItems="center">
          <Grid item xs={11} md={10}>
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={onFieldChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={1} md={2}>
            <IconButton 
              color="primary"
              size="small"
              onClick={onFieldRemove}
            >
              <Icon>delete_forever</Icon>
            </IconButton>
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
})

export default LocalVarField