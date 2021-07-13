import ArtistName from './ArtistName'

function ArtistList( {artistInfo, displayAlbums} ){
    const artistNames = artistInfo.map( artist => {
        return <ArtistName key={artist.id} name={artist.artist} displayAlbums={displayAlbums}/>
    })

    console.log(artistNames)

    return (
        <>
        {artistNames}
        </>
    )
}

export default ArtistList