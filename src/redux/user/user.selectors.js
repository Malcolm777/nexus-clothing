import {createSelector} from 'reselect'; 

const selectUser = state => state.user; 


//first arg can be array 
//last arg gets the return the user Reducer 
export const selectCurrentUser = createSelector( 
    [selectUser],
    user => user.currentUser
);

