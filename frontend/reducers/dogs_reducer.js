import {
    RECEIVE_DOGS
} from '../actions/dog_actions';
import  { merge } from 'lodash';

const DogsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_DOGS:
            return action.dogs
        ;
        default:
        return state;
    };
};

export default DogsReducer;