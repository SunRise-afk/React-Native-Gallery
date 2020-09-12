import thunk from 'redux-thunk';
import {HomeReducer} from './HomeReducer';
const {createStore, combineReducers, applyMiddleware} = require('redux');

let reducesrs = combineReducers({
  HomePage: HomeReducer,
});
export let store = createStore(reducesrs, applyMiddleware(thunk));
