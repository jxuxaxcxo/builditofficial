import React, { Component } from 'react';
import logo from './images/logo.png';
import './NavBar.css';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';


import fire from './config/fire'

class NavBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn : false,
      user:{} 
    }
  }

  logout(){

    fire.auth().signOut();
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn:true, user });
        console.log("siii");
      } else {
        this.setState({ loggedIn:false, user: null });
        console.log("noooo");

      }
    });
  }



  render() {
    return (
      <div className="NavBar">

<Navbar fixedTop={true} inverse collapseOnSelect >
  <Navbar.Header>
  <Navbar.Brand>
      <a href="/home">Build It!
      <img src={logo}  style={{width:78, marginTop: -7}} />

      </a>
      
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Foro
      </NavItem>
      <NavDropdown eventKey={3} title="Mi Cuenta" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={4} href="/login">
        Registrate
      </NavItem>

      <NavItem onClick={this.logout} className={this.state.loggedIn?"" : "hidden"}>
      LogOut
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;


     

      </div>

    );
  }
}

export default NavBar;
