import { connect } from 'react-redux';
import DogIndex from './dog_index';
import { requestDogs } from '../../actions/dog_actions';

const msp = (state) => {
    const dogs = Object.values(state.entities.dogs);
    return{
        dogs,
    }
}

const mdp = (dispatch) => {
    return {
        requestDogs: () => dispatch(requestDogs), 
    };
};

export default connect(msp, mdp)(DogIndex);