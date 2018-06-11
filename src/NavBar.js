import React, { Component } from 'react';
import logo from './images/logo3.png';
import './NavBar.css';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';



class NavBar extends Component {

  constructor(props){
    super(props);

  }



  componentDidMount(){
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
      <NavDropdown eventKey={3} title="Documentacion" id="basic-nav-dropdown">
        <MenuItem href="/tutorial"eventKey={3.2}>Tutorial</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Acerca De:</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
    <NavItem class={this.props.loggedIn?"hidden":""} eventKey={4} href="/login">
        Ingresa
      </NavItem>
 
      <NavItem class = {this.props.loggedIn?"":"hidden"} style={{marginTop:-7}}>
      Mi perfil
      <img src={this.props.userPhoto==null?null:this.props.userPhoto} style={{width:45, marginLeft:6,marginTop:-2}}></img>
      </NavItem>

      <NavItem  class = {this.props.loggedIn?"":"hidden"} onClick={this.props.logOut} eventKey={4} href="/home">
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
