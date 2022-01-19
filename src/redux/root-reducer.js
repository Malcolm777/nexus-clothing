//root reducer represents the overall based on those pulled 

import {combineReducers} from 'redux'; 

import userReducer from './user/user.reducer'; 

export default combineReducers ({ 
    user: userReducer
}); 

//implementing right actions so we can store 

//