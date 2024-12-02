import { createStore } from 'redux';
import loanReducer from './reducers';

export const store = createStore(
    loanReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux DevTools
);
