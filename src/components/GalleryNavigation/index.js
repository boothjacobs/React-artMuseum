import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    // console.log(galleries)
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <h1>Galleries</h1>
            {galleries.map((gal) => {
                return (
                    <div key={gal.id} className="gal-link">
                        <NavLink to={`/galleries/${gal.id}`}>{gal.name}</NavLink>
                    </div>
                )
            })}
        </nav>
    )
}

export default GalleryNavigation;
