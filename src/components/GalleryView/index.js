import { useParams } from "react-router-dom";
import ArtImageTile from '../ArtImageTile';

const GalleryView = ({galleries}) => {
    let { galleryId } = useParams();
    // console.log(galleryId)

    const currentGal = galleries.find(element => element.gallerynumber === galleryId);
    // console.log(currentGal.objects)

    return (
        <>
            <h1>Hello from GalleryView</h1>
            <h2>{`${currentGal.name}`}</h2>
            <div>
                {currentGal.objects.map((obj) => {
                    return (
                        <ArtImageTile key={obj.id} gallery={currentGal} art={obj}/>
                    )
                })}
            </div>
        </>
    );
};

export default GalleryView;
