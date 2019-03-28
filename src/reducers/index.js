import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favorite from './favorite';
import fetchAPI from './fetchAPI';

const rootReducer = combineReducers({favorite, fetchAPI, routing: routerReducer });

export default rootReducer;
