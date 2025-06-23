import { createStore } from 'redux';
import Indexreducer from './reducer/Indexreducer';

const store = createStore(Indexreducer);

export default store;