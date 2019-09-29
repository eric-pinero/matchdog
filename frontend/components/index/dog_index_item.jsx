import React from 'react';

class DogIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <>
            <h1>{this.props.dogs}</h1>
            </>
        )
    }
}

export default DogIndexItem