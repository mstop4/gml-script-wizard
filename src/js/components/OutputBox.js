import React from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const OutputBox = ({ value }) => {
  return (
    <div>
      <Typography type="headline" gutterBottom>Script</Typography>
      <Card>
        <CardContent>
          <p className="generated-script">
            {value}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default OutputBox