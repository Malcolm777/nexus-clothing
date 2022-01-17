import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = 
{
  apiKey: "AIzaSyCYta44DXus7XnuIjS7clHYzN8u3jGAjv8",
  authDomain: "nexus-db-46bc0.firebaseapp.com",
  projectId: "nexus-db-46bc0",
  storageBucket: "nexus-db-46bc0.appspot.com",
  messagingSenderId: "276713531419",
  appId: "1:276713531419:web:759e33bb9deb891f5ef0be",
  measurementId: "G-TLKQRQE1GL"
};

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({ prompt: 'select_account '}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//sign in with pop up to pass provider through 

export default firebase; 