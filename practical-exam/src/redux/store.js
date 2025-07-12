import { applyMiddleware, combineReducers, createStore } from "redux";
import blogReducer from "./reducer/blogreducer";
import { thunk } from "redux-thunk";

const rootreducer = combineReducers({
    users: blogReducer,
});

const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;