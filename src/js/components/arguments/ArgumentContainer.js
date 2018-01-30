import React from 'react'
import Grid from 'material-ui/Grid'
import ArgumentSortable from './ArgumentSortable'
import AddArgumentButton from './AddArgumentButton'
import WarningBadge from '../WarningBadge';

const ArgumentContainer = ({ items, argumentWarning, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div>
      <Grid container> 
        <Grid item xs={9}>
          <WarningBadge argumentWarning={argumentWarning}/>
        </Grid>
        <Grid itemxs={3}>
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