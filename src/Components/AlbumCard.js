function AlbumCard ({img, title}){
    return(
        <div>
        <img src={img} alt={`${title} Artwork`} />
        <h2>{title}</h2>
        </div>
    )
}

export default AlbumCard