import '../App.css';
import Button from './Button'
import ArtistPanel from './ArtistPanel'
import AlbumList from './AlbumList'
import Form from './Form'
  // how would we go about displaying our form only when the button is clicked? it's not automatically visible in the Content div
import artistAlbums  from '../data/artistAlbums.js'
// artistAlbums was not a named export, and did not need the curly brackets

function App() {
  console.log(artistAlbums)
  
  function handleClicking(check, update){
    update(check === '#87899E' ? '#6CA696' : '#87899E')
  }
  
  return (
    <div className="App" >

        <header className="App-header">
          <h1>React - Album List</h1>
        </header>

        <div className="Content">
          <AlbumList />
        </div>

        <div className='Navigation-Links'>
          <ArtistPanel />
          <Button onButtonClick={handleClicking} /> 
          {/* check to see what happens when we move the button to the ArtistPanel instead */}
        </div>

    </div>
  );
}

// <input type='text'></input>
// <input type='text' firstName={'Jack'} value={firstName}>

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