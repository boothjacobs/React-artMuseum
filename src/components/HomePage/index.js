import { useParams, Route, Link } from "react-router-dom";

const HomePage = ({galleries}) => {

const vessels0 = galleries[0].objects.filter((obj) => obj.worktypes.worktype === "sculpture")
console.log(vessels0)

    // console.log(galleries[0].objects)
    //galleries.object.worktypes.worktype
    return (
        <div>
            <h1>Browse Our Collections</h1>
            <div id="home-container">
                    <p>Browse by work type</p>
                <div id="vessels">

                </div>
            </div>
        </div>
    )
}

export default HomePage;
