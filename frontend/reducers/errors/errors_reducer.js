// import sessionErrorsReducer from './session_errors_reducer';
import dogErrorsReducer from './dog_errors_reducer';
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
    // session: sessionErrorsReducer,
    dog: dogErrorsReducer
});

export default errorsReducer;
