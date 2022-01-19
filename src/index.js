import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 

//access to store and reducers we will write
import { Provider } from 'react-redux'; 

import './index.css';
import App from './App'; 

import store from './redux/store'; 

//provider is component class from redux 
//once passed argument, it can give context to rest of application 
ReactDOM.render(
<Provider store={store}> 
    <BrowserRouter> 
        <App />
    </BrowserRouter>
</Provider>, 
document.getElementById('root')
);


