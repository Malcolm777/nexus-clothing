import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
//let's us modify components to access redux 

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg'


import './header.styles.scss'; 

//current user ternary operator - div - true / link false
const Header = ({currentUser}) => ( 
    <div className = 'header'>
        <Link className = 'logo-container' to="/">
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className ='option' to = '/shop'> 
                SHOP 
            </Link> 
            <Link className = 'option' to='/shop'> 
                CONTACT 
            </Link>
            { 
                currentUser ? 
                <div className = 'option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                : 
                <Link className = 'option' to = '/signin'>SIGN IN</Link>
            }
        </div> 
    </div>
); 

const mapStateToProps = state => ({ 
    currentUser: state.user.currentUser
});

//function that allows us to access state 
export default connect(mapStateToProps)(Header); 
