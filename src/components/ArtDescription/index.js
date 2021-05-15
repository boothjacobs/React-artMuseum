import {Link, useParams} from 'react-router-dom';

const ArtDescription = ({gallery}) => {
    const {galleryId, artId} = useParams();

    let thisArt = gallery.objects.find(obj => obj.id === +artId)
    // console.log(thisArt)
    return (
        <>
            <h2>
                <Link to={`/galleries/${galleryId}`}>Back to the {gallery.name} Gallery</Link>
            </h2>
            {thisArt.images.map((photo) => {
                return (
                    <div className="img-div" key={photo.idsid}>
                        <img alt={`${photo.description}`} src={`${photo.baseimageurl}`}/>
                        <p>{`${thisArt.title}, ${thisArt.dated}`}</p>
                        <p>{`${thisArt.period}`}</p>
                        <p>Provenance: {thisArt.provenance}</p>
                        <p>{thisArt.medium}</p>
                        {thisArt.commentary ? (<p>{thisArt.commentary}</p>) : null}
                    </div>
                )
            })}
        </>
    )
}

export default ArtDescription;
