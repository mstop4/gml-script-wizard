import React from 'react'
import { Well } from 'react-bootstrap'

const OutputBox = ({ value }) => {
  return (
    <div className='output-box'>
      <h2>Script</h2>
      <Well bsSize='sm' className='generated-script'>
        {value}
      </Well>
    </div>
  )
}

export default OutputBox