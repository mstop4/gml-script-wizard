import React from 'react'
import Grid from 'material-ui/Grid'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge';

const ArgumentContainer = ({ items, argumentWarning, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div>
      <Grid container alignItems="center"> 
        <Grid item xs={5}>
          <h2 className=".list-heading">Arguments</h2>
        </Grid>
        <Grid item xs={5}>
          {/*argumentWarning &&
              <WarningBadge/>*/}
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