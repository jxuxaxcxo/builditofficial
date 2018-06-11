import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite'
import './About.css';
import NavBar from './NavBar';
import logo from './images/logo2.png';


class About extends Component {
    

    render() {

      return (


        <div>
            <NavBar/>



            <img className="about" src={logo}></img>   
            <span className="texto">
                <h2>Equipo Build It: </h2>
                <h3>Diego Martínez - dugotcharlot@gmail.com</h3>
                <h3> Adriana Orellana - adrianaorellana34@gmail.com</h3>
                <h3> Kalil Pérez - kperez1231.1597@gmail.com</h3>
                <h3> Mateo Puña - mateopuna98@gmail.com</h3>
                <h3> Jhon Rivero - jfrt142012@hotmail.com</h3>
                <h3> Javier Soruco - javisoruco235@gmail.com</h3>
                <h3> Andrés Zamora - zamorabmx123@hotmail.com</h3>
                <h3> Ángel Zenteno - angel4441916@gmail.com</h3>

                <h2>Equipo WEBPAGE: </h2>
                <h3> Joaquin Vargas - joaquin.vargaselio@gmail.com</h3>



            </span>
        </div>

      );
    }    
    
  }
  
  export default About;
  