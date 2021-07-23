import React, { useState, useEffect } from 'react'
import { Route , Switch} from "react-router-dom";
import '../App.css';
import Button from './Button'
import ArtistPanel from './ArtistPanel'
import AlbumList from './AlbumList'
import Form from './Form'

  
function App() {
  
  const [artistInfo, setArtistInfo] = useState([])
  const [albums, setAlbums] = useState([])
  const [displayDisco, setDisplayDisco] = useState(true)
  
  function handleClicking(){
    setDisplayDisco(!displayDisco)
  }

  useEffect(() => {
    fetch('http://localhost:4000/artistAlbums')
      .then(resp => resp.json())
        .then(data => {
          setArtistInfo(data)
          setAlbums(data.map(info => info.albums).flat())
        })
  }, [])

  console.log(albums)

  function handleAlbumNames(albumNames){
    setAlbums(albumNames)
  }

  function updateAlbumList(newData){
    setArtistInfo([...artistInfo, newData])
  }
  
  return (
    <div className="App" >

        <header className="App-header">
          <h1>React - Album List</h1>
        </header>

        <div className='Navigation-Links'>
          <ArtistPanel artistInfo={artistInfo} displayAlbums={handleAlbumNames} />
          <Button onButtonClick={handleClicking} /> 
        </div>

        {/* let's update our component to render albums or the form based on the URL */}

        <div className="Content">
          {/* {displayDisco ? <AlbumList albums={albums}/> : <Form updateCurrentAlbums={updateAlbumList} />} */}
          <Switch>
            {/* <Route path={where to go}> */}
            <Route path={'/add-artist'}>
              {/* what to render */}
              <Form updateCurrentAlbums={updateAlbumList} />
            </Route>
            <Route path={'/albums'}>
              <AlbumList albums={albums}/>
            </Route>
          </Switch>
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