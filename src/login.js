import React, { Component,} from 'react';
import NavBar from './NavBar';

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./login.css"

import styled from "styled-components";


firebase.initializeApp({
  apiKey: "AIzaSyAYYiuzoDrP8X_MSxLpaEU4SzOJ0jXvTX0",
  authDomain: "buildit-fc375.firebaseapp.com",
  databaseURL: "https://buildit-fc375.firebaseio.com",
  projectId: "buildit-fc375",
  storageBucket: "buildit-fc375.appspot.com",
  messagingSenderId: "391283082902"
})

const LoginContainer= styled.div`
margin-top: 100px;`;

class Login extends Component {

  constructor(props){
    super(props);

  }
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    });

  }


   getUserData=() => {
    var nombre = "siiii"
    return nombre;
  }

  signOut(){

    firebase.auth().signOut()

  }



  render() {
    return (
    
      <div>

      < LoginContainer >

        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth 
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </ LoginContainer>

       <NavBar loggedIn={this.state.isSignedIn} 
       logOut={this.signOut} 
       userPhoto={this.state.isSignedIn?firebase.auth().currentUser.photoURL:null} />


      </div>
    )
  }
}

export default Login