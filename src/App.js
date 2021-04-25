/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import './App.css';

import ToDo from './containers/toDo/toDo'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyD5kCQ45ZQow1XzwLYhKlkJmlToSrTLb6o",
  authDomain: "to-do-app-185e7.firebaseapp.com",
  projectId: "to-do-app-185e7",
  storageBucket: "to-do-app-185e7.appspot.com",
  messagingSenderId: "170170787788",
  appId: "1:170170787788:web:3008453f9cbc84eb959f69",
  measurementId: "G-GT4YZLPTWF"
});


const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);
  
    if(user){
      console.log(user)
    }else{
      console.log('we dont have user')
    }
  


  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>
        {user ? <ToDo user={user} /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
