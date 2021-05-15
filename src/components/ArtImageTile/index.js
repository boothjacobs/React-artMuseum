
const ArtImageTile = ({gallery, art}) => {
   
    return (
        <div>
             {art.images.map((image) => {
                return (
                    <div className="image-wrap" key={image.idsid}>
                            <img alt={image.copyright} src={`${image.baseimageurl}`} />
                    </div>
                )
            })}
        </div>
    )

}

export default ArtImageTile
