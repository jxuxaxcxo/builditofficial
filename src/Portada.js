import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite'
import 'gsap/CSSPlugin';
import logo from './logo.png'

import {Player} from 'video-react' ;
import {video1} from './video1.mp4';
import video from "video.js";



class Portada extends Component {
    

    render() {

      return (

          <video id = "video-1"  autoPlay="true" src="https://firebasestorage.googleapis.com/v0/b/buildit-fc375.appspot.com/o/video1.mp4?alt=media&token=0f1754ad-468e-4d0e-bb33-52d5547bd92f" type="video/mp4" preload = "auto">

          </video>
      );
    }
    
  }
  
  export default Portada;
  