import {Link, useParams, useHistory} from 'react-router-dom';
// import { useSort } from '../../context/SortContext';

const ArtDescription = ({gallery}) => {
    const {galleryId, artId} = useParams();
    const history = useHistory();
    // const {galleries, architecture, coins, paintings, sculpture} = useSort();

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
