import React from 'react'
import Grid from 'material-ui/Grid'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge';
import Typography from 'material-ui/Typography'

const ArgumentContainer = ({ items, argumentWarning, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className="item-list">
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
    </div>
  )
}

export default ArgumentContainer