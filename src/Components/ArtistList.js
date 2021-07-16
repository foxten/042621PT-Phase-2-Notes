import ArtistName from './ArtistName'

function ArtistList( {artistInfo, displayAlbums} ){
    const artistNames = artistInfo.map( artist => {
        return <ArtistName key={artist.id} 
        name={artist.artist} 
        artistAlbums={artist.albums} 
        displayAlbums={displayAlbums}/>
    })

    console.log(artistInfo)

    return (
        <>
            {artistNames}
        </>
    )
}

export default ArtistList
