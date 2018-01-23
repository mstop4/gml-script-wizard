import React from 'react'
import OutputBox from './OutputBox'
import ArgumentField from './ArgumentField'
import ReturnField from './ReturnField'

const App = () => {

    let argBoxes = [];
    for (var i = 0; i < 16; i++) {
        argBoxes.push(<ArgumentField key={i} id={i} />);
    }

    return (
      <div className='app'>
        <div className='row'>
          <h1>GML Script Template Generator</h1>
        </div>
        <div className='row'>
          <OutputBox/>
          <div className='arguments'>
              {argBoxes}
          </div>
          <ReturnField/>
        </div>
      </div>
    )
  } 
  
  export default App