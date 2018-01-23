import React from 'react'
import OutputBox from './OutputBox'
import ArgumentBox from './ArgumentBox'

const App = () => {

    let argBoxes = [];
    for (var i = 0; i < 16; i++) {
        argBoxes.push(<ArgumentBox key={i} id={i} />);
    }

    return (
      <div className='app row'>
        <OutputBox/>
        <div className='arguments'>
            {argBoxes}
        </div>
      </div>
    )
  } 
  
  export default App