import React, { Component } from 'react';
import './App.css';
import video from './video1.mp4'

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">

        <video src={video}></video>

      </div>
    );
  }
}

export default App;
