import {createContext, useContext} from 'react';
import harvardArt from '../data/harvardArt';

const SortingContext = createContext();

const galleries = harvardArt.records;
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
};

export const SortingProvider = (props) => {

    return (
        <SortingContext.Provider value={{harvardArt}}>
            {props.children}
        </SortingContext.Provider>
    );
};

export const useSort = () => {
    return useContext(SortingContext);
}
