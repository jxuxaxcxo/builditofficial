import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite'
import 'gsap/CSSPlugin';
import logo from './logo.png'



class Portada extends Component {
    

    render() {

      return (
        <img id="photo" src={logo}/>
      );
    }
    
  }
  
  export default Portada;
  