import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'

const LocalVarContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <Paper className="item-list">
      <Grid container alignItems="center">
        <Grid item xs={11} md={10}>
          <Typography type="headline">Local Variables</Typography>
        </Grid>
        <Grid item xs={1} md={2}>
            <AddLocalVarButton
              onClick={onClick}
            />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <LocalVarSortable 
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

export default LocalVarContainer