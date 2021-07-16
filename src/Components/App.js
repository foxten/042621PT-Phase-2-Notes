import React, { useState, useEffect } from 'react'
import '../App.css';
import Button from './Button'
import ArtistPanel from './ArtistPanel'
import AlbumList from './AlbumList'
import Form from './Form'
// import artistAlbums  from '../data/artistAlbums.js'


function App() {
  // console.log(artistAlbums)
  
  const [albums, setAlbums] = useState([])
  const [artistInfo, setArtistInfo] = useState([])
  const [displayDisco, setDisplayDisco] = useState(true)
  
  function handleClicking(){
    setDisplayDisco(!displayDisco)
  }

  useEffect(() => {
    fetch('http://localhost:4000/artistAlbums')
      .then(resp => resp.json())
        .then(data => setArtistInfo(data))
  }, [])

  function handleAlbumNames(albumNames){
    setAlbums(albumNames)
  }
  
  return (
    <div className="App" >

        <header className="App-header">
          <h1>React - Album List</h1>
        </header>

        <div className='Navigation-Links'>
          <ArtistPanel artistInfo={artistInfo} displayAlbums={handleAlbumNames} />
          <Button onButtonClick={handleClicking} /> 
          {/* check to see what happens when we move the button to the ArtistPanel instead */}
        </div>

        <div className="Content">
          {displayDisco === true ? <AlbumList albums={albums}/> : <Form />}
        </div>

    </div>
  );
}



export default App;



// Previous Functions & Notes (see previous commit/history for code)
  // 0629 Task: We're going to add an event listener to update the state of our App component. 
  // We'll change the background color to #5B6B63, but we should have the ability to switch back.
    /* The original handleClick function:
        function handleClicking(check, update){
            *Full Conditional Statement*
          if (check === '#282c34'){
            update('#5B6B63')
          } else {
            update('#282c34')
          }

            *As a ternary*
              condition ? true : false
              color === '#282c34' ? setColor('#5B6B63') : setColor('#282c34')
        }
    */