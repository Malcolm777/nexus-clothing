//middleware is functions that catch action 
//console log then moves it alnog 
import { createStore, applyMiddleware  } from 'redux'; 
import logger from 'redux-logger'; 

import rootReducer from './root-reducer';

const middlewares = [logger]; 

//spreads all methods in the array (logger) into the function call 
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store; 