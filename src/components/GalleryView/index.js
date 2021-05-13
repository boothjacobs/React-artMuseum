import { useParams, Route, Link } from "react-router-dom";
import ArtDescription from "../ArtDescription";
import ArtImageTile from '../ArtImageTile';
import './galleryview.css';

const GalleryView = ({galleries}) => {
    let { galleryId } = useParams();
    // console.log(galleryId)

    const currentGal = galleries.find(element => element.gallerynumber === galleryId);
    console.log(currentGal)

    return (
        <>
            <Route exact path={`/galleries/${currentGal.id}`} >
                <h2>{`${currentGal.name}: ${currentGal.theme}`}</h2>
                <p>{`${currentGal.labeltext}`}</p>
                <div id="art-container">
                    {currentGal.objects.map((obj) => {
                        return (
                            <Link to={`/galleries/${currentGal.id}/art/${obj.id}`}>
                                <ArtImageTile key={obj.id} gallery={currentGal} art={obj}/>
                            </Link>
                        )
                    })}
                </div>
            </Route>
            <Route exact path={`/galleries/${currentGal.id}/art/:artId`}>
                    <ArtDescription gallery={currentGal}/>
            </Route>
        </>

    );
};

export default GalleryView;
