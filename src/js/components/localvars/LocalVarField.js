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
    <div>
      <Grid container>
        <Grid item xs={4}>
          <DragHandle/>
        </Grid>
        <Grid item xs={4}>
            var
        </Grid>
        <Grid item xs={4}>
          <IconButton color='primary' onClick={onFieldRemove}>
            <FontAwesomeIcon icon='minus' size='sm'/>
          </IconButton>
        </Grid>
      </Grid>

      <Grid container>
        <Grid xs={12}>
          <TextField
            value={value}
            onChange={onFieldChange}
          />
        </Grid>
      </Grid>
    </div>
  )
})

export default LocalVarField