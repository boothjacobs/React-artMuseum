import {Link, useParams} from 'react-router-dom';
import { useSort } from '../../context/SortContext';
import ArtImageTile from '../ArtImageTile';

//renders a gallery of works by type(classification)
const TypeView = ({works}) => {
    const {typeName} = useParams();
    const {galleries, architecture, coins, paintings, sculpture} = useSort();
    console.log(works);
    return (
        <>
            <h1>Works classified as {typeName}</h1>
            {/* <div className="art-container">
                {works.map(obj => {
                    return (
                        <div className="art-div" key="obj.id">
                            <ArtImageTile art={obj}/>
                        </div>
                    )
                })}
            </div> */}
        </>
    )
}

export default TypeView;
