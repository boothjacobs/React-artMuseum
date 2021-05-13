import {Link} from 'react-router-dom';
import './imagetile.css';

const ArtImageTile = ({gallery, art}) => {
    // console.log("Art:", art.images)
    // return null;
    return (
        <div>
             {art.images.map((image) => {
                return (
                    <div className="image-wrap" key={image.idsid}>
                        <Link to={`/galleries/${gallery.id}/art/${art.id}`}>
                            <img alt={image.copyright} src={`${image.baseimageurl}`} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )

}

export default ArtImageTile
