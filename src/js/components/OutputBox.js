import React from 'react'
import { connect } from 'react-redux'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import CopyScriptButton from './CopyScriptButton'
import PropTypes from 'prop-types'

import '../../styles/output-box.css'

const mapStateToProps = (state) => ({
  value: state.outputValue
})

const OutputBox = ({ value }) => {
  return (
    <div>
      <div className="output-root">
        <div className="output-title">
          <Typography variant="headline" gutterBottom>Script</Typography>
        </div>
        <div className="output-copy">
          <CopyScriptButton/>
        </div>
      </div>
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

OutputBox.propTypes = {
  value: PropTypes.string
}

export default connect(mapStateToProps, null)(OutputBox)