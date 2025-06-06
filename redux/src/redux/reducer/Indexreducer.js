import { combineReducers } from 'redux';
import counterReducer from './Counterreducer';

const rootReducer = combineReducers({
    count: counterReducer
});

export default rootReducer;