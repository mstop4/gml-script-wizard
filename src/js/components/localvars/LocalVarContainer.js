import React from 'react'
import Grid from 'material-ui/Grid'
import LocalVarSortable from './LocalVarSortable'
import AddLocalVarButton from './AddLocalVarButton'
import Typography from 'material-ui/Typography'

const LocalVarContainer = ({ items, onClick, onChange, onRemove, onSortEnd }) => {

  return (
    <div className="item-list">
      <Grid container alignItems="center">
        <Grid item xs={10}>
          <Typography type="headline">Local Variables</Typography>
        </Grid>
        <Grid item xs={2}>
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
    </div>
  )
}

export default LocalVarContainer