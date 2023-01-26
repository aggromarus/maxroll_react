import {combineReducers, createStore} from "redux";
import activityReducer from "./activityReducer";
import contentReducer from "./contentReducer";
import {createContext} from "react";

let reducers = combineReducers({
    activity: activityReducer,
    content: contentReducer
});

let store = createStore(reducers);

export const StoreContext = createContext(store)
export default store;