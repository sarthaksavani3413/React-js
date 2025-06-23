import { createStore } from "redux";
import rootReducer from "./reducer/indexreducer";

const store = createStore(rootReducer);

export default store;
