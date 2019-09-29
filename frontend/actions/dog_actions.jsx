import * as APIUtil from "../util/dog_api_util";

export const RECEIVE_DOGS = "RECEIVE_DOGS";

const receiveDogs = (dogs) => {
    return {
        type: RECEIVE_DOGS,
        dogs
    }
}

export const requestDogs = () => {
    return (dispatch) =>{
        return APIUtil.fetchDogs().then(
            (dogs) => dispatch(receiveDogs(dogs)),
            response => dispatch(receiveErrors(response))
        );
    };
};