// 0713 Notes - Potentially Code the Following
    // add state and an event listener 
        // combine actions in a single handle function ?
        // function could conditionally select artist (as className in div)* will update CSS 
        // state could hold:
            // event handling (was it clicked?)
            // artist id from the artistAlbums array
            // boolean to show a div or not



function ArtistName({ name }){
    return (
       <p>{name}</p>
    )
}

export default ArtistName