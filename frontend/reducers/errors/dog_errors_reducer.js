import {
    RECEIVE_DOGS,
    RECEIVE_ERRORS,
  } from '../../actions/dog_actions';

const dogErrorsReducer = (state = [], action) =>{
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ERRORS:
            newState = action.errors;
            return newState;

        case RECEIVE_DOGS:
            return [];            
        default:
            return state;
    }
};

export default dogErrorsReducer;