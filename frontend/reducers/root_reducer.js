// import sessionReducer from "./session_reducer";
// import errorsReducer from "./errors_reducer";
import entitiesReducer from "./entities_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        // session: sessionReducer,
        // errors: errorsReducer,
        entities: entitiesReducer,
    }
);

export default rootReducer;