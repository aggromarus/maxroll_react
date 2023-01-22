import {combineReducers, createStore} from "redux";
import activityReducer from "./activityReducer";
import contentReducer from "./contentReducer";

let reducers = combineReducers({
    activity: activityReducer,
    content: contentReducer
});

let store = createStore(reducers);


export default store;