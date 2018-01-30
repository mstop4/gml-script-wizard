import React from 'react'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import CopyScriptButton from './CopyScriptButton'

const OutputBox = ({ value }) => {
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={11}>
          <Typography type="headline" gutterBottom>Script</Typography>
        </Grid>
        <Grid item xs={1}>
          <CopyScriptButton/>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <p id="generated-script">
            {value}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default OutputBox