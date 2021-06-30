// 0629 Task: We're going to add an event listener to update the state of our App component. 
// We'll change the background color to #5B6B63, but we should have the ability to switch back.


// import useState hook from React library
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Testing from './Testing';


function App() {
  // Set state for the component using useState hook
  const [color, setColor] = useState('#282c34')

  /* The full handleClick function:
      function handleClick(){
        *Full Conditional Statement*
        if (color === '#282c34'){
          setColor('#5B6B63')
        } else {
          setColor('#282c34')
        }

        *As a ternary*
          condition ? true : false
          color === '#282c34' ? setColor('#5B6B63') : setColor('#282c34')
      }
  */


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: color}}>
        <img src={logo} className="App-logo" alt="logo" />
        {/* the below code has our handleClick function reduced to an anonymous function that we're just throwing into the onClick event handler*/}
        <button onClick={() => setColor(color === '#282c34' ? '#5B6B63' : '#282c34')}>Change Background Color!</button>
        <br />
      <Testing />
      </header>
    </div>
  );
}

export default App;

