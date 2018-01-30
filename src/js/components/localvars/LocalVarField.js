import React from 'react'
import { SortableElement } from 'react-sortable-hoc'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import DragHandle from '../DragHandle'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const LocalVarField = SortableElement( ({ index, id, value, onChange, onRemove }) => {

  const onFieldChange = (event) => {
    let newArg = event.target.value
    onChange(newArg, id)
  }

  const onFieldRemove = (event) => {
    onRemove(id)
  }

  return (
    <div className="argument-item">
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <DragHandle/>
        </Grid>
        <Grid item xs={8}>
            var
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
            value={value}
            onChange={onFieldChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </div>
  )
})

export default LocalVarField