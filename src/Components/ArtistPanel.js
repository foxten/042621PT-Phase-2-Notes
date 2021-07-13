import ArtistList from './ArtistList'

function ArtistPanel( {artistInfo, displayAlbums} ){
    return (
        <div>
            <h1>Artists</h1>
            <ArtistList artistInfo={artistInfo} displayAlbums={displayAlbums} />
        </div>
    );
}

export default ArtistPanel