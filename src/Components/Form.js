// endpoint - http://localhost:4000/artistAlbums
// test image - https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png
// update form (0721)
    // add albums to an existing artist's discography
    

import React,  { useState } from 'react'
import {nanoid} from 'nanoid'

function Form({updateCurrentAlbums}){

    const [formInfo, setFormInfo] = useState({
        artist: '',
        albums:[
            {id: nanoid(),
            title: '',
            img: ''}
        ]
    })

    const artistObject = (event) =>{
        const key = event.target.name
        const value = event.target.value
    //    if name is 'artist', we can just add to the top level using [event.target.name]: event.target.value
        if(key === 'artist'){
            setFormInfo({...formInfo, [key]:value})
        }else{
        //    if the name is albums, then we'll need to update the key value pairs within the array's object
            setFormInfo({
                ...formInfo,
                [key]: [
                    {   ...formInfo[key][0],
                        [event.target.id]: value
                    }
                ]
            })
        }
        console.log(formInfo)
    }
   
//  Uncontrolled form 

    const handleAddArtist = (e) => {
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                artist: formInfo.artist,
                albums: formInfo.albums
            })
        }
        
        fetch('http://localhost:4000/artistAlbums', reqObj)
            .then(resp => resp.json())
                .then(data => updateCurrentAlbums(data))

        e.target.reset()
    }

    return (
        <form onSubmit={(e) => handleAddArtist(e)}>
           <input name='artist' onChange={(e) => artistObject(e)} placeholder="Artist Name"  />
           <br></br>
           <input name='albums' id='title' onChange={(e) => artistObject(e)} placeholder="Album Title"  />
           <br></br>
           <input name='albums' id='img' onChange={(e) => artistObject(e)} placeholder="Album Artwork URL" />
           <br></br>
           <button>Submit</button>
        </form>
    )


    /* As a controlled form
    (See https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/ for info re: controlled components):
    
    
    const handleAddArtist = (e) => {
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                artist: formInfo.artist,
                albums: formInfo.albums
            })
        }
        
        fetch('http://localhost:4000/artistAlbums', reqObj)
            .then(resp => resp.json())
                .then(data => updateCurrentAlbums(data))

        setFormInfo({
            artist: '',
            albums:[
                {id: nanoid(),
                title: '',
                img: ''}
            ]
        })
    }

    return (
        <form onSubmit={(e) => handleAddArtist(e)}>
           <input name='artist' onChange={(e) => artistObject(e)} placeholder="Artist Name"  value={formInfo.artist} />
           <br></br>
           <input name='albums' id='title' onChange={(e) => artistObject(e)} placeholder="Album Title" value={formInfo.albums[0].title} />
           <br></br>
           <input name='albums' id='img' onChange={(e) => artistObject(e)} placeholder="Album Artwork URL" value={formInfo.albums[0].img}/>
           <br></br>
           <button>Submit</button>
        </form>
    )
    */
}

export default Form


