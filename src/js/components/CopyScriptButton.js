import React from 'react'
import IconButton from 'material-ui/IconButton'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const CopyScriptButton = () => {

  const copyScript = () => {
    let scriptText = document.getElementById('generated-script').innerHTML
    let tempBox = document.createElement('textarea')
    document.body.appendChild(tempBox)
    tempBox.setAttribute("id", "tempBox")
    document.getElementById("tempBox").value = scriptText
    tempBox.select()
    document.execCommand('Copy')
    document.body.removeChild(tempBox)
  }

  return (
    <div className='copy-output-button'>
      <IconButton 
        color="secondary"
        size="small"
        onClick={copyScript}
      >
      <FontAwesomeIcon icon="copy" />
      </IconButton>
    </div>
  )
}

export default CopyScriptButton