import React from "react";
import {BrowserRouter, Router, Route, Switch} from "react-router-dom";

import NavBar from "../NavBar";
import Login from "../login";
import Portada from "../Portada";

export default () => (

    <BrowserRouter>

        <div>
        
        <Route path="/"  component={Portada} />


        <Route path="/home"  component={NavBar} />

        <Route path="/login"  component={Login} />

        </div>
    </BrowserRouter> 
);