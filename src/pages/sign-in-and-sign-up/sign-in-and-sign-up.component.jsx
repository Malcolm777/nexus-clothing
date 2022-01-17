import React from 'react'; 
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.styles.scss'; 

//functional component to keep that on the sign in / sign up respectively 
const SignInAndSignUpPage = () => ( 
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
); 

export default SignInAndSignUpPage; 