import { createStore, applyMiddleware, combineReducers } from "redux";
import crudReducer from "./reducer/crudreducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    users: crudReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
