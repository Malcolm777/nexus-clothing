//reducer is a function that gets two properties 
//write a bunch of actions, name them whatever 
//reducers must be aware of the action 

//state will be what it is when the action gets fired 
const INITIAL_STATE = { 
    currentUser: null
}


//ES6 feature - default value with equal and value 
//if state is undefined, then it'll use inital state value 
//how do we return the state 
const userReducer = (state = INITIAL_STATE, action) => { 
    switch (action.type) { 
        case 'SET_CURRENT_USER':
            return { 
                ...state, 
                currentUser: action.payload
            };
        default: 
            return state; 
    }
};

export default userReducer; 