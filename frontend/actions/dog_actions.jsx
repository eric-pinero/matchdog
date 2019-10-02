import * as APIUtil from "../util/dog_api_util";

export const RECEIVE_DOGS = "RECEIVE_DOGS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveDogs = (dogs) => {
    return {
        type: RECEIVE_DOGS,
        dogs
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestDogs = () => {
    debugger
    return (dispatch) => {
        debugger
        return APIUtil.fetchDogs().then(
            (dogs) => dispatch(receiveDogs(dogs)),
            response => dispatch(receiveErrors(response))
        );
    };
};