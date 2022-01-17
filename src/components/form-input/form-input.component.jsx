import React from 'react'; 


import './form-input.styles.scss'; 

//label prop selectively renders a label 
//if a user passes in a label, we'll generate one 
//if we don't we don't render 
const FormInput = ({ handleChange, label, ...otherProps }) => ( 
 <div className = "group"> 
    <input className = 'form-input' onChange = {handleChange} {...otherProps} />
    {
        label ? 
        (<label className =  
        {`${ otherProps.value.length ? 'shrink' : ''} 
        form-input-label`} 
        >

        {label}
        </label> 
        ) : null}
    </div>
); 

export default FormInput; 