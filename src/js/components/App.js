import React from 'react'
import OutputBox from './OutputBox'
import ArgumentBox from './ArgumentBox'

const App = () => {

    let argBoxes = [];
    for (var i = 0; i < 16; i++) {
        argBoxes.push(<ArgumentBox key={i} id={i} />);
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
        </div>
      </div>
    )
  } 
  
  export default App