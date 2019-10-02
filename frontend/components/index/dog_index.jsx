import React, {setState, useEffect} from 'react';
import DogIndexItem from './dog_index_item';
import { Link } from 'react-router-dom';

const DogIndex = props => {
    useEffect(() => {props.requestDogs()}, [])

    const dogsArr = props.dogs[0] ? Object.keys(props.dogs[0]) : null;
    const dogList = dogsArr ?
        <ul>
            {dogsArr.map(dog => <DogIndexItem dog={dog}/>)}
        </ul>
        :
        null
    ;
    const dogIndex = dogList;
    return dogIndex;
}

export default DogIndex;