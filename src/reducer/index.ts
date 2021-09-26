import { combineReducers, createStore } from 'redux';
import { dateReducer } from './dateReducer';

const rootReducer = combineReducers({
  date: dateReducer,
});

const reduxDevTools =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, reduxDevTools);

export default store;
