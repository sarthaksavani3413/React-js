import { combineReducers } from "redux";

const rootreducer = combineReducers ({
    users : userreducer,
});

export default rootreducer;