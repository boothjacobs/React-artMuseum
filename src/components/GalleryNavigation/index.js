import {NavLink} from 'react-router-dom';
import './GalleryNavigation.css'

const GalleryNavigation = ({galleries}) => {
    // console.log(galleries)
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {galleries.map((gal) => {
                return (
                    <div key={gal.id}>
                        <NavLink to={`/galleries/${gal.id}`}>{gal.name}</NavLink>
                    </div>
                )
            })}
            <h1>Galleries</h1>
        </nav>
    )
}

export default GalleryNavigation;
