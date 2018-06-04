import React, { Component } from 'react';
import './App.css';

import fire from './config/fire'
import Login from './login'

import NavBar from './NavBar';
import Portada from './Portada';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user:{} 
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div>
    
    <Login></Login>
    {this.state.user?(<NavBar/>) : (<Portada/>)}
      
      </div>
    );
  }
}

export default App;
