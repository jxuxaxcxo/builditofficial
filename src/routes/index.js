import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";

import NavBar from "../NavBar";
import Login from "../login";
import Portada from "../Portada";
import Home from "../Home";
import Perfil from "../Perfil";
import Tutorial from "../Tutorial";


export default () => (

    <BrowserRouter>

        <div>


        
        <Route path="/login"  component={Login} />
        <Route path="/buildit"  component={Perfil} />
        <Route path="/tutorial"  component={Tutorial} />



   
        <Switch>


        <Route path="/home"  component={Home} />

        </Switch>



        </div>
    </BrowserRouter> 
);