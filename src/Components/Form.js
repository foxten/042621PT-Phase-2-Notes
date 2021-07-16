// endpoint - http://localhost:4000/artistAlbums
import React,  { useState } from 'react'

function Form(){

    const [formInfo, setFormInfo] = useState({
        artist: '',
        title: '',
        img: ''
    })

    // [event.target.name]: event.target.value

    const handleAddArtist = () => {
        // fetch request 
            // post request object
            // body (JSON.stringify())

        // fetch('http://localhost:4000/artistAlbums', reqObj)
    }

    return (
        <form onSubmit={() => handleAddArtist()}>
           <input name='artist' placeholder="Artist Name" value={formInfo.artist} />
           <br></br>
           <input name='title' placeholder="Album Title" value={formInfo.title} />
           <br></br>
           <input name='img' placeholder="Album Artwork URL" value={formInfo.img} />
           <br></br>
           <button>Submit</button>
        </form>
    )
}

export default Form