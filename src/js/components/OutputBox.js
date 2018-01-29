import React from 'react'
import { Card } from 'reactstrap'

const OutputBox = ({ value }) => {
  return (
    <div className='output-box'>
      <h2>Script</h2>
      <Card body className='generated-script'>
        {value}
      </Card>
    </div>
  )
}

export default OutputBox