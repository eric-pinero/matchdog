import React, {setState, useEffect} from 'react';
import DogIndexItem from './dog_index_item';
import { Link } from 'react-router-dom';

const DogIndex = props => {
    useEffect(() => {props.requestDogs()}, [])

    const dogs = props.dogs[0] ? Object.keys(props.dogs[0]) : null
    const dogIndex = <h1>{dogs}</h1>
    return dogIndex;
}

export default DogIndex;