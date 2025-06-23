import { combineReducers } from 'redux';
import CrudReducer from './Crudreducer';
import counterReducer from './Counterreducer';

const Indexreducer = combineReducers({
    count : counterReducer,
    crud: CrudReducer
});

export default Indexreducer;