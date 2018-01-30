import React from 'react'
import Card, { CardContent } from 'material-ui/Card'

const OutputBox = ({ value }) => {
  return (
    <div>
      <h2>Script</h2>
      <Card>
        <CardContent>
          <p className='generated-script'>
            {value}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default OutputBox