import React from 'react';
import DogIndexItem from './dog_index_item';
import { Link } from 'react-router-dom';

class DogIndex extends React.Component{
    componentDidMount(){
        debugger
        this.props.requestDogs();
    }

    render(){
        const dogs = this.props.dogs
        debugger
        return(
            <h1>{dogs}</h1>
        )
    }
}

export default DogIndex;