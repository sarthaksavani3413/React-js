import { applyMiddleware, createStore } from 'redux';
import Indexreducer from './reducer/Indexreducer';
import { thunk } from 'redux-thunk';

const store = createStore(Indexreducer,applyMiddleware(thunk));

export default store;
