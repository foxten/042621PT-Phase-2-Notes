import AlbumCard from './AlbumCard'
import {nanoid} from 'nanoid'

function AlbumList({albums}){
    
    const formattedAlbums = albums.map(album => {
    return <AlbumCard key={nanoid()} img={album.img} title={album.title} />

    })
    
    return(
        <>
            {formattedAlbums}
        </>
    )

}

export default AlbumList