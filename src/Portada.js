import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite'
import logo from './images/logo.png'
import './Portada.css';


import {Player} from 'video-react' ;
import {video1} from './video1.mp4';
import video from "video.js";
import {Carousel} from "react-bootstrap";

import carousel1 from './images/image1.jpg';
import carousel2 from './images/image2.jpg'
import carousel3 from './images/image3.png'
import NavBar from './NavBar';







class Portada extends Component {
    

    render() {

      return (


        <div>





<Carousel >

<Carousel.Item >
  <img  alt="1350x400" src={carousel1} />
  <Carousel.Caption>
    <h3>DISEÑA</h3>
    <p>Diseña sin limites a tu imaginacion</p>
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img width={1350} height={500} alt="900x500" src={carousel2} />
  <Carousel.Caption>
    <h3>CONSTRUYE</h3>
    <p>Construye edificios, casas y contrucciones en la palma de tu mano </p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img width={1350} height={500} alt="900x500" src={carousel3} />
  <Carousel.Caption>
    <h3>CREA</h3>
    <p>Tu imaginacion es el unico limite</p>
  </Carousel.Caption>
</Carousel.Item>



</Carousel>


        </div>

      );
    }    
    
  }
  
  export default Portada;
  