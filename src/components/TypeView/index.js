import {Link, useParams} from 'react-router-dom';
import { useSort } from '../../context/SortContext';
import ArtImageTile from '../ArtImageTile';

//renders a gallery of works by type(classification)
const TypeView = () => {
    const {typeName} = useParams();
    const {galleries, architecture, coins, paintings, sculpture} = useSort();
    let works;

    if (typeName === "architecture") {
        works = architecture;
    } else if (typeName === "coins") {
        works = coins;
    } else if (typeName === "paintings") {
        works = paintings;
    } else if (typeName === "sculpture") {
        works = sculpture;
    }

    return (
        <>
            <h1>Works classified as {typeName}</h1>
            <div className="art-container">
                {works.map((obj, i) => {
                    return (
                        <div className="art-div" key={i}>
                            <ArtImageTile art={obj}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TypeView;
