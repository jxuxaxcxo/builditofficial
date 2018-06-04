import React, { Component } from 'react';
import logo from './logo.png';
import './NavBar.css';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {Player} from 'video-react' 
import {video} from './video1.mp4';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">

<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Build It!
      <img src={logo}  style={{width:78, marginTop: -7}} />

      </a>
      
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={4} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;


<Player src={video}>
</Player>      

      </div>

    );
  }
}

export default NavBar;
