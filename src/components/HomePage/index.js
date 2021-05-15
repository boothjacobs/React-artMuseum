import { Link } from "react-router-dom";
import TypeView from '../TypeView';

const HomePage = ({galleries}) => {

    const architecture = [];
    const boxes = [];
    const coins = [];
    const mirrors = [];
    const paintings = [];
    const sculpture = [];
    const vessels = [];

    for (let i = 0; i < galleries.length; i++) {
        const gal = galleries[i];
        // console.log(gal)
        for (let j = 0; j < gal.objects.length; j++) {
            const obj = gal.objects[j];

            if (obj.classification === "Architectural Elements") architecture.push(obj);
            if (obj.classification === "Boxes") boxes.push(obj);
            if (obj.classification === "Coins") coins.push(obj);
            if (obj.classification === "Mirrors") mirrors.push(obj);
            if (obj.classification === "Paintings") paintings.push(obj);
            if (obj.classification === "Sculpture") sculpture.push(obj);
            if (obj.classification === "Vessels") vessels.push(obj);
        }
    }

    return (
        <div>
            <h1>Browse Our Collections</h1>
                <p>Browse by work type</p>
            <div id="home-container">
                <div className="art-browse" id="arch">
                    <h3>Architectural Elements</h3>
                    <Link to={"/types/architecture"}>
                        <img alt={architecture[0].title} src={`${architecture[0].images[0].baseimageurl}`} />
                        <TypeView galleries={galleries} works={architecture}/>
                    </Link>
                </div>
                <div className="art-browse" id="coin">
                    <h3>Coins</h3>
                    <Link  to={"/types/coins"}>
                        <img alt={coins[0].title} src={`${coins[0].images[0].baseimageurl}`} />
                        <TypeView galleries={galleries} works={coins}/>
                    </Link>
                </div>
                <div className="art-browse" id="painting">
                    <h3>Paintings</h3>
                    <Link to={"/types/paintings"}>
                        <img alt={paintings[0].title} src={`${paintings[0].images[0].baseimageurl}`} />
                        <TypeView galleries={galleries} works={paintings}/>
                    </Link>
                </div>
                <div className="art-browse" id="sculpt">
                    <h3>Sculpture</h3>
                    <Link to={"/types/sculpture"}>
                        <img alt={sculpture[0].title} src={`${sculpture[0].images[0].baseimageurl}`} />
                        <TypeView galleries={galleries} works={sculpture}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
