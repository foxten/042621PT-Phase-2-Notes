import React, { useState, useEffect } from 'react'
import '../App.css';
import Button from './src/components/Button'
import ArtistPanel from './src/components/ArtistPanel'
import AlbumList from './src/components/AlbumList'
import Form from './src/components/Form'
// import artistAlbums  from '../data/artistAlbums.js'
// 0708 The fix: artistAlbums was not a named export, and did not need the curly brackets

function App() {
  // console.log(artistAlbums)
  console.log('step 1 - component mounts')
  // Updating App to hold list of albums to display
  // 1. Set album state in App so we have an empty array to store albums from artistAlbums
  const [albums, setAlbums] = useState([])
  const [artistInfo, setArtistInfo] = useState([])
  const [displayDisco, setDisplayDisco] = useState(true)
  
  function handleClicking(e, check, update){
    update(check === '#87899E' ? '#6CA696' : '#87899E')
    setDisplayDisco(!displayDisco)
  }

  useEffect(() => {
    console.log('step 2 - we fetch data, but only the first time the component mounts')
        fetch('http://localhost:4000/artistAlbums')
          .then(resp => resp.json())
            .then(data => setArtistInfo(data))
  }, [])

  function handleAlbumNames(){
    // will setAlbums in this function so new array of albums is passed to AlbumList
    // should take some information from the ArtistName when we click on one of 
    // those elements
    setAlbums()
  }
  
  console.log(albums)

  return (
    <div className="App" >

        <header className="App-header">
          <h1>React - Album List</h1>
        </header>

        <div className="Content">
          {/* 2. Pass down albums as a prop to AlbumList component */}
          {displayDisco === true ? <AlbumList albums={albums} /> : <Form />}
        </div>

        <div className='Navigation-Links'>
          <ArtistPanel artistInfo={artistInfo} displayAlbums={handleAlbumNames} />
          <Button onButtonClick={handleClicking} /> 
          {/* check to see what happens when we move the button to the ArtistPanel instead */}
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