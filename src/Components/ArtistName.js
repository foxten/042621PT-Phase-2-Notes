import { useHistory } from "react-router-dom";

function ArtistName({ displayAlbums, name, artistAlbums }){
    const history = useHistory()

    return (
       <p onClick={() => displayAlbums(artistAlbums)}>{name}</p>
    )
}

export default ArtistName