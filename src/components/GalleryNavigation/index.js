import {NavLink} from 'react-router-dom';
import { useSort } from '../../context/SortContext';
import './GalleryNavigation.css'

const GalleryNavigation = () => {
    const {galleries} = useSort();
    // console.log("galleries: ", galleries)
    return (
        <nav>
            <div id="nav-top">
                <h1>Galleries</h1>
                <label htmlFor="search"/>
                <input type="text" placeholder="Search" name="search"/>
                <NavLink to="/">Home</NavLink>
            </div>
            <div id="nav-gals">
                {galleries.map((gal) => {
                    return (
                        <div key={gal.id} className="gal-link">
                            <NavLink to={`/galleries/${gal.id}`}>{gal.name}</NavLink>
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}

export default GalleryNavigation;
