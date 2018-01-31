import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { Scrollbars } from 'react-custom-scrollbars'

import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'

const ArgumentContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {
  return (
    <Paper className="item-list">
      <Grid container alignItems="center"> 
        <Grid item xs={11} md={10}>
          <Typography type="headline">Arguments</Typography>
        </Grid>
        <Grid item xs={1} md={2}>
          <AddArgumentButton
            onClick={onClick}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Scrollbars autoHeight autoHeightMin={`calc(80vh - 5em)`} autoHeightMax={`calc(80vh - 5em)`}>
            <ArgumentSortable 
              items={items}
              onChange={onChange}
              onSortEnd={onSortEnd}
              onRemove={onRemove}
            /> 
          </Scrollbars>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ArgumentContainer