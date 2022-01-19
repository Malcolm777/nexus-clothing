//root reducer represents the overall based on those pulled 

import {combineReducers} from 'redux'; 

import userReducer from './user/user.reducer'; 
import cartReducer from './cart/cart.reducer';

export default combineReducers({ 
    user: userReducer,
    cart: cartReducer
}); 

//implementing right actions so we can store 

//