import { combineReducers } from "redux";
import crudreducer from "./crudreducer";

const rootReducer = combineReducers({
    crud: crudreducer,
});

export default rootReducer;