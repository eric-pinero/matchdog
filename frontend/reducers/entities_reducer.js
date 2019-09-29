import dogsReducer from "./dogs_reducer";
import { combineReducers} from "redux";

const entitiesReducer = combineReducers({
    dogs: dogsReducer, 
});

export default entitiesReducer;