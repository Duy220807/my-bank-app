// src/redux/store.js
import { createStore } from 'redux';
import loanReducer from './reducers';

export const store = createStore(loanReducer);
