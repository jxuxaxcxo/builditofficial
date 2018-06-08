import React, { Component } from 'react';
import Portada from './Portada';
import NavBar from './NavBar';
import "./Home.css";


class Home extends Component {


    render() {
      return (
        

       <div > 

           <NavBar/>

        <Portada/>
        
        </div>
      );
    }
  }
  
  export default Home;