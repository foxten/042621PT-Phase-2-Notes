import AlbumCard from './AlbumCard'
function AlbumList({albums}){
    
    const formattedAlbums = albums.map(album => {
    return <AlbumCard key={album.id} img={album.img} title={album.title} />

    })
    
    return(
        <>
            {formattedAlbums}
        </>
    )

}

export default AlbumList