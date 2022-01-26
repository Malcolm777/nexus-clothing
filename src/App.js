import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 
import { connect } from 'react-redux'; 

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'; 

import Header from './components/header/header.component'; 
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors'; 

class App extends React.Component {
  

  //must close to not leave memory leaks 
  unsubscribeFromAuth = null; 


  //parameter is the state 
  //we dont want memory leaks - need to unsub to auth 
  //setState is open as long as container is mounted on DOM 
  //new data or data stored already is the snapShot object 
  componentDidMount() { 
    const {setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { 
      if(userAuth) { 
        const userRef = await createUserProfileDocument(userAuth); 

        userRef.onSnapshot(snapShot => { 
          setCurrentUser ({ 
              id: snapShot.id, 
              ...snapShot.data()
            
          });
        }); 
      }
      setCurrentUser(userAuth); 
    });
  }

  //Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth 
  // library or referenceObject, 
  //we get back a function that lets us unsubscribe from the listener we just instantiated. 
  componentWillUnmount() { 
    this.unsubscribeFromAuth(); 
  }
  
  //header should be aware of signin and signout 
  render() { 
  return (
    <div> 
      <Header /> 
      <Switch> 
        <Route exact path='/' component={HomePage}/> 
        <Route path='/shop' component={ShopPage}/> 
        <Route exact path='/checkout' component={CheckoutPage}/> 
        <Route exact path='/signin' render = {() => this.props.currentUser ? 
        (<Redirect to = '/' />) 
        : 
        (<SignInAndSignUpPage/>)
        }/>
      </Switch> 
    </div>
  );
}}

const mapStateToProps = createStructuredSelector => ({ 
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({ 
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

//null - no need for state 
export default connect(mapStateToProps, mapDispatchToProps)(App); 
