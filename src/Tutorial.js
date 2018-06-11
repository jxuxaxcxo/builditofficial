import React, { Component } from 'react';
import TweenLite from 'gsap/TweenLite'
import logo from './images/logo2.png'
import control1 from './images/control1.jpg'
import control2 from './images/control2.png'
import android1 from './images/android1.jpg'
import tabla1 from './images/tabla1.PNG'
import android2 from './images/android2.png'
import menu1 from "./images/menu1.jpg"
import menu2 from "./images/menu2.jpg"
import menu3 from "./images/menu3.jpg"
import menu4 from "./images/menu4.jpg"


import './Tutorial.css';
import {PageHeader} from "react-bootstrap";

import NavBar from './NavBar';

import {ButtonGroup,Button,DropdownButton,MenuItem} from "react-bootstrap";



class Tutorial extends Component {
    
    constructor(props){
      super(props);
      this.state={
        titulo:"Tutorial",
        texto:"Empecemos:",
        imagen:null
      }

      this.seleccionador1 = this.seleccionador1.bind(this);
      this.seleccionador2 = this.seleccionador2.bind(this);
      this.seleccionador3 = this.seleccionador3.bind(this);
      this.seleccionador4 = this.seleccionador4.bind(this);
      this.seleccionador5 = this.seleccionador5.bind(this);
      this.seleccionador6 = this.seleccionador6.bind(this);
      this.seleccionador7 = this.seleccionador7.bind(this);
      this.seleccionador8 = this.seleccionador8.bind(this);
      this.seleccionador9 = this.seleccionador9.bind(this);



    }
    
    seleccionador1(){
      this.setState({imagen:logo})
          this.setState({titulo:"Iniciemos!"});
          this.setState({texto:"Build it es una aplicación que te permite explotar tu creatividad. Construyendo las figuras que desees. Diviértete creando."})
 
    }

    seleccionador2(){
      
      this.setState({imagen:control1})
      this.setState({titulo:"Aprendiendo a usar el control - Paso 1"});
      this.setState({texto:"Pulsar y mantener apretados los botones H (PS) y B (Share) para activar el modo “Emparejar”. La pista de que está en este modo nos da luz LED del mando. Si pulsamos el botón PS normalmente, el LED parpadea despacio, pero en el modo “Emparejar” la luz LED parpadea de forma rápida e intermitente bajo una tonalidad blanca."})

}

seleccionador3(){
 
  this.setState({imagen:android1})
  this.setState({titulo:"Aprendiendo a usar el control - Paso 2"});
  this.setState({texto:"Ahora, mientras la luz parpadea, nos vamos a nuestro smartphone Android y seguimos la ruta Ajustes > Bluetooth para asegurarnos que este está activado (también es posible activarlo deslizando la interfaz Pop Up superior) para desplegar los iconos y manteniendo pulsado sobre el símbolo d0el Bluetooth."})

}

seleccionador4(){
  this.setState({imagen:android2})
  this.setState({titulo:"Aprendiendo a usar el control - Paso 3"});
  this.setState({texto:"Una vez tengamos el Bluetooth activado, le damos a la opción Buscar y esperamos a que encuentre el mando."})

}

seleccionador5(){
  this.setState({imagen:tabla1})
  this.setState({titulo:"Aprendiendo a usar el control - Paso 4"});
  this.setState({texto:"Una vez que ya se consigan conectar el mando al celular, el juego de los siguientes botones representa una acción para la figura que se cree, esto siempre y cuando se haya creado una figura y se pueda editar esta. "})

}

seleccionador6(){
  this.setState({imagen:menu1})    
  this.setState({titulo:"Como funcionan los menus? - MENU 1"});
  this.setState({texto:"Cuando inicies la aplicación puedes crear un nuevo proyecto o bien cargar un proyecto anteriormente guardado."})
}

seleccionador7(){
  this.setState({imagen:menu2})    
  this.setState({titulo:"Como funcionan los menus? - MENU 2" });
  this.setState({texto:"Si la opción es crear un nuevo proyecto entonces deberás ingresar el nombre de tu proyecto."})
}

seleccionador8(){
  this.setState({imagen:menu3})    
  this.setState({titulo:"Como funcionan los menus? - MENU 3"});
  this.setState({texto:"Una vez ingresado el nombre podrás interactuar con el menú principal."})
}
seleccionador9(){
  this.setState({imagen:menu4})    
  this.setState({titulo:"Como funcionan los menus? - MENU 4"});
  this.setState({texto:"Si tu opción es crear un objeto entonces podrás elegir entre los objetos disponibles."})
}


    render() {

      return (
        <div>

          <div>
        
        <NavBar/>

        <PageHeader className="PageHeader">{this.state.titulo}</PageHeader>
  

<ButtonGroup className="ButtonGroup1" vertical>
  <Button onClick={this.seleccionador1}>Iniciemos</Button>
  <Button onClick={this.seleccionador2}>Aprendamos a manejar el control - Paso 1</Button>
  <Button onClick={this.seleccionador3}>Aprendamos a manejar el control - Paso2</Button>
  <Button onClick={this.seleccionador4}>Aprendamos a manejar el control - Paso3</Button>
  <Button onClick={this.seleccionador5}>Aprendamos a manejar el control - Paso4</Button>
  <Button onClick={this.seleccionador6}>Como funcionan los menus? - MENU 1</Button>
  <Button onClick={this.seleccionador7}>Como funcionan los menus? - MENU 2</Button>
  <Button onClick={this.seleccionador8}>Como funcionan los menus? - MENU 3</Button>
  <Button onClick={this.seleccionador9}>Como funcionan los menus? - MENU 4</Button>


</ButtonGroup>


        </div>

        <div>

        <img className="imagen_tutorial" src={this.state.imagen}></img>
        <span className="texto_tutorial">{this.state.texto}</span>

         </div> 


      </div>

      );
    }    
    
  }
  
  export default Tutorial;