// src/store.js
import { combineReducers, createStore } from 'redux';
import reducer from './Reducers/Reducers';  // Adjust the import path

const rootReducer = combineReducers({reducer})

const store = createStore(rootReducer);

export default store;
