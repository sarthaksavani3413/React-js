import { combineReducers } from 'redux';
import apireducer from './apireducer';

const Indexreducer = combineReducers({
    users : apireducer
});

export default Indexreducer;