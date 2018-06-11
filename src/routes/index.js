import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";

import NavBar from "../NavBar";
import Login from "../login";
import Portada from "../Portada";
import Home from "../Home";


export default () => (

    <BrowserRouter>

        <div>


        
        <Route path="/login"  component={Login} />

   
        <Switch>


        <Route path="/home"  component={Home} />

        </Switch>



        </div>
    </BrowserRouter> 
);