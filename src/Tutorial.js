import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite'
import logo from './images/logo.png'
import './Tutorial.css';
import {PageHeader} from "react-bootstrap";

import NavBar from './NavBar';


class Tutorial extends Component {
    

    render() {

      return (
        <div>
        
        <NavBar/>

        <PageHeader className="PageHeader">Tutorial</PageHeader>


      </div>

      );
    }    
    
  }
  
  export default Tutorial;
  