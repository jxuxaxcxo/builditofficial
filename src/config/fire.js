import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYYiuzoDrP8X_MSxLpaEU4SzOJ0jXvTX0",
    authDomain: "buildit-fc375.firebaseapp.com",
    databaseURL: "https://buildit-fc375.firebaseio.com",
    projectId: "buildit-fc375",
    storageBucket: "buildit-fc375.appspot.com",
    messagingSenderId: "391283082902"
  };

  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

