import React from 'react'; 

import './custom-button.styles.scss'; 

//if we have a type submit, then the button will trigger 
//conditionally render (string interpolation)
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => ( 
    <button className = {`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    custom-button`} 
    {...otherProps}> 
        {children}
    </button> 
); 

export default CustomButton; 