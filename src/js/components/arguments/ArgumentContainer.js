import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge'

const ArgumentContainer = ({ items, argumentWarning, onClick, onChange, onRemove, onSortEnd }) => {
  return (
    <Paper className="item-list">
      <Grid container alignItems="center"> 
        <Grid item xs={10}>
          <Typography type="headline">Arguments</Typography>
        </Grid>
        <Grid item xs={2}>
          <AddArgumentButton
            onClick={onClick}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <ArgumentSortable 
            items={items}
            onChange={onChange}
            onSortEnd={onSortEnd}
            onRemove={onRemove}
          /> 
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ArgumentContainer